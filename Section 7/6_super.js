class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Tony extends Person {
  constructor(name) {
    super(name); // calls parent class constructor
  }

  // overriding parent class function
  greet() {
    return super.greet(); // calling parent class function using super keyword
  }

  meet() {
    return "Nice to meet you.";
  }
}

let t = new Tony("Tony");
console.log(t.greet()); // Hello Tony
