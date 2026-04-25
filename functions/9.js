function getPrice(size) {
    if (size === "small") return 3.5;
    if (size === "medium") return 4.5;
    return 5.5;
  }
  
  function getRecipe(type) {
    if (type === "Латте") return "эспрессо + молоко + пенка";
    if (type === "Капучино") return "эспрессо + молоко + густая пенка";
    return "эспрессо + вода";
  }
  
  function makeCoffee(coffeeType, size) {
    const price = getPrice(size);
    const recipe = getRecipe(coffeeType);
    
    console.log("Кофе: " + coffeeType);
    console.log("Размер: " + size);
    console.log("Рецепт: " + recipe);
    console.log("Стоимость: $" + price);
  }
  
  makeCoffee("Латте", "medium");
  makeCoffee("Американо", "large");