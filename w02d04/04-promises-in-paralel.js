// one    2000ms
// two    1000ms
// three  3000ms
// total waiting time 3000ms

const generatePromise = (name, rejects, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejects) {
        return reject(name);
      }
      resolve(name);
    }, delay);
  });
};

// const promise = generatePromise('promise one', false, 2000);

// promise
//   .then((valOne) => {
//     console.log('valOne', valOne);
//     return generatePromise('promise two', false, 1000)
//   })
//   .then((valTwo) => {
//     console.log('valTwo', valTwo);
//     return generatePromise('promise three', false, 3000);
//   })
//   .then((valThree) => {
//     // after 6000ms
//     console.log('valThree', valThree);
//   })

// Promise.all()
// takes an array of pending promises
// gives back one promise, the .then gets called when ALL promises have resolved

const promiseOne = generatePromise('promise one', true, 2000);
const promiseTwo = generatePromise('promise two', false, 1000);
const promiseThree = generatePromise('promise three', false, 3000);

const promises = [promiseTwo, promiseThree, promiseOne];

Promise.all(promises)
  .then((resolvedValueArray) => {
    console.log(resolvedValueArray);
    console.log('all promises resolved successfully');
  })
  .catch(() => {
    console.log('inside the catch');
  });
