let coffeeType = "Латте";
let size = "medium";
let price = 0;
let recipe = "";

if (coffeeType === "Латте") {
     recipe = "эспрессо + молоко + пенка";
     if (size === "small") price = 3.5;
     else if (size === "medium") price = 4.5;
     else price = 5.5;
} else if (coffeeType === "Капучино") {
     recipe = "эспрессо + молоко + густая пенка";
     if (size === "small") price = 3;
     else if (size === "medium") price = 4;
     else price = 5;
} else {
     recipe = "эспрессо + вода";
     if (size === "small") price = 2.5;
     else if (size === "medium") price = 3.5;
     else price = 4.5;
}

console.log(coffeeType);
console.log(recipe);
console.log(price);