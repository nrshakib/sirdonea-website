import React from "react";
import bannarSecImg from "../../../public/assets/images/Get Start/bg_home3.jpg";

const BannarSec = () => {
  return (
    <div
      className="h-auto bg-cover bg-center py-20 px-6"
      style={{ background: `url(${bannarSecImg.src})` }}
    >
      <div className="text-white">
        <p className="sm:text-3xl font-bold mb-6 text-[#213430] text-center">
          Fundraising has Never been so easy! <br />
          Let&apos;s
          <span className="relative inline-block px-2 py-1 text-[#009368]">
            Get Started
            {/* Visible Circles */}
            <span className="absolute left-0 right-0 bottom-[-20px] flex items-center justify-center w-full h-10 space-x-4">
              {/* Left circle */}
              <span className="w-[20px] h-[20px] bg-[#ECA30C] rounded-full transition-transform duration-300 ease-in-out hover:scale-125"></span>
              {/* Middle circle */}
              <span className="w-[20px] h-[20px] bg-[#009368] rounded-full transition-transform duration-300 ease-in-out hover:scale-125"></span>
              {/* Right circle */}
              <span className="w-[20px] h-[20px] bg-[#ECA30C] rounded-full transition-transform duration-300 ease-in-out hover:scale-125"></span>
            </span>
          </span>
        </p>
        <p className="text-sm sm:text-xl text-[#213430] text-center w-full sm:w-96 md:w-3/4 lg:w-1/2 mx-auto px-4">
          We understand fundraising can be a daunting task. That’s why we’ve
          taken all the heavy lifting out & made it easy for you to focus on
          what you do best. #winning <br />{" "}
          <span className="inline-block mt-2 sm:mt-6">
            To get started, simply complete the below steps:
          </span>
        </p>
      </div>
    </div>
  );
};

export default BannarSec;
