import { TextField, Button } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center bg-[url('../../public/assets/images/bg_goal.jpg')] py-12 sm:py-44 mt-10 sm:mt-0">
      <div className="flex flex-col mx-auto">
        <div className="bg-gray-200 border-2 border-green-700 p-2 sm:p-8 rounded-md w-full">
          <h2 className="text-lg font-bold mb-6 text-center">Login</h2>

          <div className="mb-4">
            <TextField
              label="Email Address"
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

          <div className="mb-4">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
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

          <div className="flex justify-between mb-6">
            <a href="#" className="text-sm font-semibold text-[6f7775]">
              Forgot Password?
            </a>
          </div>

          <div className="flex justify-end">
            <Link
              href="/my-account/dashboard/choose"
              className="w-32 bg-[#009368] hover:bg-[#229868] text-center py-2 text-white font-semibold rounded-md"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="mt-4 text-right">
          <Link href="signup" className=" font-semibold text-black">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
