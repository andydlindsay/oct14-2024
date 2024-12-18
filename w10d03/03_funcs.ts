// arguments, return value, name of the function

const sayHello = (name: string, age?: number, isLoggedIn?: boolean): string => {
  return 'hello';
};

const returnVal = sayHello('alice', 42);

const returningPromise = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve('hello');
  });
};

returningPromise()
  .then((data) => {});
