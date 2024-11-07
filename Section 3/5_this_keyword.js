/** this keyword */
console.log(this); // Window

var c = {
  name: "The c Object",
  log: function () {
    console.log(this); // {name: 'The c Object', log: ƒ}

    function setName(newName) {
      this.name = newName; // here 'this' refers to global object, kinda bug
    }

    // FIX:
    // const setName = newName => {
    //   this.name = newName; // here 'this' refers to global object, kinda bug
    // };
    setName("New name updated");
  },
};

console.log(c.name); // The c Object
c.log();
console.log(c.name); // The c Object
