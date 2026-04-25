function describeAnimal(animal) {
    return "This " + animal.color + " " + animal.name + " has " + animal.legs + " legs.";
  }
  
  const animal = {name: "dog", legs: 4, color: "yellow"};
  console.log(describeAnimal(animal));