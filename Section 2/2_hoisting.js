/* Exection Context - Creation and Hoisting */

console.log(a); // OUTPUT- undefined
console.log(b()); // OUTPUT- Hey, called me?

var a = "Hello World!";

function b() {
  return "Hey, called me?";
}

// Types of hoistings
// Value Hoisting - being able to use a variable's value in its scope before the line it is declared
// Declaration Hoisting - being able to reference a variable in its scope before the line it is declared, without thrwoing a ReferenceError
// Lexical declarations - the declaration of the variable causes behavior changes in its scope before the line in which it is declared
