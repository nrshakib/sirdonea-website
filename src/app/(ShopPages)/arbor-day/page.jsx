"use client";
import questionImg from "../../../../public/assets/images/Get Start/bg_banner.png";
import Link from "next/link";
import { FaCheck, FaHeart } from "react-icons/fa";
import ProductCard from "@/components/shared/ProductCard";
import { useEffect, useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArborDay() {
  const [alignment, setAlignment] = useState("tea");
  // const [url, setUrl] = useState("/assets/data/teaData.json");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // useEffect(() => {
  //   switch (alignment) {
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
  //     default:
  //       setUrl("/assets/data/teaData.json"); // Default case
  //       break;
  //   }
  // }, [alignment]);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/assets/data/allProducts.json");
        const data = await response.json();
        if (alignment) {
          const findCategory = data.filter(
            (item) => item.category == alignment
          );
          setProducts(findCategory);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }; 
    //  hi
    fetchProducts();
  }, [alignment]);

  const handleNavigate = (item) => {
    console.log("details", item);
    // const query = JSON.stringify(item.id);
    const query = { id: item.id, category: item.category };
    console.log(query);
    // console.log("query", query);
    // console.log("encodeURIComponent", encodeURIComponent(query));
    router.push(`/product-details?category=${encodeURIComponent(query.category)}&id=${encodeURIComponent(query.id)}`);
  };

  return (
    <div>
      <div
        className="relative flex items-center justify-between gap-8 mx-auto px-64 shadow-lg rounded-md h-screen"
        style={{
          backgroundImage: "url('/assets/images/nature.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-green-950 opacity-50 rounded-md"></div>

        {/* Content */}
        <div className="relative flex flex-col gap-5 my-10 w-1/2">
          <p className="text-[#ECA319] font-semibold text-xl">
            Arbor Day Foundation
          </p>
          <p className="text-white text-5xl font-bold animate-grow">
            Our mission is to inspire people to plant, nurture, and celebrate
            trees
          </p>
          <div className="flex gap-5 animate-grow">
            <hr className="w-4 h-56 border-0 bg-yellow-400" />
            <div className="flex flex-col gap-2 text-white font-medium">
              <p className="">
                Founded in 1972, the Arbor Day Foundation is the world’s largest
                member nonprofit dedicated to planting trees. Our strength is in
                network – a diverse group of individuals, municipalities,
                corporations, and planting organizations that enable us to plant
                trees around the world. We intentionally collaborate with
                partners who are deeply engaged in the areas they serve to plant
                the right trees in the right places to have the greatest impact.
              </p>
              <p>
                For more than 50 years, we’ve helped plant more than 500 million
                trees in neighborhoods and forests across more than 50
                countries. And we’re just getting started.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 bg-white px-12 py-20 rounded-md my-20 w-1/2 animate-slideInFromRight">
          <p className="bg-[#009368] text-white px-3 py-2 rounded-md w-40 font-semibold text-center">
            Environmental
          </p>
          <p className="text-3xl font-bold text-[#213430]">
            Help us reach the goal of planting 500 million trees by 2027
          </p>
          <p className="text-sm text-[#6F7775]">
            Now more than ever, the world needs the powerful benefits of trees
            to safeguard the health of our climate, our communities, and the
            biodiversity of the planet. Each purchase plants at least 1 tree!
          </p>
          <div className="mt-4">
            <p className="text-end text-sm font-medium text-[#EDA718]">
              Goal $2000
            </p>
            <div className="w-full bg-gray-200 rounded-full h-6 my-2">
              <div
                className="flex items-center gap-20 bg-[#009368] h-6 rounded-full text-white px-5 transition-all duration-2000"
                style={{ width: "20%" }} // Dynamically set width here
              >
                <p>$400</p>
                <p className="text-[#f8c55e] font-semibold">20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex items-center gap-8 container mx-auto p-5 sm:p-10 lg:p-20 shadow-lg rounded-2xl "
          style={{ background: `url(${questionImg.src})` }}
        >
          <div>
            <p className="text-[#009368] text-base sm:text-2xl font-semibold">
              Shop Now to Support
            </p>
            <p className="text-[#213430] text-2xl sm:text-5xl font-semibold py-3 leading-tight w-4/5">
              50% of Your Purchase Goes Towards Planting More Trees
            </p>
            <p>
              <span className="w-16 h-1 bg-[#ECA30C] inline-block"></span>
            </p>
          </div>
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 bg-[#eca30c] text-white xl:text-xl h-10 md:h-12 xl:h-16 w-full md:w-64 lg:w-80 lg:px-6 font-bold hover:bg-white hover:text-black hover:border-2 hover:border-[#eca30c] my-2 lg:mt-0 rounded-lg animate-grow"
          >
            <p>Shop Now</p> <FaHeart />
          </Link>
        </div>
      </div>

      <div className="container mx-auto ">
        <ToggleButtonGroup
          color="success"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          className="mt-10 "
        >
          <ToggleButton value="tea">Tea</ToggleButton>
          <ToggleButton value="tshirt">T-Shirt</ToggleButton>
          <ToggleButton value="mug">Mug</ToggleButton>
          <ToggleButton value="tole">Tole</ToggleButton>
        </ToggleButtonGroup>
        <div className="flex flex-wrap -mx-2 my-10">
          {products?.map((item, i) => (
            <div key={i} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
              <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md">
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
                <div className="px-4 py-8 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-lg font-semibold mb-1">
                        ${item.lowest_price.toFixed(2)}
                        {(alignment === "tea" || alignment === "tshirt") &&
                          ` - $${item.highest_price.toFixed(2)}`}
                      </p>

                  <Button
                    onClick={() => handleNavigate(item)}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
