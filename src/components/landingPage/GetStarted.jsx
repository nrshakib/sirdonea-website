/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import volunteersHolding from "@/../public/assets/images/Stock Photos/volunteers-holding.png";
import { Button } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function GetStarted({ animatedNumber: AnimatedNumber }) {
  return (
    <div className="my-10 lg:my-32 relative">
      {/* Header Section */}
      <div className="relative py-4 sm:py-10 px-2 lg:px-5 rounded-lg shadow-md text-center">
        {/* Reduced Height for Background Image */}
        <div className="absolute inset-0 h-[600px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <Image
            src={volunteersHolding}
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative z-10 bottom-28 lg:bottom-44 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 xl:px-20 bg-white w-full lg:w-4/5 h-auto md:h-auto lg:h-64 xl:h-80 mx-auto rounded-lg shadow-2xl bg-[url('../../public/assets/images/wave.png')]">
          <div className="text-start py-8 md:py-6 lg:py-0">
            <p className="text-[#009368] font-bold sm:text-xl xl:text-2xl">
              Ready to Get Started?
            </p>
            <p className="text-xl md:text-2xl xl:text-3xl font-semibold my-2 w-full lg:w-2/3 xl:w-3/4 text-[#213430]">
              Let us Help you achieve your Fundraising goals
            </p>
            <hr className="w-12 border-t-4 border-[#ECA30C] mt-2 lg:mt-5 xl:mt-10" />
          </div>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-[#eca30c] text-white xl:text-xl h-10 md:h-12 xl:h-16 w-full md:w-64 lg:w-80 lg:px-6 font-bold hover:bg-white hover:text-black hover:border-2 hover:border-[#eca30c] my-2 lg:mt-0 rounded-lg"
          >
            <p>Let's Get Started</p> <FaHeart />
          </Link>
        </div>
      </div>

      {/* Stats Section with Animated Numbers */}
      <div className="relative flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-20 xl:gap-40 text-white py-4 md:py-6 mt-2 lg:mt-0 bottom-24 rounded-lg w-full">
        <div className="flex flex-col sm:gap-2 md:gap-4 items-center">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-[#009368]">
            <AnimatedNumber value={20} duration={2000} />+
          </h2>
          <hr className="w-12 border-t-4 border-[#ECA30C]" />
          <p className="text-base lg:text-lg font-bold text-white opacity-80">
            Freshly Brewed Flavors
          </p>
        </div>
        <div className="flex flex-col sm:gap-2 md:gap-4 items-center">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-[#009368]">
            <AnimatedNumber value={50} duration={2000} />%
          </h2>
          <hr className="w-12 border-t-4 border-[#ECA30C]" />
          <p className="text-base lg:text-lg font-bold text-white opacity-80">
            Sales You Keep
          </p>
        </div>
        <div className="flex flex-col sm:gap-2 md:gap-4 items-center">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-[#009368]">
            <AnimatedNumber value={7} duration={2000} />
          </h2>
          <hr className="w-12 border-t-4 border-[#ECA30C]" />
          <p className="text-base lg:text-lg font-bold text-white opacity-80">
            Days of Fundraising
          </p>
        </div>
        <div className="flex flex-col sm:gap-2 md:gap-4 items-center">
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-[#009368]">
            <AnimatedNumber value={100} duration={2000} />%
          </h2>
          <hr className="w-12 border-t-4 border-[#ECA30C]" />
          <p className="text-base lg:text-lg text-white opacity-80 font-bold">
            Virtual Fundraising
          </p>
        </div>
      </div>
    </div>
  );
}
