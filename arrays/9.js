let wallHeight = 5;
let dayProgress = 3;
let nightSlide = 2;
let currentHeight = 0;
let days = 0;

for (; currentHeight < wallHeight; days++) {
  currentHeight += dayProgress;
  if (currentHeight >= wallHeight) {
    days++;
    break;
  }
  currentHeight -= nightSlide;
}

console.log(days);