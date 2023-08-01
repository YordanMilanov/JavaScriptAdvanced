const flowerShop = require('./flowerShop')
const assert = require('chai').assert;

describe('flowerShop', function() {
    it('calculate price', () => {
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 1, 1), 'You need $1.00 to buy pp!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 2, 1), 'You need $2.00 to buy pp!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 2, 2), 'You need $4.00 to buy pp!')
        assert.equal(flowerShop.calcPriceOfFlowers('pp', 3, 2), 'You need $6.00 to buy pp!')
    })

    it('calculate price throws an error', () => {
        assert.throw(() => flowerShop.calcPriceOfFlowers('pp', 'p', 1), "Invalid input!")
        assert.throw(() => flowerShop.calcPriceOfFlowers('pp',  1, '2'), "Invalid input!")
        assert.throw(() => flowerShop.calcPriceOfFlowers(1,  1, '2'), "Invalid input!")
        assert.throw(() => flowerShop.calcPriceOfFlowers(1,  1, 4), "Invalid input!")
        assert.throw(() => flowerShop.calcPriceOfFlowers('pp', 'p', 'a'), "Invalid input!")
    })

    it('checkFlowersAvailable', () => {
        assert.equal(flowerShop.checkFlowersAvailable('a', ['a', 'b', 'c']), "The a are available!")
        assert.equal(flowerShop.checkFlowersAvailable('d', ['a', 'b', 'c']), "The d are sold! You need to purchase more!")
    })

    it('sellFlowers', () => {
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 0), 'b / c')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 1), 'a / c')
        assert.equal(flowerShop.sellFlowers(['a', 'b', 'c'], 2), 'a / b')
    })

    it('sellFLowers throws an error', () => {
        assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c']), 'Invalid input!')
        assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c'], 'sd'), 'Invalid input!')
        assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c'], 10), 'Invalid input!')
        assert.throw(() => flowerShop.sellFlowers(['a', 'b', 'c'], -10), 'Invalid input!')
        assert.throw(() => flowerShop.sellFlowers("['a', 'b', 'c']", 1), 'Invalid input!')
        assert.throw(() => flowerShop.sellFlowers(1, 1), 'Invalid input!')
    })
})