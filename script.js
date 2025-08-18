let calc = {
    firstNum: null,
    secNum: null,
    operator: null,
    prevOperator: null,
    isNum: false
}

const display = document.querySelector('#display');
const inputForm = document.querySelector('#input');
const numberButtons = document.querySelectorAll('.num');
const clearButton = document.querySelector('#clear');
const operators = document.querySelectorAll('#add, #subtract, #multiply, #divide, #equal');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error Cant Divide By Zero";
    }
    return a / b;
}

function performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+':
            return add(firstOperand, secondOperand);
        case '-':
            return subtract(firstOperand, secondOperand);
        case '*':
            return multiply(firstOperand, secondOperand);
        case '/':
            return divide(firstOperand, secondOperand);
        default:
            return secondOperand;
    }
}

function updateDisplay() {
    inputForm.value = calculator.displayValue;
}

operators.forEach(button => {
    button.addEventListener("click", () => {
        operatorLogic(button.textContent)
    })
})

function operatorLogic(buttonID) {
    if (!calc.operator) {
        calc.operator = buttonID
    } else {
        calc.prevOperator = calc.operator
        calc.operator = buttonID
    }
    if (!calc.firstNum) {
        calc.firstNum = Number(inputForm.value)
        calc.isNum = false
        if (calc.operator === "=") {
            return
        }
        inputForm.value = ""
    } else {
        calc.secNum = Number(inputForm.value)
        if (calc.operator === "=") {
            calc.firstNum = performCalculation(calc.prevOperator, calc.firstNum,calc.secNum)
            inputForm.value = calc.firstNum
            calc.firstNum = null;
            calc.secNum = null;
            calc.operator = null;
            calc.prevOperator = null; 
            calc.isNum = true;
        } else if (calc.operator === calc.prevOperator) {
             if (!calc.isNum) {
                calc.firstNum = performCalculation(calc.operator, calc.firstNum,calc.firstNum)
             } else {
            calc.firstNum = performCalculation(calc.operator, calc.firstNum,calc.secNum)
             }
            inputForm.value = calc.firstNum
            calc.isNum = false
        } else {
            calc.firstNum = performCalculation(calc.prevOperator, calc.firstNum,calc.secNum)
            inputForm.value = calc.firstNum
            calc.isNum = false;
        }
    }
    console.log(calc)
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!calc.isNum) {
          inputForm.value = button.textContent;
          calc.isNum = true;
        } else {
            inputForm.value += button.textContent;
            calc.isNum = true;
        }

    })
})

clearButton.addEventListener("click", () => {
    calc.firstNum = null;
    calc.secNum = null;
    calc.operator = null;
    calc.prevOperator = null;
    calc.isNum = false;
    inputForm.value = ""
})