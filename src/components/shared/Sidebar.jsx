"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ slider, setSlider }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" bg-white text-black min-h-screen h-full pt-5 border-r border-[#009368] lg:border-r-0">
      {/* //* SideBar Collaps Buttons */}
      <div className="lg:hidden">
        {slider ? (
          <div className="flex w-full justify-center items-end flex-col px-5">
            <button onClick={() => setSlider(!slider)}>
              <FaTimes className="size-5 hover:cursor-pointer" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <button onClick={() => setSlider(!slider)}>
              <FaBars className="size-5 hover:cursor-pointer" />
            </button>
          </div>
        )}
      </div>
      {/* //* SideBar Collaps Menus */}
      <div className={`${slider ? "block " : "hidden lg:block "} pt-10`}>
        <div className="hidden   lg:flex justify-center items-start flex-col gap-3 ">
          <ul className="w-full flex justify-center items-start flex-col gap-5 ">
            <Link
              href="/my-account/dashboard"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account" ||
                pathname.includes("/my-account/dashboard")
                  ? "active"
                  : ""
              }`}
            >
              <li className="">Dashboard</li>
            </Link>

            <Link
              href="/my-account/events"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all ${
                pathname.includes("/my-account/events") ? "active" : ""
              }`}
            >
              <li className="">Events</li>
            </Link>

            <Link
              href="/my-account/order-history"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account/order-history" ? "active" : ""
              }`}
            >
              <li className="">Order History</li>
            </Link>

            <Link
              href="/my-account/account-info"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account/account-info" ? "active" : ""
              }`}
            >
              <li className="">Account Info</li>
            </Link>

            <Link
              href="/my-account/pop-up-store"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all ${
                pathname.includes("/my-account/pop-up-store") ? "active" : ""
              }`}
            >
              <li className="">Pop-up Store</li>
            </Link>

            <Link
              href="/login"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded-br rounded-tr [&.active]:text-white duration-300 transition-all cursor-pointer ${
                pathname === "/my-account/logout" ? "active" : ""
              }`}
            >
              Log Out
            </Link>
          </ul>
        </div>
        {/* For Mobile  */}
        <div className="block lg:hidden">
          <ul className=" flex justify-center items-start flex-col gap-5 px-5 ">
            <Link
              onClick={() => setSlider(!slider)}
              href="/my-account"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account" ? "active" : ""
              }`}
            >
              <li className="">Dashboard</li>
            </Link>

            <Link
              onClick={() => setSlider(!slider)}
              href="/my-account/events"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname.includes("/my-account/events") ? "active" : ""
              }`}
            >
              <li className="">Events</li>
            </Link>

            <Link
              onClick={() => setSlider(!slider)}
              href="/my-account/order-history"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account/order-history" ? "active" : ""
              }`}
            >
              <li className="">Order History</li>
            </Link>

            <Link
              onClick={() => setSlider(!slider)}
              href="/my-account/account-info"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account/account-info" ? "active" : ""
              }`}
            >
              <li className="">Account Info</li>
            </Link>

            <Link
              onClick={() => setSlider(!slider)}
              href="/my-account/pop-up-store"
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname.includes("/my-account/pop-up-store") ? "active" : ""
              }`}
            >
              <li className="">Pop-up Store</li>
            </Link>

            <Link
              href="/login"
              onClick={() => setSlider(!slider)}
              className={`w-full block py-5 bg-slate-200 px-10 hover:bg-[#eca30c]  [&.active]:bg-[#009368] font-bold rounded [&.active]:text-white duration-300 transition-all ${
                pathname === "/my-account/logout" ? "active" : ""
              }`}
            >
              Log Out
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
