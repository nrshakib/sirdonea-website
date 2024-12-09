"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import ProductCard from "../shared/ProductCard";
import ProgressBars from "../ui/ProgressBar";

const PopUpData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/assets/data/teaData.json"); // Correct path for fetching from the public folder
        const data = await response.json();
        setProducts(data); // Set the products state with the fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [products]);

  // console.log(products);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div>
          <h3 className="sm:text-xl md:text-2xl font-bold text-center text-[#eca30c] mb-5">
            Help us reach our goal in 7 days!
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 ">
            Fundraiser Progress
          </h2>
        </div>
        <div className="sm:mb-20">
          <ProgressBars />
        </div>

        <div className="bg-[#213430] h-[1px] w-full my-10"></div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-16 ">
          Shop to Support. First Name receives $50% of each order!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {products?.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUpData;
