"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Check = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    router.push("/my-account/events/payout-account?method=check");
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Check Payout Information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 bg-[#009368]/5 mb-14">
          {/* Pay to (name/organization) */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Pay to (name/organization the check should be issued to)
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                errors.payTo ? "border-red-500" : "border-black"
              }`}
              {...register("payTo", {
                required: "Payee name is required",
              })}
            />
            {errors.payTo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.payTo.message}
              </p>
            )}
          </div>

          {/* Address section */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Where should the check be mailed?
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Street Address */}
              <div>
                <label className="block mb-1">Street Address</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded focus:outline-none ${
                    errors.streetAddress ? "border-red-500" : "border-black"
                  }`}
                  {...register("streetAddress", {
                    required: "Street address is required",
                  })}
                />
                {errors.streetAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.streetAddress.message}
                  </p>
                )}
              </div>

              {/* Unit/Apt */}
              <div>
                <label className="block mb-1">Unit/Apt</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none border-black"
                  {...register("unitApt")}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* City */}
              <div>
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded focus:outline-none ${
                    errors.city ? "border-red-500" : "border-black"
                  }`}
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="block mb-1">State</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded focus:outline-none ${
                    errors.state ? "border-red-500" : "border-black"
                  }`}
                  {...register("state", {
                    required: "State is required",
                  })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              {/* Zip */}
              <div>
                <label className="block mb-1">Zip</label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 border rounded focus:outline-none ${
                    errors.zip ? "border-red-500" : "border-black"
                  }`}
                  {...register("zip", {
                    required: "Zip code is required",
                  })}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Memo Section */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Memo Section (if blank we will put Teas for a Cause Fundraiser)
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none border-black`}
              {...register("memo")}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#009368] text-white py-2 px-10 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Check;
