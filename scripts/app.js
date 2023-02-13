const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 218 },
  { title: '1984', author: 'George Orwell', pages: 328 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279 }
];

const library = {
  name: 'My Library',
  books: books,
  addBook: function(book) {
    this.books.push(book);
  },
  removeBook: function(book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  },
  getBooksByAuthor: function(author) {
    return this.books.filter(book => book.author === author);
  }
};

const bookTable = document.getElementById('book-table');
const addBookButton = document.getElementById('add-book-button');

const renderTable = () => {
  bookTable.innerHTML = '';
  const tableHeader = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Actions</th>
    </tr>`;
  bookTable.innerHTML = tableHeader;
  library.books.forEach(book => {
    const tableRow = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>
          <button class="remove-book-button">Remove</button>
        </td>
      </tr>
    `;
    bookTable.innerHTML += tableRow;
  });
};

const addBook = () => {
  const title = prompt('Enter the title of the book:');
  const author = prompt('Enter the author of the book:');
  const pages = prompt('Enter the number of pages in the book:');
  library.addBook({ title, author, pages });
  renderTable();
};

const removeBook = event => {
  const targetRow = event.target.parentElement.parentElement;
  const title = targetRow.children[0].innerText;
  const author = targetRow.children[1].innerText;
  const pages = targetRow.children[2].innerText;
  library.removeBook({ title, author, pages });
  renderTable();
};

addBookButton.addEventListener('click', addBook);
bookTable.addEventListener('click', event => {
  if (event.target.classList.contains('remove-book-button')) {
    removeBook(event);
  }
});

renderTable();
