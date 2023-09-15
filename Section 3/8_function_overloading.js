/** Function overloading */
// function overloading can be achieved in JS using default parameters

function add(num1 = 5, num2 = 10) {
  return num1 + num2;
}

console.log(add()); // 15
console.log(add(20)); // 30
console.log(add(2, 4)); // 6
