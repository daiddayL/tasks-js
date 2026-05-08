class Book {
    constructor(isbn, name, author, year, genre, pages, popularity, firstSentence) {
        this.isbn = isbn;
        this.name = name;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.popularity = popularity;
        this.firstSentence = firstSentence;
    }
}

class Library {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    getAllTitles() {
        this.books.forEach(book => console.log(book.name));
    }

    getMostPopularBookByAuthor() {
        const authorsMap = new Map();
        
        this.books.forEach(book => {
            if (!authorsMap.has(book.author) || book.popularity > authorsMap.get(book.author).popularity) {
                authorsMap.set(book.author, book);
            }
        });
        
        authorsMap.forEach(book => {
            console.log(`${book.author}: "${book.name}" - ${book.popularity}`);
        });
    }

    sortByYear() {
        return [...this.books].sort((a, b) => a.year - b.year);
    }

    displaySortedByYear() {
        const sorted = this.sortByYear();
        console.log(sorted);
        return sorted;
    }
}

const libraryData = [
    new Book("111-1", "Книга 1", "Стивен Кинг", 2000, "Ужасы", 300, 5, "Жили-были..."),
    new Book("111-2", "Книга 2", "Стивен Кинг", 2001, "Ужасы", 350, 4, "Однажды..."),
    new Book("111-3", "Книга 3", "Стивен Кинг", 2002, "Ужасы", 400, 5, "В темном-темном лесу..."),
    new Book("111-4", "Книга 4", "Стивен Кинг", 2003, "Ужасы", 250, 3, "Шел дождь..."),
    new Book("111-5", "Книга 5", "Стивен Кинг", 2004, "Ужасы", 320, 4, "Солнце садилось..."),
    new Book("222-1", "Книга 1", "Марк Твен", 2000, "Приключения", 280, 4, "Жили-были..."),
    new Book("222-2", "Книга 2", "Марк Твен", 2001, "Приключения", 310, 5, "Однажды..."),
    new Book("222-3", "Книга 3", "Марк Твен", 2002, "Приключения", 290, 3, "В темном-темном лесу..."),
    new Book("222-4", "Книга 4", "Марк Твен", 2003, "Приключения", 270, 4, "Шел дождь..."),
    new Book("222-5", "Книга 5", "Марк Твен", 2004, "Приключения", 330, 5, "Солнце садилось..."),
    new Book("333-1", "Книга 1", "Пушкин", 2000, "Классика", 260, 5, "Жили-были..."),
    new Book("333-2", "Книга 2", "Пушкин", 2001, "Классика", 340, 3, "Однажды..."),
    new Book("333-3", "Книга 3", "Пушкин", 2002, "Классика", 290, 4, "В темном-темном лесу..."),
    new Book("333-4", "Книга 4", "Пушкин", 2003, "Классика", 310, 5, "Шел дождь..."),
    new Book("333-5", "Книга 5", "Пушкин", 2004, "Классика", 270, 3, "Солнце садилось...")
];

const myLibrary = new Library(libraryData);

console.log("a. Все названия книг:");
myLibrary.getAllTitles();

console.log("\nb. Самая популярная книга каждого автора:");
myLibrary.getMostPopularBookByAuthor();

console.log("\nc. Библиотека отсортированная по году выпуска:");
myLibrary.displaySortedByYear();