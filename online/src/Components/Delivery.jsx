import React, { useState } from 'react';
import DeliveryList from './DeliveryList';
import TrackOrders from './TrackOrders';
import GoogleMapTracking from './GoogleMapTracking';
import KitchenNav from './KitchenNav';

const Delivery = () => {
  const [deliveries, setDeliveries] = useState([
    { id: 1, name: 'User 1', address: 'Address 1', food: 'Pizza', payment: 'Paid', isReady: false, isDispatched: false },
    { id: 2, name: 'User 2', address: 'Address 2', food: 'Burger', payment: 'Subscribed', isReady: false, isDispatched: false },
    { id: 3, name: 'User 3', address: 'Address 3', food: 'Pasta', payment: 'Paid', isReady: false, isDispatched: false },
  ]);
  
  const [viewDispatch, setViewDispatch] = useState(false);

  const markAsReady = (id) => {
    setDeliveries(deliveries.map(delivery => 
      delivery.id === id ? { ...delivery, isReady: !delivery.isReady } : delivery
    ));
  };

  const dispatchOrders = () => {
    setDeliveries(deliveries.map(delivery => 
      delivery.isReady ? { ...delivery, isDispatched: true } : delivery
    ));
    setViewDispatch(true);
  };

  const goBack = () => setViewDispatch(false);

  return (
    <>
    <KitchenNav />
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Tiffin Delivery List</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={dispatchOrders} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Dispatch
        </button>
        <button 
          onClick={goBack} 
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Go Back
        </button>
      </div>

      <TrackOrders deliveries={deliveries} />
      
      {!viewDispatch ? (
        <DeliveryList deliveries={deliveries} markAsReady={markAsReady} />
      ) : (
        <DeliveryList deliveries={deliveries.filter(d => d.isReady)} />
      )}

      
    </div>
    </>
  );
};

export default Delivery;
