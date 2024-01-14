"use client";

import { Card } from "@material-tailwind/react";
import { CarouselBlock } from "./Carousel";
import { SideContent } from "./SideContent";
import { CategoriesBlock } from "./CategoriesBlock";

export default function AdvertSection(props: any) {
  const emitSignUpModal = () => {
    props.activateSignUp(true);
  };
  const emitLoginModal = () => {
    props.activateLogin(true);
  };
  return (
    <>
      <div className="flex lg:px-20 w-full lg:py-3 lg:mt-16 md:mt-16">
        <Card
          className="w-full flex flex-row lg:p-5 md:p-5 h-full gap-3"
          style={{ borderRadius: "0px" }}
        >
          <div className="lg:flex md:flex hidden flex-col w-1/5 gap-3 h-full">
            <CategoriesBlock />
          </div>
          <div className="lg:w-3/5 md:w-3/5 w-full h-[200px] lg:h-[385px] flex">
            <CarouselBlock />
          </div>
          <div className="lg:flex md:flex hidden flex-col w-1/5 gap-3 h-full">
            <SideContent
              activateSignUp={emitSignUpModal}
              activateLogin={emitLoginModal}
            />
          </div>
        </Card>
      </div>
    </>
  );
}
