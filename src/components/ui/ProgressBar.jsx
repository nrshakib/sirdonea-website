import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const ProgressBars = () => {
  const userProgress = 65; // {First name} progress
  const teamProgress = 90; // {Team name} progress

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px 10px",
        border: "2px solid green",
        borderRadius: "5px",
      }}
    >
      <div className="mb-40 sm:mb-40 lg:mb-32">
        <div className="relative">
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#009368", // Green progress bar color
              },
              zIndex: 0,
            }}
          />
          <div className="grid grid-cols-4 gap-4 -mt-[13px] absolute w-full top-[9px]">
            <div className="text-center">
              <div className="h-5 w-5 bg-[#eca30c] rounded-full mx-auto mb-5"></div>
              <h1 className="text-base sm:text-lg font-bold">Start</h1>
              <p className="text-xs sm:text-base">Start Date and Time</p>
            </div>

            <div className="text-center">
              <div className="h-5 w-5 bg-[#eca30c] rounded-full mx-auto mb-5"></div>
              <h1 className="text-base sm:text-lg font-bold">Halfway There</h1>
              <p className="text-xs sm:text-base">Halfway Point</p>
            </div>

            <div className="text-center">
              <div className="h-5 w-5 bg-[#eca30c] rounded-full mx-auto mb-5"></div>
              <h1 className="text-base sm:text-lg font-bold">
                We almost there
              </h1>
              <p className="text-xs sm:text-base">1-2 before end</p>
            </div>

            <div className="text-center">
              <div className="h-5 w-5 bg-[#eca30c] rounded-full mx-auto mb-5"></div>
              <h1 className="text-base sm:text-lg font-bold">We did it</h1>
              <p className="text-xs sm:text-base">Close Date and Time</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto sm:mt-10">
        {" "}
        {/* User Progress */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <p className="sm:text-lg font-bold">{`{First name} progress`}</p>
          <p className="sm:text-lg font-bold">{`${userProgress}%`}</p>
        </Box>
        <LinearProgress
          variant="determinate"
          value={userProgress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#009368", // Green progress bar color
            },
          }}
        />
        {/* Team Progress */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={4}
          mb={2}
        >
          <p className="sm:text-lg font-bold">{`{Team name} progress`}</p>
          <p className="sm:text-lg font-bold">{`${teamProgress}%`}</p>
        </Box>
        <LinearProgress
          variant="determinate"
          value={teamProgress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#009368", // Green progress bar color
            },
          }}
        />
      </div>
    </Box>
  );
};

export default ProgressBars;
