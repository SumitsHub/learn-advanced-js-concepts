/** Functional programming */
Array.prototype.multiplyBy2 = function () {
  return this.map((ele) => ele * 2);
};

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.multiplyBy2());

var checkLimit = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

console.log(arr.map(checkLimit(3)));

// can be simplified in follwing way -
var checkLimit2 = function (limiter) {
  return function (item) {
    return item > limiter;
  };
};

console.log(arr.map(checkLimit2(3)));

// LEARNING - bind() can be used when we need to pass implicit default argument
