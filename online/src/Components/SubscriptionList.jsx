// src/components/SubscriptionList.jsx
import React, { useState } from 'react';
import Subscription from './Subscription';
import Example from './Example';

const SubscriptionList = () => {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            kitchenName: 'Kitchen A',
            period: '1 Month',
            daysLeft: 15,
        },
        {
            id: 2,
            kitchenName: 'Kitchen B',
            period: '2 Weeks',
            daysLeft: 7,
        },
        {
            id: 3,
            kitchenName: 'Kitchen C',
            period: '1 Week',
            daysLeft: 3,
        }
    ]);

    const handleDelete = (id) => {
        setSubscriptions(subscriptions.filter(sub => sub.id !== id));
    };

    return (
        <>
        <Example />
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Subscription List</h1>
            <div className="space-y-4">
                {subscriptions.map(subscription => (
                    <Subscription
                        key={subscription.id}
                        subscription={subscription}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default SubscriptionList;
