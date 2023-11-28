// Books stored in myLibrary Array

const myLibrary = [
    { 
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 310,
        read: "No"
    },
    { title: "How to win Friends and Influence People", author: "Dale Carnegie", pages: 276, read: "No" },
    { title: "One Man's View of the World", author: "Lee Kwan Yew", pages: 348, read: "Yes" }
];

// HTML Elements

const bookshelfTable = document.querySelector("#bookshelf_table");
const bookTitle = document.querySelector("#book_title");
const bookAuthor = document.querySelector("#book_author");
const bookPages = document.querySelector("#book_pages");
const bookReadStatus = document.querySelector("#book_read");
const addNewBookButton = document.querySelector("#add_new_book_button").addEventListener("click", (e) => {
    addBookToLibrary();
    renderPage();
    console.log('Add New Book')
});

// Book Object

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Creates new Book Object and adds it to myLibrary Array 

function addBookToLibrary() {
    const newBook = new Book(`${bookTitle.value}`, `${bookAuthor.value}`, `${bookPages.value}`, `${bookReadStatus.value}`)
    myLibrary.push(newBook)
}

// Renders the Page

function renderPage() {
    bookshelfTable.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookHTML = 
        `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td><button id="edit-book-row">Edit</button></td>
                <td><button id="delete-book-row">Delete</button></td>
            </tr>
        `;
        bookshelfTable.insertAdjacentHTML("beforeend", bookHTML);
    });
}

renderPage();

console.log(myLibrary);

 
// console.log(myLibrary);
// let anotherBook = {title: 'Book1', author: 'jim', pages: 5, read: 'yes'}
// myLibrary.push(anotherBook)
// console.log(myLibrary)

// console.log(myLibrary[1].title)

// myLibrary.push(new Book('Book 999', 'BOB', 10, 'ok'))
// console.log(myLibrary)

// myLibrary.pop()
// myLibrary.shift()
// console.log(myLibrary)
// console.log(myLibrary[0].author)
