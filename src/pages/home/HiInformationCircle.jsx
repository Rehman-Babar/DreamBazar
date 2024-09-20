import React from "react";
import Slider from "react-slick";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaBoxesPacking } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";

const CustomCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 relative mb-12">
      <Slider {...settings} className="">
        <div className="px-2">
          <div className="bg-[#F7F7F8] p-6 shadow-lg text-center border-2">
            {/* <img src="https://via.placeholder.com/150" alt="Slide 1" /> */}
            <TbTruckDelivery className="size-20 text-[#F3473A] mx-auto" />
            <h2 className="mt-4 font-semibold">Slide 1</h2>
            <p className="text-gray-600">Description for Slide 1</p>
          </div>
        </div>
        <div className="px-2 ">
          <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-lg text-center border-2">
            {/* <img src="https://via.placeholder.com/150" alt="Slide 2" /> */}
            <RiMoneyDollarBoxLine className="size-20 text-[#F3473A]  mx-auto" />
            <h2 className="mt-4 font-semibold">Slide 2</h2>
            <p className="text-gray-600">Description for Slide 2 </p>
          </div>
        </div>
        <div className="px-2 ">
          <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-lg text-center border-2">
            {/* <img src="https://via.placeholder.com/150" alt="Slide 3" /> */}
            <FaBoxesPacking className="size-20 text-[#F3473A]  mx-auto" />
            <h2 className="mt-4 font-semibold">Slide 3</h2>
            <p className="text-gray-600">Description for Slide 3</p>
          </div>
        </div>
        <div className="px-2 ">
          <div className="bg-[#F7F7F8] p-6 rounded-lg shadow-lg text-center border-2">
            {/* <img src="https://via.placeholder.com/150" alt="Slide 4" /> */}
            <MdOutlineHeadsetMic className="size-20 text-[#F3473A]  mx-auto" />
            <h2 className="mt-4 font-semibold">Slide 4</h2>
            <p className="text-gray-600">Description for Slide 4</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomCarousel;
