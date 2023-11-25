// Functions for the calculations :

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const remainder = (num1, num2) => num1 % num2;

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
const dotButton = document.querySelector(".dot-button");

let currentOperator = "";
let num1 = "";
let num2 = "";
let operator;
let result = 0;

// Starting Text Display

document.addEventListener("DOMContentLoaded", (event) => {
  const display = document.querySelector(".display");
  display.innerHTML = "Lets have fun  ⚡️";
});

// numbers button event listener and functions

numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator == "") {
      num1 += this.innerHTML;
      num1 = Number(num1);
    } else if ((currentOperator !== "" && num2 === "") || num2 !== "") {
      num2 += this.innerHTML;
      num2 = Number(num2);
    }

    display.innerHTML = num1 + currentOperator + num2;
  });
});

//operator buttons event listener and functions

operatorButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (currentOperator == "") {
      currentOperator = this.innerHTML;
    } else if (currentOperator == "+") {
      num1 = result = operate(num1, num2, add);
      num1 = parseFloat(num1.toFixed(5));
      num2 = "";
      currentOperator = this.innerHTML;
    } else if (currentOperator == "-") {
      num1 = result = operate(num1, num2, subtract);
      num1 = parseFloat(num1.toFixed(5));
      num2 = "";
      currentOperator = this.innerHTML;
    } else if (currentOperator == "*") {
      num1 = result = operate(num1, num2, multiply);
      num1 = parseFloat(num1.toFixed(5));
      num2 = "";
      currentOperator = this.innerHTML;
    } else if (currentOperator == "/" && num2 == 0) {
      result = "Please don´t do that..";
      display.innerHTML = result;
      return;
    } else if (currentOperator == "/") {
      num1 = result = operate(num1, num2, divide);
      num1 = parseFloat(num1.toFixed(5));
      num2 = "";
      currentOperator = this.innerHTML;
    } else if (currentOperator == "%") {
      num1 = result = operate(num1, num2, remainder);
      num1 = parseFloat(num1.toFixed(5));
      num2 = "";
    }

    display.innerHTML = num1 + currentOperator;
  });
});

// equal Button event listener, calculation:

equalButton.addEventListener("click", function () {
  if (currentOperator == "+") {
    num1 = result = operate(num1, num2, add);
    num2 = "";
    currentOperator = "";
  } else if (currentOperator == "-") {
    num1 = result = operate(num1, num2, subtract);
    num2 = "";
    currentOperator = "";
  } else if (currentOperator == "*") {
    num1 = result = operate(num1, num2, multiply);
    num2 = "";
    currentOperator = "";
  } else if (currentOperator == "/" && num2 == "0") {
    result = "You know that´s impossible 😈";
    display.innerHTML = result;
    return;
  } else if (currentOperator == "/") {
    num1 = result = operate(num1, num2, divide);
    num2 = "";
    currentOperator = "";
  } else if (currentOperator == "%") {
    num1 = result = operate(num1, num2, remainder);
    num2 = "";
    currentOperator = "";
  }
  display.innerHTML = "= " + parseFloat(result.toFixed(5));
});

// clear function:
function clear() {
  num1 = "";
  num2 = "";
  currentOperator = "";
  result = 0;
  display.innerHTML = "Give me another one ! 😁" + " ";
}

clearButton.addEventListener("click", clear);

//delete function:
function deleteNumber() {
  display.innerHTML = display.innerHTML.slice(0, -1);
  if (currentOperator == "") {
    num1 = num1.toString().slice(0, -1);
    num1 = num1 === "" ? "" : Number(num1);
  } else if (currentOperator !== "" && num1 !== "" && num2 !== "") {
    num2 = num2.toString().slice(0, -1);
    num2 = num2 === "" ? "" : Number(num2);
  } else if (num1 !== "" && currentOperator !== "" && num2 == "") {
    currentOperator = currentOperator.slice(0, -1);
  }
}

deleteButton.addEventListener("click", deleteNumber);

// dot button

dotButton.addEventListener("click", function () {
  if (num1 !== "" && num2 == "" && !num1.toString().includes(".")) {
    num1 += ".";
    display.innerHTML = num1;
    return;
  } else if (num1 !== "" && num2 !== "" && !num2.toString().includes(".")) {
    num2 += ".";
    display.innerHTML = num1 + currentOperator + num2;
    return;
  }
});

// Key Event Listener for Numbers:

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
document.addEventListener("keydown", (event) => {
  if (numbers.includes(event.key)) {
    if (currentOperator === "") {
      num1 += event.key;
      num1 = Number(num1);
    } else {
      num2 += event.key;
      num2 = Number(num2);
    }
  }

  display.innerHTML = num1 + currentOperator + num2;
});

//Key Event Listener for Operators:

const operators = ["+", "-", "*", "/", "%"];
document.addEventListener("keydown", (event) => {
  if (operators.includes(event.key)) {
    if (currentOperator !== "" && num2 !== "") {
      result = operate(
        Number(num1),
        Number(num2),
        getOperation(currentOperator)
      );
      num1 = result;
      num2 = "";
      display.innerHTML = num1;
    }
    currentOperator = event.key;
    display.innerHTML = num1 + " " + currentOperator + " " + num2;
  }
});

function getOperation(operator) {
  switch (operator) {
    case "+":
      return add;
    case "-":
      return subtract;
    case "*":
      return multiply;
    case "/":
      return divide;
    case "%":
      return remainder;
    default:
      return null;
  }
}

//Key Event Listener for equal Button:

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (num1 !== "" && num2 !== "" && currentOperator !== "") {
      document.querySelector(".equal-button").click();
    }
  }
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Escape":
      clearButton.click();
      break;
    case ".":
      dotButton.click();
      break;
    case "Backspace":
      deleteButton.click();
      break;
  }
});

//Animation for Key event Listener:
//number-buttons:

document.addEventListener("keydown", (event) => {
  if (event.key >= 0 && event.key <= 9) {
    const buttonPressed = document.querySelector(`.number-${event.key}`);
    if (buttonPressed) {
      buttonPressed.classList.add("key-pressed");
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key >= 0 && event.key <= 9) {
    const buttonReleased = document.querySelector(`.number-${event.key}`);
    if (buttonReleased) {
      buttonReleased.classList.remove("key-pressed");
    }
  }
});

//operator buttons:
/*
document.addEventListener("keydown", (event) => {
  if (operators.includes(event.key)) {
    const buttonPressed = document.querySelector(`.${event.key}`);
    if (buttonPressed) {
      buttonPressed.classList.add("key-pressed");
    }
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key >= 0 && event.key <= 9) {
    const buttonReleased = document.querySelector(`.number-${event.key}`);
    if (buttonReleased) {
      buttonReleased.classList.remove("key-pressed");
    }
  }
});
*/
document.addEventListener("keydown", (event) => {
  console.log(event.key);
});

document.addEventListener("keydown", (event) => {
  const operatorKeys = {
    "-": "subtract",
    "+": "add",
    "*": "multiply",
    "/": "divide",
    "%": "remainder",
  };

  const operatorClass = operatorKeys[event.key];
  if (operatorClass) {
    const operatorButton = document.querySelector(`.${operatorClass}`);
    if (operatorButton) {
      operatorButton.classList.add("key-pressed");
    }
  }
});

document.addEventListener("keyup", (event) => {
  const operatorKeys = {
    "-": "subtract",
    "+": "add",
    "*": "multiply",
    "/": "divide",
    "%": "remainder",
  };

  const operatorClass = operatorKeys[event.key];
  if (operatorClass) {
    const operatorButton = document.querySelector(`.${operatorClass}`);
    if (operatorButton) {
      operatorButton.classList.remove("key-pressed");
    }
  }
});
