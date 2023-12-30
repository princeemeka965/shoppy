"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder: any) => ({
    getProductsListing: builder.query({
      query: () => `/products?limit=100`,
    }),
  }),
});

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-music-app-3dww.onrender.com",
  }),
  endpoints: (builder: any) => ({
    createAccount: builder.mutation({
      query: (data: any) => ({
        url: "/authenticate/createAccount",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-music-app-3dww.onrender.com",
  }),
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (data: any) => ({
        url: "/authenticate/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsListingQuery } = productsApi;
export const { useCreateAccountMutation } = signUpApi;
export const { useLoginMutation } = loginApi;
