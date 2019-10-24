// INITIALIZE VARIABLES

var varVariable = "varVariable";
const constVariable = "constVariable";
let letVariable = "letVariable";
globalVariable = "globalVariable";

console.log("variable values:");
console.log(varVariable, ",", constVariable, ",", letVariable, ",", globalVariable);

// console.log("node global", global);

// MODIFY VARIABLES

varVariable = "modified varVariable";
// constVariable = "modified constVariable";
letVariable = "modified letVariable";
globalVariable = "modified globalVariable";

console.log("modified values:");
console.log(varVariable, ",", constVariable, ",", letVariable, ",", globalVariable);

// NAMING
const name = "name"; // OK
const name1 = "name1"; // OK
const name_name = "name_name"; // OK
// const 1name = '1name'; // NOT OK
// const name.name = 'name.name'; // NOT OK
// const name-name = 'name-name'; // NOT OK
// const name@name = 'name@name'; // NOT OK

// REDECLARE

// const asd = "asd";
// const asd = "asd";
// let asd = "asd";
// let asd = "asd";
// var asd = "asd";
// var asd = "asd";

console.log("asd value:", asd);

// TYPES

// https://dev.to/pixelgoo/understanding-javascript-type-conversions-43n
