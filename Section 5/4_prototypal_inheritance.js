/** Prototypal Inheritance */

var prototype = {
  firstName: "Default",
  lastName: "Default",
  greet() {
    return "Hi " + this.firstName;
  },
};

// Using Object.create() to specify prototype for an object
// Object.create() - Creates an object that has the specified prototype, and that optionally contains specified properties.
var john = Object.create(prototype);

console.log(john); // Empty object with specified prototype
console.log(john.greet()); // Hi Default

john.firstName = "John";
console.log(john.greet()); // Hi John

// using .prototype to set prototype
// Important - .prototype is not available when object is created using object literal, use constructor function
var anthony = { firstName: "Anthony" };
console.log(anthony.prototype); // undefined

function Person(name) {
  this.firstName = name;
}

Object.assign(Person.prototype, prototype);
// or
// Person.prototype.greet = personPrototype.greet;

anthony = new Person("Anthony");
console.log(anthony.greet()); // Hi Anthony
