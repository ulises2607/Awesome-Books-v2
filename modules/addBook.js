const form = document.querySelector('.add-form');

export const addBook = (st) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');

    st.createBook(title.value, author.value);
    st.displayData();
  });
};

export default addBook;