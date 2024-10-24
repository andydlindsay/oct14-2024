# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises


```js
higherOrderFunction(() => {
  anotherHOF(() => {
    anotherHOF(() => {

    })
  })
});
```

### Promise
* represents a future value
* always async
* are objects
* 3 states:
  * pending
  * fulfill/resolved
  * fail/rejected
* rare to create your own promise

```js
fs.readFile((err, fileContents) => {
  if (err) {
    return err;
  }

  fs.readFile((err, fileContents) => {
      if (err) {
        return err;
      }
  });
});
```
















