const {expect} = require('chai');
const isOddOrEven = require('../test');

describe('isOddOrEven', () => {
 
    //first test - testing if it string
    it('isString', () => {
    expect(isOddOrEven(3)).to.undefined;
 })

 //second test - testing if it is odd
 it('isOdd', () => {
    expect(isOddOrEven("s")).to.equal('odd')
 })

 //third test - testing if it is even
 it('isEven', () => {
    expect(isOddOrEven("se")).to.equal('even')
 })

 //third test - testing if it is even
 it('isNotOdd', () => {
    expect(isOddOrEven("se")).to.not.equal('odd')
 })
});