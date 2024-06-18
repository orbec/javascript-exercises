const add = function(number1, number2) {
  return number1+number2;
};

const subtract = function(number1, number2) {
	return number1-number2
};

const sum = function(array) {
	return array.reduce((total,value) => total+= value,0);
};

const multiply = function(array) {
  return array.reduce((total,value) => total *= value,1);
};

const power = function(number1, number2) {
	return number1**number2;
};

const factorial = function(number) {
  let result = 1;
  if (number < 0) return -1;
	while (number > 1){
    result *= number;
    number--;
  }
  return result;
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
