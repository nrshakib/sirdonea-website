import React from "react";
import questionImg from "../../../public/assets/images/Get Start/bg_banner.png";

const ShopBanner = () => {
  return (
    <div>
      <div
        className="container mx-auto p-5 sm:p-10 lg:p-20 shadow-lg rounded-2xl "
        style={{ background: `url(${questionImg.src})` }}
      >
        <p className="text-[#009368] text-base sm:text-2xl font-bold">
          50% of Your Purchase goes to the Organization
        </p>
        <p className="text-[#213430] text-xl sm:text-5xl font-semibold py-3 leading-tight ">
          Choose the Cause You Want to Support to Shop their Online Store
        </p>
        <p>
          <span className="w-16 h-1 bg-[#ECA30C] inline-block"></span>
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
