# W02D01 - TDD, CommonJS, and NPM

### To Do
- [x] Manual testing
- [x] Making assertions
- [x] Bringing in outside code
- [x] Exporting our code
- [x] Intro to NPM: a Node package manager
- [x] Mocha test runner
- [x] Ignoring files/folders
- [x] What is TDD?

### TDD
- **T**est **D**riven **D**evelopment
- Tests are written before the code is written
- We use a process called Red-Green-Refactor
- Red: The test is failing
- Green: The test is passing
- Refactor: Improve the existing code safe in the knowledge that the functionality is testable
- BDD: **B**ehaviour **D**riven **D**evelopment
  - Very similar to TDD, but the focus is more on the end user rather than the quality of the code under test

### Mocha
- A testing framework
- By default, looks in the `test` folder for test files to run

### `module.exports` and `require`
- We can export functions, objects, etc from a file using the `module.exports` object
- You can add new keys to the `module.exports` object _or_ you can completely overwrite it with a function/object

```js
// adding new keys to module.exports
module.exports.myFunc = myFunc;
module.exports.myOtherFunc = myOtherFunc;

// overwriting module.exports object
module.exports = myFunc;
// or
module.exports = {
  myFunc,
  myOtherFunc
};
```

- As you have previously seen, we can bring functions, objects, etc into a file using `require`

```js
// basic require syntax
const myFunc = require('./myFunc');

// if the file exports an object, we can use ES6 destructuring
const { myFunc } = require('./myFunc');
```

### Ignoring files/folders
* Sometimes there are files or folders that we do not want git to track for us
* These files might contain sensitive information such as passwords or API keys
* They might also be folders such as `node_modules` which should always be ignored
* We can tell git to ignore certain files/folders by using a special file called `.gitignore` (note the leading period)
* Any files that we specify inside of `.gitignore` will be ignored by git

```
# inside .gitignore
node_modules
my-file.js
```

* Using the above file, the `node_modules` folder and the file `my-file.js` will not be tracked by git

### Useful Links
- [Node Modules](https://nodejs.org/docs/latest/api/modules.html)
- [Node Wrapper Function](https://nodejs.org/api/modules.html#modules_the_module_wrapper)
- [Mocha Docs](https://mochajs.org/)
