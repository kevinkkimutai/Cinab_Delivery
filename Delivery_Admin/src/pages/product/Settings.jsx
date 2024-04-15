function Settings() {
  return (
    <div className="mb-2 w-full p-4">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-10">
        <div className="mx-auto max-w-270">
          {/* <!-- Breadcrumb Start --> */}
          <div className="flex items-center bg-slate-300 rounded-lg mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-300  flex items-center justify-center me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-gray-900">
                Profile Settings
              </p>
            </div>
          </div>
          {/* <!-- Breadcrumb End --> */}

          {/* <!-- ====== Settings Section Start --> */}
          <div className="grid grid-cols-5 gap-8 ">
          <div className="col-span-5 xl:col-span-2">
              <div className="rounded-lg border border-stroke bg-white shadow-default ">
                <div className="border-b border-stroke px-7 py-5  dark:border-strokedark">
                  <h3 className="text-xl font-bold text-black font-serif">Your Photo</h3>
                </div>
                <div className="p-4">
                  <form action="#">
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="h-15 w-15 rounded-full">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="border rounded-2xl" alt="User" />
                      </div>
                      <div>
                        <div>
                        <span className="mb-2.5 font-bold text-2md text-black font-serif">
                          Edit your photo
                        </span>
                        <div
                      id="FileUpload"
                      className="relative mb-5.5 mt-3 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray-100 px-4 py-4  sm:py-7.5"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p className="text-sm font-medium">
                          <span className="text-primary">Click to upload </span>
                          or drag and drop
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          SVG, PNG, JPG
                        </p>
                       
                      </div>
                    </div>
                       </div>
                      </div>
                    </div>

                 

                    <div className=" flex items-center justify-center w-full mx-auto mt-6">
              <button
                type="button"
                className="py-2.5 px-5 float-end mx-auto me-2 mb- text-sm font-medium text-white focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-red-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2.5 px-5 me-2 float-end mb- text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
              >
                Save
              </button>
            </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-span-5 xl:col-span-3">
              <div className=" border border-stroke bg-white rounded-lg shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-2 dark:border-strokedark">
                  <h3 className="text-xl text-black font-serif font-bold">
                    Personal Information
                  </h3>
                </div>
                <div className="p-4">
                  <form action="#">
                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row gap-2">
                      <div className="w-full sm:w-1/2">
                        <label
                          htmlFor="email-address-icon"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Firstname
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="firstname"
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Kelvin"
                            value="Kelvin"
                          />
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2">
                        <label
                          htmlFor="email-address-icon"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Lastname
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="lastname"
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Kimutai"
                            value="Kimutai"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5.5">
                      <label
                        htmlFor="email-address-icon"
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="info@cinab.co.ke"
                          value="info@cinab.co.ke"
                        />
                      </div>
                    </div>

                    <div className="mb-5.5">
                      <label
                        htmlFor="email-address-icon"
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                          </svg>
                        </div>
                        <input
                          type="number"
                          id="phone"
                          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="+254718888628"
                          value="+254718888628"
                        />
                      </div>
                    </div>

                    <div className=" flex items-center justify-center w-full mx-auto mt-4">
              <button
                type="button"
                className="py-2.5 px-5 float-end mx-auto me-2 mb- text-sm font-medium text-gray-900 focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-red-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2.5 px-5 me-2 float-end mb- text-sm font-medium text-gray-900 focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
              >
                Save
              </button>
            </div>
                  </form>
                </div>
              </div>
            </div>
           
{/* reset passowrd */}
            <div className="col-span-5 xl:col-span-2">
              <div className="rounded-lg border border-stroke bg-white shadow-default ">
                <div className="border-b border-stroke px-4 py-2  dark:border-strokedark">
                  <h3 className="text-xl font-bold text-black font-serif">Reset password</h3>
                </div>
                <div className="p-">
                  <form action="#">
                    <div className="mb-1  gap-3">
                   
                      <div>
                        <div>
                       
                        <div
                      id="FileUpload"
                      className="relative mb-5.5 mt-3 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray-100 px-4 py-4  sm:py-7.5"
                    >
                    
                      <div className="fl items-center justify-center space-y-1">
                      <div className="mb-5.5">
                      <label
                        htmlFor="email-address-icon"
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                      >
                        Current Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="phone"
                          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="current password"
                          
                        />
                      </div>

                      <label
                        htmlFor="email-address-icon"
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                      >
                       New Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="phone"
                          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="new password"
                          
                        />
                      </div>

                      <label
                        htmlFor="email-address-icon"
                        className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                      >
                       Confirm new Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="phone"
                          className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Confirm New Password"
                          
                        />
                      </div>
                    </div>
                       
                      </div>
                    </div>
                       </div>
                      </div>
                    </div>

                 

                    <div className=" flex items-center justify-center w-full mx-auto mt-6">
            
              <button
                type="button"
                className="py-2.5 px-5 me- w-full float-end mb- text-sm font-medium text-white focus:outline-none bg-blue-500 rounded-lg border border-gray-200 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 "
              >
                Change Password
              </button>
            </div>
                  </form>
                </div>
              </div>
            </div>


            <div className="col-span-5 xl:col-span-3">
              <div className=" border border-stroke bg-red-200 rounded-lg shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-7 py-2 dark:border-strokedark">
                  <h3 className="text-xl text-black font-serif font-bold">
                    Danger Zone
                  </h3>
                </div>
                <div className="p-4">
                  
                </div>
              </div>
            </div>

          </div>
          {/* <!-- ====== Settings Section End --> */}
        </div>
      </div>

      
    </div>
  );
}

export default Settings;
