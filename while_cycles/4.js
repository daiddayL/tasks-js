let n = 5;
let i = 1;

while (i <= n) {
  let line = "";
  let step = n - 1;
  let num = i;
  let j = 1;
  
  while (j <= i) {
    line += num + " ";
    num += step;
    step--;
    j++;
  }
  
  console.log(line.trim());
  i++;
}