// Functions for the calculations :

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

//operate function :

function operate(num1, num2, operator) {
  let sum = 0;
  sum = operator(num1, num2);
  return sum;
}

// variables:

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const deleteButton = document.querySelector(".delete-button");
const equalButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");

// variables

let currentOperator = "";
let currentNumber1String = "";
let currentNumber2String = "";
let num1 = "";
let num2 = "";
let operator;

let result = 0;

// numbers event listener

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator == "") {
      currentNumber1String += this.innerHTML;
      num1 = parseFloat(currentNumber1String);
    } else if (currentOperator !== "") {
      currentNumber2String += this.innerHTML;
      num2 = parseFloat(currentNumber2String);
    }
    display.innerHTML = num1 + currentOperator + num2;
  });
});

//operator event listener

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    currentOperator = this.innerHTML;
    display.innerHTML = num1 + currentOperator;
  });
});

// equal Button event listener

equalButton.addEventListener("click", function () {
  if (currentOperator == "+") {
    result = operate(num1, num2, add);
  } else if (currentOperator == "-") {
    result = operate(num1, num2, subtract);
  } else if (currentOperator == "*") {
    result = operate(num1, num2, multiply);
  } else if (currentOperator == "/") {
    result = operate(num1, num2, divide);
  }
  display.innerHTML = "= " + result;
});

// clear function:
function clear() {
  num1 = "";
  num2 = "";
  currentNumber1String = "";
  currentNumber2String = "";
  currentOperator = "";
  display.innerHTML = "";
}

clearButton.addEventListener("click", clear);
