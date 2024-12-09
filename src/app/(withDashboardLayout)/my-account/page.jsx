"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import image from "../../../../public/assets/images/Stock Photos/theyFeedOff.png";
import templateImage from "@/../public/assets/images/Stock Photos/checking-daily-instagram.png";
import startFundRaiserImg from "@/../public/assets/images/Stock Photos/tea photo.png";
import supportCauseImg from "@/../public/assets/images/Stock Photos/tea farm.png";
import Link from "next/link";
import Image from "next/image";

export default function FundraiserOverview() {
  // State to track which items are completed
  const [completedTasks, setCompletedTasks] = useState({
    inviteTeam: false,
    downloadFlyers: false,
    addPayoutInfo: true,
    createPopupStore: false,
  });

  // Handle checkbox changes
  const handleCheckboxChange = (task) => {
    setCompletedTasks((prevTasks) => ({
      ...prevTasks,
      [task]: !prevTasks[task],
    }));
  };

  return (
    <div className="container mx-auto sm:p-6">
      <div className="text-center">
        {/* Fundraiser Overview Section */}
        <p className="font-bold sm:text-2xl mb-2">
          {"{Organization Name}"} Fundraiser Overview
        </p>
        <p className="sm:text-xl font-semibold text-green-600 mb-6">
          ___ days until event starts!
        </p>
      </div>

      {/* To Do List Section */}
      <div className="bg-gray-100 p-4 rounded-lg border-2 border-green-700 shadow-md mb-8">
        <p className="font-bold mb-4">To Do List</p>
        <div className="flex flex-col gap-2 mb-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={completedTasks.inviteTeam}
                color="success"
                onChange={() => handleCheckboxChange("inviteTeam")}
              />
            }
            label={
              <p
                className={`text-sm sm:text-base ${
                  completedTasks.inviteTeam ? "line-through text-[6f7775]" : ""
                }`}
              >
                Invite your team to participate
              </p>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={completedTasks.downloadFlyers}
                color="success"
                onChange={() => handleCheckboxChange("downloadFlyers")}
              />
            }
            label={
              <p
                className={`text-sm sm:text-base ${
                  completedTasks.downloadFlyers
                    ? "line-through text-[6f7775]"
                    : ""
                }`}
              >
                Download flyers to send to supporters
              </p>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={completedTasks.addPayoutInfo}
                color="success"
                onChange={() => handleCheckboxChange("addPayoutInfo")}
              />
            }
            label={
              <p
                className={`text-sm sm:text-base ${
                  completedTasks.addPayoutInfo
                    ? "line-through text-[6f7775]"
                    : ""
                }`}
              >
                Add payout information
              </p>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={completedTasks.createPopupStore}
                color="success"
                onChange={() => handleCheckboxChange("createPopupStore")}
              />
            }
            label={
              <p
                className={`text-sm sm:text-base ${
                  completedTasks.createPopupStore
                    ? "line-through text-[6f7775]"
                    : ""
                }`}
              >
                Create pop-up store
              </p>
            }
          />
        </div>
      </div>

      {/* Resources Section */}
      <p className="text-2xl font-bold mb-4">Resources</p>
      <Box className="flex flex-col sm:flex-row items-center justify-center gap-6 2xl:gap-8">
        {/* First Resource Card */}
        <Card className="shadow-lg border border-black border-t-0">
          <Image
            src={image}
            alt="Running a Successful Event"
            width={1000}
            height={600}
            className="h-48 sm:h-44 lg:h-56 xl:h-72 w-full"
          ></Image>
          <CardContent>
            <div className="text-center ">
              <p className="font-bold text-sm lg:text-base">
                Running a Successful Event
              </p>
              <p className="text-sm sm:text-base text-black mt-1">
                Tips and recommendations on how to have a successful event
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Second Resource Card */}
        <Card className="shadow-lg border border-black border-t-0">
          <Image
            src={templateImage}
            alt="Templates"
            width={1000}
            height={600}
            className="h-48 sm:h-44 lg:h-56 xl:h-72 w-full"
          ></Image>
          <CardContent>
            <div className="text-center">
              <p className="font-bold text-sm lg:text-base">Templates</p>
              <p className="text-sm sm:text-base text-black mt-1">
                Flyers and Social Media templates to use for a successful event
              </p>
            </div>
          </CardContent>
        </Card>
        <Button>
          <ArrowForward className="text-green-600 text-3xl sm:text-5xl" />
        </Button>
      </Box>

      {/* Additional Actions Section */}
      <Box className="flex flex-col sm:flex-row items-center justify-center gap-6 2xl:gap-20 my-10">
        {/* Start a Fundraiser Event Card */}
        <Link href="/how-it-works">
          <Card className="shadow-md relative">
            <Image
              src={startFundRaiserImg}
              alt="Start a Fundraiser Event"
              width={400}
              className="object-cover"
            />
            {/* Dark backdrop over the image */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Text over the backdrop */}
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-white font-semibold text-lg text-center">
                Start a Fundraiser Event
              </p>
            </div>
          </Card>
        </Link>

        {/* Join a Fundraiser Event Card */}
        <Link href="/my-account/pop-up-store">
          <Card className="shadow-md relative border-4 border-[#eca30c]">
            <CardContent>
              <p className="font-bold text-center md:my-1 lg:my-7 xl:my-20 2xl:my-24 mx-6">
                Join a Fundraiser Event
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Shop and Support a Cause Card */}
        <Link href="/shop">
          <Card className="shadow-md relative">
            <Image
              src={supportCauseImg}
              alt="Shop and Support a Cause"
              width={400}
              className="object-cover"
            />
            {/* Dark backdrop over the image */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Text over the backdrop */}
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-white font-semibold text-lg text-center">
                Shop and Support a Cause
              </p>
            </div>
          </Card>
        </Link>
      </Box>
    </div>
  );
}
