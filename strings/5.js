let dayNumber = 3;
let dayName;

switch (dayNumber) {
     case 1:
          dayName = "Пон";
          break;
     case 2:
          dayName = "Вт";
          break;
     case 3:
          dayName = "Ср";
          break;
     case 4:
          dayName = "Чт";
          break;
     case 5:
          dayName = "Пт";
          break;
     case 6:
          dayName = "Сб";
          break;
     case 7:
          dayName = "Вс";
          break;
     default:
          dayName = "Ошибка";
}
console.log(dayName);