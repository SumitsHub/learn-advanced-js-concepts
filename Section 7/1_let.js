let firstName = "Anthony";
let lastName = "Alicea";
{
  // console.log(firstName); // ReferenceError
  let firstName = "John";
  console.log(firstName); // John
}

console.log(firstName); // Anthony

/** let with switch case */
// NOTE: switch is having it's block, but case don't
switch (firstName) {
  case "Anthony":
    console.log(lastName);
    // let lastName = "Alicea";
    break;
  case "Tony":
    // let lastName = "T. Alicea"; // Error -> lastName has already declared
    break;
  case "John": {
    // Using block for case
    let lastName = "J. Alicea"; // No error
    break;
  }
}

/** let with for loop */

let person = { firstNames: ["Anthony", "Tony"] };
let person2 = person;

// for (let person of person.firstNames) {
//   console.log(person); // Reference Error
// }

for (let person of person2.firstNames) {
  console.log(person); // block scope person
}

console.log(person); // { firstNames: ["Anthony", "Tony"] }

for (person of person.firstNames) {
  console.log(person); // Anthony Tony
}

console.log(person); // Tony -> person object gets reassigned with last firstName of person inside for loop

// Note - variables declared with let keyword gets hoisted but can't be accessed before declaration
