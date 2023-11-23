"use client";

import { ShoppyBaImageI, ShoppyBaImageXI } from "@/icons";
import { Card, Carousel } from "@material-tailwind/react";

export default function AdvertSection() {
  return (
    <>
      <div className="flex lg:px-20 w-full">
        <Card className="w-full flex lg:p-5 md:p-5 h-full gap-1">
          <div className="lg:w-3/4 md:w-3/4 w-full h-[200px] lg:h-[400px] flex">
            <Carousel autoplay={true} transition={{ duration: 2 }}>
              <ShoppyBaImageXI />
              <ShoppyBaImageI />
            </Carousel>
          </div>
        </Card>
      </div>
    </>
  );
}
