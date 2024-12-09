import ProgressBars from "@/components/ui/ProgressBar";
import React from "react";

const FundriseOverview = () => {
  return (
    <div className="lg:w-[70%] mx-auto p-6 bg-white ">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 ">
          Fundraiser Event Name Overview
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center text-[#009368] mb-5">
          30 days until event ends!
        </h3>
        <h3 className="text-xl md:text-2xl font-bold text-center mb-10 ">
          Current place: 1st
        </h3>
      </div>
      <div className="mb-20">
        <ProgressBars />
      </div>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Left Side: Supporters */}
        <div className="border-r-2 border-black pr-6">
          <h2 className="text-lg font-bold mb-4">Supporters</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>1. Diana Ross</span>
              <span>$1000</span>
            </li>
            <li className="flex justify-between">
              <span>2. Michael Jordan</span>
              <span>$980</span>
            </li>
            <li className="flex justify-between">
              <span>3. Boba Fett</span>
              <span>$720</span>
            </li>
            <li className="flex justify-between">
              <span>4. Elton John</span>
              <span>$500</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Pop-Up Store Info, Earnings, and Rankings */}
        <div className="pl-6">
          <h2 className="text-lg font-bold">Pop-up Store Link:</h2>
          <a href="#" className="text-[#eca30c] font-semibold">
            URL to pop-up store
          </a>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Current Earnings:</h2>
            <p className="text-green-600 text-2xl font-semibold">$-</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Team Rankings</h2>
            <ul className="space-y-2">
              <li className="font-bold">
                1. <span className="underline">Your name here</span>
              </li>
              <li>2. Michael Jordan</li>
              <li>3. Boba Fett</li>
              <li>4. Elton John</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundriseOverview;
