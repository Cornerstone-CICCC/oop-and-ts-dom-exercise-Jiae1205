// app.js
class Calculator {
  constructor() {
    // DOM 요소 연결
    this.num1 = document.getElementById("num1")
    this.num2 = document.getElementById("num2")
    this.operation = document.getElementById("operation")
    this.calculateBtn = document.getElementById("calculateBtn")
    this.result = document.getElementById("result")
  }

  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero"
  }

  compute(a, b, operation) {
    switch (operation) {
      case "add":
        return this.add(a, b)
      case "subtract":
        return this.subtract(a, b)
      case "multiply":
        return this.multiply(a, b)
      case "divide":
        return this.divide(a, b)
      default:
        return "Invalid operation"
    }
  }

  init() {
    this.calculateBtn.addEventListener("click", () => {
      const a = parseFloat(this.num1.value)
      const b = parseFloat(this.num2.value)
      const op = this.operation.value

      if (isNaN(a) || isNaN(b)) {
        this.result.textContent = "Please enter valid numbers"
        return
      }

      const res = this.compute(a, b, op)
      this.result.textContent = res
    })
  }
}

// 실행
const calc = new Calculator()
calc.init()

