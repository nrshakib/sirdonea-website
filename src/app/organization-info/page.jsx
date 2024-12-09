"use client";

import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrganizationInfo() {
  const [value, setValue] = useState("yes");
  const router = useRouter();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col md:px-8 xl:px-56 py-20 bg-[url('../../public/assets/images/bg_goal.jpg')]">
      <div className="mx-4 sm:mx-0">
        <h2 className="text-2xl font-bold mb-2">Organization Information</h2>
        <p className="text-lg text-[6f7775] mb-6">
          This information is used to verify and confirm your organization. It
          will also be used for tax purposes when reporting payments.
        </p>
      </div>
      <div className="w-full bg-gray-50 p-4 lg:p-8 rounded-md">
        <form className="flex flex-col gap-2 sm:gap-12 mb-6">
          {/* Name */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <TextField
              label="Organization Name"
              variant="outlined"
              sx={{
                width: {
                  xs: "280px",
                  sm: "390px",
                  md: "450px",
                  lg: "600px",
                  xl: "650px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />

            {/* <TextField
              label="Last Name"
              variant="outlined"
              sx={{
                width: {
                  xs: "280px",
                  sm: "390px",
                  md: "450px",
                  lg: "600px",
                  xl: "650px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            /> */}
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
            <TextField
              label="Organization Industry"
              variant="outlined"
              sx={{
                width: {
                  xs: "280px",
                  sm: "280px",
                  md: "350px",
                  lg: "350px",
                  xl: "500px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Non-Profit</FormLabel>
              <RadioGroup
                aria-label="selection"
                name="selection"
                value={value}
                onChange={handleChange}
                row
                className="flex"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Tax ID/SSN"
              variant="outlined"
              sx={{
                width: {
                  xs: "280px",
                  sm: "200px",
                  md: "300px",
                  lg: "350px",
                  xl: "500px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-2">
            <TextField
              label="Street Address"
              variant="outlined"
              sx={{
                width: {
                  xs: "280px",
                  sm: "450px",
                  md: "650px",
                  lg: "700px",
                  xl: "800px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            <TextField
              label="City"
              variant="outlined"
              sx={{
                width: {
                  xs: "200px",
                  sm: "300px",
                  md: "300px",
                  lg: "400px",
                  xl: "450px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            <TextField
              label="State"
              variant="outlined"
              sx={{
                width: {
                  xs: "200px",
                  sm: "300px",
                  md: "300px",
                  lg: "400px",
                  xl: "450px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
            <TextField
              label="Zip"
              variant="outlined"
              sx={{
                width: {
                  xs: "120px",
                  sm: "150px",
                  md: "200px",
                  lg: "250px",
                  xl: "250px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black", // Darker border color
                    borderWidth: "2px", // Thicker border
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            variant="contained"
            sx={{
              width: "120px",
              backgroundColor: "#F1B42C", // Back button color
              ":hover": {
                backgroundColor: "#E0A72A",
              },
            }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Link
            href="/fundraiser-details"
            className="bg-green-800 px-10 py-2 text-white font-semibold rounded-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
