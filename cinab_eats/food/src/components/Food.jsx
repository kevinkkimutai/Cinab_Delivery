import React, { useState } from 'react';
import { data } from '../data/data.js';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCart, selectIsCart } from '../reducers/AuthReducers.js';

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);
  
  const dispatch = useDispatch()
   const cart = useSelector(selectIsCart)
  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };


  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };


  // Function to add item to cart
  const addToCart = (item) => {
    // Check if item already exists in cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      toast.error('This item is already in your cart!');
    } else {
      // Add item to cart
      dispatch(setIsCart([...cart, item]))
      toast.success('Item added to cart Successfully!');
    }
  };




  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              1-
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg bg-white rounded-lg relative flex flex-col'
          >
            {/* Display offers count */}

            <div>
              <div className="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                {item.offers} offers
              </div>

              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
            </div>
            <div className="mt-6 flex flex-col  justify-between flex-1">
              <header className='px-2'>
                {/* Placeholder category */}
                <b className="text-lg clamp one-line overflow-hidden whitespace-pre-line  me-2">
                  <a href="/">
                    {item.name}
                  </a>
                </b>

                <div className="mt">
                  <span className="mt-2 block text-gray-400 text-xs">
                    {item.restuarant}
                  </span>
                </div>
              </header>



              <footer className="flex justify-between items-start mt-8 me-2">
                <div className="flex items-center text-sm">
                  <div className="ml-3">
                    <h5 className="font-bold w-32">
                      Ksh. {item.price}                    </h5>
                  </div>
                </div>
                <button onClick={() => addToCart(item)} type='button' className='bg-gray-200 hover:bg-slate-100 rounded-full w-8 h-8 items-center flex justify-center text-yellow-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                  </svg></button>



              </footer>
            </div>
          </div>
        ))}


      </div>


    </div>
  );
};

export default Food;
