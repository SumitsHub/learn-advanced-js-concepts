// for in loop

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Doe");

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

for (var key in john) {
  console.log(key);
}
/* Output - 
  firstName
  lastName
  getFullName
  
  NOTE - property from prototype also get printed, use 'hasOwnProperty' to avoid this
  
  */

for (var key in john) {
  if (john.hasOwnProperty(key)) {
    console.log(key);
  }
}

// with Array

Array.prototype.myCustomProperty = "Cool!";

var arr = [1, 2, 3];

for (var key in arr) {
  console.log(key);
}

/*
  Output -
  1
  2
  3
  myCustomProperty
  
  NOTE- Don't use for in loop with array, use standard for loop instead
  */
