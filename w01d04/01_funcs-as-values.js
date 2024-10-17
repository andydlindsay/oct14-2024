// function declaration (hoisted)
// function myFunc() {
//   console.log('did this work?');
// }

// let a = 'alice';
// console.log(a);

// functions are objects in JS - first class

// function expression
const myFunc = function() {
  console.log('did this one work?');
  return 42;
};

const funcs = [];

funcs.push(myFunc);
funcs.push(console.log);

console.log(funcs);

funcs[1]('console.log from inside the array'); // console.log

// console.log(myFunc()); // return value
// console.log(myFunc); // get back the function itself

// const copy = myFunc;
// const copy2 = copy;

// copy2(); // myFunc();
// console.log(copy2);
