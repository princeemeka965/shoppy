import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import FilterLayout from "./filterLayout";
import Image from "next/image";
import { Card, Rating } from "@material-tailwind/react";

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
                  className="flex w-3/4 lg:w-[228px] md:w-[228px] justify-between gap-1 p-3"
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
                        width={130}
                        height={130}
                        style={{
                          height: "130px",
                          objectFit: "contain",
                          borderRadius: "12px",
                        }}
                        alt="product_logo"
                      />
                    </div>
                    <div className="flex flex-col border-t py-3 gap-3">
                      <div className="flex">
                        <p className="text-black text-sm font-semibold">
                          ${product.price}
                        </p>
                      </div>
                      <div className="flex">
                        <Rating value={Math.floor(product.rating)} />
                      </div>
                      <div className="flex">
                        <p className="text-black text-sm">{product.title}</p>
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
