/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import image from "@/../public/assets/images/Teas/Peach.png";
import { Button, TextField } from "@mui/material";

export default function SignUp() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5 md:gap-8 xl:gap-20 mx-auto my-12">
        <div className="md:w-1/2 lg:w-1/3 text-center mx-2 xl:mx-0">
          <p className="text-lg lg:text-3xl font-bold mb-2 sm:mb-10">
            Your Fundraiser Journey Starts Here!
          </p>
          <p className="lg:text-lg font-semibold">
            Welcome! We're excited you're ready to start your fundraising
            journey. Signing up is simple and easy. First, we'll start with some
            basic questions to create an account and verify your identity. Once
            your account is set-up you’ll be able to create a fundraiser,
            participate in a fundraiser or shop your favorite teas.
          </p>
        </div>
        <div>
          <Image src={image} alt="Sign Up Image" width={600} height={400} />
        </div>
      </div>
      <div className="flex items-center flex-col gap-3 sm:gap-12 bg-gray-100 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-12">
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
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
            id="last-name"
            label="Last Name"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
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
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-12">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
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
            id="phone"
            label="Phone Number"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
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
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-12">
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
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
            id="confirm-password"
            label="Confirm Password"
            type="password"
            variant="outlined"
            sx={{
              width: { sm: "300px", md: "400px", lg: "500px", xl: "600px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                  borderWidth: "2px",
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
        <div className="">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              width: "100px",
              fontWeight: "bold",
              float: "right",
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
