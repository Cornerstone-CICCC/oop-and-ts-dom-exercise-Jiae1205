// js/ui.js
import Calculator from "./calculator.js"

export default class UI {
  constructor() {
    this.calc = new Calculator()

    this.num1 = document.getElementById("num1")
    this.num2 = document.getElementById("num2")
    this.operation = document.getElementById("operation")
    this.calculateBtn = document.getElementById("calculateBtn")
    this.result = document.getElementById("result")
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

      const res = this.calc.compute(a, b, op)
      this.result.textContent = res
    })
  }
}
