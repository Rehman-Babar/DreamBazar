// src/redux/productsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Step 1: Define an async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("http://localhost:8000/client/getAddedProducts");
  const data = await res.json();
  return data;
});

// Step 2: Create a slice for products
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [], // Holds the products
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // Holds any error messages
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and the reducer
export default productsSlice.reducer;
