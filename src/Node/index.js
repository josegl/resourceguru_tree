class Node {
  constructor(operator, value, left, right){
    this.operator = operator;
    this.value = value;
    this.left = left;
    this.right = right;
  }

  toString(){
    switch (this.operator) {
      case "+":
        return `(${this.left.toString()} + ${this.right.toString()})`;
      case "-":
        return `(${this.left.toString()} - ${this.right.toString()})`;
      case "x":
        return `(${this.left.toString()} x ${this.right.toString()})`;
      case "÷":
        return `(${this.left.toString()} ÷ ${this.right.toString()})`;
      default:
        return this.value.toString();
    }
  }

  result(){
    switch (this.operator) {
      case "+":
        return this.left.result() + this.right.result();
      case "-":
        return this.left.result() - this.right.result();
      case "x":
        return this.left.result() * this.right.result();
      case "÷":
        return this.left.result() / this.right.result();
      default:
        return this.value;
    }
  }
}

module.exports = Node;
