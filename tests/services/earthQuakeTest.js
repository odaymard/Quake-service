const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');

const { jsonQuakeMock } = require('./quakeFixtures');
const { getQuakesJSON } = require('../../services/earthQuake');

const { expect } = chai;
chai.use(chaiAsPromised);

describe('earthQuakeService', () => {
  describe('getQuakesJSON()', () => {
    it('should fetch the data', async () => {
      nock('https://earthquake.usgs.gov')
        .get('/earthquakes/feed/v1.0/summary/all_month.geojson')
        .reply(200, jsonQuakeMock);

      const { body } = await getQuakesJSON();
      expect(body.features).to.be.deep.equal(jsonQuakeMock.features);
    });

    it('should throw an error if the service is down', async () => {
      nock('https://earthquake.usgs.gov')
        .get('/earthquakes/feed/v1.0/summary/all_month.geojson')
        .reply(500);

      await expect(getQuakesJSON()).to.be.rejected;
    });
    it('should return null if response status is 404', async () => {
      nock('https://earthquake.usgs.gov')
        .get('/earthquakes/feed/v1.0/summary/all_month.geojson')
        .reply(404);

      const response = await getQuakesJSON('');
      expect(response).to.be.null;
    });
  });
});
