// const monthNumber = 1;
// const result3 = "";
const monthNumber = 1;
let result3 = ""; // const нельзя переназначить, нужно let

switch (monthNumber) {
     // case "1":
     case 1: // "1" это строка, а monthNumber число 1
          result3 = "January";
          break;
     case "2":
          result3 = "February";
          break;
     // case "3":
     //      result3 = "March";
     // case "4":
     //      result3 = "April";
     //      break;
     case 3:
          result3 = "March";
          break; // отсутствовал break, проваливалось в April
     case 4:
          result3 = "April";
          break;
     // case 5:
     //      results3 = "May";
     //      break;
     case 5:
          result3 = "May"; // results3 вместо result3
          break;
     // case 6
     //      result3 == "June";
     //      break;
     case 6: // отсутствовало двоеточие после case 6
          result3 = "June"; // == вместо =
          break;
}

console.log(result3); // "January"