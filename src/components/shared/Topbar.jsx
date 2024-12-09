import Link from "next/link";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between md:px-10 xl:px-20 bg-[#009368] text-white h-10 z-50">
      <div className="flex items-center gap-2">
        <MdMail size={16} />
        <p>info@teasforacause.com</p>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Link href="/">
            <FaTwitter />
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaInstagram />
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaFacebookF />
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}
