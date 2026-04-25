// https://www.codewars.com/kata/5932c94f6aa4d1d786000028 
function isPerfectRoots(n) {
    let secondRoot = Math.sqrt(n);
    let fourthRoot = Math.sqrt(secondRoot);
    let eighthRoot = Math.sqrt(fourthRoot);
    
    return Number.isInteger(secondRoot) && Number.isInteger(fourthRoot) && Number.isInteger(eighthRoot);
  }
// https://www.codewars.com/kata/570bcd9715944a2c8e000009 
function sc(floor) {
    if (floor <= 1) return "";
    
    let result = "";
    let i = 1;
    
    while (i < floor) {
      result += "Aa~ ";
      i++;
    }
    
    result += "Pa!";
    
    if (floor > 6) {
      return result;
    } else {
      return result + " Aa!";
    }
  }
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5 
function drawStairs(n) {
    let result = "";
    let i = 0;
    
    while (i < n) {
      result += " ".repeat(i) + "I";
      if (i < n - 1) {
        result += "\n";
      }
      i++;
    }
    
    return result;
  }
// https://www.codewars.com/kata/5601409514fc93442500010b 
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let i = 0;
    
    while (i < classPoints.length) {
      sum += classPoints[i];
      i++;
    }
    
    let average = (sum + yourPoints) / (classPoints.length + 1);
    
    return yourPoints > average;
  }
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099 
function number(busStops) {
    let result = 0;
    let i = 0;
    
    while (i < busStops.length) {
      result += busStops[i][0] - busStops[i][1];
      i++;
    }
    
    return result;
  }
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921 
function findAverage(array) {
    if (array.length === 0) return 0;
    
    let sum = 0;
    let i = 0;
    
    while (i < array.length) {
      sum += array[i];
      i++;
    }
    
    return sum / array.length;
  }
// https://www.codewars.com/kata/58acfe4ae0201e1708000075 
function inviteMoreWomen(L) {
    let sum = 0;
    let i = 0;
    
    while (i < L.length) {
      sum += L[i];
      i++;
    }
    
    return sum > 0;
  }
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8 
function numberToString(num) {
    return num.toString();
  }
// https://www.codewars.com/kata/544675c6f971f7399a000e79 
function stringToNumber(str) {
    return Number(str);
  }
// https://www.codewars.com/kata/572af273a3af3836660014a1 
function infiniteLoop(arr, d, n) {
    let flat = [];
    let i = 0;
    
    while (i < arr.length) {
      let j = 0;
      while (j < arr[i].length) {
        flat.push(arr[i][j]);
        j++;
      }
      i++;
    }
    
    let k = 0;
    while (k < n) {
      if (d === "left") {
        let first = flat.shift();
        flat.push(first);
      } else if (d === "right") {
        let last = flat.pop();
        flat.unshift(last);
      }
      k++;
    }
    
    let result = [];
    let index = 0;
    let m = 0;
    
    while (m < arr.length) {
      let subArr = [];
      let p = 0;
      while (p < arr[m].length) {
        subArr.push(flat[index]);
        index++;
        p++;
      }
      result.push(subArr);
      m++;
    }
    
    return result;
  }
// https://www.codewars.com/kata/572cb264362806af46000793 
function threeInOne(arr) {
    let result = [];
    let i = 0;
    
    while (i < arr.length) {
      let sum = arr[i];
      if (i + 1 < arr.length) sum += arr[i + 1];
      if (i + 2 < arr.length) sum += arr[i + 2];
      result.push(sum);
      i += 3;
    }
    
    return result;
  }
// https://www.codewars.com/kata/572df796914b5ba27c000c90 
function sortIt(arr) {
    let freq = {};
    let i = 0;
    
    while (i < arr.length) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
      i++;
    }
    
    let newArr = arr.slice();
    
    newArr.sort((a, b) => {
      if (freq[a] !== freq[b]) {
        return freq[a] - freq[b];
      } else {
        return b - a;
      }
    });
    
    return newArr;
  }
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296 
function howMuchILoveYou(n) {
    let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return phrases[(n - 1) % 6];
  }
// https://www.codewars.com/kata/56b29582461215098d00000f 
function pipeFix(numbers) {
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let result = [];
    let i = min;
    
    while (i <= max) {
      result.push(i);
      i++;
    }
    
    return result;
  }
// https://www.codewars.com/kata/5413759479ba273f8100003d 
function reverse(array) {
    let result = [];
    let i = array.length - 1;
    
    while (i >= 0) {
      result.push(array[i]);
      i--;
    }
    
    return result;
  }
// https://www.codewars.com/kata/515e271a311df0350d00000f 
function squareSum(numbers) {
    let sum = 0;
    let i = 0;
    
    while (i < numbers.length) {
      sum += numbers[i] * numbers[i];
      i++;
    }
    
    return sum;
  }
// https://www.codewars.com/kata/5715eaedb436cf5606000381 
function positiveSum(arr) {
    let sum = 0;
    let i = 0;
    
    while (i < arr.length) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
      i++;
    }
    
    return sum;
  }
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3 
function sumEvenNumbers(input) {
    let sum = 0;
    let i = 0;
    
    while (i < input.length) {
      if (input[i] % 2 === 0) {
        sum += input[i];
      }
      i++;
    }
    
    return sum;
  }
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c 
function sum(numbers) {
    let total = 0;
    let i = 0;
    
    while (i < numbers.length) {
      total += numbers[i];
      i++;
    }
    
    return total;
  }
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7 
function monkeyCount(n) {
    let result = [];
    let i = 1;
    
    while (i <= n) {
      result.push(i);
      i++;
    }
    
    return result;
  }
// https://www.codewars.com/kata/571d42206414b103dc0006a1 
function arr(n = 0) {
    let result = [];
    let i = 0;
    
    while (i < n) {
      result.push(i);
      i++;
    }
    
    return result;
  }