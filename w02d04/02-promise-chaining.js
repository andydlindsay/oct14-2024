const promiseGenerator = require('./generators/generate-promise');

// promiseGenerator is a function that returns a promise
// by default this promise will take 3000ms to resolve

const promise = promiseGenerator('promise one', true);

// every .then returns a new promise
// every .catch returns a new promise
// whatever you return from a .then gets passed to the next .then

promise
  .then((resolvedValue) => {
    console.log('promise one resolvedvalue', resolvedValue);
    return 42;
  })
  .then((resolvedValue2) => {
    console.log('promise two resolvedValue', resolvedValue2);
    return 'hello world';
  })
  .then((resolvedValue) => {
    console.log('promise three resolvedValue', resolvedValue);
  })
  .catch(() => {
    console.log('inside the catch block');
  });
