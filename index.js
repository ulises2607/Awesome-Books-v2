import currentTime from './modules/date.js';
import { addBook, removeBook } from './modules/managing-books.js';
import { pages } from './modules/pages.js';
const pageLinks = document.querySelectorAll('.link-page');
const sections = document.querySelectorAll('section');

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
