import Image from "next/image";
import React from "react";
import volunteers from "@/../public/assets/images/Stock Photos/volunteers.png";
import { FaHeart } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-10 sm:mx-20 lg:mx-40 xl:mx-56 my-24 md:my-32 xl:my-48 2xl:my-64">
      <div className="px-2 sm:px-0">
        <div>
          <p className="text-[#009368] sm:text-lg font-semibold">
            How It Works
          </p>
          <p className="text-2xl xl:text-4xl font-bold text-[#213430]">
            Get Started in 3 Easy Steps
          </p>
          <div className="my-2 sm:my-5">
            <hr className="w-20 border-t-4 border-[#ECA30C]" />
          </div>
        </div>
        <div className="flex flex-col gap-10 my-4 sm:my-14">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center">
              <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
              <span className="absolute text-white font-bold sm:text-xl">
                01
              </span>
            </div>
            <div>
              <p className="sm:text-lg font-bold text-gray-800">
                Register your Organization
              </p>
              <p className="text-[6f7775] sm:w-2/3 text-sm sm:text-base">
                Choose when you want to start your 7-day fundraiser & start
                preparing your team for success.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center">
              <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
              <span className="absolute text-white font-bold sm:text-xl">
                02
              </span>
            </div>
            <div>
              <p className="sm:text-lg font-bold text-gray-800">
                Create your team store
              </p>
              <p className="text-[6f7775] sm:w-2/3 text-sm sm:text-base">
                Participates set-up their store and begin sharing with
                supporters via Text, Email and/or Social Media.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center">
              <FaHeart className="text-[#009368] text-4xl sm:text-7xl" />
              <span className="absolute text-white font-bold sm:text-xl">
                03
              </span>
            </div>
            <div>
              <p className="sm:text-lg font-bold text-gray-800">
                Sit back & watch the magic happen
              </p>
              <p className="text-[6f7775] sm:w-2/3 text-sm sm:text-base">
                Orders are sent to us & we ship directly to your supporters.
                Once the fundraiser ends, we pay you 50% of the sales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 sm:my-0">
        <Image
          src={volunteers}
          alt="Volunteers"
          width={600}
          height={800}
          className="rounded-full lg:scale-150"
        />
      </div>
    </div>
  );
}
