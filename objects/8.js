const library = [
    // Стивен Кинг
    { isbn: "111-1", name: "Книга 1", author: "Стивен Кинг", year: 2000, genre: "Ужасы", pages: 300, popularity: 5, firstSentence: "Жили-были..." },
    { isbn: "111-2", name: "Книга 2", author: "Стивен Кинг", year: 2001, genre: "Ужасы", pages: 350, popularity: 4, firstSentence: "Однажды..." },
    { isbn: "111-3", name: "Книга 3", author: "Стивен Кинг", year: 2002, genre: "Ужасы", pages: 400, popularity: 5, firstSentence: "В темном-темном лесу..." },
    { isbn: "111-4", name: "Книга 4", author: "Стивен Кинг", year: 2003, genre: "Ужасы", pages: 250, popularity: 3, firstSentence: "Шел дождь..." },
    { isbn: "111-5", name: "Книга 5", author: "Стивен Кинг", year: 2004, genre: "Ужасы", pages: 320, popularity: 4, firstSentence: "Солнце садилось..." },
    // Марк Твен
    { isbn: "222-1", name: "Книга 1", author: "Марк Твен", year: 2000, genre: "Приключения", pages: 280, popularity: 4, firstSentence: "Жили-были..." },
    { isbn: "222-2", name: "Книга 2", author: "Марк Твен", year: 2001, genre: "Приключения", pages: 310, popularity: 5, firstSentence: "Однажды..." },
    { isbn: "222-3", name: "Книга 3", author: "Марк Твен", year: 2002, genre: "Приключения", pages: 290, popularity: 3, firstSentence: "В темном-темном лесу..." },
    { isbn: "222-4", name: "Книга 4", author: "Марк Твен", year: 2003, genre: "Приключения", pages: 270, popularity: 4, firstSentence: "Шел дождь..." },
    { isbn: "222-5", name: "Книга 5", author: "Марк Твен", year: 2004, genre: "Приключения", pages: 330, popularity: 5, firstSentence: "Солнце садилось..." },
    // Пушкин
    { isbn: "333-1", name: "Книга 1", author: "Пушкин", year: 2000, genre: "Классика", pages: 260, popularity: 5, firstSentence: "Жили-были..." },
    { isbn: "333-2", name: "Книга 2", author: "Пушкин", year: 2001, genre: "Классика", pages: 340, popularity: 3, firstSentence: "Однажды..." },
    { isbn: "333-3", name: "Книга 3", author: "Пушкин", year: 2002, genre: "Классика", pages: 290, popularity: 4, firstSentence: "В темном-темном лесу..." },
    { isbn: "333-4", name: "Книга 4", author: "Пушкин", year: 2003, genre: "Классика", pages: 310, popularity: 5, firstSentence: "Шел дождь..." },
    { isbn: "333-5", name: "Книга 5", author: "Пушкин", year: 2004, genre: "Классика", pages: 270, popularity: 3, firstSentence: "Солнце садилось..." }
  ];
  
  // a. Выведите в console названия всех книг
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].name);
  }
  
  // b. Выведите в console имена самой популярной книги каждого из авторов
  let kingBest = library[0];
  let twainBest = library[5];
  let pushkinBest = library[10];
  
  for (let i = 0; i < library.length; i++) {
    if (library[i].author === "Стивен Кинг" && library[i].popularity > kingBest.popularity) {
      kingBest = library[i];
    }
    if (library[i].author === "Марк Твен" && library[i].popularity > twainBest.popularity) {
      twainBest = library[i];
    }
    if (library[i].author === "Пушкин" && library[i].popularity > pushkinBest.popularity) {
      pushkinBest = library[i];
    }
  }
  
  console.log(kingBest.author + ": " + kingBest.name + " - " + kingBest.popularity);
  console.log(twainBest.author + ": " + twainBest.name + " - " + twainBest.popularity);
  console.log(pushkinBest.author + ": " + pushkinBest.name + " - " + pushkinBest.popularity);
  
  // c. Отсортируйте библиотеку по году выпуска книг
  library.sort(function(a, b) {
    return a.year - b.year;
  });
  
  console.log(library);