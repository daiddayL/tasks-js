let age = 20;
let isStudent = true;
let price = 100;
let discount = 0;

if (age < 2) {
     discount = 100;
} else if (age < 10) {
     discount = 50;
} else if (age > 65) {
     discount = 15;
} else if (isStudent) {
     discount = 10;
}

let finalPrice = price - (price * discount / 100);
console.log("Цена билета: " + finalPrice);