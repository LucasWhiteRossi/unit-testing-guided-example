function sum(a, b) {
  if (typeof a !== "number"){
    a = 0
  }
  if (typeof b !== "number"){
    b = 0
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== "number"){
    a = 0
  }
  if (typeof b !== "number"){
    b = 0
  }
  return a - b;
}

function divide(a, b) {
  if (b===0){
    throw "division by zero error"
  }
  return parseFloat((a/b).toFixed(1));
}

function multiply(a, b) {
  return parseFloat((a * b).toFixed(1));
}

console.log(multiply(4.5,2.1))
// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
