/* eslint-disable react/no-unescaped-entities */
import React from "react";
import accountImg from "../../../public/assets/images/Get Start/IMG_0139-scaled.jpg";
import questionImg from "../../../public/assets/images/Get Start/bg_banner.png";
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";

const AccountSec = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image
            src={accountImg}
            alt="Image"
            className="lg:h-[350px] lg:w-[1200px] xl:h-[500px]"
          />
        </div>
        <div className="relative bg-[#ECA30C] p-4 sm:p-8 xl:p-12 text-white flex flex-col  h-[230px] sm:h-[250px] lg:h-[350px] xl:h-[500px]">
          <div className="flex-grow  flex flex-col sm:gap-3 xl:gap-4">
            <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-5xl font-semibold">
              Create your Account & Register your event
            </p>
            <p>
              <span className="w-16 h-1 bg-[#009368] inline-block"></span>
            </p>
            <p className="text-sm sm:text-base xl:text-lg">
              Provide some basic information about your organization & choose
              when you want to start your 7-day fundraiser.
            </p>
          </div>
          <Link
            href="/signup"
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 lg:left-5 xl:left-12 text-center border border-white py-3 px-7 rounded-md font-bold xl:text-lg text-white w-52 hover:bg-white hover:text-black"
          >
            Create Account
          </Link>
        </div>

        <div className="relative bg-[#009368] p-4 sm:p-8 xl:p-12 text-white flex flex-col sm:gap-2 xl:gap-4 h-[230px] sm:h-[250px] lg:h-[350px] xl:h-[500px]">
          <div className="flex-grow  flex flex-col sm:gap-3 xl:gap-4">
            <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-5xl font-semibold">
              Start Preparing Your Team For Success
            </p>
            <p>
              <span className="w-16 h-1 bg-[#ECA30C] inline-block"></span>
            </p>
            <p className="text-sm sm:text-base xl:text-lg">
              After approval, participants set-up their store and begin sharing
              with supporters via text, email and/or social media.
            </p>
          </div>
          <Link
            href=""
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 lg:left-5 xl:left-12 text-center border border-white py-3 px-7 rounded-md font-bold xl:text-lg text-white w-52 hover:bg-white hover:text-black"
          >
            Resources
          </Link>
        </div>
      </div>

      <div
        className="container mx-auto shadow bg-cover bg-center rounded-2xl"
        style={{ background: `url(${questionImg.src})` }}
      >
        <div className="flex flex-col gap-3 p-5 sm:p-10 lg:p-20">
          <p className="sm:text-2xl font-bold text-[#009368]">
            Questions or Need Help?
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="md:text-2xl lg:text-4xl font-semibold py-3 leading-tight text-[#213430] sm:w-96 md:w-3/4 lg:w-1/2">
              We're here for you! Contact Us for help with any question
            </p>
            <Link
              href="contact-us"
              className="bg-[#ECA30C] text-white py-4 px-8 rounded-md font-bold hover:bg-white hover:text-black hover:border-2 hover:border-[#ECA30C]"
            >
              Contact Us
            </Link>
          </div>
          <p>
            <span className="w-16 h-1 bg-[#ECA30C] hidden sm:inline-block"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSec;
