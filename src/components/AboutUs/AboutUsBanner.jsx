import karateKids from "../../../public/assets/images/Stock Photos/kidskarate.png";

const AboutUsBanner = () => {
  return (
    <div>
      <div
        className=" bg-center bg-no-repeat bg-cover h-[40vh] w-full "
        style={{
          backgroundImage: `linear-gradient(#00000077, #00000077),url(${karateKids.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
      >
        <div className="h-full bg-[#224140]/45">
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
    </div>
  );
};

export default AboutUsBanner;
