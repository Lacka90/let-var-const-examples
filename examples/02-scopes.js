// VARIABLE SCOPES

const variable = "root-value";

{
  // console.log("block root value", variable);

  const variable = "nested-value";
  console.log("nested variable", variable);
}

console.log("variable", variable);

// LOOP SCOPES

for (let i = 0; i < 3; i++) {
  console.log("loop index", i);
}

// console.log("after loop", i);

// LOOP SCOPES MODIFIED

let i = 0;

for (; i < 3; i++) {
  console.log("loop 2 index", i);
}

console.log("after loop 2", i);

// NESTED INITIALIZED VARIABLES

{
  // const constant = "constant";
  var var2 = "var2";
}

// console.log(constant);
console.log(var2);
