import React from 'react';

const TrackOrders = ({ deliveries }) => {
  const readyOrders = deliveries.filter(d => d.isReady).length;
  const dispatchedOrders = deliveries.filter(d => d.isDispatched).length;
  const pendingOrders = deliveries.length - readyOrders - dispatchedOrders;

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Order Tracking</h2>
      <div className="space-y-2">
        <p className="text-lg text-gray-600">
          <span className="font-bold text-green-600">Ready Orders:</span> {readyOrders}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold text-blue-600">Dispatched Orders:</span> {dispatchedOrders}
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold text-red-600">Pending Orders:</span> {pendingOrders}
        </p>
      </div>
    </div>
  );
};

export default TrackOrders;
