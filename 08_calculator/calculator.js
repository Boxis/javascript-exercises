const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return  a - b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum+=element;
  });
  return sum;
};

const multiply = function(array) {
  return array.reduce((a,b) => a*b, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num == 1 || num == 0) return 1;

  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
	
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
