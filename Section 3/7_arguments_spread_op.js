/** arguments and spread */
// Arguments - parameters passed to a function

function func(firstName, lastName) {
  console.log(firstName);
  console.log(lastName);

  console.log(arguments);
  console.log(typeof arguments); // object
  console.log(arguments.length); // 2
}

func("Loren", "Zuu");

/** Rest operator */
function func2(...args) {
  console.log(args);
  console.log(typeof args); //object
}

func2(...["Loren", "Zuu"]); // spread operator

/** Playing with typeof operator */
console.log(typeof func); // function
var arr = [1, 2, 3];
console.log(typeof arr); // object
// In JS Array is special type of Object
