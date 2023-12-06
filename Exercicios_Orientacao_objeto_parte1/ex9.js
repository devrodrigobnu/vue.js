// 2.	Class Book.
// a.	Create a class called Book to model information about a book.
// b.	Attributes: title, author, year_publication, genres, reserved
// c.	Métodos: showDetails, reserve and unreserve.


// Create a class called Book
class Book {

    // Created constructor
    constructor (title, author, publication_year, genres) {
    this.title = title;
    this.author = author;
    this.publication_year = publication_year;
    this.genres = genres;
    this.reserved = false;
   }
   // Methods to show details about books
   showDetails (){
    return {
        title: this.title,
        author: this.author,
        publication_year: this.publication_year,
        genres: this.genres,
        reserved: this.reserved
    }
   }
   // Methods to reserve a book
   reserve() {
    if (!this.reserved) {
      this.reserved = true;
      console.log(`Book ${this.title} successfully reserved`);
    } else {
      console.log(`Book "${this.title}" is already reserved or is not available to reserve.`);
    }
   }
   // Methods to unreserve a book
   unreserve() {
    if (!this.reserved) {
        this.reserved = false;
        console.log(`Reserve of book ${this.title} is cancelled`)
    } else {
        console.log(`Book "${this.title}" is not reserved`)
    }
   }
}

// Adicionado Livro
const hp_1 = new Book('Harry Potter e a Pedra Filosofal', 'Joanne Kathleen Rowling', '26/11/1997', 'Romance, Literatura infantil, Literatura fantástica, Alta fantasia')

// implemented tests about the code: showDetails, reserve() and unreserve()
// console.log(hp_1.showDetails())
// hp_1.reserve()
// hp_1.unreserve()


const bookList = []

while (true) {
    const choice = prompt('1-Add a book\n2-View registered books\n3-Exit');
    if (choice === '1') {
        const title = prompt('TITLE:');
        const author = prompt('AUTHOR:');
        const year_publication = prompt('YEAR OF PUBLICATION:');
        const genres = prompt('GENRES:');
        const book = new Book(title, author, year_publication, genres);
        bookList.push(book);
      } else if (choice === '2') {
        bookList.forEach(Book => console.log(Book.showDetails()));
    } else if (choice === '3') {
        break;
    }
}

