let wallHeight = 5;
let dayProgress = 3;
let nightSlide = 2;
let netProgress = dayProgress - nightSlide;
let currentHeight = 0;
let days = 0;

while (currentHeight < wallHeight) {
     days++;
     currentHeight = currentHeight + dayProgress;
     if (currentHeight >= wallHeight) {
          break;
     }
     currentHeight = currentHeight - nightSlide;
}

console.log("Улитка доползет за " + days + " дней");//3