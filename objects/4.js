const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Цикл for...in перебирает ключи (имена свойств) объекта
for (let key in person) {
    console.log(key); // выведет: name, затем age, затем city
}

// Если бы мы хотели вывести значения, нужно было бы использовать person[key]
for (let key in person) {
    console.log(person[key]); // выведет: John, затем 30, затем New York
}