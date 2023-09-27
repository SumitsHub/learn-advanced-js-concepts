/** iterating through enumerable properties of object iterable */

let numbers = {
  type: "num",
  doSomething() {},
  [Symbol.iterator]: function () {
    const start = 0;
    const end = 5;
    let nextValue = start;
    return {
      next() {
        if (nextValue < end) {
          return { value: nextValue++, done: false };
        }
        return { value: nextValue, done: true };
      },
    };
  },
};

for (let prop in numbers) {
  console.log(prop); // type, doSomething
  // Note -> Symbol.iterator is not enumerable property
}
