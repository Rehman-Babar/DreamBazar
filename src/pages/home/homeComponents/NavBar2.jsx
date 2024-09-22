import React, { useState } from "react";
import { FaBars, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("dairy"); // Store selected category

  // Toggle the dropdown menu on smaller screens
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Categories and subcategories data
  const categories = [
    { id: "dairy", name: "Dairy & Bakery" },
    { id: "fruits", name: "Fruits & Vegetables" },
    { id: "snacks", name: "Snack & Spice" },
    { id: "juice", name: "Juice & Drinks" },
  ];

  const subcategories = {
    dairy: [
      { title: "Dairy", items: ["Milk", "Ice Cream", "Cheese", "Frozen Custard", "Frozen Yogurt"] },
      { title: "Bakery", items: ["Cake and Pastry", "Rusk Toast", "Bread & Buns", "Chocolate Brownie", "Cream Roll"] },
    ],
    fruits: [
      { title: "Fruits", items: ["Apple", "Banana", "Mango", "Orange", "Pineapple"] },
      { title: "Vegetables", items: ["Cauliflower", "Bell Peppers", "Broccoli", "Cabbage", "Tomato"] },
    ],
    snacks: [
      { title: "Snacks", items: ["French Fries", "Potato Chips", "Biscuits & Cookies", "Popcorn", "Rice Cakes"] },
      {
        title: "Spice",
        items: ["Cinnamon Powder", "Cumin Powder", "Fenugreek Powder", "Pepper Powder", "Long Pepper"],
      },
    ],
    juice: [
      { title: "Juice", items: ["Mango Juice", "Coconut Water", "Tetra Pack", "Apple Juice", "Lychee Juice"] },
      { title: "Soft Drink", items: ["Breizh Cola", "Green Cola", "Jolt Cola", "Mecca Cola", "Topsia Cola"] },
    ],
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu Button for small screens */}
          <div className="relative">
            <button className="text-black focus:outline-none lg:hidden" onClick={toggleMenu}>
              <CiMenuFries size={24} />
            </button>

            {/* Dropdown menu button for large screens */}
            <div className="hidden lg:block relative group">
              <button className="text-black focus:outline-none">
                <CiMenuFries size={24} />
              </button>
              {/* Dropdown menu */}
              <div className="absolute top-6 left-0 w-[570px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out invisible group-hover:visible z-50">
                <div className="flex">
                  {/* Categories in the first column */}
                  <div className="w-[100%] border-r p-4 space-y-3 mt-2 ">
                    {categories.map((category) => (
                      <div key={category.id} className="mb-2">
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`border-2 px-2 rounded-md pr-5 py-2 ${
                            selectedCategory === category.id ? "border-[#F3473A]" : "border-[#E5E7EB]"
                          }`}>
                          {category.name}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Subcategories and items in the next two columns */}
                  {selectedCategory && (
                    <div className="w-[70rem] flex">
                      {subcategories[selectedCategory].map((subcategory, index) => (
                        <div key={index} className="w-[120%] p-4 border-r">
                          <h3 className="font-bold text-red-500 mb-2 border-b-2">{subcategory.title}</h3>
                          <ul>
                            {subcategory.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="mb-2">
                                <a href="#" className="text-gray-800 hover:text-red-500">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links for large screens */}
          <div className="hidden lg:flex space-x-8 mr-[406px]">
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              Category
            </a>
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              Track Order
            </a>
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              Check Out
            </a>
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              FAQs
            </a>
            <a href="#" className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              Blogs
            </a>
            <Link to={"/about-us"} className="text-[#0D0D0D] font-semibold hover:text-gray-600">
              About Us
            </Link>
          </div>

          {/* Icons for small screens */}
          <div className="flex space-x-4 lg:hidden">
            <FaUser className="text-black" size={20} />
            <FaHeart className="text-black" size={20} />
            <Link to={"/cart"}>
              <FaShoppingCart className="text-black" size={20} />
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            Home
          </a>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            Category
          </a>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            Track Order
          </a>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            Check Out
          </a>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            FAQs
          </a>
          <a href="#" className="block text-black hover:text-gray-600 py-2">
            Blogs
          </a>
          <Link to={"/about-us"} className="text-[#0D0D0D] font-semibold hover:text-gray-600">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
