"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/shared/ProductCard";

const ProductDetails = () => {
  const searchParams = useSearchParams(); // Get query parameters

  // Retrieve the values of id and category
  const pageParam = searchParams.get("id");
  const category = searchParams.get("category");

  // const [url, setUrl] = useState(undefined);
  //   const [alignment, setAlignment] = useState(category);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [catProducts, setCatProducts] = useState([]);
  const [brewing, setBrewing] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleChangTea = (e) => {
    setBrewing(e.target.value);
    console.log(brewing);
  };
  const handleChangeSize = (e) => {
    setSize(e.target.value);
    console.log(size);
  };
  const handleChangeColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  // const searchParams = useSearchParams(); // Get query parameters
  // const pageParam = searchParams.get("id"); // Get the 'id' query parameter
  // console.log("Mirza2",searchParams,pageParam);

  // console.log('Product ID:', pageParam);
  // console.log('Category:', category);

  // useEffect(() => {
  //   switch (category) {
  //     case "tea":
  //       setUrl("/assets/data/teaData.json");
  //       break;
  //     case "tshirt":
  //       setUrl("/assets/data/tshirtData.json");
  //       break;
  //     case "mug":
  //       setUrl("/assets/data/mugData.json");
  //       break;
  //     case "tole":
  //       setUrl("/assets/data/toleData.json");
  //       break;
  //   }
  // }, [category]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/assets/data/allProducts.json"); // Correct path for fetching from the public folder
        const data = await response.json();

        const findCategory = data.filter((item) => item.category == category);
        setCatProducts(findCategory);

        setProducts(data); // Set the products state with the fetched data

        // Find the product that matches the pageParam
        const matchingProduct = data.find((item) => item.id === pageParam);
        setSelectedProduct(matchingProduct); // Set the matching product in state
      } catch (error) {
        // console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, pageParam]);

  const handleSubmit = () => {
    let data;

    if (category == "tshirt") {
      if (size == "" || color == "") {
        alert("Please Select Options");
        return;
      }
      data = {
        size: size,
        color: color,
        quantity: quantity,
        selectedProduct,
      };
    } else if (category == "tea") {
      if (brewing == "") {
        alert("Please Select Options");
        return;
      }

      data = {
        brewing: brewing,
        quantity: quantity,
        selectedProduct,
      };
    } else {
      data = {
        quantity: quantity,
        selectedProduct,
      };
    }
    console.log(data);
    setBrewing("");
    setQuantity(1);
    setSize("");
  };

  if (!selectedProduct) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="py-4 sm:py-20">
      <div className="sm:container sm:mx-auto">
        {/* Product Details */}
        <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-start lg:px-2">
          <div className="w-full sm:w-1/2">
            <Image
              src={selectedProduct.image || ""}
              alt={selectedProduct.tea_name || "Product Image"}
              width={0}
              height={0}
              sizes="70vw"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 px-3 sm:px-0">
            <h1 className="text-xl sm:text-2xl lg:text-5xl text-[#213430] font-bold my-3 sm:my-1">
              {selectedProduct.name}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg font-semibold mb-1">
              <span> ${selectedProduct.lowest_price.toFixed(2)}</span>{" "}


            { (category === "tea" || category === "tshirt") && <>
                <span>-</span>
                <span> ${selectedProduct.highest_price.toFixed(2)}</span>
              </>}

              
            </p>

            {/* <p className="text-gray-600 text-lg font-semibold mb-1">
              ${item.lowest_price.toFixed(2)}
              {(alignment === "tea" || alignment === "tshirt") &&
                ` - $${item.highest_price.toFixed(2)}`}
            </p> */}

            <p className="text-slate-400 font-medium text-sm sm:text-base lg:text-lg my-5">
              {selectedProduct.about}
            </p>

            {category == "tea" && (
              <div className="flex items-center bg-gray-100 py-4 px-2 rounded-md">
                <p className="w-48 text-sm lg:text-base font-semibold">
                  Brewing Option
                </p>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Brewing</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={brewing}
                    label="Brewing"
                    onChange={handleChangTea}
                    sx={{ background: "white", width: "100%" }}
                  >
                    <MenuItem value={"bagged"}>Bagged(Satchel)</MenuItem>
                    <MenuItem value={"loose"}>Loose Leaf</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}

            {category == "tshirt" && (
              <>
                {/* color */}
                <div className="flex items-center bg-gray-100 py-4 px-2 rounded-md">
                  <p className="w-48 text-sm lg:text-base font-semibold">
                    Color Option
                  </p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={color}
                      label="Color"
                      onChange={handleChangeColor}
                      sx={{ background: "white", width: "100%" }}
                    >
                      <MenuItem value={"white"}>white</MenuItem>
                      <MenuItem value={"tan"}>Tan</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="flex items-center bg-gray-100 py-4 px-2 rounded-md">
                  <p className="w-48 text-sm lg:text-base font-semibold">
                    Size
                  </p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={size}
                      label="Size"
                      onChange={handleChangeSize}
                      sx={{ background: "white", width: "100%" }}
                    >
                      <MenuItem value={"small"}>Small</MenuItem>
                      <MenuItem value={"medium"}>Medium</MenuItem>
                      <MenuItem value={"Large"}>Large</MenuItem>
                      <MenuItem value={"xl"}>XL</MenuItem>
                      <MenuItem value={"2XL"}>2XL</MenuItem>
                      <MenuItem value={"3XL"}>3XL</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            )}

            <div className="mt-10 mb-3">
              <p className="text-slate-500 font-semibold lg:text-xl ml-6">
                ${(selectedProduct.highest_price || 0) * quantity}.00
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <button
                  className="bg-white border border-zinc-400 text-black lg:text-lg px-2 py-1 rounded-md"
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <div className="px-5 py-2 lg:text-lg bg-slate-300 rounded-md">
                  {quantity}
                </div>
                <button
                  className="bg-white border border-zinc-400 text-black lg:text-lg px-2 py-1 rounded-md"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button
                onClick={handleSubmit}
                sx={{
                  bgcolor: "#009368",
                  border: "2px solid white",
                  p: { xs: "8px 15px", sm: "8px 20px", lg: "12px 24px" },
                  fontSize: { xs: "14px", sm: "16px", lg: "18px" },
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

        {/* Product Description */}
        <div className="mt-10 px-3 lg:px-2">
          <p className="text-3xl font-semibold my-1">Description</p>
          <div className="text-slate-500 text-sm sm:text-base">
            <p>{selectedProduct.detailed_description.summary}</p>
            {selectedProduct.detailed_description.benefits &&
            selectedProduct.detailed_description.benefits.length > 0 ? (
              <ul className="list-disc list-inside mt-4">
                {selectedProduct.detailed_description.benefits.map(
                  (benefit, index) => (
                    <li key={index} className=" px-4 mb-2 sm:text-lg">
                      {benefit}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p>No benefits available</p>
            )}
            <div className="flex flex-col gap-1">
              <p>{selectedProduct.detailed_description.cautions}</p>
              <p>{selectedProduct.detailed_description.ingredients}</p>
              <p>{selectedProduct.detailed_description.instructions}</p>
              <p>{selectedProduct.detailed_description.size}</p>
            </div>
          </div>
        </div>

        {/* Recent Products Section */}
        <div className="my-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-5">
            Recent Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {catProducts?.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
