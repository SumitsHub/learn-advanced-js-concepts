class Person {
  // declaring private properties of class using '#' sign
  // these properties can only be access withing class definition
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  /** getter and setters -> to set private properties*/
  get lName() {
    return this.#lastName;
  }

  set lName(ln) {
    this.#lastName = ln;
  }

  greet() {
    // class member function can access private property
    return `Hello ${this.#firstName} ${this.#lastName}`;
  }

  // private method -> similar to private fields
  #getPrivateInfo() {
    return { id: 1 };
  }

  displayPrivateInfo() {
    console.log(`id is ${this.#getPrivateInfo().id}`);
  }
}

let p = new Person("Tony", "Alicea");

console.log(p.greet()); // Hello Tonny Alicea

// using getter and setters here
p.lName = "Smith";
console.log(p.lName); // Smith
console.log(p.greet()); // Hello Tonny Smith

p.displayPrivateInfo(); // id is 1

// console.log(p.#firstName); // Error- SyntaxError -> private field must be declared in and enclosing class

// p.#getPrivateInfo(); // SyntaxError -> private field must be declared in and enclosing class

// IMP -> # sign indicates private field, hence we don't get undefined or reference error
