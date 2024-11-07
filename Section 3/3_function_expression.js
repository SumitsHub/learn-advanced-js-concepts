// Function Object -> Functions are object - First Class Functions

function greet() {
  console.log("Heyy");
}

// functions as object
greet.language = "English";

console.log(greet.language); // English
console.log(greet.name); // greet

// Function Statements and Function Expressions
a = "Hello"; // implicit declaration of variable without var keyword
console.log(a);

// following lines gives error
// var val = if (a === 'Hello') {
//     return 8;
// }

/** Function statement */
// using this inside function
function sayHi() {
  console.log(this); // Window object
}
// sayHi(); // calling in the global context -> window.sayHi() -> hence 'this' will point to 'window' object
// window.sayHi();

/** function expression */
// anonymousFunction(); // ERROR -> because it's undefined -> only declarations get hoisted not value

var anonymousFunction = function () {
  console.log("This is an anonymous function");
};

anonymousFunction();
console.log(anonymousFunction.name); // anonymousFunction

// passing function as parameter
function call(callback) {
  callback(); // Hello
}

call(function () {
  console.log("Hello");
});
