// callback => a function that we pass to another function to then be called by that function
// higher order function (HOF) => function that accepts another function as an argument

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(anotherFunc) {
  console.log(anotherFunc); // console.log
  anotherFunc('bob'); // console.log('bob')
};

runMyFunc(sayHello);
runMyFunc(console.log);
