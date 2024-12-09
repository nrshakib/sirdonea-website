"use client";
import Link from "next/link";
import React, { useState } from "react";

const PayoutMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("direct-deposit");

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };
  console.log(selectedMethod);

  return (
    <div className="lg:w-[70%] mx-auto p-6 bg-white ">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 ">Payout Method</h2>
      <div className="bg-gray-100 p-10 my-5 rounded-md shadow-md">
        {/* Direct Deposit Option */}
        <label className="flex items-start space-x-3 mb-4">
          <input
            type="radio"
            name="payoutMethod"
            value="direct-deposit"
            checked={selectedMethod === "direct-deposit"}
            onChange={handleMethodChange}
            className="size-5 mt-2"
          />
          <div>
            <span className="text-2xl font-semibold">
              Direct Deposit via ACH transfer
            </span>
            <p className=" text-gray-600">
              Earnings will be electronically transferred to your account in 3-7
              days.
            </p>
          </div>
        </label>

        {/* Check Option */}
        <label className="flex  items-start space-x-3">
          <input
            type="radio"
            name="payoutMethod"
            value="check"
            checked={selectedMethod === "check"}
            onChange={handleMethodChange}
            className="size-5 mt-2"
          />
          <div>
            <span className=" text-2xl font-semibold">Check</span>
            <p className=" text-gray-600">
              Earnings will be mailed by paper check and received in 2-3 weeks.
              A fee of $2.00 will be deducted from your earnings to cover
              expenses.
            </p>
          </div>
        </label>
      </div>

      {/* Next Button */}
      <Link
        href={`/my-account/events/payout-method/add-account?method=${selectedMethod}`}
      >
        <div className="text-right">
          <button className="mt-5 bg-[#009368] text-white py-2 px-8 rounded-md ">
            Next
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PayoutMethod;
