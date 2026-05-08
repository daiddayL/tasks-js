class Human {
    constructor(name, age, interest) {
        if (this.constructor === Human) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Human");
        }
        this.name = name;
        this.age = age;
        this.interest = interest;
    }

    info() {
        return `Меня зовут ${this.name}, мне ${this.age} лет, мое хобби - ${this.interest}.`;
    }
}

class Person extends Human {
    constructor(name, age, interest) {
        super(name, age, interest);
    }
}

const katya = new Person("Катя", 25, "рисование");
const yura = new Person("Юра", 30, "программирование");

console.log(katya.info());
console.log(yura.info());