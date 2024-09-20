import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice"; // Update the path if necessary
import { Link } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";

const Cart = () => {
  // Access cart items and total amount from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  console.log("cartItems", cartItems);
  const deliveryCharge = 45;

  // Function to update quantity and dispatch the action to Redux store
  const updateQuantity = (productId, newQuantity) => {
    const product = cartItems.find((item) => item.id === productId);
    if (!product) return;

    const updatedQuantity = Math.max(1, newQuantity);
    const totalPrice = product.price * updatedQuantity;

    dispatch(
      addItemToCart({
        id: productId,
        quantity: updatedQuantity - product.quantity,
        totalPrice: totalPrice - product.totalPrice,
        price: product.price,
        productName: product.productName,
        productImage: product.productImage,
        deliveryCharge: product.deliveryCharge,
      })
    );
  };

  return (
    <>
      <nav className="flex justify-center mt-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm md:text-lg font-medium text-gray-900 hover:text-blue-600">
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to={"/cart"}
                className="ms-1 text-sm md:text-lg font-medium text-gray-900 hover:text-blue-600 md:ms-2">
                About us
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
              <span className="w-full max-w-[260px] text-center">Quantity</span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          {cartItems.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-2">
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img
                    src={product.productImage}
                    alt={`${product.productName} image`}
                    className="xl:w-[100px] rounded-xl object-cover"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                    {product.productName}
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    {product.productName}
                  </p>
                  <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">
                    RS:{product.price.toFixed(2)}
                  </h6>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <MdDeleteSweep />
                {/* delevery */}
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                  Rs: {deliveryCharge.toFixed(2)}{" "}
                  <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery Charge)</span>
                </h6>
                <div className="flex items-center w-full mx-auto justify-center">
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none">
                      <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                  />
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none">
                      <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  RS: {(product.price * product.quantity).toFixed(2)}
                </h6>
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">Rs: {totalAmount.toFixed(2)}</h6>
            </div>

            {/* deliveryCharge */}
            {/* <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                ${cartItems.reduce((acc, item) => acc + item.deliveryCharge, 0).toFixed(2)}
              </h6>
            </div> */}
            {/* total */}
            {/* <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                ${(totalAmount + cartItems.reduce((acc, item) => acc + item.deliveryCharge, 0)).toFixed(2)}
              </h6>
            </div> */}
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
              <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                {/* ${(totalAmount + cartItems.reduce((acc, item) => acc + item.deliveryCharge, 0)).toFixed(2)} */}
                RS: {totalAmount}
              </h6>
            </div>
          </div>

          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
              <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Continue Shopping</span>
            </button>
            <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-600 justify-center transition-all duration-500 hover:bg-indigo-700">
              <span className="px-2 font-semibold text-lg leading-8 text-white">Checkout Now</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
