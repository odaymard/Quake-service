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
  let inputIsNumber = false;
  let lat;
  let lon;
  while (!inputIsNumber) {
    lat = await readLineInterface.questionAsync('lat: ');
    lon = await readLineInterface.questionAsync('lon: ');
    if (!(isNaN(lat) || isNaN(lon)) && !(lat === '' || lon === '')) {
      inputIsNumber = true;
    } else {
      console.error('Please enter a valid number!');
    }
  }
  readLineInterface.close();
  return [lat, lon];
};

const ioHelper = {
  readFromStd,
  createInputListner,
};

module.exports.ioHelper = ioHelper; // to be able to test it we sould export the module.

module.exports.readFromStd = readFromStd;
module.exports.createInputListner = createInputListner;
