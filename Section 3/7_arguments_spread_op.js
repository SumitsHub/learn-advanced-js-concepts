/** arguments and spread */
// Aruguments - paramters passed to a function

function func(firstName, lastName) {
  console.log(firstName);
  console.log(lastName);

  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(arguments.length); // 2
}

func("Loren", "Zuu");

/** Spread operator */
function func2(...args) {
  console.log(args);
  console.log(typeof args); //object
}

func2("Loren", "Zuu");

/** Playing with typeof operator */
console.log(typeof func); // function
var arr = [1, 2, 3];
console.log(typeof arr); // object
// In JS Array is special type of Object
