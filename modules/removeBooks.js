import { storage } from "../index.js";
const bookList = document.querySelector('.book-list');

export const removeBook = () => {
    bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const id = parseInt(event.target.dataset.id, 10);
        storage.removeData(id);
      }
    });
  };