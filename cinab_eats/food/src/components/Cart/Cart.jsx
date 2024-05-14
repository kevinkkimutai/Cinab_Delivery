import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCart, setIsCart } from "../../reducers/AuthReducers";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector(selectIsCart);
  const dispatch = useDispatch();

  // Function to update quantity
  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    dispatch(setIsCart(updatedCart));
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    dispatch(setIsCart(updatedCart));
  };
  const clearCart = (id) => {
    dispatch(setIsCart([]));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate total including tax and shipping (dummy values)
  const shipping = 4.0;
  const service = 40.0;
  const total = subtotal + shipping + service;

  return (
    <div className="font-sans">
      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-12 p-6">
          <div className="lg:col-span-2 bg-white divide-y divide-gray-300">
            <div className="text-red-500 hover:text-red-600 text-lg p-4 justify-end flex hover:cursor-pointer">
              <span onClick={clearCart}>Clear cart</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid md:grid-cols-4 items-center gap-8  py-6"
              >
                {/* Display item information */}
                <div className="md:col-span-2 flex items-center gap-6">
                  {/* Display item image and details */}
                  <div className="w-32 h-20 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    {/* Additional item details */}
                  </div>
                </div>
                {/* Quantity controls */}
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      }
                    }}
                    className="bg-transparent py-2 font-semibold text-gray-800"
                  >
                    {/* Decrease quantity icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-current"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="bg-transparent mx-4 px-4 py-2 font-semibold text-gray-800 text-base shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                  >
                    {item.quantity}
                  </button>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-transparent py-2 font-semibold text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-current"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>{" "}
                  </button>
                </div>
                {/* Remove item */}
                <div className="flex items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h4>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="ml-auto px-2"
                  >
                    {/* Remove item icon */}
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-gray-100 rounded p-6 lg:sticky top-0">
            <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
            <ul className="text-gray-800 divide-y divide-gray-300 mt-6">
              <li className="flex flex-wrap gap-4 text-base py-4">
                Subtotal{" "}
                <span className="ml-auto font-bold">
                  Ksh.{subtotal.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-4">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  Ksh. {shipping.toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-4">
                Service{" "}
                <span className="ml-auto font-bold">${service.toFixed(2)}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-4 font-bold">
                Total <span className="ml-auto">${total.toFixed(2)}</span>
              </li>
            </ul>
            {/* Checkout button */}
            <button
              type="button"
              className="mt-6 text-base px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button>
            {/* Promo code input */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Apply promo code
              </h3>
              <div className="flex border border-blue-600 overflow-hidden max-w-md rounded">
                <input
                  type="email"
                  placeholder="Promo code"
                  className="w-full outline-none bg-white text-gray-600 text-base px-4 py-2.5"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-base text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="max-w-6xl mx-auto font-[sans-serif] py-6 text-[#333]">
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                  404
                </h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                  Your cart is empty{" "}
                </p>

                <Link
                  to="/"
                  class="inline-flex text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
      {/* Cart items */}
    </div>
  );
}
