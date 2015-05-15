var CALC = {

    add: function() {
        return Array.prototype.reduce.call(arguments, function(x, y) {
            return x + y;
        }, 0);
    }
};

module.exports = CALC;
