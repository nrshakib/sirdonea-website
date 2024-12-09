import ProgressBars from "@/components/ui/ProgressBar";
import Link from "next/link";
import React from "react";

export default function JoinFundraiser() {
  return (
    <div className="lg:w-[70%] mx-auto p-6 bg-white ">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 ">
          Organization Name Fundraiser Overview
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center text-[#009368] mb-5">
          30 days until event ends!
        </h3>
      </div>
      <div className="mb-20">
        <ProgressBars />
      </div>
      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Left Side: Participants */}
        <div className="border-r-2 border-black pr-6">
          <h2 className="text-lg font-bold mb-4">Participants</h2>
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
          <button
            type="submit"
            className="bg-[#eca30c] text-white w-full px-3 py-2 mt-5"
          >
            Submit
          </button>
        </div>

        {/* Right Side: Pop-Up Store Info, Earnings, and Rankings */}
        <div className="p-3">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">Pop-up Store Link:</p>
            <Link
              href="/my-account/pop-up-store"
              className="text-2xl text-[#eca30c] text-center font-bold"
            >
              URL to pop-up store
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className=" text-xl font-semibold">Current Earnings:</p>
            <p className="text-[#009368] text-4xl font-semibold text-center">
              $1000
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xl font-bold">Team Rankings:</p>
            <div className="p-6 text-center">
              <div className="flex items-center justify-between">
                <p>1. Your name</p>
                <p>$ 1000</p>
              </div>
              <div className="flex items-center justify-between">
                <p>2. Michael Jordan </p>
                <p>$ 300</p>
              </div>
              <div className="flex items-center justify-between">
                <p>3. Boba Fett</p>
                <p>$ 600</p>
              </div>
              <div className="flex items-center justify-between">
                <p>4. Elton John</p>
                <p>$ 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
