class Dog {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }

    getFood(foodType, quantity, brand) {
        if (foodType === undefined && quantity === undefined && brand === undefined) {
            return "All dogs love to eat!";
        } else if (quantity !== undefined && brand !== undefined) {
            return `${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food by ${brand}.`;
        } else if (quantity !== undefined) {
            return `${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food.`;
        } else {
            return `${this.breed} ${this.name} eats ${foodType} food.`;
        }
    }
}

const shepherd = new Dog("Shepherd", "Masha");
const poodle = new Dog("Poodle", "Demi");
const corgi = new Dog("Corgi", "Henry");

console.log(shepherd.getFood());
console.log(shepherd.getFood("dry"));
console.log(poodle.getFood("wet", 2));
console.log(corgi.getFood("dry", 3, "Royal Canin"));