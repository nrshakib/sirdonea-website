"use client";
import bgGoal from "../../..//public/assets/images/bg_goal.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";

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
    }, 2); // Delay in ms, adjust for smoothness

    return () => clearInterval(timer); // Cleanup the interval
  }, [value, duration]);

  return <span>{currentValue}</span>;
};

const OurGoal = () => {
  return (
    <div>
      <div
        className=" bg-center bg-no-repeat bg-cover ] w-full py-20"
        style={{
          backgroundImage: `url(${bgGoal.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
      >
        <div className="container mx-auto">
          <p className="md:text-2xl font-bold text-[#009368] mb-5 text-center">
            Helping you Win is Our Goal
          </p>
          <p className=" text-xl sm:text-4xl lg:text-5xl font-bold text-[#213430] mb-5 text-center">
            What Make Us Different
          </p>
          <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-5 mx-auto"></div>
          <div></div>
          <div className="sm:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            <div className="flex justify-center items-center flex-col hover:bg-white p-5 hover:shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-110">
              <div className="p-5 rounded-full bg-[#ECA30C] sm:mb-3">
                <FaGraduationCap size={50} className="text-white" />
              </div>
              <p className="text-xl text-center font-bold sm:mb-2">We Educate</p>
              <p className="text-lg text-center font-semibold text-[#A0A5A4]">
                Sustainable tea <br /> consumption
              </p>
            </div>

            <div className="flex justify-center items-center flex-col hover:bg-white p-5 hover:shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-110">
              <div className="p-5 rounded-full bg-[#ECA30C] sm:mb-3">
                <HiMiniUserGroup size={50} className="text-white" />
              </div>
              <p className="text-xl text-center font-bold sm:mb-2">We Help</p>
              <p className="text-lg text-center font-semibold text-[#A0A5A4]">
                SuPartnering with Local & National organizations
              </p>
            </div>

            <div className="flex justify-center items-center flex-col hover:bg-white p-5 hover:shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-110">
              <div className="p-5 rounded-full bg-[#ECA30C] sm:mb-3">
                <FaHouseChimney size={50} className="text-white" />
              </div>
              <p className="text-xl text-center font-bold sm:mb-2">
                We Build{" "}
              </p>
              <p className="text-lg text-center font-semibold text-[#A0A5A4]">
                Investing in our Community
              </p>
            </div>

            <div className="flex justify-center items-center flex-col hover:bg-white p-5 hover:shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-110">
              <div className="p-5 rounded-full bg-[#ECA30C] sm:mb-3">
                <BiSolidDonateHeart size={50} className="text-white" />
              </div>
              <p className="text-xl text-center font-bold sm:mb-2">
                We Donate
              </p>
              <p className="text-lg text-center font-semibold text-[#A0A5A4]">
                50% of all sales raised goes to our partners
              </p>
            </div>
          </div>
            <div className="-mb-20 lg:-mb-48">
              <div className=" bg-white w-full rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  shadow-lg ">
                <div className="flex justify-center items-center flex-col sm:p-10">
                  <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#009368] sm:mb-5 ">
                    $ <AnimatedNumber value={150} duration={2000} />K
                  </p>
                  <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-3"></div>
                  <p className="text-xl font-bold">Donated to Partners</p>
                </div>
                <div className="flex justify-center items-center flex-col sm:p-10">
                  <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#009368] sm:mb-5">
                    <AnimatedNumber value={100} duration={2000} />+
                  </p>
                  <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-3"></div>
                  <p className="text-xl font-bold">Fundraisers Hosted</p>
                </div>
                <div className="flex justify-center items-center flex-col sm:p-10">
                  <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#009368] sm:mb-5">
                    <AnimatedNumber value={10} duration={2000} />K
                  </p>
                  <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-3"></div>
                  <p className="text-xl font-bold">Cans of Teas Shipped</p>
                </div>
                <div className="flex justify-center items-center flex-col bg-[#009368] p-10">
                  <div className="text-white">
                    <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-3 mr-auto"></div>
                    <p className="text-xl md:text-2xl font-bold  mb-5">
                      Help us reach our 2024 Goals
                    </p>
                    <div>
                      <div className="text-lg font-bold hover:text-[#ECA30C] flex items-center gap-2">
                        <p>Make a Difference</p>
                        <FaLongArrowAltRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
