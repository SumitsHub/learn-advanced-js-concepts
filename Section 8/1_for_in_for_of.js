/** for..of and for..in */

let names = ["Tony", "Anthony", "Alicea"];

for (let name of names) {
  console.log(name); // Tony, Anthony, Alicea
}

for (let name in names) {
  console.log(name); // 0, 1, 2
}

class Animal {
  name = "dog";
}

class Dog extends Animal {
  sound = "bark";

  makeSound() {
    console.log(this.sound);
  }
}

let dog = new Dog();

for (let prop in dog) {
  console.log(prop); // name, sound
  // NOTE - methods are not enumerable while using for loop for class based object
  // maybe because methods are defined in prototype of object
}

let dog2 = {
  sound: "bark",
  makeSound() {
    console.log("bark");
  },
};

dog2.__proto__ = {
  residence: "Earth",
};

for (let prop in dog2) {
  console.log(prop); // sound, makeSound, residence
  // When using object literal, it iterate through prototype also
}

console.log(dog2.propertyIsEnumerable("sound")); // true

// trying to use for..of with object
try {
  for (let prop of dog) {
    console.log(prop); //
  }
} catch (error) {
  console.log(error); // TypeError: dog is not iterable
}
