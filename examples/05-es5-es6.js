// ES5 vs ES6

// VARIABLES
var v = "v";

const c = "c";
let l = "l";

// FUNCTIONS

function add(x, y) {
  return x + y;
}

console.log("function", add(2, 3));

const add2 = function(x, y) {
  return x + y;
};

console.log("function expression", add2(2, 3));

const add3 = (x, y) => {
  return x + y;
};

console.log("es6 arrow function", add3(2, 3));

// CLASSES INHERITANCE

// https://gist.github.com/zeusdeux/4b21df08c9fe3e533380
