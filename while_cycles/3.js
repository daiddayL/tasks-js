let rows = 5;
let num = 1;
let i = 1;

while (i <= rows) {
  let line = "";
  let j = 1;
  
  while (j <= i) {
    line += num + " ";
    num++;
    j++;
  }
  
  console.log(line.trim());
  i++;
}