let n = 9;
let i = n;

while (i >= 0) {
  let spaces = "  ".repeat(n - i);
  let numbers = "";
  
  let j = i;
  while (j >= 0) {
    numbers += j + " ";
    j--;
  }
  
  let k = 1;
  while (k <= i) {
    numbers += k + " ";
    k++;
  }
  
  console.log(spaces + numbers.trim());
  i--;
}