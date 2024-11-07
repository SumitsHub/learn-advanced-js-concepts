/* Type Coersion */

let a = "3" + 3;
console.log(a); // 33

let b = 3 + "3";
console.log(b); // 33

console.log(3 + "3" + "3"); // 333
console.log(3 + "3" + 3); // 333
console.log(3 + 3 + "3"); // 63 -> (Left to Right associativity)

console.log(+"2"); // 2 - (converted number 2)
console.log(typeof +"2"); // number

console.log(+"1" + "2"); // 12

console.log(-"2"); // -2 (converted to number -2)

console.log(true + 3); // 4 -> true converted to 1

console.log(false + 3); // 3 -> false converted to 0

console.log(null + 4); // 4 -> null = 0
console.log(+null); // 0 (this also works with null)


console.log("0" + 2); // 02

console.log("0" > 0); // false
