"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import kidstrophy from "@/../public/assets/images/Stock Photos/kidstrophy.png";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import FundRaising from "@/components/landingPage/FundRaising";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
import PremiumTeas from "@/components/landingPage/PremiumTeas";
import HowItWorks from "@/components/landingPage/HowItWorks";
import GetStarted from "@/components/landingPage/GetStarted";
import Marquee from "react-fast-marquee";
import Link from "next/link";

// AnimatedNumber Component
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 10); // Speed of increment
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCurrentValue(value); // Ensure the exact value is reached
      } else {
        setCurrentValue(Math.round(start)); // Round to avoid decimals
      }
    }, 10); // Delay in ms, adjust for smoothness

    return () => clearInterval(timer); // Cleanup the interval
  }, [value, duration]);

  return <span>{currentValue}</span>;
};

export default function Home() {
  const [teaData, setTeaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const itemsPerSlide = 3;

  // Fetch tea data from the public directory
  useEffect(() => {
    const fetchTeaData = async () => {
      try {
        const response = await axios.get("/assets/data/teaData.json");
        setTeaData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching tea data");
        setLoading(false);
      }
    };

    fetchTeaData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teaData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [teaData]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* 1 */}
      <FundRaising animatedNumber={AnimatedNumber} />
      {/* 2 */}
      <div className="flex flex-col xl:flex-row justify-between mt-20 sm:mt-8">
        <div>
          <Image
            src={kidstrophy}
            alt="kidstrophy"
            width={1495}
            height={500}
            className="xl:h-96 xl:shadow-md"
          ></Image>
        </div>
        <div className="bg-[#eca30c] text-white p-4 sm:p-8 lg:p-8 h-64 sm:h-full xl:h-96 flex flex-col items-start gap-2 sm:gap-4 relative">
          <p className="text-lg md:text-3xl font-semibold animate-grow">
            Raise funds to accomplish your Dreams & Goals
          </p>
          <div className="animate-grow">
            <hr className="w-20 border-t-2 sm:border-t-4 border-[#009368]" />
          </div>
          <p className="font-medium md:mb-8 animate-grow">
            Our hassle-free virtual fundraiser allows you to focus on what you
            do best while we handle all the heavy lifting.
          </p>

          {/* Apply grow animation to the Button */}
          <Link
            href="/register"
            className="bg-[#eca30c] border-2 border-white text-white font-medium hover:bg-white rounded-lg hover:text-black absolute 
            bottom-2 lg:bottom-4 px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 text-sm sm:text-base md:text-lg lg:text-xl 
            transition-transform transform hover:scale-105 animate-grow"
          >
            <div className="flex items-center gap-3">
              <p>Discover More</p> <FaHeart />
            </div>
          </Link>
        </div>

        <div className="bg-[#009368] text-white p-4 sm:p-8 lg:p-10 h-64 sm:h-full xl:h-96 flex flex-col items-start gap-2 sm:gap-4 relative">
          <p className="text-lg md:text-3xl font-semibold animate-grow">
            Spread goodness all around with our Premium teas
          </p>
          <div className="animate-grow">
            <hr className="w-20 border-t-2 sm:border-t-4 border-[#eca30c]" />
          </div>
          <p className="font-medium  md:mb-8 animate-grow">
            Our selection of premium teas allows you to spread goodness to your
            biggest supporters. Be Good, Do Good, Live Good.
          </p>

          {/* Apply the grow animation to the Button */}
          <Link
            href="/shop"
            className="bg-[#009368] border-2 border-white text-white font-medium hover:bg-white rounded-lg hover:text-black absolute 
            bottom-2 lg:bottom-4 px-2 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 text-sm sm:text-base md:text-lg lg:text-xl 
            transition-transform transform hover:scale-105 animate-growButton"
          >
            <div className="flex items-center gap-3">
              <p>Shop Our Teas</p> <FaHeart />
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-[#eca30c] h-6 md:h-7 lg:h-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[6f7775] my-8 lg:my-20 overflow-hidden w-[300vw] sm:w-[200vw] md:w-[150vw] lg:w-[100vw]">
        {isClient && (
          <Marquee pauseOnHover direction="right" speed={80}>
            <div className="flex items-center gap-10 sm:gap-16 md:gap-20 lg:gap-28">
              <p className="hover:text-[#ECA30C]">
                Teas that do good by you, and the World around you
              </p>
              <p className="hover:text-[#ECA30C]">
                Teas that do good by you, and the World around you
              </p>
            </div>
          </Marquee>
        )}{" "}
      </div>
      {/* 3 */}
      <WhyChooseUs />

      {/* 4 */}
      <PremiumTeas
        itemsPerSlide={itemsPerSlide}
        currentIndex={currentIndex}
        teaData={teaData}
      />
      {/* 5 */}
      <div className="bg-[#eca30c] h-6 md:h-7 lg:h-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[6f7775] my-8 lg:my-20 overflow-hidden w-[300vw] sm:w-[200vw] md:w-[150vw] lg:w-[100vw]">
        <Marquee pauseOnHover direction="right" speed={80}>
          <div className="flex items-center gap-10 sm:gap-16 md:gap-20 lg:gap-28">
            <div className="flex items-center  gap-10 sm:gap-16 md:gap-20 lg:gap-28">
              <p className="hover:text-[#ECA30C]">Be Good</p>
              <p className="hover:text-[#ECA30C]">Do Good</p>
              <p className="hover:text-[#ECA30C]">Live Good</p>
            </div>
            <div className="flex items-center gap-10 sm:gap-16 md:gap-20 lg:gap-28">
              <p className="hover:text-[#ECA30C]">Be Good</p>
              <p className="hover:text-[#ECA30C]">Do Good</p>
              <p className="hover:text-[#ECA30C]">Live Good</p>
            </div>
            <div className="flex items-center gap-10 sm:gap-16 md:gap-20 lg:gap-28">
              <p className="hover:text-[#ECA30C]">Be Good</p>
              <p className="hover:text-[#ECA30C]">Do Good</p>
              <p className="hover:text-[#ECA30C]">Live Good</p>
            </div>
          </div>
        </Marquee>
      </div>

      {/* 6 */}
      <HowItWorks />
      <GetStarted animatedNumber={AnimatedNumber} />
    </div>
  );
}
