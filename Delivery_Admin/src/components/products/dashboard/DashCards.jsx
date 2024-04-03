

function DashCards() {
  return (
    <div className=" mb-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
    {/* <!-- card --> */}
    <div className="card shadow-md shadow-green-600">
       {/* <!-- card body --> */}
       <div className="card-body rounded-md bg-white hover:bg-green-200">
          {/* <!-- content --> */}
          <div className="flex justify-between items-center">
             <h4  className="ml-2 font-serif font-extrabold text-xl ">Deliveries</h4>
             <div className="bg-green-600 bg-opacity-40  rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
             <i className='bx bxs-briefcase'></i>
             </div>
          </div>
          <div className="mt-2 mx-2 flex flex-col gap-0 text-base">
             <h2 className="text-xl font-bold font-serif">18</h2>
             <div>
                <span className="font-serif">2</span>
                <span className="text-gray-500 ms-1 font-serif">Completed</span>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- card --> */}
    <div className="card shadow-md shadow-blue-800">
       {/* <!-- card boduy --> */}
       <div className="card-body rounded-md bg-white hover:bg-blue-200">
          {/* <!-- content --> */}
          <div className="flex justify-between items-center">
             <h4  className="ml-2 font-serif font-extrabold text-xl ">Active Deliveries</h4>
             <div className="bg-blue-600 bg-opacity-40 font-bold rounded-md w-10 h-10  flex items-center justify-center text-center text-indigo-600">
             <i className='bx bx-list-ul'></i>
             </div>
          </div>
          <div className="mt-2 mx-2 flex flex-col gap-0 text-base">
             <h2 className="text-xl font-serif font-bold">132</h2>
             <div>
                <span className="font-serif">28</span>
                <span className="text-gray-500 ms-1 font-serif">Completed</span>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- card --> */}
    <div className="card shadow-md shadow-yellow-600 ">
       {/* <!-- card body --> */}
       <div className="card-body rounded-md bg-white hover:bg-yellow-100">
          {/* <!-- content --> */}
          <div className="flex justify-between items-center">
             <h4  className="ml-2 font-serif font-extrabold text-xl ">Riders</h4>
             <div className="bg-yellow-400 bg-opacity-40 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
             <i className='bx bxs-truck'></i>
             </div>
          </div>
          <div className="mt-2 mx-2 flex flex-col gap-0 text-base">
             <h2 className="text-xl font-serif font-bold">12</h2>
             <div>
                <span className="font-serif">1</span>
                <span className="text-gray-500 ms-1 font-serif">Completed</span>
             </div>
          </div>
       </div>
    </div>
    {/* <!-- card --> */}
    <div className="card shadow-md shadow-red-600">
       {/* <!-- card body --> */}
       <div className="card-body rounded-md bg-white hover:bg-red-50">
          {/* <!-- content --> */}
          <div className="flex justify-between items-center">
             <h4 className="ml-2 font-serif font-extrabold text-xl ">Productivity</h4>
             <div className="bg-red-600 bg-opacity-40 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
             <i className='bx bx-target-lock'></i>
             </div>
          </div>
          <div className="mt-2 flex flex-col gap-0 text-base mx-2">
             <h2 className="text-xl font-bold font-serif">76%</h2>
             <div>
                <span className="text-green-600 font-serif">5%</span>
                <span className="text-gray-500 ms-1 font-serif">Completed</span>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default DashCards