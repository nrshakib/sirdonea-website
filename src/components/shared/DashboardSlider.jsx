"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";

const DashboardSlider = ({ children }) => {
  const [slider, setSlider] = useState(false);
  return (
    <div className="grid grid-cols-12 relative min-h-screen h-full border-b border-[#009368]">
      <div
        className={`${
          slider
            ? " absolute min-h-screen h-full top-0 left-0 lg:top-0 lg:w-full w-3/4 sm:w-1/2"
            : "col-span-1"
        } lg:relative lg:col-start-1 lg:col-end-3 z-30`}
      >
        <Sidebar slider={slider} setSlider={setSlider} />
      </div>

      {/* //*2nd grid */}
      <div
        className={`${
          slider ? "col-span-12" : "col-span-11"
        }  lg:col-span-10 min-h-screen`}
      >
        <div className="container mx-auto px-5 pt-14">{children}</div>
      </div>
    </div>
  );
};

export default DashboardSlider;
