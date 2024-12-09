import React from "react";

const page = () => {
  return (
    <div>
      <div className="my-10 lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-xl font-bold">First Name</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              John
            </p>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-xl font-bold">Last Name</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              Doe
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Street Address</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              123 Main Road
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">City</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              New Work
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">State</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              NC
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-bold">XP</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              1202
            </p>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-xl font-bold">Email</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              Johndoe@gmail.com
            </p>
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-xl font-bold">Phone</h1>
            <p className="py-2 w-full bg-slate-200 text-black rounded-md mb-2 px-5 mt-1">
              +8801647742754
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
