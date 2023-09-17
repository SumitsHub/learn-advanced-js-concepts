/** Prototype */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// adding method to Person object prototype
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// creating object using function constructor
var john = new Person("John", "Doe");
console.log(john); // Person {firstName: 'John', lastName: 'Doe'}

var mike = new Person("Mike", "Watson");
console.log(mike); // Person {firstName: 'Mike', lastName: 'Watson'}

// using newly added method
console.log(john.getFullName()); // John Doe
console.log(mike.getFullName()); // Mike Watson
