"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const JoinAFundraiser = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    route.push(`/my-account/pop-up-store/create-pop-up`);
    // Handle form submission logic, such as sending the data to the server
  };
  return (
    <div className="my-10 lg:w-[70%] mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Join A Fundraiser
      </h1>
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-5">
          Enter your Fundraiser Code
        </h3>
        <p>
          Enter the code provided by your fundraiser organizer. If you do not
          have the code, please reach out to your fundraiser organizer to
          obtain. <br /> You will not be able to participate in the fundraiser
          without this code
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {/* Username Field */}
        <div>
          <input
            id="code"
            type="text"
            placeholder="000000"
            className={`border ${
              errors.code ? "border-red-500" : "border-gray-700"
            } rounded-lg w-60 sm:w-80 lg:w-96 px-3 py-2`}
            {...register("code", {
              required: "code is required",
              minLength: {
                value: 4,
                message: "code must be at least 4 characters",
              },
            })}
          />
          {errors.code && (
            <p className="text-red-500 text-sm">{errors.code.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#009368] text-white px-10 py-2 rounded-lg "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinAFundraiser;
