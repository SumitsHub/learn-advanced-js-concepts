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
