"use client";
import { Input, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

const CreatePopUp = () => {
  const route = useRouter();
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    route.push(`/my-account/pop-up-store/fundrise-overview`);
    // console.log(data.fundraisingGoal, image);
  };

  return (
    <div className="lg:w-[70%] mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 ">
        Create your Pop-Up Store
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Image Upload */}
        <div className="mb-10 ">
          <label className="block font-bold text-lg sm:text-xl mb-3">
            Upload a photo for your Pop-up Store*
          </label>
          <p className=" text-gray-700 mb-4">
            Upload a photo that shows you clearly. We suggest using a photo
            showing you in your activity. This is a required field.
          </p>
          <div className="relative max-w-lg mx-auto mt-10 h-60 border rounded-lg flex items-center justify-center bg-gray-200 overflow-hidden">
            {image ? (
              <div>
                <Image
                  alt="Uploaded Preview"
                  src={image}
                  width={0}
                  height={0}
                  className="h-full w-full object-cover"
                />
                <div
                  onClick={() => setImage(null)}
                  className="absolute top-3 right-3  z-10 rounded-full w-fit bg-white"
                >
                  <IoMdCloseCircle className="text-[#009368] size-7 drop-shadow shadow-lg rounded-full cursor-pointer" />
                </div>
              </div>
            ) : (
              <label className="bg-[#009368] text-white px-6 py-2 rounded cursor-pointer">
                Upload a photo
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  {...register("photo", { required: "Photo is required" })}
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
          {errors.photo && (
            <p className="text-red-500 text-sm">{errors.photo.message}</p>
          )}
        </div>

        {/* Fundraising Goal */}
        <div>
          <label className="block font-bold text-lg sm:text-xl mb-3">
            Individual Fundraising Goal*
          </label>
          {/* Why are you doing this fundraiser? */}
          <div className="mt-6">
            <label className="block font-bold text-lg sm:text-xl mb-3">
              Why are you doing this fundraiser?
            </label>
            <p className="text-gray-800 mb-2">
              i.e. Purchase uniforms, pay for school supplies
            </p>
            <TextField
              variant="outlined"
              placeholder="Enter your reason for the fundraiser"
              inputProps={{ maxLength: 100 }}
              {...register("fundraiserReason", {
                required: "Please provide a reason for the fundraiser",
                maxLength: {
                  value: 100,
                  message: "Reason cannot exceed 100 characters",
                },
              })}
              multiline
              rows={2}
              sx={{
                width: {
                  xs: "100%", // 100% width on extra-small screens
                  sm: "320px", // 300px width on small screens
                  md: "400px", // 350px width on medium screens
                  lg: "800px", // 400px width on large screens
                 
                },
              }}
            />
            {errors.fundraiserReason && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fundraiserReason.message}
              </p>
            )}
          </div>
          <p className=" text-gray-800 my-5">
            You can enter the goal that your fundraiser captain/organizer
            suggested or the amount you feel comfortable with. <br /> Ask your
            organizer if you’re unsure. This is a required field.
          </p>
          <input
            type="text"
            className={`rounded-lg w-60 sm:w-80 lg:w-96 px-3 py-2 border ${
              errors.fundraisingGoal ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="$200"
            {...register("fundraisingGoal", {
              required: "Fundraising goal is required",
              pattern: {
                value: /^\$?\d+(\.\d{1,2})?$/,
                message: "Please enter a valid amount (e.g., $200)",
              },
            })}
          />
          {errors.fundraisingGoal && (
            <p className="text-red-500 text-sm">
              {errors.fundraisingGoal.message}
            </p>
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

export default CreatePopUp;
