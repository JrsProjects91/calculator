const calcDisplay = document.querySelector('#display')
const inputForm = document.querySelector('#input')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')
const equalButton = document.querySelector('#equal')

let displayString = ""


function returnInput() {
    const val = inputForm.value
    inputForm.value = ""
    return val
}

function numInputToDisplay(val, op) {
    const value = Number(val)
    const operators = '+&/*'
    if (Number.isNaN(value)) {
        calcDisplay.textContent = "Not a valid number.."
    } else
    {
        if (displayString == "") {
            displayString += value + ` ${op} `
            calcDisplay.textContent = value

        } else {
            displayString += value + " "
            calcDisplay.textContent = value
        }

    }
    return
}


addButton.addEventListener("click", () => {
    let value = returnInput()
    numInputToDisplay(value, '+')

})


subtractButton.addEventListener("click", () => {
    let value = returnInput()
    numInputToDisplay(value, '-')

})

multiplyButton.addEventListener("click", () => {
    let value = returnInput()
    numInputToDisplay(value, '*')

})

divideButton.addEventListener("click", () => {
    let value = returnInput()
    numInputToDisplay(value, '/')

})
equalButton.addEventListener("click", () => {
    let value = returnInput()
    numInputToDisplay(value)
    calcDisplay.textContent = operate(displayString)
    displayString = ""
})

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function convertStringToNum(string) {
    return string.split(" ").join("")
}

function getOperationObj(string) {
    let opObj = {}
    let newString = convertStringToNum(string)
    let indexOfOperator = ""
    if (newString.indexOf("+") !== -1) indexOfOperator = newString.indexOf("+")
    if (newString.indexOf("-") !== -1) indexOfOperator = newString.indexOf("-")
    if (newString.indexOf("*") !== -1) indexOfOperator = newString.indexOf("*")
    if (newString.indexOf("/") !== -1) indexOfOperator = newString.indexOf("/")
    opObj.firstNum = Number(newString.slice(0, indexOfOperator))
    opObj.operator = newString.slice(indexOfOperator, indexOfOperator + 1)
    opObj.secondNum = Number(newString.slice(indexOfOperator + 1))
    return opObj
}

function operate(string) {
    const obj = getOperationObj(string)
    if (obj.operator === '+') return add(obj.firstNum, obj.secondNum);
    if (obj.operator === '-') return subtract(obj.firstNum, obj.secondNum)
    if (obj.operator === '/') return divide(obj.firstNum, obj.secondNum);
    if (obj.operator === '*') return multiply(obj.firstNum, obj.secondNum);
}

console.log(operate("45 / 44"))