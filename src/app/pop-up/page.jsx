import PopUpData from "@/components/PopUp/PopUpData";
import Progress from "@/components/PopUp/Progress";

import React from "react";

export default function PopUp() {
  return (
    <div className="flex flex-col items-center gap-5 px-2">
      <Progress />
      <hr className="w-3/5 border-1 border-black" />
      <PopUpData />
    </div>
  );
}
