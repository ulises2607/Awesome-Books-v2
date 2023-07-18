import currentTime from './modules/JS/books/date.js';
import { addBook, removeBook } from './modules/JS/books/managing-books.js';

const pageLinks = document.querySelectorAll('.link-page');
const sections = document.querySelectorAll('section');

// Hide all sections except the first on page load
const pages = () => {
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });

  // Add a click event to each page link
  pageLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Show the corresponding section and hide the others
      sections.forEach((section, sectionIndex) => {
        if (sectionIndex === index) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
};

const dateTime = () => {
  const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

  const elementTime = document.getElementById('current-date');
  elementTime.innerText = formatedTime;
};

// Managing books
addBook();
removeBook();

//  pages

pages();

// Date
dateTime();
