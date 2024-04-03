import Chart from "./Chart"

function Active() { 
  return (
    <div className="mb-2 md:flex block gap-2 ">
        <div className="md:w-3/4 w-full rounded">
            <Chart/>
        </div>
        <div className="md:w-1/4 w-full bg-white rounded-t-md">
        
                  <div className="xl:col-span-2">
                     <div className="card h-full shadow">
                        {/* <!-- heading --> */}
                        <div className="border-b border-gray-900 bg-blue-200 rounded-t-md px-2 py-1 ">
                           <h4 className="font-bold">Active Deliveries</h4>
                        </div>

                        <div className="relative">
                           {/* <!-- table --> */}
                           <table className="text-left w-full">
                              <thead className="text-gray-700 ">
                                 <tr>
                                    <th scope="col" className="border-b bg-gray-100 px-2 py-1">Driver Name</th>
                                    <th scope="col" className="border-b bg-gray-100 px-2 py-1">Time</th>
                                    
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                          <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>8:12 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                    
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />
                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                  

                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                   
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                   
                                   
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                    
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kevin Kirui</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 <span className="text-blue-800 text-sm font-thin">mins</span> */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00 <span className="text-blue-800 text-sm font-thin">mins</span></h1>
                                    </td>
                                 
                                    
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
        </div>
    </div>
    </div>
  )
}

export default Active