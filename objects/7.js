const desserts = [
    { name: "Пирожное", price: 65 },
    { name: "Мороженое", price: 35 },
    { name: "Торт Наполеон", price: 250 },
    { name: "Песочное Печенье", price: 50 },
    { name: "Пудинг", price: 80 },
    { name: "Фруктовый Тарт", price: 40 },
    { name: "Желе Земляничное", price: 40 },
    { name: "Вафли Шоколадные", price: 36 },
    { name: "Булочка с Изюмом", price: 28 }
  ];
  
  let cheapest = desserts[0];
  let mostExpensive = desserts[0];
  
  for (let i = 1; i < desserts.length; i++) {
    if (desserts[i].price < cheapest.price) {
      cheapest = desserts[i];
    }
    if (desserts[i].price > mostExpensive.price) {
      mostExpensive = desserts[i];
    }
  }
  
  console.log("Самый дешевый десерт: " + cheapest.name + " - " + cheapest.price + " руб.");
  console.log("Самый дорогой десерт: " + mostExpensive.name + " - " + mostExpensive.price + " руб.");