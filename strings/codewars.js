//https://www.codewars.com/kata/55a70521798b14d4750000a4 
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
  }

//https://www.codewars.com/kata/583f158ea20cfcbeb400000a 
function arithmetic(a, b, operator) {
    const operations = {
      add: a + b,
      subtract: a - b,
      multiply: a * b,
      divide: a / b
    };
    return operations[operator];
  }

//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a 
function plural(n) {
    return n !== 1;
  }

//https://www.codewars.com/kata/554003323fd6af1c4200004e   
function isOdd(n) {
    return n % 2 !== 0 && Number.isInteger(n);
  }

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3  
function abbrevName(name) {
    return name.split(" ")[0][0].toUpperCase() + "." + name.split(" ")[1][0].toUpperCase();
  }

//https://www.codewars.com/kata/55908aad6620c066bc00002a 
function XO(str) {
    const lower = str.toLowerCase();
    const xCount = lower.split("x").length - 1;
    const oCount = lower.split("o").length - 1;
    return xCount === oCount;
  }