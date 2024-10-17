// single responsibility principle (SRP) - our code (functions) should be responsible for only one thing


const loopOverArray = function(arr, callback) {
  // loop over the provided array
  for (const element of arr) {
    callback(element);
  }
};

const names = ['alice', 'bob', 'carol'];

loopOverArray(names, console.log);

console.log();

loopOverArray([1,2,3], function(num) {
  console.log(num * 2)
});

loopOverArray([1,2,3], num => num * 2);
