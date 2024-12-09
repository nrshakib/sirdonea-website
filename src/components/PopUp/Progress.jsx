"use client";

import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../public/assets/images/Stock Photos/baseball.png";

const steps = [
  {
    title: "Start",
    description: "Start Date and time",
  },
  {
    title: "Halfway there",
    description: "Halfway point",
  },
  {
    title: "We're almost there",
    description: "1-2 days before end",
  },
  {
    title: "We did it!",
    description: "Close Date & time",
  },
];

const Progress = () => {
  const [description, setDescription] = useState("");
  const wordLimit = 300;

  // Helper function to count words
  const countWords = (str) => {
    return str
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  // Handle description change
  const handleChange = (event) => {
    const inputText = event.target.value;
    const wordCount = countWords(inputText);

    if (wordCount <= wordLimit) {
      setDescription(inputText);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:p-10">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full p-4">
        <Image
          src={image}
          alt="Help Team"
          width={1000}
          height={600}
          className="w-full xl:w-3/4 h-44 md:h-40 lg:h-64 xl:h-80 rounded-md flex justify-center items-center"
          // layout="responsive"
        />
        <p className="sm:text-xl lg:text-3xl font-semibold text-gray-900 ">
          Help {`{first name}`} and {`{team/organization name}`}{" "}
          {`{name the cause}`}
        </p>
      </div>
      {/* Text Section */}
      <div className="w-full py-2 px-4 sm:p-4">
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          Short description of the fundraiser cause and what it will support.
          This is where the organization short description will go. Character
          limit: 300 words max.
        </p>

        {/* Text Field */}
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Short description..."
          variant="outlined"
          className=""
          value={description}
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel>
                <div>
                  <h3 className="text-2xl font-semibold">{label.title}</h3>
                  <p className="text-lg text-slate-500">{label.description}</p>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div> */}
    </div>
  );
};

export default Progress;
