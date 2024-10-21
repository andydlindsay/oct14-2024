const assert = require('assert');
const sayHello = require('../say-hello');

describe('tests for the sayHello function', () => {

  it('returns the string "hello there alice" when given the string "alice"', () => {
    const actual = sayHello('alice');
    const expected = "hello there alice";

    assert.strictEqual(actual, expected);
  });

  // QA has all the power; because tests are written before the code
  it('returns "hello" if the argument is undefined', () => {
    const actual = sayHello();
    const expected = "hello";

    assert.strictEqual(actual, expected);
  });

});
