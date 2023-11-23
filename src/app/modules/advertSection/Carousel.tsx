/* eslint-disable @next/next/no-img-element */
"use client";

import { ReactNode } from "react";
import { Carousel } from "@material-tailwind/react";

export const CarouselBlock = (): ReactNode => {
  return (
    <Carousel autoplay={true} loop>
      <img
        src="/image-shoppy-1.png"
        alt="first-banner-shoppy"
        className="h-full w-full object-cover"
      />
      <img
        src="/image-shoppy-2.png"
        alt="second-banner-shoppy"
        className="h-full w-full object-cover"
      />
      <img
        src="/image-shoppy-3.png"
        alt="third-banner-shoppy"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
