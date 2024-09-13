import React, { useState } from "react";
import Modal from "react-modal";

const KitchenDetailsModal = ({ kitchen, closeModal, updateKitchen }) => {
  const [editableKitchen, setEditableKitchen] = useState(kitchen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableKitchen({ ...editableKitchen, [name]: value });
  };

  const handleSave = () => {
    updateKitchen(editableKitchen);
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Kitchen Details"
      className="flex items-center justify-center min-h-screen"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{kitchen.name} Details</h2>
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              name="name"
              value={editableKitchen.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Location:</span>
            <input
              name="location"
              value={editableKitchen.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Mobile:</span>
            <input
              name="mobile"
              value={editableKitchen.mobile}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              name="email"
              value={editableKitchen.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Pincode:</span>
            <input
              name="pincode"
              value={editableKitchen.pincode}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Website:</span>
            <input
              name="website"
              value={editableKitchen.website}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Social Media:</span>
            <input
              name="socialMedia"
              value={editableKitchen.socialMedia}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </label>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Save
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default KitchenDetailsModal;
