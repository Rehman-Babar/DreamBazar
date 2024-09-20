/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { Link } from "react-router-dom";
import "../product-card/CollectionCard.css";

const CollectionCard = ({
  image,
  hoveredImg,
  discount,
  title,
  rating,
  newPrice,
  oldPrice,
  isSoldOut,
  product,
  category,
  New,
  colors,
  size,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" p-1  rounded-lg shadow-sm mb-2 overflow-hidden bg-white transition-all duration-500 ease-in-out transform hover:scale-105 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="flip-left"
      data-aos-duration="4000">
      <div className="relative border  p-2 rounded-t-md">
        <img
          src={isHovered ? hoveredImg : image}
          alt={title}
          className="w-full h-48 object-cover transition-all duration-500 ease-in-out rounded-md border"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {discount} off
          </span>
        )}
        {isSoldOut && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
            Sold out
          </span>
        )}
        {New && (
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
            new
          </span>
        )}
      </div>
      <div className="p-2 transition-colors duration-500 ease-in-out border">
        <div className="flex items-center justify-between mb-2">
          {/* Rating */}
          <h3 className="text-sm text-[#ACACAC]">{category}</h3>
          <div className="flex text-red-400">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="ri-star-fill"></i>
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <i key={i} className="ri-star-line"></i>
            ))}
          </div>
        </div>

        {/* product */}
        <p className="text-[#ACACAC] hover:text-blue-700 hover:cursor-pointer relative z-10">{product}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">${newPrice}</span>
          <span className="text-sm line-through text-gray-500">${oldPrice}</span>
        </div>
        <div className="flex gap-1  justify-between">
          <div className="flex float-end gap-3">
            {colors.map((color) => (
              <div
                style={{ backgroundColor: color }}
                key={color}
                className="size-5 rounded-md hover:border-2 border-white hover:cursor-pointer"></div>
            ))}
          </div>
          <div className="flex float-end gap-3">
            {size.map((item) => (
              <div
                key={item}
                className={`size-5 border-2 hover:border-black text-[10px] pr-4 px-2 text-center rounded-md bg-[#ACACAC] opacity-100 text-white hover:cursor-pointer`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 justify-center bg-opacity-50 text-white transition-all duration-500 ease-in-out mb-5 z-10 pointer-events-none">
          <div className="flex gap-8 text-black transition-all duration-1000 pointer-events-auto z-20 bg-white px-2 py-3">
            <Link to={"/view"}>
              <MdOutlineRemoveRedEye className="size-4" />
            </Link>
            <FaCartPlus className="size-4" />
            <FaRegHeart className="size-4" />
            <IoMdGitCompare className="size-4" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 flex flex-row md:flex-row items-center justify-center bg-opacity-50 text-white transition-all duration-500 ease-in-out mb-5 z-10 pointer-events-none md:hidden">
        <div className="flex gap-8 text-black transition-all duration-1000 pointer-events-auto z-20 bg-white px-2 py-3">
          <Link to={"/view"}>
            <MdOutlineRemoveRedEye className="size-4" />
          </Link>
          <FaCartPlus className="size-4" />
          <FaRegHeart className="size-4" />
          <IoMdGitCompare className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
