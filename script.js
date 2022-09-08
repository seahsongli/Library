let myLibrary = [];

const container = document.querySelector('.container');

const shelf = document.querySelector('.shelf');



// const buttonAddBook = document.createElement("div");
// buttonAddBook.innerHTML = "Add Book";

const buttonAddBook = document.getElementById("button");
console.log(buttonAddBook);

function Book(title,author,numberOfPages,readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    for(i=0;i<myLibrary.length;i++){
        const booksInShelf = document.createElement("div");
        booksInShelf.classList.add("card");
        booksInShelf.innerHTML = `${newBook.title} ${newBook.author} ${newBook.numberOfPages} ${newBook.readingStatus}`;
        container.append(booksInShelf);
    }
}




buttonAddBook.addEventListener("click", ()=>{
    let title = window.prompt("What is the title of the book you want to add?");
    let author = window.prompt("Who is the author of the book you want to add?");
    let numberOfPages = window.prompt("How many pages are there in the book?");
    let readingStatus= window.prompt("Have you read this book?");
    const newBook = new Book (title,author,numberOfPages,readingStatus);
    console.log(newBook);
    addBookToLibrary(newBook);
    
})


shelf.append(buttonAddBook);





