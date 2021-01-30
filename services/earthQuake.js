const superAgent = require('superagent');
const config = require('../config/config');

/**
 * Fetch the response from the quake API
 *
 * @return {*} 
 */
const getQuakesJSON = async function () {

  let response;
  try {

    response = await superAgent
      .get(config.SERVICE_URL)
      .set('accept', 'json');

  }
  catch (error) {

    response = error.status;

  }
  if (response === 500)
    throw new Error('Quake service down');
  if (response === 404)
    return null;
  else
    return response;

};

module.exports = { getQuakesJSON };

