const { userInfo } = require("os");

// how to read in command line arguments
const args = process.argv;
// console.log(args);

// how to remove the first two elements of the array
// args.shift();
// args.shift();

// args.splice(0, 2);

const sliced = args.slice(2);
// const sliced = ['2', '4', '6'];

// console.log(sliced);

// for loop through the provided array
  // get access to each value in the array

// c-style loop
// for (let i = 2; i < sliced.length; i++) {
//   const value = sliced[i];
//   console.log('value', value);
// }

// for..in loop
// for (const index in sliced) {
//   const value = sliced[index];
//   console.log('value', value);
// }

// for..of loop
// for (const value of sliced) {
//   console.log('value', value);
// }

// const sliced = ['2', '4', '6', '3.14', '-100'];

// checking to see if number is a whole number or not
// 3.14 % 1 === 0
// Number.isInteger(3.14)

let runningTotal = 0; 

// use a for..of loop to loop through the array
for (const value of sliced) {
  // convert the values to numbers
  const num = Number(value);

  // check if num is a whole number (not fraction) AND check if num is a positive number
  if (Number.isInteger(num) === true && num > 0) {
    runningTotal += num;
  }
}

console.log('sum:', runningTotal);

