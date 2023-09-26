// Public instance fields

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }

  // static property
  static residance = "Earth";

  // static method
  static morning() {
    console.log(this.residance); // accessing static field inside another
    return "Good morning";
  }
}

// setting static field outside class definition
Person.species = "Human";

console.log(Person.species); // Human

let p = new Person("John");
console.log(p);
console.log(Person.morning()); // Good morning
console.log(Person.residance); // Earth
console.log(console.log("Heyy")); // console.log returns undefined
// console.log(p.morning()); // Error -> TypeError -> You can't access static fields using instance of class

// IMP -> static fields don't get added to prototype of object
console.log(Person.prototype);
