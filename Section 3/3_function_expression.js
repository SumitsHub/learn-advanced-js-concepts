// Function Object -> Functions are object

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
  console.log(this); // Window object\
}
// sayHi();

/** function expression */
// anonymousFunction(); // ERROR -> because it's undefined

var anonymousFunction = function () {
  console.log("This is an anonymous function");
};

anonymousFunction();
console.log(anonymousFunction.name); // anonymousFunction

// passing function as paramter
function call(callback) {
  callback(); // Hello
}

call(function () {
  console.log("Hello");
});
