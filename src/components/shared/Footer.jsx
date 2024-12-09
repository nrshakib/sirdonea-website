"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TbMinusVertical } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import logo from "@/../public/assets/images/SmallLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Button, TextField } from "@mui/material";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div>
      <div className="container px-5 mx-auto flex flex-col lg:flex-row justify-between gap-10  w-full py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:w-1/4">
          <Image src={logo} alt="Logo" />
          <p className=" text-[6f7775] w-2/3">
            Created with you in mind, our sole purpose is to help you reach your
            goals. Our motto:{" "}
            <span className="font-bold italic">
              Be Good, Do Good, Live Good
            </span>{" "}
            is not just what we do, its our way of life.
          </p>
          <div className="flex  gap-5 text-[#eca30c]">
            {/* <Link href="">
              <FaTwitter fontSize={30} />
            </Link> */}
            <Link
              href="https://www.instagram.com/teasforacause/
"
            >
              <FaInstagram fontSize={30} />
            </Link>
            <Link
              href="https://www.facebook.com/teasforacause
"
            >
              <FaFacebook fontSize={30} />
            </Link>
            <Link href="https://www.pinterest.com/teasforacause/">
              <FaPinterest fontSize={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/4">
          <p className="text-2xl font-semibold">Quick Links</p>
          <Link
            href="/"
            className="text-gray-600 font-semibold text-lg hover:text-[#eca30c]"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-gray-600 font-semibold text-lg hover:text-[#eca30c]"
          >
            Get Started
          </Link>
          <Link
            href="/"
            className="text-gray-600 font-semibold text-lg hover:text-[#eca30c]"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-gray-600 font-semibold text-lg hover:text-[#eca30c]"
          >
            My Account
          </Link>
          <Link
            href="https://teasforacause.com/contact-us/"
            className="text-gray-600 font-semibold text-lg hover:text-[#eca30c]"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-6 lg:w-1/4">
          <p className="text-2xl font-semibold">Quick links</p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="bg-[#eca30c] text-5xl p-3 rounded-full text-white" />
            <div>
              <p>Text Only</p>
              <p>(202) 573-7003</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="bg-[#eca30c] text-5xl p-3 rounded-full text-white" />
            <div>
              <p>info@teasforacause.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/4">
          <p className="sm:text-xl font-semibold">
            Subscribe to Our Newsletter
          </p>
          <p className="text-sm sm:text-base text-[6f7775]">
            Subscribe and stay up to date with our news and upcoming events.
          </p>
          <div className="flex">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              // sx={{ height: ((sm = "20px"), (md = "40px")) }}
            />
            <Button
              sx={{
                bgcolor: "#eca30c",
                color: "white",
                fontWeight: "bold",
                padding: "0 30px",
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#009368]  text-white">
        <div className="container px-5 py-5 mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <Link
              className={`text-lg font-semibold hover:text-[#eca30c] lg:py-0 py-2 border-[#eca30c] [&.active]:text-[#eca30c] ${
                pathname === "/" ? "active" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <TbMinusVertical className="hidden lg:block" fontSize={32} />
            <Link
              className={`text-lg  font-semibold hover:text-[#eca30c] lg:py-0 py-2 border-[#eca30c] [&.active]:text-[#eca30c] ${
                pathname === "/about-us" ? "active" : ""
              }`}
              href="/about-us"
            >
              About Us
            </Link>
            <TbMinusVertical className="hidden lg:block" fontSize={32} />
            <Link
              className={`text-lg font-semibold hover:text-[#eca30c] lg:py-0 py-2 border-[#eca30c] [&.active]:text-[#eca30c] ${
                pathname === "/shop" ? "active" : ""
              }`}
              href="/shop"
            >
              Shop
            </Link>
            <TbMinusVertical className="hidden lg:block" fontSize={32} />
            <Link
              className={`text-lg font-semibold hover:text-[#eca30c] lg:py-0 py-2 border-[#eca30c] [&.active]:text-[#eca30c] ${
                pathname === "/my-account" ? "active" : ""
              }`}
              href="/my-account"
            >
              My Account
            </Link>
            <TbMinusVertical className="hidden lg:block" fontSize={32} />
            {pathname !== "/shop" && (
              <Link
                className={`text-lg font-semibold hover:text-[#eca30c] border-[#eca30c] [&.active]:text-[#eca30c] ${
                  pathname === "/pop-up" ? "active" : ""
                }`}
                href="/pop-up"
              >
                Individual Pop Up
              </Link>
            )}
          </div>
          <p className="pt-10 lg:pT-0">© Natirél 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
