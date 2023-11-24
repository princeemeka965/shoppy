"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AdvertSection from "./modules/advertSection";
import Header from "./modules/Header";
import ProductSection from "./modules/productsSection";
import { SET_PRODUCTS } from "@/reducers/productsDataSlice";

export default function Home() {
  const { data, error, isLoading } = useGetProductsListingQuery("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data));
  }, []);

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
