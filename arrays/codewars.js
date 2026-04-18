//https://www.codewars.com/kata/554b4ac871d6813a03000035 
function highAndLow(numbers) {
    const arr = numbers.split(" ").map(Number);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max + " " + min;
  }

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e 
function repeatStr(n, s) {
    return s.repeat(n);
  }

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2 
function findSmallestInt(arr) {
    return Math.min(...arr);
  }

//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077 
function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += i + " sheep...";
    }
    return result;
  }s