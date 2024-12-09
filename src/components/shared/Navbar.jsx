"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/../public/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaHeart, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false); // New state for About Us dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Separate state for mobile dropdown
  const pathname = usePathname();

  const aboutDropdownRef = useRef(null); // Ref for the dropdown
  const mobileDropdownRef = useRef(null); // Ref for mobile dropdown

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // If clicked outside of the dropdown, close it
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }

      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle the dropdown
  const handleToggleDropdown = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the document
    setAboutDropdownOpen((prev) => !prev);
  };

  // Toggle the mobile dropdown
  const handleToggleMobileDropdown = (e) => {
    e.stopPropagation();
    setMobileDropdownOpen((prev) => !prev);
  };

  return (
    <div className="py-2 lg:py-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between container mx-auto px-5">
        <Link href="/">
          <Image alt="logo" src={logo} className="size-10 lg:size-16"></Image>
        </Link>
        <div className="hidden lg:flex items-center gap-5">
          <Link
            className={`text-lg text-gray-700 font-semibold hover:text-[#eca30c]border-t-2 border-transparent hover:border-t-2 hover:border-[#eca30c] [&.active]:text-[#eca30c] [&.active]:border-t-2 [&.active]:border-[#eca30c] py-10 ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          {/* About Us Dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              className={`text-lg text-gray-700 font-semibold hover:text-[#eca30c] border-t-2 border-transparent hover:border-t-2 hover:border-[#eca30c] [&.active]:text-[#eca30c] [&.active]:border-t-2 [&.active]:border-[#eca30c] py-10 ${
                pathname === "/about-us" ||
                pathname === "/resources" ||
                pathname === "/explore-our-teas"
                  ? "active"
                  : ""
              }`}
              onClick={handleToggleDropdown}
            >
              About Us
            </button>
            {aboutDropdownOpen && (
              <div
                className="absolute left-0 mt-1 w-48 bg-white shadow-2xl rounded-lg py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setAboutDropdownOpen((prev) => !prev);
                }}
              >
                <Link
                  className={`block text-center text-lg text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-2 ${
                    pathname === "/about-us" ? "active" : ""
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
                <Link
                  className={`block text-center text-lg text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-2 ${
                    pathname === "/resources" ? "active" : ""
                  }`}
                  href="/resources"
                >
                  Resources
                </Link>
                <Link
                  className={`block text-center text-lg text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-2 ${
                    pathname === "/explore-our-teas" ? "active" : ""
                  }`}
                  href="/explore-our-teas"
                >
                  Explore Our Teas
                </Link>
              </div>
            )}
          </div>

          <Link
            className={`text-lg text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-10 ${
              pathname === "/shop" ? "active" : ""
            }`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`text-lg text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-10 ${
              pathname.includes("/my-account") ? "active" : ""
            }`}
            href="/my-account"
          >
            My Account
          </Link>
          {pathname.includes("my-account") === false && (
            <Link
              className={`text-lg text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-10 ${
                pathname === "/pop-up" ? "active" : ""
              }`}
              href="/pop-up"
            >
              Individual Pop Up
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <nav
          className={`w-full flex justify-center items-center flex-col text-center lg:hidden absolute left-0 lg:bg-none bg-white text-black transition-all duration-500 lg:z-0  -z-10 ${
            mobileMenuOpen ? "top-[55px]" : "-top-[600px] -z-10"
          } lg:border-none border-b-2 border-[#009368]`}
        >
          <div className="block lg:hidden lg:text-sm xl:text-base w-full">
            <div className="flex flex-col gap-5 py-5">
              <Link
                className={`w-fit mx-auto text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-1 ${
                  pathname === "/" ? "active" : ""
                }`}
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile About Us Dropdown */}
              <div
                ref={mobileDropdownRef}
                className="w-full flex flex-col gap-2"
              >
                <button
                  className={` w-fit mx-auto text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-1 ${
                    pathname === "/about-us" ||
                    pathname === "/resources" ||
                    pathname === "/explore-our-teas"
                      ? "active"
                      : ""
                  }`}
                  onClick={handleToggleMobileDropdown}
                >
                  About Us
                </button>
                {mobileDropdownOpen && (
                  <div className="flex flex-col gap-3 py-3 bg-slate-200">
                    <Link
                      className={`text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-1 ${
                        pathname === "/about-us" ? "active" : ""
                      }`}
                      href="/about-us"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      className={`text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-1 ${
                        pathname === "/resources" ? "active" : ""
                      }`}
                      href="/resources"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      className={`text-gray-700 font-semibold hover:text-orange-400 [&.active]:text-orange-400 py-1 ${
                        pathname === "/explore-our-teas" ? "active" : ""
                      }`}
                      href="/explore-our-teas"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Explore Our Teas
                    </Link>
                  </div>
                )}
              </div>

              <Link
                className={`w-fit mx-auto text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-1 ${
                  pathname === "/shop" ? "active" : ""
                }`}
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                className={`w-fit mx-auto text-gray-700 font-semibold hover:text-orange-400 border-t-2 border-transparent hover:border-t-2 hover:border-orange-400 [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-1 ${
                  pathname.includes("/my-account") ? "active" : ""
                }`}
                href="/my-account"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Account
              </Link>
              {pathname.includes("my-account") === false && (
                <Link
                  className={`w-fit mx-auto text-gray-700 font-semibold hover:text-[#eca30c] border-t-2 border-transparent hover:border-t-2 hover:border-[#eca30c] [&.active]:text-orange-400 [&.active]:border-t-2 [&.active]:border-orange-400 py-1 ${
                    pathname === "/pop-up" ? "active" : ""
                  }`}
                  href="/pop-up"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Individual Pop Up
                </Link>
              )}
            </div>
          </div>
        </nav>
        {pathname.includes("my-account") === false && (
          <div className="hidden lg:block border-2 py-1 sm:py-1 lg:py-3 px-4 sm:px-6 lg:px-10 rounded-lg  border-[#eca30c] bg-[#eca30c] hover:text-white">
            <Link href="/register">
              <div className="flex items-center gap-2 ">
                <p className="sm:text-lg font-semibold"> Get Started </p>
                <FaHeart className="sm:text-lg lg:text-xl" />
              </div>
            </Link>
          </div>
        )}

        {/* Icons */}
        <div className="block lg:hidden">
          {mobileMenuOpen ? (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <FaTimes className="size-5 hover:cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <FaBars className="size-5 hover:cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
