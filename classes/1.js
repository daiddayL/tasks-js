class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(writer) {
        this._author = writer;
    }
}

const song = new Song("Bohemian Rhapsody", "Freddie Mercury");
console.log(song.author);