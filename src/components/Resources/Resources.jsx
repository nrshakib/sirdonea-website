/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import ResourcesBanner from "./ResourcesBanner";
import baseballCoach from "../../../public/assets/images/Stock Photos/baseball-coach.jpg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Accordion from "../ui/Accordion";
import Link from "next/link";

const accordionData = [
  {
    title: "How Do I Get Started?",
    content: (
      <div>
        Getting started is simple and easy. First you need to register your
        organization and choose when to start your fundraiser. Next your
        participants set-up their storefront and begin sharing the link with
        supporters. Orders are sent to us and we ship directly to your
        supporters. Find out more{" "}
        <Link href="/register" className="text-[#ECA30C]">
          here
        </Link>
      </div>
    ),
  },
  {
    title: "What resources are available to help us sell?",
    content:
      "We’ve put together some resources that will help spread the word. You can find them here.",
  },
  {
    title: "How Do I Get My Payout?",
    content: (
      <div>
        After the fundraiser ends, payouts are sent by direct deposit (ACH) to
        the account of your choosing within 2-3 days. You can also choose to
        receive a paper check by USPS ($5 processing fee deducted from your
        payout funds).
        <br />
        During registration, you will need to provide how you want to receive
        the payment. If direct deposit, you will need to provide the account
        details (bank routing number and account number). If you want a check,
        you will need to provide the name and mailing address it should be sent
        to. Checks can take up to 1-2 weeks to receive.
      </div>
    ),
  },
  {
    title: "Can I Run The Fundraiser Longer Than 7 Days?",
    content: "No, the fundraiser can only run for 7 days. ",
  },
  {
    title: "Are There Any Fees or Minimums?",
    content: (
      <div>
        No, there are no additional fees or minimums that need to be met to run
        the fundraiser. You will receive 50% of what you sell. <br /> If you
        choose to receive a paper check, you will incur a $5 processing fee (to
        be deduct from your payout proceeds).
      </div>
    ),
  },
  {
    title: "How Can I buy teas if I'm not supporting a fundraiser?",
    content: (
      <div>
        You can shop our teas 24/7 from our{" "}
        <Link href="/pop-up" className="text-[#ECA30C]">
          Shop
        </Link>{" "}
        section. We partner with several organizations throughout the year, in
        which you can support their causes by shopping at their online store.
        Simply choose the organization you want to support, and you will be
        taken to their online store. 50% of your purchase will be donated to
        that organization.
      </div>
    ),
  },
];
const Resources = () => {
  return (
    <div
      className="bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
      style={{ backgroundImage: `url(${baseballCoach.src})` }}
    >
      <div className="">
        <ResourcesBanner />
        <div className="bg-white w-full ">
          <div className="container mx-auto px-4 py-20">
            {/* Title Section */}
            <div className="text-center mb-16 flex flex-col justify-center items-center">
              <h2 className="text-[#009368] text-xl md:text-2xl font-semibold mb-5">
                Need Help?
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-5">
                The Answers to All Your Questions
              </h1>
              <div className="bg-[#ECA30C] w-20 h-1 "></div>
            </div>

            <div className=" flex flex-col lg:flex-row gap-8 px-4 lg:px-0">
              {/* Left Side - Common Questions */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Most Common Questions
                </h3>
                <div className="bg-[#ECA30C] w-20 h-1 mb-5"></div>
                <p className="text-[#6f7775] md:text-lg mb-6">
                  We understand organizing and running a fundraiser can be a
                  daunting task. Which is why we’ve put together this guide to
                  answer some of your most common questions.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <IoIosArrowDroprightCircle className="text-[#009368] size-6" />
                    <p className="ml-2 font-semibold text-lg">
                      How to get started?
                    </p>
                  </li>
                  <li className="flex items-start">
                    <IoIosArrowDroprightCircle className="text-[#009368] size-6" />
                    <p className="ml-2 font-semibold text-lg">
                      What resources are available to help sell?
                    </p>
                  </li>
                  <li className="flex items-start">
                    <IoIosArrowDroprightCircle className="text-[#009368] size-6" />
                    <p className="ml-2 font-semibold text-lg">
                      How do I get my payout?
                    </p>
                  </li>
                </ul>
                <div className=" mt-10 px-4 lg:px-0">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    Support
                  </h3>
                  <div className="bg-[#ECA30C] w-20 h-1 mb-5"></div>
                  <p className="text-[#6f7775] mb-6">
                    Still have questions you need answered? Feel free to get in
                    touch with us through email or phone (direct chat via text
                    is preferred and the quickest way to receive support).
                  </p>
                  <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 space-x-4 lg:space-y-0">
                    <div className="flex items-center space-x-2">
                      <MdEmail className="text-[#ECA30C] size-10 md:size-14" />
                      <div className="text-[#6f7775] text-lg md:text-xl">
                        <p className="font-semibold">Email Address</p>
                        <p className="">info@teasforacause.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-[#ECA30C] size-8 md:size-10" />
                      <div className="text-[#6f7775] text-lg md:text-xl">
                        <p className="font-semibold">Phone Number</p>
                        <p className="">(202) 573-7003</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Placeholder for Accordion */}
              <div className="lg:w-1/2">
                {/* This is where the accordion will go */}
                <div className="space-y-4">
                  {accordionData.map((accordion, index) => (
                    <Accordion
                      key={index}
                      title={accordion.title}
                      content={accordion.content}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Support Section */}
          </div>
        </div>
        <div className="bg-black/60 ">
          <div className=" py-20 bg-[#009368]/5">
            <div className="text-center mb-16 flex flex-col justify-center items-center">
              <h2 className="text-[#009368] text-xl md:text-2xl font-semibold mb-5">
                Ready to Get Started?
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white">
                Let us help you achieve your fundraising goals
              </h1>
              <div className="bg-[#ECA30C] w-20 h-1 "></div>
              <p className="text-white text-lg mt-10">
                Our hassle-free virtual fundraiser allows you to focus on what
                you do best while we handle all the heavy lifting
              </p>
              <div className="border-2 py-1 sm:py-3 px-2 md:px-1 lg:px-10 rounded-lg bg-[#ECA30C] border-[#ECA30C] hover:bg-[#ECA30C] hover:border-[#ECA30C] text-white mt-10">
                <Link href="/register">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <p className="text-sm md:text-base lg:text-lg font-semibold">
                      Let's Get Started{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
