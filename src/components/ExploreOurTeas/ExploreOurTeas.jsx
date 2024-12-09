"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";

const ExploreOurTeas = () => {
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
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          <div className="flex flex-col  font-semibold text-[#6f7775] gap-4">
            <p className="cursor-pointer">Black Tea</p>{" "}
            <p className="cursor-pointer">Caffeine</p>{" "}
            <p className="cursor-pointer">Caffeine-Free</p>{" "}
            <p className="cursor-pointer">Classic Flavored</p>{" "}
            <p className="cursor-pointer">Green Tea </p>{" "}
            <p className="cursor-pointer">Herbal</p>{" "}
            <p className="cursor-pointer">Kid-Friendly</p>
            <p className="cursor-pointer">Mocktail/Cocktail</p>{" "}
            <p className="cursor-pointer">Uncategorized Wellness</p>{" "}
            <p className="cursor-pointer">Tea White</p>{" "}
            <p className="cursor-pointer">Tea Women Wellness</p>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {products?.map((item, i) => (
                <ProductCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurTeas;
