import { useCallback, useEffect } from "react"

function AllOrders() {
    const openModal = useCallback(() => {
        document.getElementById("editUserModal").classList.remove("hidden");
    }, [])

    const closeModal = useCallback(() => {
        document.getElementById("editUserModal").classList.add("hidden");
    }, []);

    useEffect(() => {
        // Include openModal and closeModal in the dependency array to prevent unnecessary re-renders
    }, [openModal, closeModal]);


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
              All Orders
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
                        <a href="product/view_order" className="rounded-lg block px-4 py-2 hover:bg-gray-100 hover:text-black">Reward</a>
                    </li>
                    <li  className="p-1">
                        <a href="product/view_order" className="rounded-lg block px-4 py-2 hover:bg-gray-100 hover:text-black">Promote</a>
                    </li>
                    <li className="p-1">
                        <a href="product/view_order" className="rounded-lg block px-4 py-2 hover:bg-gray-200 hover:text-black">Activate account</a>
                    </li>
                </ul>
                <div className="py-1 p-1 rounded-lg text-center">
                    <a href="product/view_order" className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-red-400 bg-red-700 ">Delete Order</a>
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
                    Hotel
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
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
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>  
                </th>
                <td className="px-3 py-2">
                    Pizza Inn
                </td>
                <td className="px-3 py-2">
                    Pizza
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         pending
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Bonnie Green</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    KFC
                </td>
                <td className="px-3 py-2">
                    Chicken
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         on_delivery
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Jese Leos</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    Galitos
                </td>
                <td className="px-3 py-2">
                    Beef Stew
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         delivered
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Thomas Lean</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    UI/UX Engineer
                </td>
                <td className="px-3 py-2">
                    UI/UX Engineer
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         Rejected
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Bonnie Green</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    Designer
                </td>
                <td className="px-3 py-2">
                    Designer
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         on_delivery
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Jese Leos</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    Vue JS Developer
                </td>
                <td className="px-3 py-2">
                    Vue JS Developer
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         delivered
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-200">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">Thomas Lean</div>
                        <div className="font-normal text-gray-500">+254746645142</div>
                    </div>
                </th>
                <td className="px-3 py-2">
                    UI/UX Engineer
                </td>
                <td className="px-3 py-2">
                    UI/UX Engineer
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center">
                         Rejected
                    </div>
                </td>
                <td className="px-3 py-2">
                    {/* <!-- Modal toggle --> */}
                    <a href="/product/view_order" type="button"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>

        </tbody>

    </table>
    {/* <!-- View modal --> */}
    <div id="editUserModal" tabIndex="-1"  className="flex bg-gray-900 opacity-95 fixed top-0 pt-20 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
        <div className="relative w-full w-full max-h-full">
            {/* <!-- Modal content --> */}
            <form className="relative bg-gray-400 rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-start justify-between p-2 border-b rounded-t bg-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900 font-serif">
                        View Order
                    </h3>
                   <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={closeModal}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                </div>
                {/* Modal body */}
                <div className="p-5 -mb-4 space-y-2 bg-gray-400">
                <h2 className="font-serif text-xl font-semibold">Contact Info:</h2>
                        <div className="identification grid grid-cols-2 gap-2">
                            
                        <div className="">
                            <label htmlFor="first-name" className="block mb-1 text- font-medium text-gray-900">FullName</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " value="Kelvin Kimutai" disabled />
                        </div>
                        <div className="">
                            <label htmlFor="last-name" className="block mb-1 text- font-medium text-gray-900">Email</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " value="cinabonline@gmail.com" disabled />
                        </div>
                        <div className="">
                            <label htmlFor="first-name" className="block mb-1 text- font-medium text-gray-900">Phone Number</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " value="+254718888628" disabled />
                        </div>
                        <div className="">
                            <label htmlFor="last-name" className="block mb-1 text- font-medium text-gray-900">Id Number</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed " value="12345678" disabled />
                        </div>
                        </div>
                       
                </div>

                <div className="p-5 space-y-2 bg-gray-400 border border-t-1">
                <h2 className="font-serif text-xl font-semibold">Identification Details:</h2>
                        <div className="identification grid grid-cols-2 gap-2">
                            
                        <div className="">
                            <label htmlFor="first-name" className="block mb-2 text- font-medium text-gray-900">Front</label>
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="h-52 w-full border rounded-2xl" alt="User" />
                        </div>
                        <div className="">
                            <label htmlFor="last-name" className="block mb-2 text- font-medium text-gray-900">Back</label>
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="h-52 w-full border rounded-2xl" alt="User" />
                        </div>
                        </div>
                       
                </div>
                <div className="p-5 space-y-2 bg-gray-400 border border-t-1">
                <h2 className="font-serif text-xl font-semibold">Driving Licence: <span className="num text-green-800 text-md  underline">12345678</span></h2>
                        <div className="identification grid grid-cols-2 gap-2">
                            
                        <div className="">
                            <label htmlFor="first-name" className="block mb-2 text- font-medium text-gray-900">Front</label>
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="h-52 w-full border rounded-2xl" alt="User" />
                        </div>
                        <div className="">
                            <label htmlFor="last-name" className="block mb-2 text- font-medium text-gray-900">Back</label>
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="h-52 w-full border rounded-2xl" alt="User" />
                        </div>
                        </div>
                       
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex-row text-end items-center p-3 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b ">
                    <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Approve</button>
                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Suspend</button>
                    <button type="submit" className="text-white float-left bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete</button>
                </div>
            </form>
        </div>
    </div>
</div>

        </div>
    </div>
        </div>


  )
}

export default AllOrders