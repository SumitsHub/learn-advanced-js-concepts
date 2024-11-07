/** Constructor function */

function Human() {}

var human = new Human();
console.log(human); // Human {} -> empty object

// invoking function constructor without new keyword
var h = Human(); // normal function call which doesn't return anything
console.log(h); // undefined

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// creating object using function constructor
var john = new Person("John", "Doe");
console.log(john); // Person {firstName: 'John', lastName: 'Doe'}

var mike = new Person("Mike", "Watson");
console.log(mike); // Person {firstName: 'Mike', lastName: 'Watson'}
