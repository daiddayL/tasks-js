let n = 10;
let i = 1;

while (i <= n) {
  let spaces = " ".repeat(n - i);
  let numbers = "";
  
  let j = 1;
  while (j <= i) {
    if (j === 10) {
      numbers += "0";
    } else {
      numbers += j;
    }
    j++;
  }
  
  let k = i - 1;
  while (k >= 1) {
    numbers += k;
    k--;
  }
  
  console.log(spaces + numbers);
  i++;
}

i = n - 1;
while (i >= 1) {
  let spaces = " ".repeat(n - i);
  let numbers = "";
  
  let j = 1;
  while (j <= i) {
    numbers += j;
    j++;
  }
  
  let k = i - 1;
  while (k >= 1) {
    numbers += k;
    k--;
  }
  
  console.log(spaces + numbers);
  i--;
}