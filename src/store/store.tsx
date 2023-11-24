import productsDataSlice from "@/reducers/productsDataSlice";
import { productsApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
  reducer: {
    productsData: productsDataSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
