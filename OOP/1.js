class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Zhiguli extends Car {
    constructor(model, color, year, placeOfProduction, maxSpeed) {
        super(model, color, year);
        this.placeOfProduction = placeOfProduction;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        console.log(`Модель: ${this.model}`);
        console.log(`Цвет: ${this.color}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`Место выпуска: ${this.placeOfProduction}`);
        console.log(`Максимальная скорость: ${this.maxSpeed} км/ч`);
    }
}

const zhiguli = new Zhiguli("ВАЗ-2107", "Белый", 2005, "Тольятти", 150);
zhiguli.getInfo();