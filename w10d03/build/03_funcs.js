"use strict";
// arguments, return value, name of the function
const sayHello = (name, age, isLoggedIn) => {
    return 'hello';
};
const returnVal = sayHello('alice', 42);
const returningPromise = () => {
    return new Promise((resolve) => {
        resolve('hello');
    });
};
returningPromise()
    .then((data) => { });
