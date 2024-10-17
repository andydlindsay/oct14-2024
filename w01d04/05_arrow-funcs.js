// 2015 ES6 -> arrow function (coffeescript)
// advantages of arrow functions over function-keyword functions
// 1. no more function keyword! yay!!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs DO NOT create `this`

// explicit => when we tell the code to do something
// implicit => doesn't need to told or written down


// if (true) { console.log('hello'); }

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

console.log(sayHello2('carol'));
