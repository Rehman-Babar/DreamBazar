// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, quantity, totalPrice } = action.payload;

      // Check if the item with the same ID already exists in the cart
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item exists, update its quantity and total price
        existingItem.quantity += quantity;
        existingItem.totalPrice += totalPrice;
      } else {
        // If the item doesn't exist, add it as a new product
        state.cartItems.push(action.payload);
      }

      // Update the total amount of the cart
      state.totalAmount = state.cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
