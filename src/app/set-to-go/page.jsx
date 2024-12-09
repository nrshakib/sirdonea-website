"use client";

import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import runningEvent from "../../../public/assets/images/Stock Photos/volleyball.png";
import templates from "../../../public/assets/images/Stock Photos/volleyball.png";
import tryTeas from "../../../public/assets/images/Teas/Black Tea.png";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="my-8 md:my-20 lg:mt-40">
      {/* Confirmation Message Section */}
      <Box className="relative bg-gray-100 lg:my-10 lg:px-20 md:py-5 lg:py-10 rounded-md">
        {/* Left Wavy Lines */}
        <div className="absolute hidden sm:block left-0 top-0 h-[200px] w-[200px]">
          <svg
            width="200"
            height="300"
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* First vertical wavy line */}
            <path
              d="M50 0 C0 50, 100 50, 50 100 S 100 150, 50 200 S 100 250, 50 300"
              stroke="#F4A300"
              strokeWidth="5"
              fill="none"
            />
            {/* Second vertical wavy line */}
            <path
              d="M100 0 C50 50, 150 50, 100 100 S 150 150, 100 200 S 150 250,100 300"
              stroke="#F4A300"
              strokeWidth="5"
              fill="none"
            />
            {/* Third vertical wavy line */}
            <path
              d="M150 0 C100 50, 200 50, 150 100 S 200 150, 150 200 S 200 250,150 300"
              stroke="#F4A300"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        {/* Confirmation Text */}
        <Box className="px-4 md:px-48 xl:px-80 py-2">
          <p className="text-lg sm:text-3xl font-semibold">You’re all Set!</p>
          <p className="sm:text-lg text-[6f7775] mt-4 xl:w-2/3">
            Thanks for registering your fundraiser. Once we verify your
            registration information, we’ll reach out to you within 24 hours
            with further instructions. In the meantime, if you have any
            questions, please do not hesitate to Contact Us!
          </p>
        </Box>

        {/* Decorative Circles - Top Right */}
        <div className="absolute hidden sm:block md:bottom-40 xl:bottom-56 md:right-20 xl:right-80 h-[200px] w-[200px]">
          <div className="flex justify-end items-center h-full">
            <div className="relative flex">
              {/* Circles */}
              <div className="absolute top-0 right-10 flex space-x-3">
                <div className="size-3 sm:size-5 bg-green-500 rounded-full"></div>
                <div className="size-4 sm:size-8 bg-green-500 rounded-full"></div>
                <div className="size-5 sm:size-8 border-2 border-green-500 rounded-full"></div>
                <div className="size-2 sm:size-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute top-8 right-5 flex space-x-3">
                <div className="size-2 sm:size-5 bg-[#eca30c] rounded-full"></div>
                <div className="size-5 sm:size-8 border-2 border-[#eca30c] rounded-full"></div>
                <div className="size-3 sm:size-5 border-2 border-[#eca30c] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* Resources Section */}
      <Box className="mt-4 md:mt-10 lg:mt-28 px-4 md:px-10 lg:px-32">
        <p className="text-lg sm:text-2xl font-bold mb-6">Resources</p>
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
          {/* First Resource Card */}
          <Link href="/my-account">
            <Card className="shadow-md">
              <Image
                src={runningEvent}
                alt="Running a Successful Event"
                height={140}
                width={550}
              />
              <CardContent>
                <p className="sm:text-xl font-bold">
                  Running a Successful Event
                </p>
                <p className="text-sm sm:text-base">
                  Tips and recommendations on how to have a successful event
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Second Resource Card */}
          <Link href="/shop">
            <Card className="shadow-md">
              <Image src={templates} alt="Templates" height={140} width={550} />
              <CardContent>
                <p className="sm:text-xl font-bold">Templates</p>
                <p className="text-sm sm:text-base">
                  Flyers and Social Media templates to use for a successful
                  event
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Third Resource Card */}
          <Link href="/explore-our-teas">
            <Card className="shadow-md">
              <Image
                src={tryTeas}
                alt="Try our Teas"
                height={140}
                width={550}
              />
              <CardContent>
                <p className="sm:text-xl font-bold">Try our Teas</p>
                <p className="text-sm sm:text-base">
                  With over 20+ flavors to choose from, you can shop our teas
                  anytime!
                </p>
              </CardContent>
            </Card>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
