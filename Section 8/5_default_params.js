/** Default Parameters */

function greet(fname = "fName", lname = "lName") {
  return `Hi ${fname} ${lname}`;
}

console.log(greet()); // Hi fName lName
console.log(greet("Anthony")); // Hi Anthony lName

console.log(greet(undefined, "Alicea")); // Hi fName Alicea

function greet2(
  fname = "Anthony",
  lname = "Alicea",
  greet = () => {
    return `Hello ${fname} ${lname}`;
  }
) {
  return greet();
}

console.log(greet2()); // Hello Anthony Alicea
