class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    // by default this method is set into prototype
    return `Hey ${this.firstName} ${this.lastName}`;
  }
}

class ChildPerson extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

var john = new Person("John", "Doe");

console.log(john); // 

var mike = new ChildPerson("Mike", "Smith");
console.log(mike); // ChildPerson class with Person class prototype
console.log(mike.greet()); // Hey Mike Smith
