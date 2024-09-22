/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/ProductCard.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../../store/wishlistSlice";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Modal from "./Modal";

const ProductCard = ({
  _id: id,
  productImage,
  hoverImage,
  discount,
  productName,
  rating,
  reviews,
  newPrice,
  oldPrice,
  unitsInStock,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlist.some((item) => item.id === id);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleQuantityChange = (e) => setQuantity(Number(e.target.value));

  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        id,
        productName,
        productImage,
        quantity,
        price: newPrice,
        totalPrice: newPrice * quantity,
      })
    );
    closeModal();
  };

  const toggleWishlistHandler = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(
        addToWishlist({
          id,
          productName,
          productImage,
          price: newPrice,
        })
      );
    }
  };

  // Ensure rating is within valid bounds (0 to 5)
  const validatedRating = Math.max(0, Math.min(5, Math.floor(rating || 0)));

  return (
    <div>
      <div
        className="border rounded-lg shadow-sm mb-2 overflow-hidden bg-white transition-all duration-500 ease-in-out transform hover:scale-105 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-aos="flip-left">
        <div className="relative">
          <img
            src={isHovered ? hoverImage : productImage}
            alt={productName}
            className="w-full h-48 object-cover transition-all duration-500 ease-in-out"
          />
          {discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {discount} off
            </span>
          )}
          {!unitsInStock && (
            <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
              Sold out
            </span>
          )}
        </div>
        <div className="p-4 transition-colors duration-500 ease-in-out">
          <h3 className="text-lg font-semibold">{productName}</h3>
          <div className="flex items-center mt-1 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(validatedRating)].map((_, i) => (
                <i key={`filled-${i}`} className="ri-star-fill"></i>
              ))}
              {[...Array(5 - validatedRating)].map((_, i) => (
                <i key={`empty-${i}`} className="ri-star-line"></i>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">({reviews})</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">{newPrice}</span>
            <span className="text-sm line-through text-gray-500">{oldPrice}</span>
          </div>
        </div>
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center space-y-3 justify-center bg-opacity-50 text-white transition-all duration-500 ease-in-out mb-5">
            <button className="bg-black text-white py-2 px-4 rounded" onClick={openModal}>
              Add To Cart
            </button>
            <div className="flex gap-8 text-black transition-all duration-1000">
              <MdOutlineRemoveRedEye className="size-6" />
              <FaCartPlus className="size-6" />
              <FaRegHeart
                className={`size-6 ${isInWishlist ? "text-red-500" : "text-black"}`}
                onClick={toggleWishlistHandler}
              />
              <IoMdGitCompare className="size-6" />
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Product Added to Cart"
        imageSrc={productImage}
        content={
          <div>
            <p className="text-lg font-semibold">{productName}</p>
            <p className="text-gray-500">{newPrice}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 border rounded p-1 text-center"
                min="1"
              />
            </div>
          </div>
        }
        footer={
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total: ${(parseFloat(newPrice) * quantity).toFixed(2)}</span>
            <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={addToCartHandler}>
              Add To Cart
            </button>
          </div>
        }
      />
    </div>
  );
};

export default ProductCard;
