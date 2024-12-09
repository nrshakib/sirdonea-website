import DashboardSlider from "@/components/shared/DashboardSlider";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Topbar from "@/components/shared/Topbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative">
      <DashboardSlider>{children}</DashboardSlider>
    </div>
  );
};

export default DashboardLayout;
