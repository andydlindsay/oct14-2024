const promiseGenerator = require('./generators/generate-promise');

// promiseGenerator is a function that returns a promise
// by default this promise will take 3000ms to resolve

const promise = promiseGenerator('promise one', true);

console.log(promise); // pending

// promise.then(() => {}).catch(() => {});

// .then => runs only when the promise resolves successfully
promise
  .then((resolvedValue) => {
    console.log('the promise resolved successfully');
    console.log('the resolved value is:', resolvedValue);
  })
// .catch => runs only when the promise rejects
  .catch((err) => {
    console.log('something bad happened');
  });
