// ...someone else's code

class Person {
  firstName = "Tony";

  greet() {
    return `Hi ${this.firstName}`;
  }
}

// my code
let tony = new Person();

// overriding greet method, can be accidental
// tony.greet = function () {
//   return `Hello ${this.firstName}`;
// };

// OR using __proto__
tony.__proto__.greet = function () {
  return `Hello ${this.firstName}`;
};

console.log(tony.greet()); // Hello Tony

// Symbol
const s = Symbol("Monkey"); // Returns a new unique Symbol value.
const p = Symbol("Monkey");

console.log(s);
console.log(typeof s); // symbol

console.log(s === p); // false

// Using symbols to define class properties
const fname = Symbol("name");
const greet = Symbol("greet");
class Human {
  [fname] = "Tony";

  [greet]() {
    console.log(`Hi ${this[fname]}`);
  }
}
const fname2 = Symbol("name");
const h = new Human();

h[fname2] = "Anthony";

console.log(h[fname]); // Tony
console.log(h[fname2]); // Anthony

// Symbols with object literals
let obj = {
  [fname]: "James",
};

console.log(obj[fname]);

// Symbol.for - Returns a Symbol object from the global symbol registry matching the given key if found. Otherwise, returns a new symbol with this key.
const HAIR_STRAIGHT = Symbol.for("Straight");
const HAIR_CURLY = Symbol.for("Curly");
const HAIR_WAVY = Symbol.for("Wavy");

let curly = Symbol.for("Curly");
console.log(curly === HAIR_CURLY); // true

//* getting description of Symbol
// using keyFor - Returns a key from the global symbol registry matching the given Symbol if found. Otherwise, returns a undefined.
console.log(Symbol.keyFor(HAIR_WAVY)); // Wavy

// using description property
console.log(HAIR_STRAIGHT.description); // Straight
console.log(typeof HAIR_CURLY.description); // string
