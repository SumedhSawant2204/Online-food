import React from 'react';
import DeliveryList from './DeliveryList';

function DispatchList({ deliveries, setView }) {
  if (!deliveries) {
    return <div>No deliveries available</div>;
  }

  const handleDispatch = () => {
    // Ensure setView is called correctly
    if (typeof setView === 'function') {
      setView('delivery'); // Example usage of setView
    } else {
      console.error('setView is not a function');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dispatch List</h2>
      <ul>
        {deliveries.map(delivery => (
          <li key={delivery.id} className="mb-2 p-4 bg-white rounded-lg shadow">
            {delivery.name} - {delivery.address}
          </li>
        ))}
      </ul>
      <button onClick={handleDispatch} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Go Back
      </button>
    </div>
  );
}

export default DispatchList;
