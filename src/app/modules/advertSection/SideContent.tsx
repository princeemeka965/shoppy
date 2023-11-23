"use client";

import { ReactNode } from "react";
import { AvatarIcon } from "@/icons";
import { Button } from "@material-tailwind/react";

export const SideContent = (): ReactNode => {
  return (
    <>
      <div className="py-3 px-6 flex flex-col gap-3 rounded-md bg-maniacBlue">
        <div className="flex gap-4">
          <AvatarIcon />
          <div className="flex flex-col gap-3 justify-center">
            <p className="text-base text-black">Hi, user let’s get started</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button color="blue">Join now</Button>
          <Button className="bg-white text-black">Login</Button>
        </div>
      </div>

      <div className="py-3 px-6 flex flex-col gap-3 rounded-md bg-carrotOrange">
        <p className="text-base text-white">
          Get US $10 off <br /> with a new supplier
        </p>
        <div className="flex flex-col gap-2">
          <Button className="bg-white text-black">Check out now</Button>
        </div>
      </div>

      <div className="py-3 px-6 flex flex-col gap-3 rounded-md bg-quoteCyalin">
        <p className="text-base text-white">
          Send quotes with <br /> supplier preferences
        </p>
      </div>
    </>
  );
};
