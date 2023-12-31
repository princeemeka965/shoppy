"use client";

import { useGetProductsListingQuery } from "@/services";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AdvertSection from "./modules/advertSection";
import Header from "./modules/Header";
import ProductSection from "./modules/productsSection";
import {
  SET_FILTERED_PRODUCTS,
  SET_PRODUCTS,
} from "@/reducers/productsDataSlice";
import SignUp from "./modules/authentication/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./modules/authentication/Login";
import DealDay from "./modules/dealDay";
import ServicesSection from "./modules/servicesSection";
import SuppliersRegion from "./modules/regionSection";

export default function Home() {
  const { data, error, isLoading } = useGetProductsListingQuery<any>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_PRODUCTS(data?.products));
    dispatch(SET_FILTERED_PRODUCTS(data?.products));
  }, [isLoading]);

  const toggleSignUpModal = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleLoginModal = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header
          activateSignUp={toggleSignUpModal}
          activateLogin={toggleLoginModal}
        />
        <AdvertSection
          activateSignUp={toggleSignUpModal}
          activateLogin={toggleLoginModal}
        />
        <DealDay />
        <ProductSection />
        <ServicesSection />
        <SuppliersRegion />
      </div>

      {isSignUp ? <SignUp deactivateSignUp={toggleSignUpModal} /> : null}
      {isLogin ? <Login deactivateLogin={toggleLoginModal} /> : null}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
