/** Immediately Invoked Function Expression (IIFE) */

var res = (function (name) {
  return "Hello " + name;
})("John");

console.log(res); // Hello John

(function () {
  var tempVar = 20;
  console.log("Immediately invoked function");
})();

// console.log(tempVar); // ReferenceError

var greeting = "Hello";

function greet() {
  var greeting = "Hola";
  console.log(greeting); // Hola
}

greet();
console.log(greeting); // Hello
