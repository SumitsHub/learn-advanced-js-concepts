/** returning value from arrow functions */

// avoiding return keyword
let mult = (a, b) => a * b;

console.log(mult(5, 6)); // 30

// avoiding brackets in case of single input
let sqrt = x => x ** 2;
console.log(sqrt(4));

// typeof arrow functions
console.log(typeof sqrt); // functions

// Readability ->

let longExpression = x => y => z => z ? y : x;
console.log(longExpression(5)(6)(false)); // 5

// Limitations ->

let obj = {
  firstName: "Tony",
  name: "Object",
  printName() {
    console.log(this.name); // Object -> refers to this object's name property - NOTE: iff this function will be called with this object
  },
  greet() {
    console.log(this.firstName); // Tony
  },
  greet2: () => {
    console.log(this); // refers to Window object
    console.log(this.name); // '' -> window.name
    console.log(this.firstName); // undefined
  },
};

obj.printName();
console.log(obj.name);
obj.greet(); // Tony
obj.greet2();

// Imp -> do not use arrow functions as objects instance methods, it will lead to waste of memory

class Person {
  constructor(fname) {
    this.firstName = fname;
    this.greet = () => {
      console.log(this.firstName); // here arrow function will refer to this keyword present inside the class constructor
    };
  }
}

let p = new Person("Jony");
p.greet(); // Jony
