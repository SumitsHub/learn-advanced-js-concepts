/** By Value vs By Reference */
// By value (premitive type)

var a = 10;
var b = a;

console.log(a, b); // 10 10
a = 20;

console.log(a, b); // 20 10

function func(inp) {
  inp = 30;
}

func(a);
console.log(a, b); // 20 10

// By Reference -> Pointing to same memory location
// All objects gets assigned by reference
var c = { greeting: "Hi" };

var d = c;

console.log(c.greeting, d.greeting); // Hi Hi

c.greeting = "Hello";

console.log(c.greeting, d.greeting); // Hello Hello

d.greeting = "Hoila";

console.log(c.greeting, d.greeting); // Hoila Hoila

// parameter by reference
function changeGreeting(obj) {
  obj.greeting = "Heyy";
}

changeGreeting(d);

console.log(c.greeting, d.greeting); // Heyy Heyy
