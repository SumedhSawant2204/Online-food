// src/components/Subscription.jsx
import React, { useState } from 'react';

const Subscription = ({ subscription, onDelete }) => {
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    const handleEnd = () => {
        if (window.confirm("Are you sure you want to end this subscription?")) {
            onDelete(subscription.id);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{subscription.kitchenName}</h3>
            <p className="text-gray-600">Period: {subscription.period}</p>
            <p className="text-gray-600">Days Left: {isPaused ? subscription.daysLeft : subscription.daysLeft - 1}</p>
            <div className="mt-4 flex space-x-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    onClick={() => alert('Displaying today\'s menu...')}
                >
                    View Menu
                </button>
                <button 
                    className={`${
                        isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                    } text-white font-bold py-2 px-4 rounded transition duration-200`} 
                    onClick={handlePause}
                >
                    {isPaused ? 'Resume' : 'Pause'}
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    onClick={handleEnd}
                >
                    End
                </button>
            </div>
        </div>
    );
};

export default Subscription;
