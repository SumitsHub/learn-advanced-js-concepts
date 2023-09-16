// call(), apply(), bind()

var person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/* bind() - The bind() function creates a new bound function. We can specify value of 'this' 
  Syntax- 
  bind(thisArg)
  bind(thisArg, arg1)
  bind(thisArg, arg1, arg2)
  bind(thisArg, arg1, arg2,  …,  argN)
  
  
  */
var logName = function () {
  console.log(this.getFullName());
};

var logPersonName = logName.bind(person);
logPersonName();

const module = {
  x: 42,
  getX: function () {
    return this.x; // using strict will result into TypeError
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

("use strict");

function log(...args) {
  console.log(this, ...args);
}

const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // {"this value"}, 1, 2, 3, 4, 5, 6

// call() -> calls function with specified value of this and list of arguments
log.call(person, "en", "es");

// apply() -> similar to call(), it accepts arguments in array
log.apply(person, ["en", "es"]);

// call() with IIFE
(function () {
  console.log(this);
}).call("This value");

// borrowing function

var person2 = {
  firstName: "Sunny",
  lastName: "Leone",
};

console.log(person.getFullName.apply(person2)); // Sunny Leone

/** Function Currying - using bind */
// Creating a copy of a function but with some preset paramters
function multiply(a, b) {
  return a * b;
}

var multBy2 = multiply.bind(this, 2);
console.log(multBy2(5)); // 10
console.log(multBy2(10)); // 20

var multBy5 = multiply.bind(this, 5);
console.log(multBy5(4)); // 20
