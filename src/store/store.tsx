import productsDataSlice from "@/reducers/productsDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    productsData: productsDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
