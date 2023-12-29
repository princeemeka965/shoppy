"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AdvertSection from "./modules/advertSection";
import Header from "./modules/Header";
//import ProductSection from "./modules/productsSection";
import {
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS,
} from "@/reducers/productsDataSlice";
import SignUp from "./modules/authentication/SignUp";

export default function Home() {
  const { data, error, isLoading } = useGetProductsListingQuery<any>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data?.products));
    dispatch(SET_FILTERED_PRODUCTS(data?.products));
  }, [isLoading]);

  const toggleSignUpModal = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header activateSignUp={toggleSignUpModal} />
        <AdvertSection />
        {/**  <ProductSection /> **/}
      </div>

      {isSignUp ? <SignUp deactivateSignUp={toggleSignUpModal} /> : null}
    </>
  );
}
