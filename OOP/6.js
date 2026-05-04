class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name}, ${this.age} лет, ${this.gender}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }

    getInfo() {
        return `${super.getInfo()}, ${this.course} курс, специальность: ${this.major}, GPA: ${this.gpa}`;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender);
        this.salary = salary;
        this.workHours = workHours;
    }

    getInfo() {
        return `${super.getInfo()}, зарплата: ${this.salary}$, часы работы: ${this.workHours}ч/нед`;
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender, salary, workHours);
    }

    getSalary() {
        return this.salary * 2;
    }

    getAnnualBonus() {
        return this.salary;
    }

    getTotalCompensation() {
        return this.getSalary() * 12 + this.getAnnualBonus();
    }

    getInfo() {
        return `${super.getInfo()}, должность: Декан, зарплата декана: ${this.getSalary()}$ (в 2 раза больше учителя)`;
    }
}

class Director extends Dean {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender, salary, workHours);
    }

    getSalary() {
        return this.salary * 2 * 1.5;
    }

    getAnnualBonus() {
        return this.salary * 2 * 2;
    }

    getTotalCompensation() {
        return this.getSalary() * 12 + this.getAnnualBonus();
    }

    getInfo() {
        return `${super.getInfo().replace("Декан", "Директор")}, зарплата директора: ${this.getSalary()}$ (в 1.5 раза больше декана)`;
    }
}

const students = [
    new Student("Анна Иванова", 19, "Женский", 2, "Информатика", 3.8),
    new Student("Петр Сидоров", 20, "Мужской", 3, "Математика", 3.2),
    new Student("Мария Петрова", 18, "Женский", 1, "Физика", 4.0),
    new Student("Иван Смирнов", 21, "Мужской", 4, "Информатика", 3.9),
    new Student("Елена Козлова", 19, "Женский", 2, "Экономика", 3.5)
];

const teachers = [
    new Teacher("Сергей Васильев", 45, "Мужской", 3000, 20),
    new Teacher("Ольга Николаева", 38, "Женский", 3200, 22),
    new Teacher("Алексей Федоров", 52, "Мужской", 3500, 24)
];

const dean = new Dean("Татьяна Михайловна", 50, "Женский", 3500, 25);
const director = new Director("Виктор Петрович", 55, "Мужской", 3500, 30);

const schoolStaff = [
    ...students,
    ...teachers,
    dean,
    director
];

console.log("===== Имена и позиции всех людей в школе =====\n");

students.forEach(student => {
    console.log(`${student.name} - Студент`);
});

teachers.forEach(teacher => {
    console.log(`${teacher.name} - Учитель`);
});

console.log(`${dean.name} - Декан`);
console.log(`${director.name} - Директор школы`);

console.log("\n===== Подробная информация =====\n");
schoolStaff.forEach(person => {
    console.log(person.getInfo());
});

console.log(`\n===== Зарплата директора школы =====`);
console.log(`${director.name} получает ${director.getSalary()}$ в месяц и ${director.getAnnualBonus()}$ годового бонуса`);
console.log(`Годовой доход директора: ${director.getTotalCompensation()}$`);

let valedictorian = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].gpa > valedictorian.gpa) {
        valedictorian = students[i];
    }
}

console.log(`\n===== Лучший студент школы (Valedictorian) =====`);
console.log(`${valedictorian.name} с GPA: ${valedictorian.gpa}`);