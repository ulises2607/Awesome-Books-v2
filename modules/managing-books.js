const form = document.querySelector('.add-form');
const bookList = document.querySelector('.book-list');

class BookStorage {
    data = [];

    addData(book) {
      this.data.push(book);
      this.saveData();
    }

    removeData(id) {
      this.data = this.data.filter((book) => book.id !== id);
      this.saveData();
      this.displayData();
    }

    displayData() {
      let idBook = 0;
      bookList.innerHTML = '';
      this.data.forEach((element) => {
        element.id = idBook;
        bookList.innerHTML += `<li class="list-item">
                                    <div class="title-container">
                                    <p id="titlep">${element.bookTitle}</p>
                                    <p id="authorp">by ${element.bookAuthor}</p>
                                    </div>
                                    <div class= "button-container">
                                    <button class="delete" data-id="${element.id}">Remove</button>
                                    </div>
                                    </li>
    `;
        idBook += 1;
      });
    }

    createBook(tit, bAuth) {
      const book = {
        id: 0,
        bookTitle: tit,
        bookAuthor: bAuth,
      };
      this.addData(book);
    }

    saveData() {
      localStorage.setItem('books', JSON.stringify(this.data));
    }

    loadData() {
      const savedData = localStorage.getItem('books');
      if (savedData) {
        this.data = JSON.parse(savedData);
      }
    }
}

const storage = new BookStorage();
storage.loadData();

export const addBook = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');

    storage.createBook(title.value, author.value);
    storage.displayData();
  });
};

export const removeBook = () => {
  bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const id = parseInt(event.target.dataset.id, 10);
      storage.removeData(id);
    }
  });
};

window.onload = storage.displayData();