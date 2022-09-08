let myLibrary = [];

const container = document.querySelector('.container');

const shelf = document.querySelector('.shelf');

const cards = document.querySelector('.cards');

// const buttonAddBook = document.createElement("div");
// buttonAddBook.innerHTML = "Add Book";

const buttonAddBook = document.getElementById("addButton");
console.log(buttonAddBook);

function Book(title,author,numberOfPages,readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    const booksInShelf = document.createElement("div");
    const removeButton = document.createElement("button");
    const readButton = document.createElement("button");
    booksInShelf.classList.add("card");
    booksInShelf.innerHTML = `Title:${newBook.title} Author:${newBook.author} Pages:${newBook.numberOfPages} Read before?: ${newBook.readingStatus}`;
    cards.append(booksInShelf);

    //For Remove button
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("removeButton");
    removeButton.addEventListener("click", (e) =>{
        booksInShelf.remove();
    })
    booksInShelf.append(removeButton);

    //For read button
    if (newBook.readingStatus === true){
        readButton.innerHTML = "Read";
        readButton.classList.toggle("inactive");
    }
    else{
        readButton.innerHTML = "Not read";
    }

       
    readButton.addEventListener("click", () =>{
        readButton.classList.toggle("inactive");
        if (readButton.innerHTML = "Read"){
            readButton.innerHTML= "Not read";
        }
        else if (readButton.innerHTML = "Not read"){
            readButton.innerHTML = "Read";
        }
            
        })
    booksInShelf.append(readButton);

 

}


const body = document.querySelector("body");
const beforePopUp = document.getElementById("beforePopUp");

buttonAddBook.addEventListener("click", ()=>{
    // body.style.display = "none";
    beforePopUp.classList.toggle("inactive");
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.classList.add("form");

    // Create title for form
    var title = document.createElement("div");
    title.innerHTML = "Add New Book";
    title.classList.add("formTitle")
    form.append(title);
    // Create an input element for title of book
    var titleOfBook = document.createElement("input");
    titleOfBook.setAttribute("type", "text");
    titleOfBook.setAttribute("name", "titleOfBook");
    titleOfBook.setAttribute("placeholder", "Title");

    // Create an input element for author of book
    var authorOfBook = document.createElement("input");
    authorOfBook.setAttribute("type", "text");
    authorOfBook.setAttribute("name", "authorOfBook");
    authorOfBook.setAttribute("placeholder", "Author");

    // Create an input element for pages of book
    var numberOfPages = document.createElement("input");
    numberOfPages.setAttribute("type", "number");
    numberOfPages.setAttribute("name", "pages");
    numberOfPages.setAttribute("placeholder", "Pages");


    var readingQuestion = document.createElement("div");
    readingQuestion.innerHTML = "Have you read it?";
    var readingStatus = document.createElement("input");
    readingStatus.setAttribute("type", "checkbox");
    readingStatus.setAttribute("name", "readingStatus");

    form.append(titleOfBook);
    form.append(authorOfBook);
    form.append(numberOfPages);
    readingQuestion.append(readingStatus);
    readingQuestion.classList.add ("readingQuestion");
    form.append(readingQuestion);
    
    // let title = window.prompt("What is the title of the book you want to add?");
    // let author = window.prompt("Who is the author of the book you want to add?");
    // let numberOfPages = window.prompt("How many pages are there in the book?");
    // let readingStatus= window.prompt("Have you read this book?");
    var submitButton = document.createElement("button");
    submitButton.classList.add("submitButton")
    submitButton.innerHTML = "Submit";
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit")
    form.append(submitButton);
    container.append(form);

   


    submitButton.addEventListener("click", (e) =>{
        beforePopUp.classList.toggle("inactive");
        e.preventDefault();
        const newBook = new Book(form.elements["titleOfBook"].value ,form.elements["authorOfBook"].value, form.elements["pages"].
        value, form.elements["readingStatus"].checked);
        addBookToLibrary(newBook);
        form.remove();
        
    })
   
    
    
    
})


shelf.append(buttonAddBook);





