

function ViewRestaurant() {
 

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
                  <p className="text-md font-bold  text-black">
                    Restaurant Id:{" "}
                    <span className="text-md text-black font-serif italic">
                      123456
                    </span>
                  </p>
                  <p className="text-md  font-serif text-black">
                    restaurant/details
                  </p>
                </div>
              </div>
              <button
                id="dropdownActionButton"
                className="inline-flex items-center text-white bg-green-600 border border-black focus:outline-none hover:bg-green-800 focus:ring-2 focus:ring-gray-100 font-bold font-serif rounded-lg text-md px-6 py-1.5 me-4"
                type="button"
              >
                <span className="sr-only">Approved</span>
                Approved
              </button>
            </div>

            {/* content */}
            <div className="bg-blue-200 flex w-full p-2 rounded-lg">
              <div className=" rounded-md  w-1/4  p-2">
                <div className="flex flex-col bg-gray-50 items-center pb-10 rounded-lg mb-2">
                  <img
                    className="w-24 h-24 mb-3 mt-1 rounded-full shadow-lg"
                    src="/src/assets/inn.jpeg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-xl font-bold font-serif text-black ">
                    Chicken Inn
                  </h5>
                  <span className="text-sm text-gray-800 ">Restaurant</span>
                </div>

                {/* details */}

                <div className="max-w-sm   rounded-lg shadow bg-gray-300 dark:border-gray-700">
                  <a href="#">
                    <h5 className=" p-2 text-2xl underline font-serif tracking-tight text-black font-bold">
                     Restaurant Details
                    </h5>
                  </a>
                  <form className="max-w-sm mx-auto p-3">
{/* contact */}
    <label htmlFor="phone-input" className="block mb-1 text-md font-medium text-black ">Phone number:</label>
    <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
            </svg>
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={+254746645142} disabled required />
    </div>
{/* email */}
    <label htmlFor="phone-input" className="block mb-1 text-md font-medium text-black ">Email:</label>
    <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={'chickeninn@gmail.com'} disabled required />
    </div>
    {/* kra */}
    <label htmlFor="phone-input" className="block mb-1 text-md font-medium text-black ">Kra Pin:</label>
    <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-5 h-5 -ms-1 text-gray-600 " fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 24" ><circle cx="12" cy="6" r="2"></circle><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="6" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle><circle cx="12" cy="18" r="2"></circle></svg>
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={'A175425628D'} disabled required />
    </div>

      {/* license */}
      <label htmlFor="phone-input" className="block mb-1 text-md font-medium text-black ">License:</label>
    <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-5 h-5 -ms-1 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
          <path d="M19 3h-2.25a1 1 0 0 0-1-1h-7.5a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 17H5V5h2v2h10V5h2v15z"></path>
        </svg>
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={'A1754-2562-8D'} disabled required />
    </div>

     {/* location */}
     <label htmlFor="phone-input" className="block mb-1 text-md font-medium text-black ">Location:</label>
    <div className="relative mb-2">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
        <svg className="w-5 h-5 -ms-1 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
</svg>

        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-1.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={'Eastleigh next to BBS mall'} disabled required />
    </div>

</form>

                  <div className="grid grid-cols-2 gap-1 mx-2">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Approve</button>
                  <button type="button" className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Suspend</button>
                  </div>
                  {/* danger zone */}
                  <div className=" mt-2 bg-red-300 rounded-t-lg">
                  <h5 className=" p-1 mb-2 text-xl underline font-serif tracking-tight text-black font-bold">
                     Danger Zone
                    </h5>
                  <div className="mx-1">
                  <button type="button" className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none">Delete Restaurant</button>
                  </div>
                  </div>

                </div>
              
              </div>

              {/* right side */}
              <div className="bg-re-800 w-3/4 p-2 ms-2  rounded-lg">
              <h5 className=" p-2 rounded-t-lg text-2xl  bg-blue-400 font-serif tracking-tight text-black font-bold">
                     Restaurant Menu
                    </h5>
                <div className="relative overflow-x-auto shadow-md border-t-2 border-green-600">
                  <table className="w-full text-md text-left rtl:text-right text-gray-500 ">
                    <thead className="text-md text-gray-700  bg-gray-100 border-b">
                      <tr>
                      <th scope="col" className="pl-5 py-2 font-serif">
                         #
                        </th>
                        <th scope="col" className=" py-3 font-serif">
                          Item
                        </th>
                       
                        <th scope="col" className="pl-4 py-3 font-serif">
                          Price
                        </th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md font-bold text-black font-serif">
                            1.
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center px- py-2 text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                       
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            50
                          </div>
                        </td>
                        
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md font-bold text-black font-serif">
                            2.
                          </div>
                        </td>
                        <th
                          scope="row"
                          className="flex items-center  py-2 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                      
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            500
                          </div>
                        </td>
                      
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md text-black font-bold font-serif">
                            3.
                          </div>
                        </td>
                      
                        <th
                          scope="row"
                          className="flex items-center  py-2 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                       
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            2000
                          </div>
                        </td>
                        
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md text-black font-bold font-serif">
                            4.
                          </div>
                        </td>
                      
                        <th
                          scope="row"
                          className="flex items-center  py-2 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                       
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            2000
                          </div>
                        </td>
                        
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md text-black font-bold font-serif">
                            5.
                          </div>
                        </td>
                      
                        <th
                          scope="row"
                          className="flex items-center  py-2 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                       
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            2000
                          </div>
                        </td>
                        
                      </tr>
                      <tr className="bg-white border-b hover:bg-gray-200">
                      <td className="pl-4 py-1">
                          <div className="flex items-center text-md text-black font-bold font-serif">
                            6.
                          </div>
                        </td>
                      
                        <th
                          scope="row"
                          className="flex items-center  py-2 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-10 h-10 rounded-full"
                            src="/src/assets/coated.jpg"
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
                                  className="text-xs font-serif text-black underline hover:no-underline"
                                >
                                  73 reviews
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                       
                        <td className="px-6 py-2">
                          <div className="flex items-center text-sm font-serif">
                            2000
                          </div>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
              
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
