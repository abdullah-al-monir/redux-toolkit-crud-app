import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
  books: [
    {
      id: 1,
      title: "Bangladesh",
      author: "Joalski",
    },
    {
      id: 2,
      title: "Jonglee",
      author: "Moalski",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      localStorage.setItem("books", JSON.stringify(state.books));
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;

      state.books = state.books.filter((book) => book.id !== id);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
