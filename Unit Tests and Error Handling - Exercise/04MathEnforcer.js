const {expect, assert} = require('chai');
const {mathEnforcer} = require("../test.js");


describe("MathEnforcer", () => {

    describe("addFive", () => {
        it("Should return undefined if the parameter is not a number", () => {
            assert.equal(mathEnforcer.addFive("s"), undefined);
        })

        it("Should return undefined if the parameter is empty", () => {
            assert.equal(mathEnforcer.addFive(), undefined);
        })

        it("Should return positive number if the parameter is positive", () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        })

        it("Should return correct number if the parameter is correct", () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        })

    })

    describe('subtractTen', () => {
        it("Should return undefined if the parameter is not a number", () => {
            assert.equal(mathEnforcer.subtractTen("s"), undefined);
        })

        it("Should return undefined if the parameter is empty", () => {
            assert.equal(mathEnforcer.subtractTen(), undefined);
        })

        it("Should return 5 if the parameter is 15", () => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
        })

        it("Should return -20 if the parameter is -10", () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        })
    })

    describe('sum function', () => {
        it("Should return undefined if the first parameter is not a number", () => {
            assert.equal(mathEnforcer.sum("s", 5), undefined);
        })

        it("Should return undefined if the second parameter is not a number", () => {
            assert.equal(mathEnforcer.sum(5, "s"), undefined);
        })

        it("Should return undefined if the parameter is only one and it is string not a number", () => {
            assert.equal(mathEnforcer.sum("s"), undefined);
        })

        it("Should return undefined if the first parameter is the only one", () => {
            assert.equal(mathEnforcer.sum(5), undefined);
        })

        it("Should return undefined if there is no parameter", () => {
            assert.equal(mathEnforcer.sum(), undefined);
        })

        it("Should return 10 if the parameters are 5 and 5", () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
        })

        it("Should return 0 if the parameter both 0", () => {
            assert.equal(mathEnforcer.sum(0, 0), 0);
        })
    })
})