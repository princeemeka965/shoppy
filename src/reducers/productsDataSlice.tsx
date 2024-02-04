import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  viewedProduct: {},
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
    SET_VIEW_PRODUCT: (state, action) => {
      state.viewedProduct = action.payload;
    },
  },
});

export const { SET_PRODUCTS, SET_FILTERED_PRODUCTS, SET_VIEW_PRODUCT } =
  productsDataSlice.actions;

export default productsDataSlice.reducer;
