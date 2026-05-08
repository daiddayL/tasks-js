class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}