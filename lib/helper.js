/* eslint-disable no-use-before-define */

/**
 * Gets information about the coordinates and the title from the json, 
 * If two earthquakes happened in exactly the same location (they have the same lat/lon) return one of them.
 *
 *
 * @param {Array} earthQuakesFeatures An array object hold the reponse from the earthquake API
 * @return {Array} An array which has the coordinates and the titles  
/**
 */

function getQuakesTitleAndDistinctCoord(earthQuakesFeatures) {
  const mappedArray = earthQuakesFeatures.map((x) => [x.properties.title, x.geometry.coordinates]);
  const lookupForCoordinate = {};
  const quakesTitleAndUniqueCoord = [];

  mappedArray.forEach((element) => {
    const coordToLookUp = `${element[1][0]},${element[1][1]}`;

    if (!(coordToLookUp in lookupForCoordinate)) {
      quakesTitleAndUniqueCoord.push(element);
      lookupForCoordinate[coordToLookUp] = 1;
    }
  });

  return quakesTitleAndUniqueCoord;
}


/**
 *
 *
 * @param {Array} quakesArray Array of earthquakes
 * @param {Array} inputCoord Array contains lat and lon
 * @param {Number} topCloseQuakes  The number of earthquakes to show, in our example 10
 * @return {Array} array of top close (eg.. 10) earthquakes that happened in the closest proximity
 * to input point in the order from the closest to the furthest.,
 */
function getTopCloseQuakes(quakesArray, inputCoord, topCloseQuakes) {
  const sortedArray = [];

  quakesArray.forEach((quake) => {
    const quakeCoord = [quake[1][1], quake[1][0]];
    const distanceToPoint = getDistanceFromLatLonInKm(inputCoord, quakeCoord);
    const title = quake[0];
    const insertionIndex = getInsertionIndex(sortedArray, distanceToPoint, topCloseQuakes);
    const dataToInsert = [distanceToPoint, title, insertionIndex];
    insertIntoSortedArray(sortedArray, dataToInsert, topCloseQuakes);
  });

  return sortedArray;
}

/**
 * Calculate the distance between two points
 * To understand the math behind the formula, read about haversine formula.
 *
 *
 * @param {Number} lat1 first point latitude
 * @param {Number} lon1 first point longitude
 * @param {Number} lat2 second point latitude
 * @param {Number} lon2 second point longitude
 * @return {Number}  the distance in KM between the two points
 */
function getDistanceFromLatLonInKm(point1, point2) {
  const [lat1, lon1] = point1;
  const [lat2, lon2] = point2;
  const earthRadius = 6371;
  const dLat = convertDegToRad(lat2 - lat1);
  const dLon = convertDegToRad(lon2 - lon1);
  const squarehalfChordLength =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(convertDegToRad(lat1)) *
      Math.cos(convertDegToRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const angularDistance =
    2 * Math.atan2(Math.sqrt(squarehalfChordLength), Math.sqrt(1 - squarehalfChordLength));

  const distance = earthRadius * angularDistance;
  return distance;
}

/**
 * Uses binary search to find the proper location to insert the new value by passing the index to insertIntoSortedArray method, it returns the index where we should  insert the value,
 * That index guarante to keep the array sorted.
 *
 * If the sorted array  reached the limit(10 it our case)  and the distance is greater than the array values return -1
 * If the same distance is already stored in the array  return -1
 *
 *
 *
 *
 * @param {Array} sortedArray Array of a maximum limit of Top(in our case it is 10)
 * @param {Number} distance Distance between the two points.
 * @param {Number} top This param refers to the maximum length of the result array, it is 10 since we want to get the top 10 distances.
 *
 * @return {Number} An index where we insert the value ,than index guarante to keep the array sorted.
 */

function getInsertionIndex(sortedArray, distance, top) {
  if (sortedArray.length === top && sortedArray[top - 1].distance < distance) {
    return -1;
  }

  let low = 0;
  let high = sortedArray.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (sortedArray[mid].distance < distance) low = mid + 1;
    else high = mid;
  }

  if (sortedArray[low] && sortedArray[low].distance === distance) {
    return -1;
  }

  return low;
}

/**
 * Insert distance and title into sortedarray[insertAtIndex]
 *
 * @param {Array} sortedArray The sorted array
 * @param {Number} distance
 * @param {String} title
 * @param {Number} insertAtIndex
 * @param {Number} top
 * @return {Array} An ordered array where the element has been added in the appropriate place.
 */
function insertIntoSortedArray(sortedArray, dataToInsert, top) {
  const [distanceToPoint, title, insertionIndex] = dataToInsert;

  if (insertionIndex === -1) {
    return;
  }

  if (sortedArray.length === top) {
    sortedArray.pop();
  }

  sortedArray.splice(insertionIndex, 0, {
    distance: distanceToPoint,
    title,
  });
}
/**
 *
 *
 * @param {*} sortedArray Print the content of the title field followed by || and distance (rounded to full kilometers).
 */
function printTopNearbyQuakes(sortedArray) {
  sortedArray.forEach((elem) => console.log(`${elem.title} || ${Math.round(elem.distance)}`));
}
/**
 *  Convert degree to radian
 *
 * @param {*} deg
 * @return {*}
 */
function convertDegToRad(deg) {
  return deg * (Math.PI / 180);
}

const helper = {
  getQuakesTitleAndDistinctCoord,
  getTopCloseQuakes,
  printTopNearbyQuakes,
};
module.exports.helper = helper;
