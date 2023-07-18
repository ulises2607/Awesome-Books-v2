import currentTime from './modules/date.js';
import { addBook } from './modules/addBook.js';
import { removeBook } from './modules/removeBooks.js';
import { pages } from './modules/pages.js';
import { BookStorage } from './modules/managing-books.js';

const pageLinks = document.querySelectorAll('.link-page');
const sections = document.querySelectorAll('section');

const storage = new BookStorage();
export default storage;
storage.loadData();

// Managing books
addBook(storage);
removeBook(storage);

// pages

pages(sections, pageLinks);

// Date
const dateTime = () => {
  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  const elementTime = document.getElementById('current-date');
  elementTime.innerText = formatedTime;
};
dateTime();

// charge
window.onload = storage.displayData();