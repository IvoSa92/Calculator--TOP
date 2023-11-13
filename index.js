// Functions for the calculations :

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

//variables for the operator :

let num1;
let num2;
let operator;

//operate function :

function operate(num1, num2, operator) {
  let sum = 0;
  sum = operator(num1, num2);
  return sum;
}
