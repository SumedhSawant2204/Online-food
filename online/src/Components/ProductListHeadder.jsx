import React from 'react';

const FilterButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Filter <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a1 1 0 00-1 1v6a1 1 0 102 0V7a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v6a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Sort By <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Fast Delivery
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Ratings 4.0+
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Pure Veg
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Offers
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Rs. 300-Rs. 600
      </button>
      <button className="bg-white rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Less than Rs. 300
      </button>
    </div>
  );
};

export default FilterButtons;