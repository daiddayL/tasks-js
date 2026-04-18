let num1 = 10;
let num2 = 3;
let operator = "/";
let result;

switch (operator) {
     case "+":
          result = num1 + num2;
          break;
     case "-":
          result = num1 - num2;
          break;
     case "*":
          result = num1 * num2;
          break;
     case "/":
          result = num1 / num2;
          break;
     default:
          result = "Неверный оператор";
}

console.log(num1 + " " + operator + " " + num2 + " = " + result);