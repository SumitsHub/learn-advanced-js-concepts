class A {}

console.log(typeof A); // function

let B = class {};

function Person() {
  this.name = "Someone";
}

const me = new Person();
console.log(me); // Person {name: 'Someone'}

// creating class using class keyword

class Human {
  firstName = "Jony";
}

let h = new Human();
// NOTE -> Class constructor can only be called with new keyword
console.log(h);

// constructor function in class -> used to initialize instance fields of class
class Animal {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
}

const a = new Animal("Crow");
console.log(a); // Animal {name: 'Crow', score: 0}

console.log(a.__proto__);
console.log(Animal.prototype);

console.log(a.__proto__ === Animal.prototype); // true

// Adding methods to class
// Imp -> by default methods get's added to prototype of the class object
class Demo {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const d = new Demo("John");
console.log(d); // Demo {name: 'John'} -> only property shown here
console.log(d.greet()); // Hello John
console.log(Demo.prototype); // {constructor: ƒ, greet: ƒ}
