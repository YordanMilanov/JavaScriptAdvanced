const {expect, assert} = require('chai');
const {lookupChar} = require("../test.js");

describe('LookUpChar', () => {
    it('should return undefined if first argument is not a string', () => {
        assert.equal(lookupChar(1,1), undefined);
    })
    it('should return undefined if second argument is not correct', () => {
        assert.equal(lookupChar("test","test"), undefined);
    })
    it('should return undefined if first argument is not an integer', () => {
        assert.equal(lookupChar('String',1.5), undefined);
    })
    it('should return incorrect index if index argument is negative', () => {
        assert.equal(lookupChar('test',-1), "Incorrect index");
    })
    it('should return incorrect index if index argument is out of bounds', () => {
        assert.equal(lookupChar('test', 5), "Incorrect index");
    })
    it('should return correct index', () => {
        assert.equal(lookupChar('test', 3), 't');
    })
    it('should return correct index', () => {
        assert.equal(lookupChar('test', 0), 't');
    })
    it('should return correct index', () => {
        assert.equal(lookupChar('test', 1), 'e');
    })
})