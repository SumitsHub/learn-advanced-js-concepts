// As per ECMAScript Hoistable Declarations - function, function*, async function, and async function* declarations.
// Official Definition - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
/* Exection Context - Creation and Hoisting */

console.log(a); // OUTPUT- undefined
console.log(b()); // OUTPUT- Hey, called me?

var a = 'Hello World!';

// c(); // ERROR -> TypeError: c is not a function

function b() {
  return 'Hey, called me?';
}

var c = function () {
  console.log('Heyy from function c');
};

// Types of hoistings
// 1. Value Hoisting - being able to use a variable's value in its scope before the line it is declared
// Example - function, function*, async function, and async function*

// 2. Declaration Hoisting - being able to reference a variable in its scope before the line it is declared, without thrwoing a ReferenceError
// Example - var declarations

// 3. Lexical declarations - the declaration of the variable causes behavior changes in its scope before the line in which it is declared
// Example - let and const

// 4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.
// Example - import declarations

/** Hoisting of const and let */

let x = 1;

{
  console.log(x);

  //   let x = 2; -> ReferenceError
}

const y = 1;

{
  console.log(y);

  //   const y = 2; -> ReferenceError
}
