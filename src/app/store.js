import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/BooksSlice";
const preloadedState = {
  books: JSON.parse(localStorage.getItem("books")) || [],
};
const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
  preloadedState,
});

export default store;
