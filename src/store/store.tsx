import productsDataSlice from "@/reducers/productsDataSlice";
import { productsApi, signUpApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
  reducer: {
    productsData: productsDataSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(signUpApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
