const firstName = "Tony";
const lastName = "Alicea";

// multi-line string using template
const fullName = "Tony\nAlicea";
const fullName2 = `Tony
Alicea`;

console.log(fullName === fullName2); // true

// string interpolation
const greet = `Hello, ${firstName} ${lastName}`;
console.log(greet); // Hello, Tonny Alicea

// tagged template literal

function greetTemplate(strings, firstName, lastName) {
  console.log(strings); // Array of non interpolated strings -> ['Hello, ', ' ', '']
  console.log(firstName); // Tony
  console.log(lastName); // Alicea

  // returning custom value from tagged template literal, if not returned anything the output of tagged template will be undefined
  return `${strings[0]}${firstName}. Your last name is ${lastName}.`;
}

const greetings = greetTemplate`Hello, ${firstName} ${lastName}`;
console.log(greetings); // Hello, Tony. Your last name is Alicea.

/** Acheiving standard template literanl behavior but using tagged template */

function customTemplate(strings, ...args) {
  let i,
    output = "";
  for (i = 0; i < strings.length - 1; i++) {
    output += strings[i] + args[i];
  }
  output += strings[i];
  return output;
}

console.log(customTemplate`How are you ${firstName}?`); // How are you Tony?
