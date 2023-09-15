var person = new Object();

person["firstName"] = "Tonny"; // using 'Computed member access' operator i.e. []
person["lastName"] = "Alicea";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]); // Tonny

// using . (dot) operator - member access operator
console.log(person.firstName); // Tonny

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person);
console.log(person.address);

console.log(person["address"]["city"]); // New York

// Object Literals
var person = {}; // similar to var person = new Object()

console.log(person);

var person = { firstName: "Tonny", lastName: "Alicea" };

console.log(person);

// using object as function parameter
function greet(person) {
  console.log("Hello " + person.firstName);
}

greet(person); // Hello Tonny
greet({ firstName: "Marry", lastName: "Doe" }); // Hello Marry
