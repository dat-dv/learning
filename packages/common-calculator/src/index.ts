const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => b !== 0 ? a / b : 'Cannot divide by zero';

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;
