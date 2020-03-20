const assert = require('assert');

const division = (x, y) => {
    if (y === 0) throw new Error('parameter y must not be 0');
    return x / y;
}

const expected = division(3, 3);

assert.equal(division(10, 2), 5);
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK