const calcDisplay = document.querySelector('#display')
const inputForm = document.querySelector('#input')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const multiplyButton = document.querySelector('multiply')
const divideButton = document.querySelector('divide')
const equalButton = document.querySelector('equal')

// function returnInput() {
//     const val = inputForm.value
//     inputForm.value = ""
//     return val
// }


// addButton.addEventListener("click", () => {
//     let value = returnInput()

// })

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