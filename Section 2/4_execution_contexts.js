/* Function invocation and Execution Stack */

// Every function invocation creates an execution context and gets pushed into execution stack

/* Functions, Context and Variable Environments */
// Variable environment - where the variables live and how they relate to each other

function a() {
  var myVar; // re-declaring variable with value undefined
  console.log("a", myVar); // undefined -> local variable
}

function a2() {
  console.log("a2", myVar); // 2 -> referring to global variable
}

function b() {
  var myVar = 2; // re-declaring variable with value 2, here myVar becomes local variable for function b
  a();
  a2();
  console.log("b", myVar); // 2 -> referring to local variable
}

function c() {
  myVar = 4; // assigning value to global variable
  a2(); // log 4
}

// declaring global variable
var myVar = 1;
b();

console.log("global", myVar); // 1

c();

// Important - every execution context has reference to it's outer environment[lexical environment]
// JS first looks for it's own execution context then looks into outer environment till the last one (Global environment)

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

//* Lexical Scoping - starts from inner scope to global scope

let a = 10; // global scope
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer();