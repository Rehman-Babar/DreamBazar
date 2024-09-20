import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./product-card/ProductCard"; // assuming ProductCard is in the same folder
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice.js";

// get original products

// const products = [
//   {
//     image: "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2023-08-07at11.07.14PM.jpg?v=1692517988&width=533",
//     hoverImage: "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2023-08-06at2.23.01AM_1.jpg?v=1705902385&width=493",
//     discount: "63%",
//     title: "Air 31 Bluetooth Headset",
//     rating: 5,
//     reviews: 17,
//     newPrice: 1850,
//     oldPrice: "Rs.5,000.00",
//     isSoldOut: false,
//   },
//   {
//     image: "https://hmnstudio.com/cdn/shop/files/WhatsApp_Image_2024-07-24_at_7.13.21_PM.jpg?v=1721830617&width=940",
//     hoverImage:
//       "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2023-12-15at1.34.15PM_b800895e-baf7-42e5-a2fd-1c31de059bb0.jpg?v=1704866076&width=600",
//     discount: "61%",
//     title: "Airpods Pro Max",
//     rating: 4,
//     reviews: 6,
//     newPrice: 2299,
//     oldPrice: "Rs.5,999.00",
//     isSoldOut: false,
//   },
//   {
//     image: "https://hmnstudio.com/cdn/shop/products/2mc2.jpg?v=1685881076&width=165",
//     hoverImage: "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2023-08-06at2.22.34AM_2.jpg?v=1712000425&width=360",
//     discount: "42%",
//     title: "Airpods 2 Master Copy",
//     rating: 5,
//     reviews: 21,
//     newPrice: 2300,
//     oldPrice: "Rs.3,999.00",
//     isSoldOut: true,
//   },
//   {
//     image: "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2024-01-22at10.54.42AM.jpg?v=1705903001&width=720",
//     hoverImage: "https://hmnstudio.com/cdn/shop/files/WhatsAppImage2023-08-06at2.23.01AM_1.jpg?v=1705902385&width=493",
//     discount: "50%",
//     title: "Airpods Pro Titanium",
//     rating: 5,
//     reviews: 46,
//     newPrice: "From Rs.2,599.00",
//     oldPrice: "Rs.5,299.00",
//     isSoldOut: false,
//   },
// ];

const ProductList = () => {
  //   const [products, setproducts] = useState([]);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       try {
  //         const res = await fetch(`http://localhost:9000/client/getAddedProducts`);
  //         const data = await res.json();
  //         setproducts(data);
  //         console.log(data);
  //       } catch (error) {
  //         console.error("Error fetching products:", error);
  //       }
  //     };
  //     getProducts();
  //   }, []);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Step 3: Handle loading, error, and display of products
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // for medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-2 md:px-0 lg:px-8 py-8 space-y-24">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-4">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
