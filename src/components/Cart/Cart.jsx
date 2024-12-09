"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ProductCard from "../shared/ProductCard";

import { useSearchParams } from "next/navigation";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams(); // Get query parameters
  const pageParam = searchParams.get("id"); // Get the 'id' query parameter

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/assets/data/teaData.json"); // Correct path for fetching from the public folder
        const data = await response.json();

        setProducts(data); // Set the products state with the fetched data

        // Find the product that matches the pageParam
        const matchingProduct = data.find((item) => item.id === pageParam);
        setSelectedProduct(matchingProduct); // Set the matching product in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [pageParam]);

  if (!selectedProduct) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <Image
              src={selectedProduct.image || ""}
              alt={selectedProduct.tea_name || "Product Image"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3">
              {selectedProduct.tea_name}
            </h1>
            <p className="text-slate-500 font-semibold text-lg">
             {selectedProduct.price_range}
            </p>
            <p className="text-slate-500 font-medium text-lg my-5">
              {selectedProduct.description}
            </p>
            {/* <div className="mt-10 mb-3">
              <p className="text-slate-500 font-semibold text-2xl ml-5">
                ${(selectedProduct.price_range || 0) * quantity}.00
              </p>
            </div> */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <button
                  className="bg-white border border-zinc-400 text-black text-lg px-2 py-1 rounded-md"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <div className="px-5 py-2 text-lg bg-slate-300 rounded-md">
                  {quantity}
                </div>
                <button
                  className="bg-white border border-zinc-400 text-black text-lg px-2 py-1 rounded-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button
                sx={{
                  bgcolor: "#009368",
                  border: "2px solid white",
                  p: "10px 20px",
                  fontSize: "16px",
                  // width: "220px",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "bold",
                  ":hover": { bgcolor: "#D58C13", color: "white" },
                }}
              >
                <p>Add To Cart</p>
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-[#213430] h-[1px] w-full my-10"></div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-5">
          Recent Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {products?.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
