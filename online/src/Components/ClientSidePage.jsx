import React, { useState } from 'react';
import Example from './Example';

function ClientSidePage() {
  const [showPayment, setShowPayment] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [price, setPrice] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false); // New state to track subscription status

  // Handle Order/Subscribe button click
  const handlePayment = (type) => {
    if (type === 'order') {
      if (window.confirm(`Do you want to continue to ${type}?`)) {
        setShowPayment(true);
      }
    } else if (type === 'subscribe' && !isSubscribed) {
      setShowSubscriptionPopup(true);
    } else if (type === 'unsubscribe') {
      if (window.confirm("Are you sure you want to unsubscribe?")) {
        setIsSubscribed(false);
        alert("You have unsubscribed.");
      }
    }
  };

  // Handle subscription plan selection
  const handlePlanSelect = (days, price) => {
    setSelectedPlan(days);
    setPrice(price);
    setShowSubscriptionPopup(false);
    setShowPayment(true);
  };

  // Handle payment submission
  const handlePayNow = () => {
    alert("Payment Successful!");
    setIsSubscribed(true); // Set subscription status to true after successful payment
    setShowPayment(false); // Go back to home page after payment
    setSelectedPlan(null);
    setPrice(0);
  };

  return (
    <>
      <Example />
      <div className="min-h-screen bg-gray-100 p-5">
        {/* Kitchen Header */}
        {!showPayment && !showSubscriptionPopup ? (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-center">
              <h1 className="text-4xl font-bold mb-2">The Gourmet Kitchen</h1>
              <p className="text-gray-600 mb-4">We serve delicious homemade meals made with love and care.</p>
              <div className="text-yellow-500 text-lg font-semibold">⭐⭐⭐⭐⭐ (4.9 Ratings)</div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => handlePayment('order')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
              >
                Order
              </button>
              <button
                onClick={() => handlePayment(isSubscribed ? 'unsubscribe' : 'subscribe')}
                className={`${
                  isSubscribed
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-green-500 hover:bg-green-600'
                } text-white font-semibold py-2 px-4 rounded shadow-md`}
              >
                {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>

            {/* Today's Menu */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold mb-4">Today's Menu</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Dish Name</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Spaghetti Carbonara</td>
                    <td className="py-2 px-4 border-b">$12</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Grilled Chicken Salad</td>
                    <td className="py-2 px-4 border-b">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer Reviews */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                <div className="border p-4 rounded">
                  <p className="text-gray-800 font-semibold">John Doe:</p>
                  <p className="text-gray-600">Amazing food, fast delivery!</p>
                </div>
                <div className="border p-4 rounded">
                  <p className="text-gray-800 font-semibold">Jane Smith:</p>
                  <p className="text-gray-600">Loved the spaghetti, will order again!</p>
                </div>
              </div>
            </div>
          </div>
        ) : showSubscriptionPopup ? (
          // Subscription Popup
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Subscription</h2>
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => handlePlanSelect(7, 50)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
              >
                7 Days - $50
              </button>
              <button
                onClick={() => handlePlanSelect(14, 90)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
              >
                14 Days - $90
              </button>
              <button
                onClick={() => handlePlanSelect(30, 180)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md"
              >
                30 Days - $180
              </button>
            </div>
          </div>
        ) : (
          // Payment Gateway Page
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-center">Payment Gateway</h2>
            <div className="mb-6">
              <p className="text-center text-xl mb-4">You have selected a {selectedPlan}-day subscription for ${price}.</p>
              <div className="border p-4 rounded-lg shadow-inner">
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Card Number:</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="flex space-x-4 mb-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-semibold mb-2">Expiry Date:</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-semibold mb-2">CVV:</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="123"
                    />
                  </div>
                </div>
                <button
                  onClick={handlePayNow}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md w-full"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ClientSidePage;
