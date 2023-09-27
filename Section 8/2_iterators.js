/** creating custom iterator */
let numbers = {
  getIterator: function (start, end) {
    let nextValue = start;
    return {
      next: () => {
        if (nextValue < end) {
          let nextObj = { value: nextValue, done: false };
          nextValue++;
          return nextObj;
        }
        return { value: nextValue, dont: true };
      },
    };
  },
};

let iterator = numbers.getIterator(2, 5);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let iterator2 = numbers.getIterator(4, 10);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
