/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart, FaHeart, FaPlay } from "react-icons/fa";
import canImage from "@/../public/assets/images/Teas/Irish Breakfast.png";
import { Button } from "@mui/material";

export default function FundRaising({ animatedNumber: AnimatedNumber }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-32 md:px-10 lg:px-20 xl:px-48 py-20 bg-[url('../../public/assets/images/map_grey.png')] h-full">
      <div className="flex flex-col flex-1 gap-4 sm:gap-10">
        <div className="flex flex-col gap-1 sm:gap-4">
          <p className="text-[#009368] sm:text-xl lg:text-2xl font-semibold text-center sm:text-start animate-grow">
            Virtual Fundraising
          </p>
          <p className="text-lg md:text-2xl lg:text-5xl text-gray-800 font-bold text-center sm:text-start animate-grow">
            Teas that do good by you, and the World around you!
          </p>
          <hr className="w-20 border-t-4 border-[#eca30c] mx-auto sm:mx-0 animate-grow" />
          <p className="lg:text-lg text-gray-400 font-semibold p-2 sm:p-0 animate-grow">
            Looking for an easy, quick way to raise funds for a cause dear to
            you? Our virtual tea fundraiser allows you to sell anywhere, with no
            hassle. You focus on raising the funds, we ship, and you keep a
            portion of all sales. Yes, it’s that easy!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 xl:gap-4">
          <div className="lg:w-48 border-2 py-1 sm:py-3 px-2 md:px-1 rounded-lg bg-[#009368] border-[#009368] hover:bg-[#eca30c] hover:border-[#eca30c] text-white animate-grow">
            <Link href="/register">
              <div className="flex items-center gap-1 lg:gap-2 justify-center">
                <p className="text-sm md:text-base lg:text-base font-medium ">
                  Let's Get Started{" "}
                </p>
                <FaHeart className="text-sm md:text-base lg:text-xl" />
              </div>
            </Link>
          </div>
          <Link
            href=" https://www.youtube.com/watch?v=xnrRhP7dshg"
            className="flex items-center gap-1 xl:gap-3 border border-[#eca30c] sm:border-none rounded-lg p-2 sm:p-4"
          >
            <FaPlay
              // fontSize={60}
              className="text-xl lg:text-3xl xl:text-5xl text-[#eca30c] border border-[#eca30c] rounded-full p-1 xl:p-3 animate-grow"
            />
            <p className="text-[6f7775] lg:text-lg font-semibold ">
              Watch Video
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1 relative px-5 sm:px-0">
        {/* Background Map Pattern (If Needed) */}
        <div className="absolute top-8 md:top-12 xl:top-32 left-[405px] sm:left-full inset-0 h-32 sm:h-40 lg:h-48 xl:h-56 w-4 md:w-8 lg:w-10 xl:w-14 bg-[#009368] rounded-r-lg"></div>

        {/* Circular Icon */}
        <div className="absolute bg-[#eca30c] p-3 rounded-full shadow-lg top-3 xl:top-4 left-0.5 md:-left-10 xl:-left-14 2xl:-left-20 animate-grow z-10">
          <FaHandHoldingHeart className="text-white text-2xl md:text-3xl lg:4xl xl:text-5xl" />
        </div>

        {/* Product Image */}
        <div className="">
          <Image
            src={canImage}
            alt="Product Image"
            className="rounded-lg sm:h-96 lg:h-[500px] xl:w-full sm:scale-110"
          />
        </div>

        {/* 50% Offer Box with Animated Number */}
        <div className="absolute -bottom-12 lg:-bottom-16 xl:-bottom-24 left-28 lg:left-32 2xl:left-44 transform -translate-x-1/2 bg-white p-1 sm:p-4 rounded-lg shadow-lg w-40 sm:w-56 lg:w-64 2xl:w-96 flex flex-col gap-1 xl:gap-2">
          <p className="text-[#eca30c] text-lg md:text-xl lg:text-4xl xl:text-6xl font-medium">
            <AnimatedNumber value={50} duration={2000} />%
          </p>
          <hr className="w-12 border-t-2 md:border-t-3 lg:border-t-4 border-[#009368]" />
          <p className="text-black text-start text-xs lg:text-base">
            What you keep of all sales raised during your Fundraiser!
          </p>
        </div>
      </div>
    </div>
  );
}
