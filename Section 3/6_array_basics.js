var arr = new Array();
console.log(arr); // []

arr[1] = "Something";
console.log(arr); // [empty, 'Something']
console.log(arr.length); // 2
console.log(arr[0]); // undefined

var arr2 = [undefined, "Something"];
console.log(arr2);

arr = [
  1,
  true,
  { name: "Tonny" },
  function (name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "Some String",
];

console.log(arr);

arr[3](arr[2].name); // Hello Tonny

// argument to Array constructor
var arr3 = new Array(10);
console.log(arr3); // [empty × 10]

var arr4 = [];
arr4[10] = "Ten";
console.log(arr4); // [empty x 10, 'Ten']

var arr5 = [0, 1, 2, 3, 4];

console.log(delete arr5[2]); // true
console.log(arr5); // [1, 2, empty, 3, 4]
console.log(arr5[2]); // undefined
