const chai = require('chai');

const sinon = require('sinon');

const { expect } = chai;
const sinonChai = require('sinon-chai');

const { readFromStd } = require('../../lib/inputListner');
const { validateTheCoord } = require('../../lib/inputListner');

const { ioHelper } = require('../../lib/inputListner');

chai.use(sinonChai);

describe('inputListner', () => {
  describe('readFromStd', () => {
    it('should call createInputListner  function', () => {
      const createInputListnerSpy = sinon.stub(ioHelper, 'createInputListner');
      readFromStd();
      expect(createInputListnerSpy).to.has.been.called;
    });
   
  });
  describe('validateTheCoord',() => {
    it ('should not aceept string characters', () => {
      const result = validateTheCoord('wrong lat','wrong lon')
      expect(result).to.eql(false);
    })
    it ('should not aceept out of range coordinates', () => {
      const result = validateTheCoord('-89','181')
      expect(result).to.eql(false);
    })
  })

});
