// js/calculator.js
export default class Calculator {
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
}
