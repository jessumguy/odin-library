if (typeof document !== 'undefined') {
    const bookshelfTable = document.querySelector("#bookshelf_table");
    

}



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

function renderPage() {
    myLibrary.forEach((book) => {
        const bookHTML = 
        `
            <tr>
                <td>${book.title}</td>
            </tr>
        `;
        bookshelfTable.insertAdjacentHTML("afterend", bookHTML);
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
