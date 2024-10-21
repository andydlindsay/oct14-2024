// bring in outside code
const assert = require('assert');
const sayHello = require('./say-hello');

// driver code
const actual = sayHello('alice');

// actual vs expected
const expected = 'hello there alice';

assert.strictEqual(actual, expected);
assert.equal(typeof actual, 'string');
