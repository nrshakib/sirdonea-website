import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopCard = () => {
  const shopsData = [
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/group-of-volunteer-planting-qhlqoaf1qna29zl9q9otvrvxeubspxyhq1shfb4s2g.jpg",
      category: "Arbor Day",
      title: "Plant Trees, Save Earth & Lives. Secure the Future",
      description:
        "Now more than ever, the world needs the powerful benefits of trees to safeguard the health of our planet and communities.",
      raised: 0,
      goal: 5000,
      progress: 20,
      link: "/arbor-day",
    },
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/volunteers-packing-boxes-for-refugees-2021-09-03-13-43-09-utc-e1657202519125-qhlqocaq4bcmx7ijfai30reulm2j5c5yeb3gdv1zq0.jpg",
      category: "Autism Speaks",
      title: "Help fuel innovative research and make critical connections",
      description:
        "Contribute to Autism Speaks mission to enhance the lives of people with autism today and accelerate a spectrum of solutions for tomorrow.",
      raised: 1200,
      goal: 10000,
      progress: 12,
      link: "/autism-speaks",
    },
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/girl-washing-her-hands-at-a-water-well-in-burkina-faso-africa-e1659542851666-qhlqoe6ehzf7kfft4bbc5qxrsdt9kqdf2kefcez7dk.jpg",
      category: "ASPCA",
      title: "Respond Promptly to Nationwide Animal Crises",
      description:
        "Donate needed animal care products directly to ASPCA partner shelters, veterinary clinics, recovery centers and adoption centers",
      raised: 3000,
      goal: 15000,
      progress: 20,
      link: "/aspca",
    },
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/diverse-male-doctor-talking-with-girl-lying-in-bed-2023-11-27-05-22-17-utc-scaled-qvj2079nd2yezkep7cy9s96z3ifupfgdpukp2onyfs.jpg",
      category: "St. Jude",
      title: "Finding Cures. Saving Children. Giving Hope.",
      description:
        "Families never receive a bill from St. Jude for treatment, travel, housing or food. Your order goes towards offsetting these cost and funding research.",
      raised: 3000,
      goal: 15000,
      progress: 20,
      link: "/st-jude",
    },
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/gen-z-friends-sitting-together-outdoors-in-the-cit-2023-11-27-05-13-28-utc-scaled-qvj4ikh2eont5z58ix61zy9b2317pv7dt4g71coe8o.jpeg",
      category: "Covenant House",
      title: "Share Your Heart. Shine a Light. Until Everyone Has a Home",
      description:
        "Provide housing and support services to youth facing homelessness. We help young people transform their lives and put them on a path to independence.",
      raised: 3000,
      goal: 15000,
      progress: 20,
      link: "/covenant-house",
    },
    {
      image:
        "https://teasforacause.com/wp-content/uploads/elementor/thumbs/blood-donation-concept-of-awareness-and-donation-qvj63vot414721wav705izm2yujw1hq7csezfpp8uw.jpg",
      category: "American Red Cross",
      title: "Help those Affected by Natural Disasters",
      description:
        "Each year, the generous support of donors like you enables their disaster workforce— 90% volunteers—to help millions of people in the U.S. during natural disasters",
      raised: 3000,
      goal: 15000,
      progress: 20,
      link: "/american-redcross",
    },
  ];

  return (
    <div className="container px-5 mx-auto py-10 animate-slideUp">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-10">
        {shopsData.map((shop, index) => (
          <div
            key={index}
            className="max-w-lg rounded-lg shadow-lg overflow-hidden mb-6"
          >
            <div className="relative">
              <Image
                src={shop.image}
                alt="hi"
                className="w-full"
                height={0}
                sizes={"100vw"}
                width={0}
              />
              <span className="absolute -bottom-6 left-6 bg-[#009368] text-white px-5 py-3 rounded-md text-sm">
                {shop.category}
              </span>
            </div>
            <div className="flex flex-col items-center p-6">
              <div>
                <h2 className="text-[#213430] text-2xl font-bold pt-4">
                  {shop.title}
                </h2>
                <p className="text-[6f7775] mt-2">
                  {shop.description.slice(0, 80)}...
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Raised ${shop.raised}</span>
                    <span>Goal ${shop.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-5 my-5">
                    <div
                      className="bg-[#009368] h-5 rounded-full text-white px-5"
                      style={{ width: `${shop.progress}%` }}
                    >
                      {shop.progress}%
                    </div>
                  </div>
                </div>
              </div>
              <Link href={shop.link}>
                <Button
                  sx={{
                    background: "#eca30c",
                    color: "white",
                    fontWeight: 600,
                    marginTop: "16px",
                  }}
                  className=" py-2 px-4 rounded-md w-48 animate-grow"
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
