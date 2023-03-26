class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number
    }

    chooseOperator(operator) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== null) {
            this.compute()
        }
        this.operation = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        let prev = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '÷':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break
            default:
                return
        }
        
        this.currentOperand = computation
        this.previousOperand = ''
        this.operation = undefined
    }

    getDisplayNumber(number) {
        let stringNumber = number.toString()
        let integerDigit = parseFloat(stringNumber.split('.')[0])
        let decimalDigit = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigit)) {
            integerDisplay = ''  
        } else {
            integerDisplay = integerDigit.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (isNaN(decimalDigit)) {
            return integerDisplay
            
        } else {
            return `${integerDisplay}.${decimalDigit}`
        }
        
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation !== null) {
            this.previousOperandTextElement.innerText = this.getDisplayNumber(this.previousOperand)
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }


}


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

