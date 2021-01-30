const chai = require("chai");

const expect = chai.expect;

const { getQuakesTitleAndDistinctCoord } = require('../../lib/helper').helper;
const { mockedEarthQuakesFeaturesJson, mockedEarthQuakesFeaturesJsonWithDuplicate } = require('./helperFixtures');

describe('helper', function(){
  
  describe('getQuakesTitleAndDistinctCoord', function () {
    
    it('returns an array', function () {
      
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJson);
      expect(result).to.be.an('array');
      
    });
    it('should return array with 2 elements', function () {
      
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJson);
      expect(result.length).equal(2);
      
    });
    it('should return array with distinct coord', function () {
      
      const result = getQuakesTitleAndDistinctCoord(mockedEarthQuakesFeaturesJsonWithDuplicate);
      expect(result.length).equal(2);
      
    });
    
    
  });
  
});
  
  