"use client";

import React from "react";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AcknowledgmentForm() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <p className="text-2xl font-bold py-6 px-10">Acknowledgment</p>

      <div className="bg-gray-100 py-6 px-10">
        <p className="text-sm sm:text-lg mb-6">
          You, as an Organizer, represent, warrant, and covenant that: (i) all
          information you (whether through yourself, an agent or using
          artificial intelligence) provide in connection with an Organizer or
          Beneficiary is accurate, complete, and not likely to deceive Buyers
          and that you will update appropriately as needed so that Buyers
          understand the use of funds and any other relevant information about
          your campaign; (ii) all Payouts contributed to your campaign will be
          used solely as described in the materials that you post or otherwise
          provide as the basis for your fundraising campaign; (iii) if you are
          an individual serving as a representative for a Beneficiary, you
          represent and warrant that you are authorized by the Beneficiary to
          raise funds on their behalf and to use the Beneficiary’s name and
          trademarks in any fundraising campaign or event; (iv) you will
          promptly remit any proceeds you receive in connection with the
          Fundraising Services designated for a Beneficiary to such Beneficiary
          and a failure to do so may result in tax reporting and legal
          obligations (v) you will not infringe the rights of others; (vi) you
          are not a service provider, independent contractor, or agent to
          Natriet and proceeds you receive are intended for a Beneficiary for
          the stated fundraising purpose and not as wages, premiums, annuities,
          compensations, remunerations, emoluments or other incentives or
          commissions to you; (vii) you will comply with all relevant and
          applicable laws and financial reporting obligations, including but not
          limited to, laws and obligations relating to registration, tax
          reporting, political contributions, and asset disclosures for your
          campaign...
        </p>
      </div>
      {/* Full Name and Signature Fields */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 my-8 mx-5 sm:mx-10 lg:mx-40">
        <TextField
          label="Full Name"
          variant="outlined"
          sx={{
            width: {
              xs: "280px",
              sm: "320px",
              md: "450px",
              lg: "800px",
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
        <TextField
          label="Signature"
          variant="outlined"
          multiline
          sx={{
            width: {
              xs: "280px",
              sm: "350px",
              md: "550px",
              lg: "800px",
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
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center sm:justify-end gap-2 md:gap-5 lg:gap-8 mt-6 mx-0 sm:mx-4 ">
        <Button
          onClick={handleBack}
          variant="contained"
          sx={{
            width: "120px",
            backgroundColor: "#F1B42C", // Back button color
            ":hover": {
              backgroundColor: "#E0A72A",
            },
          }}
        >
          Back
        </Button>
        <Link
          href="/set-to-go"
          className="bg-green-800 px-10 py-2 text-white font-semibold rounded-md"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
