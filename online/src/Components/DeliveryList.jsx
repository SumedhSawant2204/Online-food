import React from 'react';
import Delivery from './Delivery';
import KitchenNav from './KitchenNav';

const DeliveryList = ({ deliveries, markAsReady }) => {
  return (
    
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Deliveries</h2>
      <ul className="space-y-4">
        {deliveries.map((delivery) => (
          <li
            key={delivery.id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
          >
            <p className="text-lg font-bold text-gray-900">{delivery.name}</p>
            <p className="text-gray-700">Address: {delivery.address}</p>
            <p className="text-gray-700">Food: {delivery.food}</p>
            <p className={`text-sm font-medium ${delivery.payment === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
              Payment: {delivery.payment}
            </p>
            <button
              onClick={() => markAsReady(delivery.id)}
              className={`mt-4 px-4 py-2 font-semibold text-white rounded-lg focus:outline-none focus:ring 
              ${delivery.isReady ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'} 
              transition-all`}
            >
              {delivery.isReady ? 'Unmark Ready' : 'Mark as Ready'}
            </button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default DeliveryList;
