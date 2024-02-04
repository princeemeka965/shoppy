"use client";

import BreadCrumb from "@/app/components/BreadCrumbs";
import Header from "@/app/components/Header";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ProductDetails: React.FC = () => {
  const viewProduct = useSelector(
    (state: RootState) => state.productsData.viewedProduct
  );

  const crumbData = [viewProduct.category, viewProduct.brand];

  return (
    <>
      <div className="w-full lg:flex md:flex hidden">
        <Header />
      </div>
      <div className="flex lg:px-20 w-full lg:py-3 flex-col lg:mt-16 md:mt-16">
        <BreadCrumb crumbs={crumbData} />
      </div>
    </>
  );
};

export default ProductDetails;
