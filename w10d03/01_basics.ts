let myStr: string | number | boolean = 'hello world';

myStr = 'good day';
myStr = 42;
myStr = false;

const numbers: (number | string)[] = [];

numbers.push(78);
numbers.push('hello');
// numbers.push(true);
const result = numbers.pop();
