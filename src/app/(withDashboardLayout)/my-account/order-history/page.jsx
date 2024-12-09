import Image from "next/image";
import banner from "../../../../../public/assets/images/Stock Photos/Tea collage.png";

const page = () => {
  return (
    <div className="mb-10 lg:w-[70%] mx-auto">
      {" "}
      <div className="p-5">
        {/* Text Section */}
        <div className="text-left space-y-5 mb-40">
          <p className="text-xl font-bold mb-5">
            If any orders have been placed and linked via email, they will
            display here. This includes orders placed through the causes page or
            from any fundraisers.
          </p>
          <p className="text-xl font-bold mb-5">
            Tracking information will also be displayed here for each order.
          </p>
          <p className="text-xl font-bold mb-5">
            If no orders have been placed, this area will be blank and will
            contain a link to the Shop Causes banner.
          </p>
        </div>

        {/* Banner Section */}
        <div className="w-full">
          <a href="/shop-causes">
            <Image
              className="w-full h-60 object-cover"
              src={banner}
              alt="Shop and Support a Cause"
              width={0}
              height={0}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
