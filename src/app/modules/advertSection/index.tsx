"use client";

import { Card } from "@material-tailwind/react";
import { CarouselBlock } from "./Carousel";
import { SideContent } from "./SideContent";

export default function AdvertSection() {
  return (
    <>
      <div className="flex lg:px-20 w-full">
        <Card
          className="w-full flex flex-row lg:p-5 md:p-5 h-full gap-3"
          style={{ borderRadius: "0px" }}
        >
          <div className="lg:w-3/4 md:w-3/4 w-full h-[200px] lg:h-[385px] flex">
            <CarouselBlock />
          </div>
          <div className="lg:flex md:flex hidden flex-col w-1/4 gap-3 h-full">
            <SideContent />
          </div>
        </Card>
      </div>
    </>
  );
}
