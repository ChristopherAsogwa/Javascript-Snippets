class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');

    // add class
    div.className = `alert ${className}`;

    // append text
    div.appendChild(document.createTextNode(message));

    // query container 
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

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

// Local Storage Class 
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    
    books.forEach(function(book) {
      const ui = new UI;
      
      // add book to ui
      ui.addBookToList(book);
    })
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Load event to display book
document.addEventListener('DOMContentLoaded', Store.displayBooks);
// Add EventListener for book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values 
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // instantiate UI
  const ui = new UI();
  
  // Validate 
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error'); 

    // clear fields
    ui.clearFields();
  } else {
    // add Book to List
    ui.addBookToList(book);

    // Add to LS
    Store.addBook(book);

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

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // show alert 
  ui.showAlert('book deleted', 'success');
  e.preventDefault();
});