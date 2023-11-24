"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AdvertSection from "./modules/advertSection";
import Header from "./modules/Header";
import ProductSection from "./modules/productsSection";
import {
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS,
} from "@/reducers/productsDataSlice";

export default function Home() {
  const { data, error, isLoading } = useGetProductsListingQuery<any>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data?.products));
    dispatch(SET_FILTERED_PRODUCTS(data?.products));
  }, [isLoading]);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header />
        <AdvertSection />
        <ProductSection />
      </div>
    </>
  );
}
