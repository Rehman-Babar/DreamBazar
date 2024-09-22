/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CollectionCard from "./product-card/CollectionCard";

const TopCollection = () => {
  const products = [
    {
      category: "Women Tops",
      discount: "50",
      product: "Pink T-Shirt For Women",
      newPrice: 7.99,
      oldPrice: 9.0,
      gender: "Women",
      size: ["S", "M"],
      colors: ["pink"],
      New: "new",
      rating: 0,
      image: "/product/18.jpg",
      hoveredImg: "/product/21.jpg",
      sale: "50% Sale",
    },
    {
      category: "T-shirt",
      product: "Blue T-Shirt For Men",
      newPrice: 125.0,
      oldPrice: 250.0,
      discount: "30",
      gender: "Men",
      size: ["M", "L", "XL"],
      colors: ["blue", "orange"],
      rating: 0,
      image: "/product/20.jpg",
      hoveredImg: "/product/22.jpg",
    },
    {
      category: "Jacket",
      product: "Jacket For Boy",
      newPrice: 65.0,
      oldPrice: 95.0,
      gender: "Kids",
      size: ["S"],
      colors: ["black"],
      rating: 2,
      image: "/product/44.jpg",
      hoveredImg: "/product/45.jpg",
    },
    {
      category: "Tops",
      product: "Flower Top For Women",
      newPrice: 44.0,
      oldPrice: 60.0,
      gender: "Women",
      size: ["S", "M"],
      colors: ["blue", "purple"],
      rating: 0,
      image: "/product/39.jpg",
      hoveredImg: "/product/40.jpg",
      sale: "New",
    },
    {
      category: "Jacket",
      product: "Leather Jacket For Men",
      newPrice: 255.0,
      oldPrice: 299.0,
      gender: "Men",
      size: ["S", "M"],
      colors: ["black"],
      rating: 4,
      image: "/product/44.jpg",
      hoveredImg: "/product/44.jpg",
    },
    {
      category: "T-shirt",
      product: "Pink T-Shirt For Girl",
      newPrice: 75.0,
      oldPrice: 86.0,
      gender: "Kids",
      New: "new",
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "pink"],
      rating: 3,
      image: "/product/58.jpg",
      hoveredImg: "/product/19.jpg",
    },
    {
      category: "T-shirt",
      product: "Red T-Shirt For Women",
      newPrice: 26.0,
      oldPrice: 35.0,
      gender: "Women",
      size: ["S", "M", "L", "XL"],
      colors: ["red"],
      rating: 4,
      image: "/product/58.jpg",
      hoveredImg: "/product/19.jpg",
      sale: "Trending",
    },
    {
      category: "T-shirt",
      product: "Blue T-Shirt For Men",
      newPrice: 76.0,
      oldPrice: 82.0,
      gender: "Men",
      size: ["S", "M"],
      colors: ["blue", "green"],
      rating: 1,
      image: "/product/58.jpg",
      hoveredImg: "/product/19.jpg",
    },
    {
      category: "T-shirt",
      product: "White T-Shirt For Boys",
      newPrice: 50.0,
      oldPrice: 60.0,
      gender: "Kids",
      size: ["M", "L", "XL"],
      colors: ["white"],
      rating: 5,
      image: "/product/58.jpg",
      hoveredImg: "/product/19.jpg",
    },
    {
      category: "T-shirt",
      product: "Black T-Shirt For Girl",
      newPrice: 71.0,
      oldPrice: 90.0,
      gender: "Kids",
      size: ["S", "M"],
      colors: ["purple", "black"],
      rating: 0,
      image: "/product/58.jpg",
      hoveredImg: "/product/19.jpg",
      sale: "New",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to filter products based on category
  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) => product.gender === category);
      setFilteredProducts(filtered);
    }
  };
  // console.log(filterProducts);

  return (
    <>
      {/* <nav></nav> */}

      <div className="flex  flex-col md:flex-row md:justify-between md:items-center pt-10 pb-6 pl-3 md:px-28">
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-3xl font-bold mb-2">Top Collection</h1>
          <p className="text-gray-800">Shop online for top collection and get free shipping!</p>
        </div>
        <div className="flex items-center md:space-x-4">
          <button
            className="text-gray-800 hover:text-gray-600 border-2 px-5 py-2 rounded-md"
            onClick={() => filterProducts("All")}>
            All
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 border-2 px-5 py-2 rounded-md"
            onClick={() => filterProducts("Women")}>
            Womens
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 border-2 px-5 py-2 rounded-md"
            onClick={() => filterProducts("Men")}>
            Mens
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 border-2 px-5 py-2 rounded-md"
            onClick={() => filterProducts("Kids")}>
            Kids
          </button>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:px-24">
        {filteredProducts.map((product, index) => (
          <div key={index} className="px-2">
            <CollectionCard {...product} />
          </div>
        ))}
        {/* <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
        <div className="bg-purple-500 p-4 text-white">Item 5</div>
        <div className="bg-pink-500 p-4 text-white">Item 6</div>
        <div className="bg-indigo-500 p-4 text-white">Item 7</div>
        <div className="bg-teal-500 p-4 text-white">Item 8</div>
        <div className="bg-orange-500 p-4 text-white">Item 9</div>
        <div className="bg-gray-500 p-4 text-white">Item 10</div> */}
      </div>
    </>
  );
};

export default TopCollection;
