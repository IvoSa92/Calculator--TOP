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

let num1 = "";
let num2 = "";
let operator;
let result = 0;

// numbers button event listener

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator == "") {
      num1 += this.innerHTML;
      num1 = Number(num1);
    } else if (currentOperator !== "") {
      num2 += this.innerHTML;
      num2 = Number(num2);
    }
    display.innerHTML = num1 + currentOperator + num2;
  });
});

//operator buttons event listener

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    currentOperator = this.innerHTML;
    display.innerHTML = num1 + currentOperator;
    console.log(currentOperator);
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
  currentOperator = "";
  display.innerHTML = "";
}

clearButton.addEventListener("click", clear);

//delete function:
function deleteNumber() {
  display.innerHTML = display.innerHTML.slice(0, -1);
  if (currentOperator == "") {
    currentNumber1String = currentNumber1String.slice(0, -1);
    num1 = parseFloat(currentNumber1String);
  } else if (currentOperator !== "") {
    currentNumber2String = currentNumber2String.slice(0, -1);
    num2 = parseFloat(currentNumber2String);
  } else if (num1 !== "" && currentOperator !== "" && num2 == "") {
    currentOperator.slice(0, -1);
  }
}

deleteButton.addEventListener("click", deleteNumber);
