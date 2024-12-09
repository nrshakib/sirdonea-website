import { Button } from "@mui/material";
import Image from "next/image";
import startFundraiser from "../../../../../../public/assets/images/Stock Photos/tea photo.png";
import shop from "../../../../../../public/assets/images/Stock Photos/tea farm.png";
import Link from "next/link";

const FundraiserCard = () => {
  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto space-y-4">
      {/* Top Section: Two Side-by-Side Items */}
      <div className="flex flex-row space-x-4">
        {/* Left side: Start a Fundraiser */}
        <div className="relative flex-1">
          <Image
            src={startFundraiser}
            width={1000}
            height={600}
            alt="Start a Fundraiser Event"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/how-it-works"
              className="bg-black bg-opacity-40 px-24 py-8 text-white text-3xl capitalize text-center font-semibold"
            >
              Start a Fundraiser Event
            </Link>
          </div>
        </div>

        {/* Right side: Join a Fundraiser */}
        <div className="relative flex-1 border-4 border-yellow-500">
          <div className="h-64 w-full flex items-center justify-center bg-white text-4xl capitalize text-center font-semibold">
            <Link href="/my-account/pop-up-store">Join a Fundraiser Event</Link>
          </div>
        </div>
      </div>

      {/* Bottom: Shop and Support */}
      <div className="relative">
        <Image
          src={shop}
          alt="Shop and Support a Cause"
          className="h-40 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <Link href="/shop" className="text-white text-2xl">
            Shop and Support a Cause
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundraiserCard;
