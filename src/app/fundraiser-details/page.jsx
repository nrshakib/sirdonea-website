"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs"; // Import dayjs to handle date manipulation
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FundraiserDetails() {
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [startMonth, setStartMonth] = useState("");
  const [startDaySelect, setStartDaySelect] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endDaySelect, setEndDaySelect] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [goal, setGoal] = useState("$2000");

  const router = useRouter();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const times = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const handleStartDateChange = (date) => {
    setStartDay(date);
    if (date) {
      const endDate = dayjs(date).add(7, "day");
      setEndDay(endDate);
      setStartMonth(date.format("MMMM"));
      setStartDaySelect(date.date());
      setEndMonth(endDate.format("MMMM"));
      setEndDaySelect(endDate.date());
      setEndTime(startTime); // Sync end time with start time
    }
  };

  const handleStartSelectChange = (month, day) => {
    setStartMonth(month);
    setStartDaySelect(day);

    if (month && day) {
      const startDate = dayjs(`${month}-${day}`, "MMMM-D");
      const endDate = startDate.add(7, "day");
      setStartDay(startDate);
      setEndDay(endDate);
      setEndMonth(endDate.format("MMMM"));
      setEndDaySelect(endDate.date());
      setEndTime(startTime); // Sync end time with start time
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-1 py-2 sm:px-4 sm:py-4">
      <h1 className="text-2xl font-bold mb-6">Fundraiser Details</h1>

      <div className="flex flex-col gap-6 bg-gray-100 p-1 sm:p-4">
        <div className="flex flex-col">
          <p className="font-semibold">
            Pick the day and time you want to start your fundraiser (it will run
            for 7 days)
          </p>

          <div className="flex flex-col sm:flex-row md:gap-6">
            {/* Calendar Section */}
            <div className="border border-black rounded-lg">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={startDay}
                  onChange={handleStartDateChange} // Handle start date selection
                />
              </LocalizationProvider>
            </div>

            {/* Start Date and Time Selection */}
            <div className="lg:my-14">
              <div className="flex gap-1 md:gap-2 lg:gap-4 mt-4">
                <FormControl>
                  <InputLabel id="start-month-label">Start Month</InputLabel>
                  <Select
                    sx={{
                      width: {
                        xs: "115px",
                        sm: "130px",
                        md: "220px",
                        lg: "220px",
                        xl: "220px",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "black",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": { borderColor: "black" },
                        "&.Mui-focused fieldset": { borderColor: "black" },
                      },
                    }}
                    labelId="start-month-label"
                    value={startMonth}
                    onChange={(e) =>
                      handleStartSelectChange(e.target.value, startDaySelect)
                    }
                    label="Start Month"
                  >
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <div className="flex gap-1 md:gap-2 lg:gap-4">
                  <FormControl>
                    <InputLabel id="start-day-select-label">
                      Start Day
                    </InputLabel>
                    <Select
                      labelId="start-day-select-label"
                      value={startDaySelect}
                      onChange={(e) =>
                        handleStartSelectChange(startMonth, e.target.value)
                      }
                      label="Start Day"
                      sx={{
                        width: {
                          xs: "75px",
                          sm: "105px",
                          md: "150px",
                          lg: "220px",
                          xl: "220px",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                            borderWidth: "2px",
                          },
                          "&:hover fieldset": { borderColor: "black" },
                          "&.Mui-focused fieldset": { borderColor: "black" },
                        },
                      }}
                    >
                      {days.map((day) => (
                        <MenuItem key={day} value={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="start-time-label">Start Time</InputLabel>
                    <Select
                      labelId="start-time-label"
                      value={startTime}
                      onChange={(e) => {
                        setStartTime(e.target.value);
                        setEndTime(e.target.value); // Sync start and end time
                      }}
                      label="Start Time"
                      sx={{
                        width: {
                          xs: "110px",
                          sm: "120px",
                          md: "150px",
                          lg: "200px",
                          xl: "200px",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                            borderWidth: "2px",
                          },
                          "&:hover fieldset": { borderColor: "black" },
                          "&.Mui-focused fieldset": { borderColor: "black" },
                        },
                      }}
                    >
                      {times.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* End Date and Time Selection */}
              <div className="flex gap-1 md:gap-2 lg:gap-4 mt-4">
                <FormControl>
                  <InputLabel id="end-month-label">End Month</InputLabel>
                  <Select
                    labelId="end-month-label"
                    value={endMonth}
                    label="End Month"
                    sx={{
                      width: {
                        xs: "110px",
                        sm: "130px",
                        md: "220px",
                        lg: "220px",
                        xl: "220px",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "black",
                          borderWidth: "2px",
                        },
                        "&:hover fieldset": { borderColor: "black" },
                        "&.Mui-focused fieldset": { borderColor: "black" },
                      },
                    }}
                  >
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <div className="flex gap-1 md:gap-2 lg:gap-4">
                  <FormControl>
                    <InputLabel id="end-day-select-label">End Day</InputLabel>
                    <Select
                      labelId="end-day-select-label"
                      value={endDaySelect}
                      label="End Day"
                      sx={{
                        width: {
                          xs: "65px",
                          sm: "105px",
                          md: "150px",
                          lg: "220px",
                          xl: "220px",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                            borderWidth: "2px",
                          },
                          "&:hover fieldset": { borderColor: "black" },
                          "&.Mui-focused fieldset": { borderColor: "black" },
                        },
                      }}
                    >
                      {days.map((day) => (
                        <MenuItem key={day} value={day}>
                          {day}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="end-time-label">End Time</InputLabel>
                    <Select
                      labelId="end-time-label"
                      value={endTime}
                      label="End Time"
                      sx={{
                        width: {
                          xs: "110px",
                          sm: "120px",
                          md: "150px",
                          lg: "200px",
                          xl: "200px",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "black",
                            borderWidth: "2px",
                          },
                          "&:hover fieldset": { borderColor: "black" },
                          "&.Mui-focused fieldset": { borderColor: "black" },
                        },
                      }}
                    >
                      {times.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cause Description */}
        <TextField
          label="Cause Description (Why are you running this fundraiser)"
          multiline
          rows={4}
          placeholder="i.e. Purchase uniforms, pay for school supplies"
          sx={{
            width: {
              xs: "280px",
              sm: "600px",
              md: "800px",
              lg: "800px",
              xl: "800px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
                borderWidth: "2px",
              },
              "&:hover fieldset": { borderColor: "black" },
              "&.Mui-focused fieldset": { borderColor: "black" },
            },
          }}
        />

        {/* Fundraising Goal */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-20">
          <div className="flex flex-col gap-2 sm:w-1/2">
            <p className="text-lg font-semibold">Fundraising Goal for Team</p>
            <p>
              When selecting, please keep in mind you get 50% of what you raise.
              So if you want to raise $1000, your goal should be $2000. You will
              select your individual goal when you set up your pop-up store.
            </p>
          </div>
          <TextField
            label="Fundraising Goal for Team"
            sx={{
              width: {
                xs: "280px",
                sm: "200px",
                md: "300px",
                lg: "300px",
                xl: "300px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
                },
                "&:hover fieldset": { borderColor: "black" },
                "&.Mui-focused fieldset": { borderColor: "black" },
              },
            }}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            InputProps={{ startAdornment: <span className="pr-2">$</span> }}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex sm:justify-end gap-2 sm:gap-8 mt-6 mx-auto sm:mx-0">
          <Button
            onClick={handleBack}
            variant="contained"
            sx={{
              width: "120px",
              backgroundColor: "#F1B42C", // Back button color
              ":hover": { backgroundColor: "#E0A72A" },
            }}
          >
            Back
          </Button>
          <Link
            href="/acknowledgment"
            className="bg-green-800 px-10 py-2 text-white font-semibold rounded-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
