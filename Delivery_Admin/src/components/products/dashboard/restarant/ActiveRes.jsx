
import ChartRes from "./ChartRes"

function ActiveRes() { 
  return (
    <div className="mb-2 md:flex block gap-2 ">
        <div className="md:w-3/4 w-full rounded flex">
            <ChartRes/>
        </div>
        <div className="md:w-1/4 w-full bg-white rounded-t-md">
        
                  <div className="xl:col-span-2">
                     <div className="card h-full shadow">
                        {/* <!-- heading --> */}
                        <div className="border-b border-gray-900 bg-blue-200 rounded-t-md px-2 py-1 ">
                           <h4 className="font-bold">Top Restaurants</h4>
                        </div>

                        <div className="relative">
                           {/* <!-- table --> */}
                           <table className="text-left w-full">
                              <thead className="text-gray-700 ">
                                 <tr>
                                    <th scope="col" className="border-b bg-gray-100 px-2 py-1">Restaurant Name</th>
                                    <th scope="col" className="border-b bg-gray-100 px-2 py-1">Total Orders</th>                       
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                          <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Chicken Inn</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 */}
                                      <h1 className='text-blue-800 text-sm text-sm'>8:12</h1>
                                    </td>
                                 
                                    
                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />
                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Pizza Inn</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00</h1>
                                    </td>
                                 
                                  

                                 </tr>
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Kfc</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00</h1>
                                    </td>
                                 
                                 </tr>
        
                                 <tr>
                                 <td className="border-b border-gray-300 font-medium py-2 px-2 text-left">
                                       <div className="flex items-center">
                                       <img src="/logo.png" alt="" className="h-6 w-6 border border-gray-900 rounded-full" />

                                          <h5 className="mb-1 ml-2"><a href="#!" className="font-serif">Creamy Inn</a></h5>
                                       </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-1 px-2 font-serif text-left">
                                      {/* 12 */}
                                      <h1 className='text-blue-800 text-sm text-sm'>9:00</h1>
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

export default ActiveRes