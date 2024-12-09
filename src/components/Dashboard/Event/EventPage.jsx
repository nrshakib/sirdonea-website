import ProgressBars from "@/components/ui/ProgressBar";
import Link from "next/link";
import React from "react";

const EventPage = () => {
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
          <button
            type="submit"
            className="bg-[#eca30c] text-white w-full px-3 py-2 mt-5"
          >
            Submit
          </button>
        </div>

        {/* Right Side: Pop-Up Store Info, Earnings, and Rankings */}
        <div className=" pl-6">
          <h3 className="text-2xl font-bold">Event Code:</h3>

          <div className="mt-6">
            <p className="text-[#eca30c] text-4xl font-semibold text-center">
              WMDTF
            </p>
          </div>

          <div className="mt-6 border-4 border-[#009368] w-[70%] mx-auto">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold">Payout Earnings</h2>
              <p className="text-4xl font-semibold text-[#009368]">$5000</p>
            </div>
            <Link href="/my-account/events/payout-method ">
              <div className="w-full bg-red-600 py-3 text-center text-white">
                <h2 className="text-2xl font-bold">Add payout info.</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
