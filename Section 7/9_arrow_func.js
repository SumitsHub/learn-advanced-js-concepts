let add = function (a, b) {
  return a + b;
};

let add2 = (a, b) => {
  return a + b;
};

// IIAFE -> Immedietly invoked arrow function expression
(() => {
  console.log("Heyy");
})(); // Heyy

function callBack(cb) {
  cb();
}

callBack(() => {
  console.log("Called");
}); // Called

/** Arrow functions and this keyword */

let obj = {
  firstName: "Anthony",

  greet: function () {
    console.log(this); // points to this obj

    let innerFuc = function () {
      console.log(this); // points to global object (Window)
    };
    innerFuc();
  },

  greet2: function () {
    console.log(this); // points to this obj

    let innerFuc = () => {
      console.log(this); // this also points to this obj
    };

    innerFuc();
  },
};

obj.greet();
console.log(obj.__proto__ === Object.prototype); // true

obj.greet2();
// IMP -> arrow function don't have it's own 'this' keyword in it's execution context
