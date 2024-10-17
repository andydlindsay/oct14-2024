const ourFilter = (arr, callback) => {
  // create a new array to hold the filtered values
  const newArray = [];

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with current element AND capture the return value
    const returnVal = callback(element);

    // if the return value is truthy, we add the element to our new array
    if (returnVal) {
      newArray.push(element);
    }
  }

  // return the new array
  return newArray;
};

const scores = [40, 22, 78, 90, 57];
// const testForScores = function(score) {
//   return score > 50;
// };
const testForScores = score => score > 50;

const ourFilteredArr = ourFilter(scores, score => score > 50);
console.log(ourFilteredArr); // [78, 90, 57]

console.log();

const builtinFilterArr = scores.filter(testForScores);
console.log(builtinFilterArr); // [78, 90, 57]
