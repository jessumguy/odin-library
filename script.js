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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`)
    myLibrary.push(newBook)
}

const bookshelfTable = document.querySelector("#bookshelf_table");


function renderPage() {
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
