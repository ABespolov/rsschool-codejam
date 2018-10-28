const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');
const make = require('../make.js');
const recursion = require('../recursion.js');

describe('sumOfOther', function () {
    it('should return array of sums of other elements #1', function () {
        assert.deepEqual([8, 7, 6, 9], sumOfOther([2, 3, 4, 1]));
    });
    it('should return array of sums of other elements #2', function () {
        assert.deepEqual([1, 0, 0, 2], sumOfOther([0, 1, 1, -1]));
    });
});

describe('make', function () {
    const sum = (a, b) => a + b;
    const multiplication = (a, b) => a * b;
    it('should make something with all arguments #1', function () {
        assert.equal(777, make(15)(34, 21, 666)(41)(sum));
    });
    it('should make something with all arguments #2', function () {
        assert.equal(8, make(2, 2)(2)(multiplication));
    });
});

describe('recursion', function () {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
    "right":{"value":120,"left":{"value":110},"right":{"value":130}}};

    const anotherTree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
    "right":{"value":120,"left":{"value":110},"right":{"value":130, "left":{"value":232},"right":{"value":0}}}};

    it('should print array of nodes #1', function () {
        assert.deepEqual([[100], [90, 120], [70,99,110,130]], recursion(tree));
    });
    it('should print array of nodes #2', function () {
        assert.deepEqual([[100], [90, 120], [70,99,110,130], [232, 0]], recursion(anotherTree));
    });
});