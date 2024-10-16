// primitives are passed by value (copy is made)

let num = 10;

const changeMyNum = function(number) {
  number = 12;
  console.log('inside the function', number); // 12
};

changeMyNum(num);

console.log('outside the function', num); // 10 or 12 ???

// objects are passed by reference (gets the original)

const myObj = {
  username: 'alice',
};

const changeMyObj = function(obj) {
  obj.username = 'bob';
  console.log('inside the function', obj.username); // 'bob'
};

changeMyObj(myObj);

console.log('after the function', myObj.username); // 'bob' || 'alice'
