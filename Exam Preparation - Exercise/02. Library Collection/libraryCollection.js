class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if(this.capacity === this.books.length) {
            throw Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName, 
            bookAuthor, 
            paid: false});
        
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        for (const book of this.books) {
            if(book.bookName === bookName) {
                if(book.paid === true) {
                    throw Error(`${bookName} has already been paid.`)
                } else {
                    book.paid = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }
        throw Error(`${bookName} is not in the collection.`);
    }

    removeBook(bookName) {
        for (let index = 0; index < this.books.length; index++) {
            const book = this.books[index];
            if(book.bookName === bookName) {
                if(!book.paid) {
                    throw Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    this.books.splice(index, 1);
                    return `${bookName} remove from the collection.`
                }
            }
        }
        throw Error(`The book, you're looking for, is not found.`);
    }

    getStatistics(bookAuthor) {
        if(bookAuthor === undefined) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (const book of sortedBooks) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`;
            }
            return result;
        }

        let result = [];
        for (const book of this.books) {
            if(book.bookAuthor == bookAuthor) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? 'Has Paid' : 'Not Paid'}.`)
            }
            return result.join("\n");
        }

        throw Error(`${bookAuthor} is not in the collection.`)
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'MarcelProust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

const library2 = new LibraryCollection(2)
library2.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library2.payBook('In Search of Lost Time'));
console.log(library2.payBook('Don Quixote'));

// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.