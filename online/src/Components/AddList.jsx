import React, { useState } from 'react';
import KitchenNav from './KitchenNav';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${show ? 'block' : 'hidden'}`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Add Food Item</h3>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end p-4 border-t">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const FoodForm = ({ onSave }) => {
  const [foodDetails, setFoodDetails] = useState({
    name: '',
    image: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFoodDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(foodDetails); // Save the food item
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Food Name:</label>
        <input
          type="text"
          name="name"
          value={foodDetails.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL:</label>
        <input
          type="text"
          name="image"
          value={foodDetails.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={foodDetails.available}
            onChange={handleChange}
            className="mr-2"
          />
          Available
        </label>
      </div>
      <div className="text-right">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Add Food
        </button>
      </div>
    </form>
  );
};

const UserTable = () => {
  const [menuItems, setMenuItems] = useState([]); // Start with an empty list
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddFood = (newFood) => {
    const newItem = {
      id: menuItems.length + 1,
      ...newFood,
      dateAdded: new Date().toLocaleDateString(), // Add current date
    };
    setMenuItems([...menuItems, newItem]); // Add the new item to the list
    setShowModal(false); // Close the modal after adding
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id)); // Remove the item by filtering it out
  };

  return (
    <>
      <KitchenNav />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Menu Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={toggleModal}>
            Add Food
          </button>
        </div>

        {menuItems.length === 0 ? (
          <p className="text-gray-500">No items in the menu. Click "Add Food" to add a new item.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-4 text-left text-gray-500">Photo</th>
                  <th className="p-4 text-left text-gray-500">Name</th>
                  <th className="p-4 text-left text-gray-500">Date Added</th>
                  <th className="p-4 text-left text-gray-500">Status</th>
                  <th className="p-4 text-left text-gray-500">Actions</th> {/* Add Actions Column */}
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.dateAdded}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-2 py-1 rounded ${
                          item.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.available ? 'Available' : 'Not Available'}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td> {/* Add Delete Button */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <Modal show={showModal} handleClose={toggleModal}>
            <FoodForm onSave={handleAddFood} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default UserTable;
