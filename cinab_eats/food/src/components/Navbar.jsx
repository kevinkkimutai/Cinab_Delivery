import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectIsCart } from "../reducers/AuthReducers";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cart = useSelector(selectIsCart);
  console.log(cart);
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="fixed w-full z-50 shadow-lg">
        <header class="flex  bg-custom_blue border-b py-4 sm:px-8 px-6 font-[sans-serif]  tracking-wide relative z-50 justify-between">
          <div className="flex items-center">
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              <AiOutlineMenu size={30} />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              Cinab <span className="font-bold">Eats</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
              <p className="bg-black text-white rounded-full p-2">Delivery</p>
              <p className="p-2">Pickup</p>
            </div>
          </div>{" "}
          {/* Search Input */}
          <div class="flex rounded-full border-0  border-blue-500 overflow-hidden  font-[sans-serif]">
            <input
              type="email"
              placeholder="Search Something..."
              class="w-full outline-none bg-white text-sm px-24 py-2.5"
            />
            <button
              type="button"
              class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="18px"
                class="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
          {/*  CART*/}
          <div>
            <div class="flex gap-x-6 gap-y-4 ml-auto">
              <div class="flex items-center space-x-8">
                <span class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    class="cursor-pointer fill-[#333] inline"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    />
                  </svg>
                  <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    0
                  </span>
                </span>

                <span
                  class="relative hover:cursor-pointer"
                  onClick={handleCLick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    class="cursor-pointer fill-[#333] inline"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  {cart.length > 0 ? (
                    <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      {cart.length}
                    </span>
                  ) : (
                    <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  )}
                </span>
                <button class="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
                  Sign In
                </button>

                <button id="toggleOpen" class="lg:hidden">
                  <svg
                    class="w-7 h-7"
                    fill="#333"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {/* Overlay */}
          {nav ? (
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
          ) : (
            ""
          )}
          {/* Side drawer menu */}
          <div
            className={
              nav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
            }
          >
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <h2 className="text-2xl p-4">
              Cinab <span className="font-bold">Eats</span>
            </h2>
            <nav>
              <ul className="flex flex-col p-4 text-gray-800">
                <li className="text-xl py-4 flex">
                  <TbTruckDelivery size={25} className="mr-4" /> Orders
                </li>
                <li className="text-xl py-4 flex">
                  <MdFavorite size={25} className="mr-4" /> Favorites
                </li>
                <li className="text-xl py-4 flex">
                  <FaWallet size={25} className="mr-4" /> Wallet
                </li>
                <li className="text-xl py-4 flex">
                  <MdHelp size={25} className="mr-4" /> Help
                </li>
                <li className="text-xl py-4 flex">
                  <AiFillTag size={25} className="mr-4" /> Promotions
                </li>
                <li className="text-xl py-4 flex">
                  <BsFillSaveFill size={25} className="mr-4" /> Cinab Ones
                </li>
                <li className="text-xl py-4 flex">
                  <FaUserFriends size={25} className="mr-4" /> Invite Friends
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
