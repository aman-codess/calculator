

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.final');

let currentNumber = '';
let firstOperand = null;
let operator = null;

function clear() {
  currentNumber = '';
  firstOperand = null;
  operator = null;
  updateDisplay();
}

function updateDisplay() {
    display.textContent = currentNumber || '0';
 
}

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function handleOperator(selectedOperator) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(currentNumber);
  currentNumber = '';
  operator = selectedOperator;
  updateDisplay();
}

function calculate() {
  const secondOperand = parseFloat(currentNumber);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  firstOperand = result;
  operator = null;
  updateDisplay();
}

// Attach event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
  });
});

// Attach event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleOperator(button.textContent);
  });
});

// Attach event listeners to the clear button
clearButton.addEventListener('click', clear);

// Attach event listeners to the equals button
equalsButton.addEventListener('click', calculate);
