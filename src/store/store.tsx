import productsDataSlice from "@/reducers/productsDataSlice";
import usersDataSlice from "@/reducers/usersDataSlice";
import { dummyApi, loginApi, productsApi, signUpApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
  reducer: {
    productsData: productsDataSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [signUpApi.reducerPath]: signUpApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
    userData: usersDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(signUpApi.middleware)
      .concat(loginApi.middleware)
      .concat(dummyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
