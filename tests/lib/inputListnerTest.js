const chai = require('chai');

const sinon = require('sinon');

const { expect } = chai;
const sinonChai = require('sinon-chai');

const { readFromStd } = require('../../lib/inputListner');
const { ioHelper } = require('../../lib/inputListner');

chai.use(sinonChai);

describe('inputListner', () => {
  describe('readFromStd', () => {
    it('should call createInputListner  function', () => {
      const createInputListnerSpy = sinon.stub(ioHelper, 'createInputListner');
      readFromStd();
      expect(createInputListnerSpy).to.has.been.called;
    });
    it('should accept numbers from the input', () => {
      // TODO;
    });
  });
});
