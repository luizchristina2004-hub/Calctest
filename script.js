let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}

function calculate() {
    if (firstOperand === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
    }
    display.value = result;
    currentInput = result;
    operator = '';
    firstOperand = '';
}