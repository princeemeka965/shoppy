"use client";

import {
  CameraIcon,
  HeadPhoneIcon,
  LaptopIcon,
  PhoneIcon,
  WatchIcon,
} from "@/icons";
import { Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DealDay() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const targetDate: any = new Date();
    targetDate.setDate(targetDate.getDate() + 4);

    const countdownInterval = setInterval(() => {
      const currentDate: any = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <div className="flex lg:px-20 w-full lg:py-3">
        <Card
          className="w-full flex flex-row h-auto gap-3"
          style={{ borderRadius: "0px" }}
        >
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col lg:flex-row md:flex-row"
          >
            <div
              className="lg:w-1/4 md:w-1/4 w-full h-auto flex flex-col gap-3 
            lg:relative md:relative lg:justify-start md:justify-start justify-between
            lg:border-r-2 md:border-r-2 lg:border-b-0 border-b-2 lg:p-2 md:p-2 p-3"
            >
              <div className="flex flex-col gap-1 lg:p-3 md:p-3">
                <p className="text-lg text-center lg:pt-10 md:pt-10 font-semibold text-black">
                  Deals and offers
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <div className="py-1 px-2 bg-gray-300 flex flex-col">
                  <p className="text-sm text-center font-semibold">
                    {countdown.days}
                  </p>
                  <p className="text-xs">Days</p>
                </div>
                <div className="py-1 px-2 bg-gray-300 flex flex-col">
                  <p className="text-sm text-center font-semibold">
                    {countdown.hours}
                  </p>
                  <p className="text-xs">Hours</p>
                </div>
                <div className="py-1 px-2 bg-gray-300 flex flex-col">
                  <p className="text-sm text-center font-semibold">
                    {countdown.minutes}
                  </p>
                  <p className="text-xs">Min</p>
                </div>
                <div className="py-1 px-2 bg-gray-300 flex flex-col">
                  <p className="text-sm text-center font-semibold">
                    {countdown.seconds}
                  </p>
                  <p className="text-xs">Sec</p>
                </div>
              </div>
            </div>

            <div
              className="lg:w-3/4 md:w-3/4 w-full"
              style={{ overflow: "auto" }}
            >
              <div className="lg:w-full md:w-full w-[1000px] lg:mt-0 md:mt-0 flex">
                <div className="lg:w-1/5 md:w-1/5 w-full border-r-2 px-2 py-3 flex flex-col gap-2">
                  <div className="w-full lg:flex md:flex hidden justify-center">
                    <WatchIcon />
                  </div>
                  <div className="w-full lg:hidden md:hidden flex justify-center">
                    <WatchIcon size={70} />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <p className="lg:text-base md:text-base text-sm text-black">
                      Smart Watches
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-auto py-1 px-3 rounded-full bg-redFade">
                      <span className="text-sm font-medium text-cyalinRed">
                        -25%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/5 w-full border-r-2 px-2 py-3 flex flex-col gap-2">
                  <div className="w-full lg:flex md:flex hidden justify-center">
                    <LaptopIcon />
                  </div>
                  <div className="w-full lg:hidden md:hidden flex justify-center">
                    <LaptopIcon size={70} />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <p className="lg:text-base md:text-base text-sm text-black">
                      Laptops
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-auto py-1 px-3 rounded-full bg-redFade">
                      <span className="text-sm font-medium text-cyalinRed">
                        -15%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/5 w-full border-r-2 px-2 py-3 flex flex-col gap-2">
                  <div className="w-full lg:flex md:flex hidden justify-center">
                    <CameraIcon />
                  </div>
                  <div className="w-full lg:hidden md:hidden flex justify-center">
                    <CameraIcon size={70} />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <p className="lg:text-base md:text-base text-sm text-black">
                      GoPro Cameras
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-auto py-1 px-3 rounded-full bg-redFade">
                      <span className="text-sm font-medium text-cyalinRed">
                        -40%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/5 w-full border-r-2 px-2 py-3 flex flex-col gap-2">
                  <div className="w-full lg:flex md:flex hidden justify-center">
                    <HeadPhoneIcon />
                  </div>
                  <div className="w-full lg:hidden md:hidden flex justify-center">
                    <HeadPhoneIcon size={70} />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <p className="lg:text-base md:text-base text-sm text-black">
                      Headphones
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-auto py-1 px-3 rounded-full bg-redFade">
                      <span className="text-sm font-medium text-cyalinRed">
                        -25%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/5 md:w-1/5 w-full border-r-2 px-2 py-3 flex flex-col gap-2">
                  <div className="w-full lg:flex md:flex hidden justify-center">
                    <PhoneIcon />
                  </div>
                  <div className="w-full lg:hidden md:hidden flex justify-center">
                    <PhoneIcon size={70} />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <p className="lg:text-base md:text-base text-sm text-black">
                      Canon Phones
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-auto py-1 px-3 rounded-full bg-redFade">
                      <span className="text-sm font-medium text-cyalinRed">
                        -25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Card>
      </div>
    </>
  );
}
