const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');


describe('add', function() {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    afterEach(() => {
        calc = null;
    });

    it('should return 17 when called with numbers 2,5,10', function() {
        expect(calc.add(2,5,10)).to.be.equal(17);
    });

    it('should return 0 when called without arguments', function() {
        expect(calc.add()).to.be.equal(0);
    });

    it('should return an error if provided with an invalid argument', function() {
        
        expect( calc.add(5,'5',5)).to.be.equal(`There is invalid argument`);
    });
    });

    