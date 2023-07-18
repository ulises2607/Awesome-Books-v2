const bookList = document.querySelector('.book-list');

export const removeBook = (st) => {
  bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const id = parseInt(event.target.dataset.id, 10);
      st.removeData(id);
    }
  });
};

export default removeBook;