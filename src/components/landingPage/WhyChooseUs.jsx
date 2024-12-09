/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import danceKids from "@/../public/assets/images/Stock Photos/Dancekids.png";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:gap-6 md:mx-20 xl:mx-10 my-12 md:mt-20 lg:my-32 px-2 sm:px-0">
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[#009368] font-bold sm:text-xl">Why Choose Us</p>
        <p className="text-xl sm:text-4xl font-bold text-gray-700">
          Simple & Easy Virtual Fundraising
        </p>
        <div className="my-2">
          <hr className="w-20 border-t-2 sm:border-t-4 border-[#ECA30C]" />
        </div>
        <p className="sm:text-lg text-gray-600">
          Need to raise money for new uniforms? Have an upcoming competition you
          need to get to? Whatever the reason or cause, we got your back. Our
          easy to set-up and go virtual fundraiser will have you raising funds
          and on your way in no time.
        </p>
        <Link
          href="/register"
          className="bg-[#ECA30C] border-2 border-white text-white rounded-lg hover:bg-white
           hover:text-black hover:border-2 hover:border-[#ECA30C] mt-2 sm:mt-4 md:mt-5 px-3 py-3 sm:px-3 sm:py-4 md:px-5 md:py-5 w-[140px] sm:w-[160px]
            md:w-[180px] lg:w-[200px] text-sm sm:text-base md:text-lg transition-all transform hover:scale-105"
        >
          <div className="flex items-center justify-center gap-3">
            <p>Get Started</p> <FaHeart />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <Image
          src={danceKids}
          alt="DanceKids"
          // height={1600}
          // width={1600}
          className="h-full rounded-xl px-2 sm:px-0 object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-10 sm:my-14 xl:w-1/3">
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center">
            <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
            <span className="absolute text-white font-bold sm:text-xl">01</span>
          </div>
          <div>
            <p className="text-sm sm:text-lg font-bold text-gray-800">
              7-day Virtual Fundraiser
            </p>
            <p className="text-sm sm:text-lg text-[6f7775]">
              Raise the funds you need in one week.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center">
            <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
            <span className="absolute text-white font-bold sm:text-xl">02</span>
          </div>
          <div>
            <p className="text-sm sm:text-lg font-bold text-gray-800">
              We handle the Shipping
            </p>
            <p className="text-sm sm:text-lg text-[6f7775]">
              We ship directly to your supporters so you don't have to.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center">
            <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
            <span className="absolute text-white font-bold sm:text-xl">03</span>
          </div>
          <div>
            <p className="text-sm sm:text-lg font-bold text-gray-800">
              You keep 50% of all Sales
            </p>
            <p className="text-sm sm:text-lg text-[6f7775] ">
              You keep half of all sales earned, paid out by direct deposit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
