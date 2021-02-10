const chai = require('chai');

const { expect } = chai;

const { getQuakesTitleAndDistinctCoord } = require('../../lib/helper').helper;
const {
  mockedEarthQuakesFeaturesJson,
  mockedEarthQuakesFeaturesJsonWithDuplicate,
} = require('./helperFixtures');

describe('helper', () => {
  describe('getQuakesTitleAndDistinctCoord', () => {
    it('returns an array', () => {
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJson);
      expect(result).to.be.an('array');
    });
    it('should return array with 2 elements', () => {
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJson);
      expect(result.length).equal(2);
    });
    it('should return array with distinct coord', () => {
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJsonWithDuplicate);
      expect(result.length).equal(2);
    });
  });
});
