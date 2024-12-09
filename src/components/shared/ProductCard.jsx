import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ item }) => {
  return (
    <div className=" max-w-md bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Product Image */}
      <div>
        <Image
          width={0}
          height={0}
          src={item.image}
          layout="responsive"
          alt="Berry Blast"
          className=" w-full h-60"
        />
      </div>

      {/* Product Details */}
      <div className="px-4 py-8 text-center">
        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {item.name}
        </h2>

        {/* Review Stars */}
        <div className="flex justify-center items-center mb-2">
          <IoIosStarOutline className="text-[#eca30c] mr-1 size-4 font-bold" />
          <IoIosStarOutline className="text-[#eca30c] mr-1 size-4 font-bold" />
          <IoIosStarOutline className="text-[#eca30c] mr-1 size-4 font-bold" />
          <IoIosStarOutline className="text-[#eca30c] mr-1 size-4 font-bold" />
          <IoIosStarOutline className="text-[#eca30c] mr-1 size-4 font-bold" />
        </div>

        {/* Price Range */}
        <p className="text-gray-600 text-lg font-semibold mb-4">
          {item.price_range}
        </p>

        {/* Select Options Button */}
        <Link href={`/product-details?category=${item.category}&id=${item.id}`}>
        {/* <Link href={`/product-details/${item.link}`}> */}
          <Button
            sx={{
              bgcolor: "#ECA30C",
              border: "2px solid white",
              p: "10px 0px",
              fontSize: "16px",
              width: "100%",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              ":hover": {
                bgcolor: "#009368",
                color: "white",
                border: "2px solid #009368",
              },
              // position: "absolute",
              // bottom: "40px",
            }}
          >
            <div className="flex items-center gap-2">
              <FaCheck />
              <p>SELECT OPTIONS</p>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
