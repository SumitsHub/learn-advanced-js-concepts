// JSON and Object Literals

var object = {
  firstName: "Loren",
  age: 28,
};

console.log(JSON.stringify(object)); // OUTPUT - {"firstName":"Loren","age":28}

var jsonValue = JSON.parse('{"firstName":"Loren","age":28}');
console.log(jsonValue); // converted back to object
