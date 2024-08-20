/** Inheritance - Prototypal Inheritance */
console.log('Learning Prototypal Inheritance...');

var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

var john = {
  firstName: 'John',
};

// don't use __proto__
john.__proto__ = person;
console.log(john);
console.log(john.getFullName());

console.log(person.prototype); // undefined - for object literal?

for (var key in john) {
  console.log(key, john.hasOwnProperty(key));
}
/*
Output -
firstName true
lastName false
getFullName false
*/

// rest operator -> ...args
function func(name, ...args) {
  console.log(args); // []
  console.log(arguments); // { '0': 'loren', '1': 'Something' }
  console.log(typeof args); // 'object'
  console.log(typeof arguments); // 'object'
  //   console.log(arguments.map()); // TypeError -> map is not a function
}
func('loren');
func('loren', 'Something');
console.log(func.length); // number of arguments, 0 for rest operator
