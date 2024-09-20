import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productSlice.js";

import wishlistReducer from "./wishlistSlice.js"; // if you want to add wishlist feature

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
