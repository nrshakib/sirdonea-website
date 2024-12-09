"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Accordion = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("mb-5 bg-[#F5F5F5] duration-500 rounded", className)}>
      <div
        className="flex justify-between items-center p-4 cursor-pointer  duration-500"
        onClick={toggleAccordion}
      >
        <h3 className="text-[#ECA30C] text-xl font-semibold">{title}</h3>
        {isOpen ? (
          <div>
            <IoMdArrowDropdown className="text-2xl duration-500" />
          </div>
        ) : (
          <div>
            <IoMdArrowDropright className="text-2xl duration-500" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="p-4 bg-input-color  duration-500  rounded-bl rounded-br">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
