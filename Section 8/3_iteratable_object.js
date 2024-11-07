/** Making iterable object using Symbol iterator */

let numbers = {
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

for (let num of numbers) {
  console.log(num); // 0 1 2 3 4
}

const iterator = numbers[Symbol.iterator]();
let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next(); // 0 1 2 3 4
}
