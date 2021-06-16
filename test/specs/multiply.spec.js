const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');

describe('multiply', function() {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    afterEach(() => {
        calc = null;
    });

    it('should return 80 when called with numbers 2,5,8', function() {
        expect(calc.multiply(2,5,8)).to.be.equal(80);
    });

    it('should return 0 when  one of arguments equal 0', function() {
        expect(calc.multiply(2,0,80)).to.be.equal(0);
    });

    it('should return 0 when called whitout arguments', function() {
        expect(calc.multiply()).to.be.equal(0);
    });
    
    it('should return an error if provided with an invalid argument', function() {
        
        expect( calc.multiply(5,'5',5)).to.be.equal(`There is invalid argument`);
    });
});
