import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

export const productsDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_FILTERED_PRODUCTS: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { SET_PRODUCTS, SET_FILTERED_PRODUCTS } =
  productsDataSlice.actions;

export default productsDataSlice.reducer;
