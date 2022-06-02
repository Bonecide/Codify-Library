import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice";
import wishListSlice from "./wishListSlice";


export const store = configureStore({
  reducer: {
    book : booksSlice,
    wishlist : wishListSlice,
  }
})