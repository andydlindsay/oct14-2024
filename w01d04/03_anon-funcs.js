const age = 42;

// the value 60 has no name => anonymous
// const myVar = 60;
// console.log(60);
// console.log([]);
// console.log({});

// naming things is hard

const higherOrderFunc = function(callback) {
  callback('carol'); // sayHello('carol')
};

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

higherOrderFunc(sayHello);

higherOrderFunc(function(name) {
  console.log(`hello ${name}`);
});
