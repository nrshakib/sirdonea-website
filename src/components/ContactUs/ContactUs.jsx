"use client";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto  px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start mx-auto gap-10 py-32">
        {/* Left - Contact Information */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-[#009368] font-semibold text-xl mb-5">
            Get in Touch
          </h2>
          <h1 className="text-4xl font-bold mt-2 mb-4">
            Contact Us if You have Questions or Suggestions
          </h1>
          <div className="bg-[#ECA30C] w-20 h-1 mb-10"></div>
          <p className="text-gray-600 mb-6">
            We understand planning a fundraiser can be daunting. Don’t worry, we
            got your back. Let us know how we can help or any questions you may
            have.
          </p>
          <p className="text-gray-600 mb-10">
            We suggest viewing the FAQ first as many questions are answered
            there. If you can’t find the answer, feel free to reach out.
          </p>
          <h3 className="font-bold mb-4 text-xl md:text-2xl ">Contacts Info</h3>

          <div className="flex items-start mb-4">
            <div className="bg-[#ECA30C] p-3 rounded-full">
              <FaPhone className="size-7 text-white" />
            </div>
            <div className="ml-4">
              <p className="font-semibold">
                Call or Text Us (Text for quicker service)
              </p>
              <p className="text-[6f7775]">(202) 573-7003</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#ECA30C] p-3 rounded-full">
              <MdEmail className="size-7 text-white" />
            </div>
            <div className="ml-4">
              <p className="font-semibold">Mail Us</p>
              <p className="text-[6f7775]">info@teasforacause.com</p>
            </div>
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="lg:w-1/2 bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Fill the Form Below</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label className="font-semibold mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="w-full">
                <label className="font-semibold mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label className="font-semibold mb-2 block">Phone</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone.message}</span>
                )}
              </div>
              <div className="w-full">
                <label className="font-semibold mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full p-3 border border-gray-300 rounded"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className="text-red-600">{errors.subject.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="font-semibold mb-2 block">Message</label>
              <textarea
                placeholder="Enter Your Message"
                className="w-full p-3 border border-gray-300 rounded h-32"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-600">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#ECA30C] text-white font-bold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
