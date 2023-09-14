/** Comparison operator */

console.log(1 < 2 < 3); // true : false < 3 = true

console.log(1 > 2 > 3); // false : false > 3 = false

console.log(3 > 2); // true
console.log(3 > 2 > 1); // false : true > 1 --> 1 > 1 = false

console.log(false <= 0); // true

// Equality
console.log("" == 0); // true
console.log("" === 0); // false

console.log("Hello" === "Hello"); // true
console.log("Hello" === "hello"); // false

console.log(6 / 2 === 3); // true
console.log(1 / 2 === 0.5); // true

/** Existence and Booleans */
var a;
console.log(Boolean(a)); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false

// equal operator >.logical OR
if ("Something" && 0 === 0) {
  console.log("True");
}

// Default values
function greet(name = "User") {
  console.log("Hello " + name);
}

greet(); // Hello User
greet("Alina"); // Hello Alina

console.log(undefined || "User"); // User

// Trying to change input parameter
function test(inp) {
  inp = 90;
  console.log(inp);
}

test("Test"); // 90
