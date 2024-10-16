// functions inside objects are called methods
// arrow functions DO NOT create the variable `this`

let dog = {
  name: 'benji',
  breed: 'labrador',
  goForWalk: function(distance) {
    console.log(`going for a walk that is ${distance} miles long`);
  },
  tellMeAboutYourself: function() {
    console.log(`hi! my name is ${this.name} and my breed is ${this.breed}`);
  },
};

// my - self-referential

const copy = dog;
dog = null;

console.log(copy);

copy.tellMeAboutYourself();
