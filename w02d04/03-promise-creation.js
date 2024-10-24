const myPromise = new Promise((resolve, reject) => {
  // perform some kind of async operation

  // happy path
  // resolve({ a: 1, b: 2 }); // whatever you pass to resolve() gets passed to the .then

  setTimeout(() => {
    resolve('hello');
  }, 3000);

  // unhappy path
  // reject('some kind of error'); // whatever you pass to reject() gets passed to the .catch
});

myPromise
  .then((resolvedValue) => {
    console.log('resolvedValue:', resolvedValue);
  })
  .catch((err) => {
    console.log('inside the catch', err);
  });
