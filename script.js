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
const bookTitleInput = document.querySelector("#book_title_input");
const bookAuthorInput = document.querySelector("#book_author_input");
const bookPagesInput = document.querySelector("#book_pages_input");
const bookReadStatusInput = document.querySelector("#book_read_input");
const addNewBookButton = document.querySelector("#add_new_book_button").addEventListener("click", (e) => {
    addBookToLibrary();
    renderPage();
});
const booksOwnedCounter = document.querySelector("#books_owned_count");
const booksReadCounter = document.querySelector("#books_read_count");

function checkBooksReadCount() {
    const booksReadCount = myLibrary.reduce((count, { read: key }) => 
    (count[key] = (count[key] || 0) + 1, count), {});

    // console.log(booksReadCount)
    return booksReadCount.Yes !== undefined ? booksReadCount.Yes : 0;
}

// Books Object

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Creates new Book Object and adds it to myLibrary Array

function addBookToLibrary() {
    const newBook = new Book(`${bookTitleInput.value}`, `${bookAuthorInput.value}`, `${bookPagesInput.value}`, `${bookReadStatusInput.value}`)
    myLibrary.push(newBook)
    
    console.log(myLibrary);
    console.log(`Added Book: ${bookTitleInput.value}`);

    return myLibrary;
}

// Remove row from table

function deleteRow(rowNo) {
    const tableRow = document.getElementById(rowNo);
    tableRow.parentNode.remove();

    const bookTitle = tableRow.getAttribute("data-title");
    console.log(`Deleted Book: ${tableRow.getAttribute("data-title")}`)
    
    myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
    booksOwnedCounter.innerText = myLibrary.length;
    booksReadCounter.innerText = checkBooksReadCount();
}

// Renders the Page

function renderPage() {
    if (initialPageRender === false) {
        myLibrary.forEach((book) => {
            const defaultBooks = 
            `
                <tr id="row-${rowNo}" data-title="${book.title}">
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
            <tr id="row-${rowNo}" data-title="${bookTitleInput.value}">
                <td>${bookTitleInput.value}</td>
                <td>${bookAuthorInput.value}</td>
                <td>${bookPagesInput.value}</td>
                <td>${bookReadStatusInput.value}</td>
                <td><button id="edit-book-row">Edit</button></td>
                <td><button id="delete-book-row-${rowNo}" onclick="deleteRow('row-${rowNo}')">Delete</button></td>
            </tr>
        `;
        bookshelfTable.insertAdjacentHTML("beforeend", newBookToBeAdded);

        rowNo++
    }

    booksOwnedCounter.innerText = myLibrary.length;
    booksReadCounter.innerText = checkBooksReadCount()
}

renderPage();

console.log(myLibrary);
