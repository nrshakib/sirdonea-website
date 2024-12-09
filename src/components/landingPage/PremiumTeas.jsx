import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart, FaLink } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import teaCollage from "@/../public/assets/images/Stock Photos/Tea collage.png";
import Link from "next/link";

export default function PremiumTeas({ itemsPerSlide, currentIndex, teaData }) {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-10 md:px-5">
        <p className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-800">
          Premium Teas for all Occasions
        </p>
        <div className="my-2">
          <hr className="w-20 border-t-4 border-[#ECA30C]" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-0">
          <div className="sm:text-center sm:w-1/4">
            <p className="text-lg lg:text-xl font-bold">Guaranteed Freshness</p>
            <p className="lg:text-lg text-[6f7775]">
              All our teas are blended once the order is placed
            </p>
          </div>
          <div className="sm:text-center sm:w-1/4">
            <p className="text-lg lg:text-xl font-bold">Kid-Friendly Flavors</p>
            <p className="lg:text-lg text-[6f7775]">
              Sugar-free blends that your little ones can enjoy
            </p>
          </div>
          <div className="sm:text-center sm:w-1/4">
            <p className="text-lg lg:text-xl font-bold">Health & Wellness</p>
            <p className="lg:text-lg text-[6f7775]">
              Wellness blends to help reach your health goals
            </p>
          </div>
          <div className="sm:text-center sm:w-1/4">
            <p className="text-lg lg:text-xl font-bold">Two Brewing Options</p>
            <p className="text-lg lg:text-xl text-[6f7775]">
              Available in loose leaf or bagged options
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 relative h-[500px]">
        <Image
          src={teaCollage}
          alt="Tea Collage"
          // height={400}
          // width={1920}
          className="xl:h-full object-cover"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center absolute sm:bottom-5 lg:-bottom-5 left-0 w-full">
          <div className="flex flex-col gap-1 lg:gap-3 bg-[#ECA30C] w-full h-24 sm:h-40 px-2 md:px-8 lg:px-20 py-10">
            <p className="md:text-xl lg:text-2xl xl:text-2xl font-bold text-white">
              Calorie-free beverages for the family
            </p>
            <div className="my-2">
              <hr className="w-20 border-t-4 border-[#009368]" />
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3 bg-[#009368] w-full h-24 sm:h-40 px-2 sm:px-20 py-10">
            <p className="md:text-xl lg:text-2xl xl:text-2xl font-bold text-white">
              Mugs, tees and other accessories
            </p>
            <div className="my-2">
              <hr className="w-20 border-t-4 border-[#ECA30C]" />
            </div>
          </div>
          <div className="flex items-center justify-center bg-white w-full h-24 sm:h-40">
            <Link
              href="/explore-our-teas"
              className="block px-4 py-3 ml-5 border-2 border-[#009368] rounded-lg w-[240px]"
            >
              <div className="flex items-center justify-center gap-2 text-lg">
                <p className="font-medium">Explore Our Teas</p>{" "}
                <FaHeart className="text-[#009368]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-24 sm:mt-6 md:mt-10">
        <div className="relative flex justify-center items-center">
          {/* Flex container for 3 tea cards */}
          <div className="flex justify-center space-x-4 md:gap-4 xl:gap-0 flex-wrap">
            {Array.from({ length: itemsPerSlide }).map((_, idx) => {
              const index = (currentIndex + idx) % teaData.length;
              const tea = teaData[index];
              return (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-80 sm:w-72 md:w-80 lg:w-96 mx-2 sm:mx-4 my-4 md:my-0 group" // Responsive card width
                >
                  <Card
                    sx={{
                      bgcolor: "#F5F7FD",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={tea.image}
                      alt={tea.tea_name}
                    />
                    <CardContent>
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "center",
                          fontSize: "18px", // Adjusted font size for smaller screens
                          fontWeight: "600",
                        }}
                      >
                        {tea.tea_name}
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Hover Effect */}
                  <div className="absolute top-36 inset-0 flex justify-center items-center bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center">
                      <Link href="/">
                        <div className="bg-[#009368] w-36 md:w-44 h-10 flex justify-center items-center">
                          <FaEye className="text-white" />
                        </div>
                      </Link>
                      <div className="bg-[#009368] h-10">
                        <RxDividerVertical className="text-white text-3xl md:text-4xl " />
                      </div>
                      <Link href="/">
                        <div className="bg-[#009368] w-36 md:w-44 h-10 flex justify-center items-center">
                          <FaLink className="text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
