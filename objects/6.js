var developers = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
    { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
    { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
    { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
    { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
    { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
    { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
  ];
  
  // Проверяем, есть ли хотя бы один разработчик с языком "Javascript"
  let hasJavaScript = false;
  
  for (let i = 0; i < developers.length; i++) {
    if (developers[i].language === 'Javascript') {
      hasJavaScript = true;
      break;
    }
  }
  
  console.log(hasJavaScript ? "Да" : "Нет"); // "Да"