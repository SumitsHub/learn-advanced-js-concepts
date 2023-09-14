/* Function invocation and Execution Stack */

// Every function invocation creates an execution context and gets pushed into execution stack

/* Functions, Context and Variable Environments */
// Variable environment - where the variables live and how they relate to each other

function a() {
  var myVar; // redeclaring variable with value undefined
  console.log("a", myVar); // udefined -> local variable
}

function a2() {
  console.log("a2", myVar); // 2 -> refering to global variable
}

function b() {
  var myVar = 2; // redeclaring variable with value 2, here myVar becomes local variable for function b
  a();
  a2();
  console.log("b", myVar); // 2 -> refering to local variable
}

function c() {
  myVar = 4; // assigning value to global variable
  a2(); // log 4
}

var myVar = 1;
b();

console.log("global", myVar); // 1

c();

// Important - every execution context has reference to it's outer environment[lexical environment]
// JS first looks for it's execution context then looks into outer environment till the last one

// Scope Chain

function y() {
  var temp2 = 4;

  function x() {
    console.log(temp); // 2 -> from global context
    console.log(temp2); // 4 -> from function y context i.e. outer context
    console.log(temp3); // undefined -> as it's declared after function call
  }
  x();
  var temp3 = 5;
}

var temp = 2;
var temp2 = 3;
y();
