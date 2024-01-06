import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import Image from "next/image";
import { Card, Rating, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductSection() {
  const products = useSelector(
    (state: RootState) => state.productsData.filteredProducts
  );
  return (
    <>
      <div className="flex flex-col lg:px-20 w-full px-3 lg:py-3">
        <p className="text-base w-full font-semibold my-3 px-1 lg:px-0 md:px-0">
          Recommended items
        </p>

        <div className="flex w-full flex-wrap lg:gap-8 md:gap-8 gap-2">
          {products
            ? products.map((product: any, index: number) => (
                <motion.div
                  whileInView={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ duration: 1 }}
                  key={index}
                >
                  <Card
                    className="flex w-49 lg:w-[246px] md:w-[246px] justify-between gap-1 p-3"
                    style={{ borderRadius: "0px" }}
                  >
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-center w-full">
                        <Image
                          src={
                            product.images[0] ||
                            "/fc153780fbd6853471e97e4f4ac6466c.png"
                          }
                          width={120}
                          height={120}
                          style={{
                            height: "120px",
                            objectFit: "contain",
                            borderRadius: "12px",
                          }}
                          className="lg:flex md:flex hidden"
                          alt="product_logo"
                        />
                        <Image
                          src={
                            product.images[0] ||
                            "/fc153780fbd6853471e97e4f4ac6466c.png"
                          }
                          width={100}
                          height={100}
                          style={{
                            height: "100px",
                            objectFit: "contain",
                            borderRadius: "12px",
                          }}
                          className="lg:hidden md:hidden flex"
                          alt="product_logo"
                        />
                      </div>
                      <div className="flex flex-col border-t py-3 gap-3">
                        <div className="flex">
                          <p className="text-black text-sm font-semibold">
                            ${product.price}
                          </p>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2 font-bold text-blue-gray-500">
                          <Rating value={Math.floor(product.rating)} readonly />
                          <Typography
                            color="blue-gray"
                            className="font-medium text-xs text-carrotOrange"
                          >
                            ({product.rating})
                          </Typography>
                        </div>
                        <div className="flex">
                          <Link href={`/product/${product.id}`}>
                            <p className="text-black text-sm">
                              {product.title}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
