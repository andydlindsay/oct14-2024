class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.width * this.length;
  }
}

class Prism extends Rectangle {
  constructor(length, width, height) {
    // call the parent's constructor
    super(length, width);

    this.height = height;

    this.volume = this.volume.bind(this);
  }

  area() {
    console.log('inside the .area of Prism');
  }

  volume() {
    // console.log('this', this);
    return this.area() * this.height;
  }
}

const myPrism = new Prism(5, 4, 3);

// console.log(myPrism);
console.log(myPrism.area());
