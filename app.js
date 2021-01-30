const { readFromStd } = require('./lib/inputListner');

const { getQuakesTitleAndDistinctCoord, getTopCloseQuakes, printTopNearbyQuakes } = require('./lib/helper').helper;
const { getQuakesJSON } = require('./services/earthQuake');



(async () => {
  try {

    const topClose = 10;
    const UserPoint = await readFromStd();

    const quakesJson = await getQuakesJSON();

    const quakeJsonFeatures = quakesJson.body.features;

    const quakesTitleAndDistinctCoordArray = getQuakesTitleAndDistinctCoord(quakeJsonFeatures);
    const arrayOfTopCloseQuakes = getTopCloseQuakes(quakesTitleAndDistinctCoordArray, UserPoint, topClose);

    printTopNearbyQuakes(arrayOfTopCloseQuakes);

  }
  catch (err) {

    console.log(err);

  }

})();












