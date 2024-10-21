const sayHello = (name) => {
  if (name === undefined) {
    return "hello";
  }

  return `hello there ${name}`;
};

module.exports = sayHello;
