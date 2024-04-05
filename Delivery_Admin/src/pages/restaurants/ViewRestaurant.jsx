import { useEffect, useState } from "react";

function ViewRestaurant() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setCurrentDateTime(now.toLocaleDateString(undefined, options));
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="mb-2 w-full md:p-1">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-10">
        <div className="mx-auto max-w-270">
          {/* <!-- Breadcrumb End --> */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-3 md:space-y-0 py-2 bg-blue-300 ">
              <div className="mx-2 flex">
                <div className="w-12 h-12 rounded-lg bg-blue-300  flex items-center justify-center me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-md font-bold  text-gray-900">
                    Order Id:{" "}
                    <span className="text-md text-black font-serif italic">
                      123456
                    </span>
                  </p>
                  <p className="text-md  font-serif text-gray-900">
                    order/details
                  </p>
                </div>
              </div>
              <button
                id="dropdownActionButton"
                className="inline-flex items-center text-white bg-green-600 border border-gray-900 focus:outline-none hover:bg-green-800 focus:ring-4 focus:ring-gray-100 font-bold font-serif rounded-lg text-sm px-6 py-1.5 me-4"
                type="button"
              >
                <span className="sr-only">On Delivery</span>
                On Delivery
              </button>
            </div>

            {/* content */}
            <div className="bg-blue-200 flex w-full p-2 rounded-lg">
              <div className=" rounded-md  w-1/4  p-2">
                <div className="flex flex-col bg-gray-50 items-center pb-10 rounded-lg mb-2">
                  <img
                    className="w-24 h-24 mb-3 mt-1 rounded-full shadow-lg"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-bold font-serif text-gray-900 ">
                    Bonnie Green
                  </h5>
                  <span className="text-sm text-gray-800 ">Customer</span>
                </div>

                {/* details */}

                <div className="max-w-sm   rounded-lg shadow bg-gray-600 dark:border-gray-700">
                  <a href="#">
                    <h5 className=" p-2 text-xl text-md font-serif tracking-tight text-white">
                      Order Notes
                    </h5>
                  </a>
                  <p className="mb-3 mx-2 font-normal font-serif text-gray-300">
                    Additional description of ordered foood Additional
                    description of ordered foood Additional description of ordered foood Additional description of ordered foood
                  </p>

                  <div className="bg-blue-600 rounded-lg border-t w-full flex sel bg-black-gradient p-1 text-white">
                    <div className="w-3/12  object-cover overflow-hidden  items-center justify-center flex">
                      <img
                        className="rounded-full bg-white p-0 md:p-1"
                        src="/src/assets/delivery.png"
                        alt="delivery"
                      />
                    </div>
                    <div className="w-9/12 h-full text-center flex  items-center">
                      <div className="w-full">
                        <h2 className="font-bold font-serif">customer address location</h2>
                        <p className="text-md font-serif">Eastleigh</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm mt-4 p-2  rounded-lg shadow bg-white ">
                  <a href="#">
                    <h5 className=" mb-4 text-xl text-xs font-serif tracking-tight">
                      Order Progress
                    </h5>
                  </a>
                  <ol className="relative mx-6 text-gray-900 border-s border-gray-800 ">
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-4 ring-white   dark:bg-green-700">
                        <svg
                          className="w-3.5 h-3.5 text-green-500 dark:text-green-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                      </span>
                      <h3 className="font-bold font-serif leading-tight">
                        Order Created
                      </h3>
                      <p className="text-sm font-serif">{currentDateTime}</p>
                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white">
                        <svg
                          className="w-3.5 h-3.5 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h3 className="font-bold font-serif leading-tight">
                        Payment Success
                      </h3>
                      <p className="text-sm font-serif">{currentDateTime}</p>
                    </li>
                    <li className="mb-10 ms-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white">
                        <svg
                          className="w-3.5 h-3.5 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h3 className="font-bold font-serif leading-tight">
                        On Order
                      </h3>
                      <p className="text-sm font-serif">{currentDateTime}</p>
                    </li>
                    <li className="ms-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full -start-4 ring-4 ring-white dark:ring-gray-90">
                        <svg
                          className="w-3.5 h-3.5 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                        </svg>
                      </span>
                      <h3 className="font-bold font-serif leading-tight">
                        On Delivery
                      </h3>
                      <p className="text-sm font-serif">{currentDateTime}</p>
                    </li>
                  </ol>
                </div>
              </div>

              {/* right side */}
              <div className="bg-re-800 w-3/4 p-2 ms-2  rounded-lg">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm text-gray-700  bg-gray-100 border-b">
                      <tr>
                        <th scope="col" className="px-6 py-3 font-serif">
                          Item
                        </th>
                        <th scope="col" className="px-6 py-3 font-serif">
                          Qty
                        </th>
                        <th scope="col" className="px-6 py-3 font-serif">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 font-serif">
                          Total Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-200">
                        <th
                          scope="row"
                          className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Jese image"
                          />
                          <div className="ps-3">
                            <div className="text-xs  font-normal text-blue-800">
                              Main Dish
                            </div>
                            <div className="font-normal text-gray-500">
                              Cooked meat and veggies kebab
                            </div>
                            <div className="text-base text-xs">
                              <div className="flex items-center">
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-gray-305 me-1 dark:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <a
                                  href="#"
                                  className="text-xs font-serif text-gray-900 underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-2">x3</td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            50
                          </div>
                        </td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif ">
                            150
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                        <th
                          scope="row"
                          className="flex items-center px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Jese image"
                          />
                          <div className="ps-3">
                            <div className="text-base text-xs text-blue-800 font-normal">
                              Main Dish
                            </div>
                            <div className="font-normal text-gray-500">
                              Cooked meat and veggies kebab
                            </div>
                            <div className="text-base text-xs">
                              <div className="flex items-center">
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-gray-305 me-1 dark:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <a
                                  href="#"
                                  className="text-xs font-serif text-gray-900 underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-2">x2</td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            500
                          </div>
                        </td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif ">
                            1000
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                        <th
                          scope="row"
                          className="flex items-center px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Jese image"
                          />
                          <div className="ps-3">
                            <div className="text-base text-xs text-blue-800 font-normal">
                              Main Dish
                            </div>
                            <div className="font-normal text-gray-500">
                              Cooked meat and veggies kebab
                            </div>
                            <div className="text-base text-xs">
                              <div className="flex items-center">
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-gray-305 me-1 dark:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <a
                                  href="#"
                                  className="text-xs font-serif text-gray-900 underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-2">x2</td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            2000
                          </div>
                        </td>
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif ">
                            4000
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="grid grid-cols-2 w-full bg-gray-200 p-1">
                    <div className="font-serif text-center font-bold">
                      SubTotal:
                    </div>
                    <div className="text-center text-md underline font-bold font-serif">
                      <span className="text-gray-500 font-normal me-1">
                        {" "}
                        ksh:{" "}
                      </span>{" "}
                      5150
                    </div>
                  </div>
                </div>

                {/* map section */}
                <div className="container mx-auto mt-4">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-full px- text-center">
                      <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 rounded-lg">
                        <div className="px- py- flex-auto">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3988.823315941731!2d36.84714612384819!3d-1.279624648708196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e9!4m5!1s0x182f11912f114ba1%3A0xd882413680182064!2sIbgaro%20Plaza%201%2C%20Mohammed%20Yusuf%20Haji%20Avenue%2C%20Nairobi!3m2!1d-1.2799733!2d36.8502408!4m5!1s0x182f11c5647fd689%3A0xe006587dbf27ad79!2sKFC%20Eastleigh%2C%20Mijikenda%20house%2C%20Timboroa%20Street%2C%20Nairobi!3m2!1d-1.2795907!2d36.849033299999995!5e0!3m2!1sen!2ske!4v1712149542117!5m2!1sen!2ske"
                            className="w-full h-72 rounded-lg"
                            allowfullscreen="true"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-t-lg">
                  <h5 className=" p-2 ms-1 font-bold text-md font-serif tracking-tight">
                    Delivery Boy
                  </h5>
                  <div className="bg-white rounded-lg w-full grid grid-cols-3 gap-2 p-2">
                    <div className="bg-blue-50 rounded-lg border-blue-400 border-t-2 w-full flex sel bg-black-gradient p-1 text-black">
                      <div className="w-3/12  object-cover overflow-hidden  items-center justify-center flex">
                        <img
                          className="rounded-full w-13 h-14 border border-l-4 border-t-4 border-b-4 border-blue-700 bg-white p-0 md:p-0.5"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="delivery"
                        />
                      </div>
                      <div className="w-9/12 h-full text-start flex ms-2 items-center">
                        <div className="w-full">
                          <h2 className="font-bold font-serif">
                            Kelvin Kimutai
                          </h2>
                          <div className="text-base text-xs">
                              <div className="flex items-center">
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-yellow-500 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                  className="w-2 h-2 text-gray-305 me-1 dark:text-gray-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <a
                                  href="#"
                                  className="text-xs font-serif text-gray-900 underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg border-blue-400 border-t-2 w-full flex sel bg-black-gradient p-1 text-black">
                      <div className="w-3/12  object-cover overflow-hidden  items-center justify-center flex">
                        <img
                          className="rounded-full w-13 h-14 border border-l-4 border-t-4 border-b-4 border-blue-700 bg-white p-0 md:p-0.5"
                          src="/src/assets/phone.jpg"
                          alt="delivery"
                        />
                      </div>
                      <div className="w-9/12 h-full text-start flex ms-2 items-center">
                        <div className="w-full">
                          <h2 className="font-bold font-serif">
                            phone
                          </h2>
                          <div className="text-base text-xs ">
                              <div className="flex items-center text-gray-900">
                              +254746645142
                                
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg border-blue-400 border-t-2 w-full flex sel bg-black-gradient p-1 text-black">
                      <div className="w-3/12  object-cover overflow-hidden  items-center justify-center flex">
                        <img
                          className="rounded-full w-13 h-14 border border-l-4 border-t-4 border-b-4 border-blue-700 bg-white p-0 md:p-1"
                          src="/src/assets/delivery.png"
                          alt="delivery"
                        />
                      </div>
                      <div className="w-9/12 h-full text-start flex ms-2 items-center">
                        <div className="w-full">
                          <h2 className="font-bold font-serif">
                            Delivery Date
                          </h2>
                          <div className="text-base text-xs">
                          <div className="flex items-center text-gray-900">
                              Thu, 4 Apr 2024, 
                                
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRestaurant;
