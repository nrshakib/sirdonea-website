import Image from "next/image";
import kidssoccer from "../../../public/assets/images/Stock Photos/kidssoccer.png";
import wave from "../../../public/assets/images/wave.png";
import questionImg from "../../../public/assets/images/Get Start/bg_banner.png";

import { Button } from "@mui/material";
import Link from "next/link";

const OurMission = () => {
  return (
    <div className="py-20 lg:mt-40">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="">
            <p className="text-xl md:text-2xl font-bold text-[#009368] mb-5 mt-3">
              Our Mission
            </p>
            <h1 className="text-4xl font-bold mb-6">Core Values & Goals</h1>
            <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full my-5"></div>
            <p className="text-gray-700 mb-6 text-xl">
              Everybody has dreams and goals, that’s the easy part. How you
              reach them can be difficult, especially when there are many
              roadblocks, such as economic disadvantages to overcome. Here at
              Natirél, we’re on a mission to bridge that gap by providing a
              virtual fundraising solution of quality tea products that do good
              by you and the world around you...
            </p>
          </div>

          <Image
            src={kidssoccer}
            alt="Children playing soccer"
            width={0}
            height={0}
            className="rounded-full"
          />
        </div>
      </div>
      <div
        className="container mx-auto shadow bg-cover bg-center rounded-2xl"
        style={{ background: `url(${questionImg.src})` }}
      >
        <div className="p-5 sm:p-10 lg:p-20">
          <p className="text-2xl font-bold text-[#009368]">
            Ready to Start Fundraising?
          </p>
          <div className="md:flex justify-between items-center">
            <p className="text-4xl font-semibold py-3 leading-tight text-[#213430] sm:w-96 md:w-3/4 lg:w-1/2">
              Learn more about our Hassle-Free Virtual Fundraiser
            </p>
            <Link
              href="register"
              className="bg-[#ECA30C] text-white py-4 px-8 rounded-md font-bold"
            >
              Learn More
            </Link>
          </div>
          <p>
            <span className="w-16 h-1 bg-[#ECA30C] inline-block"></span>
          </p>
        </div>
      </div>
      {/* <section
        className=" bg-center bg-no-repeat bg-cover ] w-full py-20 mt-20"
        style={{
          backgroundImage: `url(${wave.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
      >
        <div className="container px-5 mx-auto ">
          <div className=" px-4 ">
            <h2 className="text-xl md:text-2xl font-semibold text-[#009368] mb-5 mt-3">
              Ready to Start Fundraising?
            </h2>
            <h1 className="text-4xl font-bold mb-6">
              Learn more about our Hassle-Free Virtual Fundraiser
            </h1>
          </div>

          <Button
            sx={{
              bgcolor: "#D58C13",
              border: "2px solid white",
              marginTop: "25px",
              p: "16px 20px",
              fontSize: "16px",
              width: "220px",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              ":hover": { bgcolor: "#D58C13", color: "white" },
              // position: "absolute",
              // bottom: "40px",
            }}
          >
            <p>Learn More</p>
          </Button>
        </div>
      </section> */}
    </div>
  );
};

export default OurMission;
