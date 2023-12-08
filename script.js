let initialPageRender = false
let rowNo = 0


// Books stored in myLibrary Array

let myLibrary = [
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
    console.log("Added New Book!")
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

// Remove row from table

function deleteRow(rowNo) {
    const tableRow = document.getElementById(rowNo);
    tableRow.parentNode.removeChild(tableRow);
    console.log("Deleted Book from Row!")
    
    removeBookFromMyLibraryArray();
}

// Remove Book from myLibrary Array https://stackoverflow.com/questions/66728040/how-to-associate-object-with-dom-element-in-plain-javascript

function removeBookFromMyLibraryArray(i) {
    myLibrary.splice(myLibrary.indexOf(myLibrary[i]), 1);
    console.log(myLibrary);
    console.log(i)
}

// Renders the Page

function renderPage() {
    // bookshelfTable.innerHTML = "";

    if (initialPageRender === false) {
        myLibrary.forEach((book) => {
            const defaultBooks = 
            `
                <tr id="row-${rowNo}">
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td>${book.read}</td>
                    <td><button id="edit-book-row">Edit</button></td>
                    <td><button id="delete-book-row-${rowNo}" onclick="deleteRow('row-${rowNo}')">Delete</button></td>
                </tr>
            `;
            bookshelfTable.insertAdjacentHTML("beforeend", defaultBooks);

            initialPageRender = true
            rowNo++
        });

    } else {
        const newBookToBeAdded = 
        `
            <tr id="row-${rowNo}">
                <td>${bookTitle.value}</td>
                <td>${bookAuthor.value}</td>
                <td>${bookPages.value}</td>
                <td>${bookReadStatus.value}</td>
                <td><button id="edit-book-row">Edit</button></td>
                <td><button id="delete-book-row-${rowNo}" onclick="deleteRow('row-${rowNo}')">Delete</button></td>
            </tr>
        `;
        bookshelfTable.insertAdjacentHTML("beforeend", newBookToBeAdded);

        rowNo++
    }
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
