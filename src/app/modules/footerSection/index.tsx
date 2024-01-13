"use client";

import { LogoIcon } from "@/icons";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flex lg:flex-row md:flex-row flex-col bg-white lg:px-20 w-full lg:py-3 p-2 lg:gap-8 md:gap-8 gap-4"
      >
        <div className="flex lg:w-1/3 md:w-1/3 w-full flex-col lg:flex-row md:flex-row gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <LogoIcon />
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-medium text-black"
              >
                Shoppy
              </Typography>
            </div>
            <p className="text-base text-gray-600">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
          </div>
        </div>

        <div className="lg:flex md:flex hidden w-1/5 gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-base font-semibold">About</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">About Us</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Find Store</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Categories</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Blogs</p>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex hidden w-1/5 gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-base font-semibold">Partnership</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">About Us</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Find Store</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Categories</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Blogs</p>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex hidden w-1/5 gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-base font-semibold">Information</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Help Center</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Money Refund</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Shipping</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Contact us</p>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex hidden w-1/5 gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="text-base font-semibold">For users</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Login</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Register</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">Settings</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-600">My Orders</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden md:hidden flex gap-5">
          <div className="flex gap-2">
            <p className="text-sm font-semibold">About Us</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Partnership</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Contact us</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Terms</p>
          </div>
        </div>

        <div className="lg:hidden md:hidden flex justify-center gap-5">
          <p className="text-sm">© {new Date().getFullYear()} Shoppy.</p>
        </div>
      </motion.div>
    </>
  );
}
