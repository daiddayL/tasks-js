// a. Создайте объект room
const room = {
    height: 3,
    tv: "samsung",
    big: true
  };
  
  // b. Выведите в console все параметры объекта room по очереди
  console.log(room.height);
  console.log(room.tv);
  console.log(room.big);
  
  // c. Выведите в console тип данных параметра big
  console.log(typeof room.big);
  
  // d. Выведите в console количество символов в строке параметра tv
  console.log(room.tv.length);
  
  // e. Выведите в console результат расчёта: длина строки параметра tv минус 1
  console.log(room.tv.length - 1);
  
  // f. Поменяйте samsung на все заглавные буквы и выведите в console
  console.log(room.tv.toUpperCase());
  
  // g. Замените samsung на LG в нашем объекте room
  room.tv = "LG";
  console.log(room.tv);
  
  // h. Добавьте в наш объект room ещё одну пару ключ-значение: furniture
  room.furniture = ["table", "chair", "sofa"];
  
  // i. выведите chair в console
  console.log(room.furniture[1]);
  
  // j. Удалите из нашего объекта room параметр big
  delete room.big;
  
  console.log(room);