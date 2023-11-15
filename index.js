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
let currentNumber1 = "";
let currentNumber2 = "";
let result = 0;

// numbers event listener

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator == "") {
      currentNumber1String += this.innerHTML;
      currentNumber1 = parseFloat(currentNumber1String);
    } else if (currentOperator !== "") {
      currentNumber2String += this.innerHTML;
      currentNumber2 = parseFloat(currentNumber2String);
    }
    display.innerHTML = currentNumber1 + currentOperator + currentNumber2;
  });
});

//operator buttons event listener

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    currentOperator = this.innerHTML;
    display.innerHTML = currentNumber1 + currentOperator;
  });
});

// operating event listener

equalButton.addEventListener("click", function () {
  if (currentOperator == "+") {
    num1 = currentNumber1;
    num2 = currentNumber2;
    result = num1 + num2;
    display.innerHTML = "= " + result;
  }
});

// clear function:
function clear() {
  currentNumber1 = "";
  currentNumber2 = "";
  currentNumber1String = "";
  currentNumber2String = "";
  currentOperator = "";
  display.innerHTML = "";
}

clearButton.addEventListener("click", clear);
