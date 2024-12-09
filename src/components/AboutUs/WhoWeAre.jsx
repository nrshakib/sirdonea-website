import Image from "next/image";
import kidssoccer2 from "../../../public/assets/images/Stock Photos/kidssoccer2.png";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { VscHeartFilled } from "react-icons/vsc";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className="px-5 py-16 2xl:py-0 2xl:px-0">
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
          <div>
            <Image
              src={kidssoccer2}
              alt="kidssoccer2"
              height={0}
              width={0}
              size={"100vw"}
              className="md:w-[80%] mx-auto lg:h-[55vh] xl:h-[50vh] 2xl:h-[48vh] rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-bold text-[#009368] animate-grow">
              Who We Are ?
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#213430] animate-grow">
              Helping Change the World, One Community at a Time
            </p>
            <div className="bg-[#ECA30C] w-20 h-[3px] rounded-full"></div>
            <p className="text-[#6F7775] md:text-xl">
              Created with you in mind, our sole purpose is to help you reach
              your goals. Our motto:{" "}
              <span className="font-semibold italic">
                Be Good, Do Good, Live Good
              </span>{" "}
              is not just what we do, it&apos;s our way of life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center gap-5">
                <FaHandHoldingDollar className="text-[#ECA30C] size-16 animate-grow" />
                <p className="xl:text-xl font-bold text-[#213430]">
                  We support our <br /> partners by giving <br /> 50% of all
                  sales
                </p>
              </div>
              <div className="flex items-center gap-5">
                <VscHeartFilled className="text-[#ECA30C] size-16 animate-grow" />
                <p className="xl:text-xl font-bold text-[#213430]">
                  Our Mission is to <br /> Fulfill Others Dreams
                </p>
              </div>
            </div>
            <Link
              href="/shop"
              className="text-center bg-[#009368] border-2 border-white text-white font-bold
              rounded-[10px] hover:bg-[#D58C13] hover:text-white mt-6 px-5 py-4 
              text-base w-[220px] transition-all transform hover:scale-105 animate-grow"
            >
              Support A Cause
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
