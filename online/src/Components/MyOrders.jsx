import React from "react";
import Example from "./Example";

const MyOrders = () => {
  const orders = [
    {
      id: 29, // New live order
      type: "Delivery",
      date: "29 Sep 2024 14:00",
      item: "Pasta Primavera",
      quantity: 1,
      price: 350,
      status: "IN PROGRESS",
      latitude: 37.7749, // Replace with actual latitude
      longitude: -122.4194, // Replace with actual longitude
    },
    {
      id: 26,
      type: "Delivery",
      date: "18 Jan 2023 15:24",
      item: "Non Veg Loaded",
      quantity: 1,
      price: 222,
      status: "DELIVERED",
    },
    {
      id: 27,
      type: "Delivery",
      date: "20 Jan 2023 12:45",
      item: "Veggie Delight",
      quantity: 2,
      price: 340,
      status: "DELIVERED",
    },
    {
      id: 28,
      type: "Dine-In",
      date: "25 Jan 2023 19:30",
      item: "Chicken Special",
      quantity: 1,
      price: 275,
      status: "DELIVERED",
    },
  
  ];

  const openGoogleMapsTracking = (latitude, longitude) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <>
      <Example />
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {["All", "Favourite", "Delivery", "In Progress"].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out focus:outline-none"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200 ease-in-out"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{order.type}</h2>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                    ${order.status === "DELIVERED" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-lg text-gray-800">
                  <p className="flex items-center">
                    <span className="mr-2">🍽️</span>
                    <span>{order.item}</span>
                  </p>
                  <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                </div>
              </div>

              <div className="text-xl font-semibold text-gray-900 mb-4">
                ₹{order.price}
              </div>

              <div className="flex justify-between">
                <div className="text-right">
                  <button className="px-5 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 ease-in-out focus:outline-none">
                    Reorder
                  </button>
                </div>

                {/* Track Button for live orders */}
                {order.status === "IN PROGRESS" && (
                  <button
                    onClick={() => openGoogleMapsTracking(order.latitude, order.longitude)}
                    className="px-5 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none"
                  >
                    Track Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
