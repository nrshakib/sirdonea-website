"use client";

import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OrganizerForm() {
  const router = useRouter(); // Initialize the useRouter hook

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };
  return (
    <div className="flex flex-col md:px-8 xl:px-56 py-20 bg-[url('../../public/assets/images/bg_goal.jpg')]">
      <div className="mx-4 sm:mx-0">
        <h2 className="text-2xl font-bold mb-2">Organizer Information</h2>
        <p className="text-lg text-[6f7775] mb-6">
          This information is used to verify and confirm your identity.
        </p>
      </div>
      <div className="w-full bg-gray-50 p-4 lg:p-8 rounded-md">
        <form className="flex flex-col gap-2 sm:gap-12 mb-6">
          {/* Name */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <TextField
              label="First Name"
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

            <TextField
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

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4">
            <TextField
              label="Email"
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

            {/* Phone */}
            <TextField
              label="Phone"
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
            href="/organization-info"
            className="bg-green-800 px-10 py-2 text-white font-semibold rounded-md"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
