/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsAndroid, BsWatch } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { GiClothes, GiClothJar } from "react-icons/gi";
import { FcCloth, FcElectronics } from "react-icons/fc";
import { MdSports } from "react-icons/md";
import "./product-card/catagries.css";

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // padding: 16,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="section-popular mb-24" data-aos="fade-up" style={{ marginTop: "100px" }}>
        <div className="container mx-auto px-10 gap-5 space-x-6">
          <div className="row ">
            <div className="mb-8 hidden">
              <h2 className="text-2xl font-bold text-black">Categories</h2>
            </div>

            <Slider {...settings}>
              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800">
                      <FaAndroid />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Android Phones</a>
                  </h4>
                  <p className="text-sm text-gray-600">(3 Items)</p>
                </div>
              </div>

              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800">
                      <GiClothes />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Clothes</a>
                  </h4>
                  <p className="text-sm text-gray-600">(1 Item)</p>
                </div>
              </div>

              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow group">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto ">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800 ">
                      <FcElectronics />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Electronics</a>
                  </h4>
                  <p className="text-sm text-gray-600">(1 Item)</p>
                </div>
              </div>

              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow ">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800">
                      <GiClothJar />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Men's Clothes</a>
                  </h4>
                  <p className="text-sm text-gray-600">(0 Items)</p>
                </div>
              </div>

              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow ">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800">
                      <MdSports />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Sports Items</a>
                  </h4>
                  <p className="text-sm text-gray-600">(0 Items)</p>
                </div>
              </div>

              <div className="category-block text-center group p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-300 transition-shadow ">
                <div className="category-icon mb-4 group-hover:scale-150 group-hover:pt-4 relative">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="fi fi-tr-shirt-long-sleeve text-4xl text-gray-800">
                      <BsWatch />
                    </i>
                  </div>
                </div>
                <div className="category-title">
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a href="https://dreambazar.store/shop">Watches</a>
                  </h4>
                  <p className="text-sm text-gray-600">(0 Items)</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
