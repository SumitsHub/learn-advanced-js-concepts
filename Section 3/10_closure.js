/** Closures in JS */

function greet(greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
}

var sayHello = greet("Hello");
sayHello("John"); // Output - Hello John

greet("Hi")("Mike"); // Output - Hi Mike

function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
// Explanation - functions get's pushed to array, they didn't execute and when they do value of var i is 3, this is happening due to use of var as it has global scope(for that execution context)

// Using IIFE to retain value of i
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs = buildFunctions2();
fs[0](); // 0
fs[1](); // 1
fs[2](); // 2

function buildFuncs() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

fs = buildFuncs();
fs[0](); // 0
fs[1](); // 1
fs[2](); // 2

// Explanation -> let keyword has block scope

// Closure with setTimeout

function sayHelloLater() {
  var greeting = "Hello";

  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHelloLater(); // prints Hello after 3 seconds
// after 3 seconds function passed to setTimeout has access to it's outer scope

/** First-Class Function */
// A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
