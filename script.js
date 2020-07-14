const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculation0perator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        input0perator(event.target.value)
    })
})

const input0perator = (operator) => {
    if(calculation0perator === ''){
        prevNumber = currentNumber
    }
    calculation0perator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculation0perator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculation0perator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculation0perator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const inverse = document.querySelector('.inverse')

inverse.addEventListener('click', () => {
    inverseNumber()
    updateScreen(currentNumber)
})

const inverseNumber = () => {
    if (currentNumber === '0'){
        return
    }
    currentNumber = currentNumber * -1
}

const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', () => {
    percentageNumber()
    updateScreen(currentNumber)
})

const percentageNumber = () => {
    if (currentNumber === '0'){
        return
    }
    currentNumber = currentNumber / 100
}

