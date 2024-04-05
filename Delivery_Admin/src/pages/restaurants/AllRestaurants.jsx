

function AllRestaurants() {
   
  return (
    <div className="mb-2 w-full md:p-1">
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
              All Restaurants
            </p>
          </div>
        </div>
        {/* <!-- Breadcrumb End --> */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-blue-200 ">
        <div className="mx-2">
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" className="z-10 hidden bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li  className="p-1">
                        <a href="product/view_restaurant" className="rounded-lg block px-4 py-2 hover:bg-gray-100 hover:text-black">Reward</a>
                    </li>
                    <li  className="p-1">
                        <a href="product/view_restaurant" className="rounded-lg block px-4 py-2 hover:bg-gray-100 hover:text-black">Promote</a>
                    </li>
                    <li className="p-1">
                        <a href="product/view_restaurant" className="rounded-lg block px-4 py-2 hover:bg-gray-200 hover:text-black">Activate account</a>
                    </li>
                </ul>
                <div className="py-1 p-1 rounded-lg text-center">
                    <a href="product/view_restaurant" className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-red-400 bg-red-700 ">Delete Restaurant</a>
                </div>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mx-2">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block pt-2 pb-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-50  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-10">
            <tr>
                <th scope="col" className="p-4">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Pizza Inn</div>
                       
                    </div>  
                </th>
                <td className="px-3 py-2">
                    +254746645142
                </td>
                <td className="px-3 py-2">
                    Eastleigh
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_restaurant" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Pizza Inn</div>
                       
                    </div>  
                </th>
                <td className="px-3 py-2">
                    +254746645142
                </td>
                <td className="px-3 py-2">
                    Juja
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_restaurant" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Pizza Inn</div>
                       
                    </div>  
                </th>
                <td className="px-3 py-2">
                    +254746645142
                </td>
                <td className="px-3 py-2">
                    Karen
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_restaurant" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Pizza Inn</div>
                       
                    </div>  
                </th>
                <td className="px-3 py-2">
                    +254746645142
                </td>
                <td className="px-3 py-2">
                    Umoja
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_restaurant" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Pizza Inn</div>
                       
                    </div>  
                </th>
                <td className="px-3 py-2">
                    +254746645142
                </td>
                <td className="px-3 py-2">
                    Ngong
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_restaurant" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>

        </tbody>

    </table>
  
</div>

        </div>
    </div>
        </div>


  )
}

export default AllRestaurants