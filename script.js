const calcDisplay = document.querySelector('#display')
const inputForm = document.querySelector('#input')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')
const multiplyButton = document.querySelector('#multiply')
const divideButton = document.querySelector('#divide')
const equalButton = document.querySelector('#equal')
const displayStringDOM = document.querySelector('#display-string')
const numberButtons = document.querySelectorAll('.num')
const clearButton = document.querySelector('#clear')

let displayString = ""
let obj = {
    wasEqualPressed: false,
    prevResult: 0,
    operator: "",
    prevOperator: ""
}

function updateObj(obj,op,wasEq, value) {
    const objLength = Object.keys(obj).length
    obj.operator = op
    obj.wasEqualPressed = wasEq
    if (objLength === 4) {
        if (wasEq) {
            obj.prevOperator = op
            return
        }
        obj.prevOperator = op
        obj.firstNum = value
        inputForm.value = ""

        
    } else if (objLength === 5) {
        if (wasEq && obj.prevOperator !== "=") {
            obj.secNum = value
            obj.prevResult = value
        } 
        else {
                    obj.secNum = value
        }

        if (wasEq === true) {
           console.log('operateee')
           obj.firstNum = operate(op)
            obj.secNum = value
            obj.prevResult = value
           obj.prevOperator = "="
        } 
        else {
        if (obj.prevOperator === "=") {
            console.log("hrerer")
            obj.firstNum = operate(op)
            delete obj.secNum
            inputForm.value = ""
            obj.prevOperator = op
        } 
        else {
            obj.firstNum = operate(op)
            delete obj.secNum
            obj.prevOperator = op
            inputForm.value = ""
            } 
        }
    } else {
        if (wasEq) {
            console.log("here")
            obj.secNum = obj.prevResult
            obj.firstNum = operate(obj.operator)
        } else {
           console.log('operateee2')
           delete obj.secNum
           obj.prevOperator = "="
           inputForm.value = ""
        }

    }
}

function operate(op) {
        switch (op) {
        case "+":
            inputForm.value = add(obj.firstNum,obj.secNum)
            return Number(obj.firstNum + obj.secNum)
        case "-":
            inputForm.value = subtract(obj.firstNum,obj.secNum) 
            return obj.firstNum - obj.secNum
        case "*":
           inputForm.value = multiply(obj.firstNum,obj.secNum)
            return obj.firstNum * obj.secNum
        case "/":
            inputForm.value = divide(obj.firstNum,obj.secNum)
            return obj.firstNum / obj.secNum
    }
}

function updateArray(value, op) {
    value = Number(value)
    if (displayArray.length < 1) {
        displayArray.push(value)
    } else if (displayArray.length == 1) {
        displayArray.push(value)
        equal(displayArray, op)
        displayArray = [prevValue]
    } else {
    }
    console.log(displayArray)
}

function returnInput() {
    const val = Number(inputForm.value)
    return val
}


numberButtons.forEach(number => {
    number.addEventListener("click", (e) => {
        inputForm.value += e.target.id
    })
})


addButton.addEventListener("click", () => {
    let value = returnInput()
    updateObj(obj,'+',false,value)
    console.log(obj)
})

subtractButton.addEventListener("click", () => {
    let value = returnInput()
    updateObj(obj,'-',false,value)
    console.log(obj)

})

multiplyButton.addEventListener("click", () => {
        let value = returnInput()
    updateObj(obj,'*',false,value)
    console.log(obj)

})

divideButton.addEventListener("click", () => {
        let value = returnInput()
    updateObj(obj,'/',false,value)
    console.log(obj)

})
equalButton.addEventListener("click", () => {
    let value = returnInput()
    updateObj(obj,obj.operator,true,value)
    console.log(obj)
    
})

clearButton.addEventListener("click", () => {
obj = {
    wasEqualPressed: false,
    prevResult: 0,
    operator: "",
    prevOperator: ""
}
inputForm.value = ""
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


/// store 1stnum , operator, secnum, prevresult, wasequal in obj
// obj should have 3 keys after each equal (operator, prevresult and wasequal)
// once we type out a nuber we only have 5 options, the operators or equal (as of now)
// if we hit equal while the input screen is empty and while we only have the 1st number then nothing should happen
// if we hit equal while we have something in input then we need to calculate 1stnum and secnm with the operator then remove the 2 num properties
// if we hit one of the operators again after the 1st number we should calculate using that operator 