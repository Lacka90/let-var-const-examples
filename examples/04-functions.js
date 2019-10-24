// FUNCTIONS

// FUNCTION PARAMETERS

function withParam(number) {
  console.log(typeof number, number);
}

withParam(4);

// FUNCTION CALLBACK PARAMETERS

function callback(result) {
  console.log("result", result);
}

function withCallbackParam(callback) {
  // console.log(typeof callback, callback);
  // Intensive calculation
  const res = 10000;
  callback(res);
}

withCallbackParam(callback);

// EXAMPLE

function resultCallback() {
  console.log("delayed function");
}

setTimeout(resultCallback, 3000);
