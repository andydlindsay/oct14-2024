//          Arrays   Objects
// c-style    Y         N
// for..of    Y         N
// for..in    Y         Y

// const myArr = ['a', 'b', 'c']

// for (const index in myArr) {
//   console.log('index', index);
//   console.log('value', myArr[index]);
// }

const myObj = { a: 1, b: 2, c: 3 }

for (const key in myObj) {
  console.log('key', key);
  console.log('value', myObj[key]);
}

