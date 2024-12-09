import Image from "next/image";
import teas from "../../../public/assets/images/Stock Photos/Tea collage.png";

const ResourcesBanner = () => {
  return (
    <div className="relative h-[40vh]">
      <Image
        src={teas}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 w-full h-full object-center"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute w-full h-full z-10  bg-[#224140]/45">
        <div className="container px-5 mx-auto text-start flex items-center h-full">
          <div>
            <div className="text-white text-4xl md:text-5xl font-semibold">
              About Us
            </div>
            <div className="bg-[#ECA30C] w-20 h-1 ml-2 mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBanner;
