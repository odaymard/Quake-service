const readline = require('readline-promise').default;

const inputFrom = process.stdin;
const outputTo = process.stdout;
/**
 * Creates input interface, so our app can read from the terminal input.
 *
 * @return {*}  readLineInterface interface
 */
function createInputListner() {
  const inputListner = readline.createInterface({
    input: inputFrom,
    output: outputTo,
    terminal: true,
  });
  return inputListner;
}
/**
 * Reads the lat and lng and return the coordinate.
 *
 * @return {Array}  lat and lon (eg... 33 34)
 */
const readFromStd = async function () {
  const readLineInterface = ioHelper.createInputListner();
  let validInput = false;
  let lat;
  let lon; //lat -90 90 lon -180 180
  while (!validInput) {
    lat = await readLineInterface.questionAsync('lat: ');
    lon = await readLineInterface.questionAsync('lon: ');
    if (validateTheCoord(lat, lon)) {
      validInput = true;
    } else {
      console.error('Please enter a valid number!');
    }
  }
  readLineInterface.close();
  return [lat, lon];
};

function validateTheCoord(lat, lon) {
  return (
    !(isNaN(lat) || isNaN(lon)) &&
    !(lat === '' || lon === '') &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180
  );
}

const ioHelper = {
  readFromStd,
  createInputListner,
  validateTheCoord
};

module.exports.ioHelper = ioHelper; // to be able to test it we sould export the module.

module.exports.readFromStd = readFromStd;
module.exports.createInputListner = createInputListner;
module.exports.validateTheCoord = validateTheCoord;

