var assert = require('assert');
var calc = require('..');

describe('Addition (2 arguments)', function() {
    it('should add 1 and 2 to be equal to 3', function() {
        var sum = calc.add(1, 2);
        assert.equal(3, sum, 'Values are not equal');
    });
});

describe('Addition (3 arguments)', function() {
    it('should add 1, 2 and 3 not to be equal to 3', function() {
        var sum = calc.add(1, 2, 3);
        assert.notEqual(3, sum, 'Values are equal');
    });
});
