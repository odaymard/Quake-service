const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const sinonChai = require("sinon-chai");

const { readFromStd } = require('../../lib/inputListner');
const { ioHelper } = require('../../lib/inputListner');

chai.use(sinonChai);

describe('inputListner', function () {

  describe('readFromStd', function () {

    it('should call createInputListner  function', function () {

      const createInputListnerSpy = sinon.stub(ioHelper, 'createInputListner');
      readFromStd();
      expect(createInputListnerSpy).to.has.been.called;

    });
    it('should accept numbers from the input', function () {

      //TODO;


    });

  });

});




