class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Tony extends Person {
  // implicit call to super()
  meet() {
    return "Nice to meet you.";
  }
}

const t = new Tony("Tonny");

console.log(t.greet()); // Hello Tonny
console.log(t.meet()); // Nice to meet you.
console.log(t.__proto__); // Person {constructor: ƒ, meet: ƒ}

console.log(Tony.prototype.__proto__ === Person.prototype); // true
// prototye chain -> prototype of child class prototype points to parent class prototype
// prototypal inheritance

// Extending build in objects
class MyNum extends Number {
  addOne() {
    return this + 1;
  }
}

let num = new MyNum(3.689);
console.log(num.toFixed(1)); // 3.7 -> accessing from prototype of Number
console.log(num.addOne()); // 4.689 -> accessing own property

// // Classes can extend only one class, following gives error
// class Test extends Person, Tony {

// }
