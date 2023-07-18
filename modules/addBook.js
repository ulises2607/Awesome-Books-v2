const form = document.querySelector('.add-form');
import { storage } from "../index.js";

export const addBook = () => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.querySelector('#title');
      const author = document.querySelector('#author');
  
      storage.createBook(title.value, author.value);
      storage.displayData();
      console.log(title.value, author.value);
    });
  };