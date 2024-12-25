const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let sum = 0
	for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
};

const multiply = function(array) {
  let sum = 1
	for (let i = 0; i < array.length; i++) {
    sum = sum * array[i]
  }
  return sum
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  total = 1
	for (let i = a; i > 1; i--) {
    total = total * i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
