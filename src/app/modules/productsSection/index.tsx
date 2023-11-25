import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import FilterLayout from "./filterLayout";
import Image from "next/image";
import { Card } from "@material-tailwind/react";

export default function ProductSection() {
  const products = useSelector(
    (state: RootState) => state.productsData.filteredProducts
  );
  return (
    <>
      <div className="flex lg:px-20 w-full py-5">
        <FilterLayout productItems={products}>
          {products
            ? products.map((product: any, index: number) => (
                <Card
                  className="flex w-full lg:w-1/4 md:w-1/4 justify-between gap-1 p-3"
                  style={{ borderRadius: "0px" }}
                  key={index}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-center w-full">
                      <Image
                        src={
                          product.images[0] ||
                          "/fc153780fbd6853471e97e4f4ac6466c.png"
                        }
                        width={200}
                        height={200}
                        style={{
                          height: "180px",
                          objectFit: "contain",
                          borderRadius: "12px",
                        }}
                        alt="product_logo"
                        className="hidden lg:flex md:flex"
                      />

                      <Image
                        src={
                          product.images[0] ||
                          "/fc153780fbd6853471e97e4f4ac6466c.png"
                        }
                        width={130}
                        height={130}
                        style={{
                          height: "130px",
                          objectFit: "contain",
                          borderRadius: "12px",
                        }}
                        alt="product_logo"
                        className="lg:hidden md:hidden"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-center">
                        <p className="text-black text-sm font-semibold">
                          {product.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            : ""}
        </FilterLayout>
      </div>
    </>
  );
}
