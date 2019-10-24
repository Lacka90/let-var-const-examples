// HOISTING
// ONLY DECLARATIONS AND FUNCTIONS HOISTS TO THE TOP SCOPES

// console.log(variable);
// const variable = "hoisting";
// let variable = "hoisting";
// var variable = "hoisting";

// HOISTING 2 - VAR EXPLAINED

// console.log(variable);
// var variable = "hoisting";
// console.log(variable);

// WILL BE

// var variable;
// console.log(variable);
// variable = "hoisting";
// console.log(variable);

// FUNCTIONS PART

function func() {
  console.log("function called");
}

func();

func2();

function func2() {
  console.log("function2 called");
}
