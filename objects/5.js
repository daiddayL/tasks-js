const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
    sayHello: function() {
      // this ссылается на объект person, поэтому this.name = "John", this.age = 30
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.sayHello(); // "Hello, my name is John and I am 30 years old."