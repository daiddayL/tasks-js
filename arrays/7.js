const arr = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let sum = 0;

function sumArray(items) {
  let total = 0;
  for (let item of items) {
    if (Array.isArray(item)) {
      total += sumArray(item);
    } else if (typeof item === "number") {
      total += item;
    }
  }
  return total;
}

sum = sumArray(arr);
console.log(sum);