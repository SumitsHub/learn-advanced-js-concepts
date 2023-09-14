/* Javascript and 'underfined' */

// undefined - value JS assigns to variables at the time of creation phase when declared variable without any value
// i.e. default value of JS variable is 'undefined'

var a;
console.log(a); // OUTPUT- undefined

/* Code execution */
a = "Hello world";

console.log(a);

function b() {
  console.log("Called function b");
}

b();
// Execution happens line by line by default
