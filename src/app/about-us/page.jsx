import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import OurGoal from "@/components/AboutUs/OurGoal";
import OurMission from "@/components/AboutUs/OurMission";
import WhoWeAre from "@/components/AboutUs/WhoWeAre";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <AboutUsBanner />
      <WhoWeAre />
      <OurGoal />
      <OurMission />
    </div>
  );
}
