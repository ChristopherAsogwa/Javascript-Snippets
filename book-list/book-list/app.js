// Fix the Store prototype methods[displayBook, addBook, deleteBook]
// Book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {};

// add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // create an element
  const row = document.createElement('tr');
  
  // create inner html 
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

// clear books 
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Store Constructor 
// Store for Local Storage 

function Store () {}

Store.prototype.getBooks = function() {
  let books;
  if(localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

Store.prototype.displayBooks = function() {
  //Instantiate store 
  const store = new Store();

  const books = store.getBooks();

  books.forEach(function(book){
    const ui = new UI;
    ui.addBookToList(book);
  })
}

Store.prototype.addBook = function(book) {
  //Instantiate Store
  const store = new Store();

  const books = store.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

Store.prototype.deleteBook = function(isbn) {
  // Instantiate Store 
  const store = new Store();
  const books = store.getBooks();
  books.forEach(function(book, index){
    if(book.isbn === isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
}

// Show Alert 
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');

  // add class
  div.className = `alert ${className}`;

  // append text
  div.appendChild(document.createTextNode(message));

  // diquery container 
  const container = document.querySelector('.container');

  // query book form
  const form = document.querySelector('#book-form');

  // insert div
  container.insertBefore(div, form);

  // Timeout in 3 seconds 
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000);
}

//delete book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
} 
const store = new Store(); 
// Load event to display books
document.addEventListener('DOMContentLoaded', store.displayBooks)
// Add EventListener 
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values 
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // instantiate UI
  const ui = new UI();

  // instantiate store
  const store = new Store();
  
  // Validate 
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error'); 

    // clear fields
    ui.clearFields();
  } else {

    // add Book to List
    ui.addBookToList(book);

    //Instantiate Store 
    const store = new Store();

    //add to local storage
    store.addBook(book);

    // show alert: success 
    ui.showAlert('Book added', 'success')
    // clear fields 
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
  // instantiate ui
  const ui = new UI();
  
  // delete book
  ui.deleteBook(e.target);

  //Instantiate Store
  const store = new Store();

  store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
  // show alert 
  ui.showAlert('book deleted', 'success');
  e.preventDefault();
});