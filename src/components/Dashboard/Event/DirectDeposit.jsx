import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const DirectDeposit = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form submission here
    router.push("/my-account/events/payout-account?method=direct-deposit");
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold  mb-10 ">
        Direct Deposit/ACH Information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-5 bg-[#009368]/5 mb-14">
          {/* Name on the account */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Name on the account
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                errors.accountName ? "border-red-500" : "border-black"
              }`}
              {...register("accountName", {
                required: "Account name is required",
              })}
            />
            {errors.accountName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountName.message}
              </p>
            )}
          </div>

          {/* Bank Routing Number */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Bank Routing Number
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                errors.routingNumber ? "border-red-500" : "border-black"
              }`}
              placeholder="--- 1569"
              {...register("routingNumber", {
                required: "Routing number is required",
              })}
            />
            {errors.routingNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.routingNumber.message}
              </p>
            )}
          </div>

          {/* Account Number */}
          <div className="mb-7">
            <label className="block text-lg font-medium mb-2">
              Account Number
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded focus:outline-none ${
                errors.accountNumber ? "border-red-500" : "border-black"
              }`}
              placeholder="--- 2357"
              {...register("accountNumber", {
                required: "Account number is required",
              })}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </div>

          {/* Zip */}
          <div className="">
            <label className="block text-lg font-medium mb-2">
              Zip (of address on account)
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                errors.zip ? "border-red-500" : "border-black"
              }`}
              {...register("zip", { required: "Zip code is required" })}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className=" bg-[#009368] text-white py-2 px-10 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DirectDeposit;
