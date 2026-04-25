function calculate(a, b, operator) {
    let result;
    
    if (operator === "+") {
      result = a + b;
    } else if (operator === "-") {
      result = a - b;
    } else if (operator === "*") {
      result = a * b;
    } else if (operator === "/") {
      result = a / b;
    } else {
      result = "Неверный оператор";
    }
    
    console.log(a + " " + operator + " " + b + " = " + result);
    return result;
  }
  
  calculate(10, 3, "/");
  calculate(5, 2, "+");
  calculate(7, 4, "-");
  calculate(6, 3, "*");