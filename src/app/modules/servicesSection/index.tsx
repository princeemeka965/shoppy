"use client";

import {
  CustomizeProductsIcon,
  IndustryIcon,
  InspectionIcon,
  ShippingIcon,
} from "@/icons";
import { Card } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col lg:px-20 w-full px-3 lg:py-3">
        <p className="text-base w-full font-semibold my-3 px-1 lg:px-0 md:px-0">
          Our extra services
        </p>

        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="flex w-full lg:flex-row md:flex-row flex-col gap-3"
        >
          <Card
            className="lg:w-1/4 md:w-1/2 w-full h-auto flex flex-col"
            style={{ borderRadius: "0px" }}
          >
            <div className="flex h-44 relative">
              <IndustryIcon />
              <div
                className="p-2 w-10 flex justify-center bg-greySky h-10 rounded-full border absolute"
                style={{ top: 155, right: 15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium">Source from Industry Hubs</p>
            </div>
          </Card>

          <Card
            className="lg:w-1/4 md:w-1/2 w-full h-auto flex flex-col"
            style={{ borderRadius: "0px" }}
          >
            <div className="flex h-44 relative">
              <CustomizeProductsIcon />
              <div
                className="p-2 w-10 flex justify-center bg-greySky h-10 rounded-full border absolute"
                style={{ top: 155, right: 15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z"
                    fill="#1C1C1C"
                  />
                  <path d="M15 12H9V14H15V12Z" fill="#1C1C1C" />
                </svg>{" "}
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium">Customize Your Products</p>
            </div>
          </Card>

          <Card
            className="lg:w-1/4 md:w-1/2 w-full h-auto flex flex-col"
            style={{ borderRadius: "0px" }}
          >
            <div className="flex h-44 relative">
              <ShippingIcon />
              <div
                className="p-2 w-10 flex justify-center bg-greySky h-10 rounded-full border absolute"
                style={{ top: 155, right: 15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium">
                Fast, reliable shipping by ocean or air
              </p>
            </div>
          </Card>

          <Card
            className="lg:w-1/4 md:w-1/2 w-full h-auto flex flex-col"
            style={{ borderRadius: "0px" }}
          >
            <div className="flex h-44 relative">
              <InspectionIcon />
              <div
                className="p-2 w-10 flex justify-center bg-greySky h-10 rounded-full border absolute"
                style={{ top: 155, right: 15 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium">
                Product monitoring and inspection
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
