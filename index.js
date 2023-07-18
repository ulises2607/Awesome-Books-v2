import currentTime from './modules/date.js';
import { addBook } from './modules/addBook.js';
import { pages } from './modules/pages.js';
import { BookStorage } from './modules/managing-books.js';
const pageLinks = document.querySelectorAll('.link-page');
const sections = document.querySelectorAll('section');
const form = document.querySelector('.add-form');
const bookList = document.querySelector('.book-list');

export const storage = new BookStorage();
storage.loadData();



const removeBook = () => {
  bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const id = parseInt(event.target.dataset.id, 10);
      storage.removeData(id);
    }
  });
};

// Managing books
addBook();
removeBook();

// pages

pages(sections,pageLinks);

// Date
const dateTime = () => {
  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  const elementTime = document.getElementById('current-date');
  elementTime.innerText = formatedTime;
};
dateTime();

// charge
window.onload = storage.displayData();