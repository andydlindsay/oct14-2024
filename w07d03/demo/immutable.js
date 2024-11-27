// when to re-render? oldState vs newState; oldState !== newState
// immutability => values cannot be changed once set

// const arr = [1, 2, 3];

// // create a copy of state
// const copy = [ ...arr, 4 ];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const myObj = {
  a: 1, 
  b: 2,
  c: ['good', 'day'],
  d: {
    a: 'b',
    b: 'a',
  }
};

// console.log(myObj);

const copy = {
  ...myObj,
  a: 3,
  c: [
    ...myObj.c,
    'hello'
  ],
  d: {
    ...myObj.d,
    c: 'd'
  }
};

// copy.c = 3;
// copy.c.push('hello');

// console.log(myObj);
// console.log(copy);

const arr2 = [4,5,6]
console.log(...arr2) // 4,5,6

const myFunc = (a, b, c) => {
  console.log(a, b, c);
};

myFunc(1,2,3);
const myArr = [1,2,3];
myFunc(...myArr);
