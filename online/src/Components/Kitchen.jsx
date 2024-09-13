import React, { useState } from "react";
import KitchenDetailsModal from "./KitchenDetailsModal";
import AdminNav from "./AdminNav";

const dummyData = [
  { id: 1, name: "Ghatkopar Kitchen", area: "Ghatkopar", location: "Ghatkopar East", mobile: "1234567890", email: "ghatkopar@example.com", pincode: "400086", website: "www.ghatkoparkitchen.com", socialMedia: "@ghatkoparkitchen" },
  { id: 2, name: "Kurla Kitchen", area: "Kurla", location: "Kurla West", mobile: "0987654321", email: "kurla@example.com", pincode: "400070", website: "www.kurlakitchen.com", socialMedia: "@kurlakitchen" },
  { id: 3, name: "Bandra Kitchen", area: "Bandra", location: "Bandra West", mobile: "1122334455", email: "bandra@example.com", pincode: "400050", website: "www.bandrakitchen.com", socialMedia: "@bandrakitchen" },
  // Add more dummy data as needed
];

const Kitchen = () => {
  const [selectedArea, setSelectedArea] = useState("All");
  const [kitchens, setKitchens] = useState(dummyData);
  const [selectedKitchen, setSelectedKitchen] = useState(null);

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const handleView = (kitchen) => {
    setSelectedKitchen(kitchen);
  };

  const handleDelete = (kitchenId) => {
    const kitchenToDelete = kitchens.find(kitchen => kitchen.id === kitchenId);
    const confirmDelete = window.confirm(`Are you sure you want to delete ${kitchenToDelete.name}?`);

    if (confirmDelete) {
      setKitchens(kitchens.filter(kitchen => kitchen.id !== kitchenId));
    }
  };

  const filteredKitchens = kitchens.filter(kitchen => 
    selectedArea === "All" || kitchen.area === selectedArea
  );

  return (
    <>
    <AdminNav />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Kitchen Management</h1>
      
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select Area:</label>
        <select 
          value={selectedArea} 
          onChange={handleAreaChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Ghatkopar">Ghatkopar</option>
          <option value="Kurla">Kurla</option>
          <option value="Bandra">Bandra</option>
        </select>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Kitchen Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Area</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredKitchens.map(kitchen => (
            <tr key={kitchen.id} className="border-t">
              <td className="px-4 py-2 text-sm text-gray-700">{kitchen.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{kitchen.area}</td>
              <td className="px-4 py-2">
                <button 
                  className="text-blue-500 hover:text-blue-700 font-semibold mr-2"
                  onClick={() => handleView(kitchen)}
                >
                  View
                </button>
                <button 
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => handleDelete(kitchen.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedKitchen && (
        <KitchenDetailsModal 
          kitchen={selectedKitchen} 
          closeModal={() => setSelectedKitchen(null)}
          updateKitchen={(updatedKitchen) => {
            setKitchens(kitchens.map(kitchen => kitchen.id === updatedKitchen.id ? updatedKitchen : kitchen));
            setSelectedKitchen(updatedKitchen);
          }}
        />
      )}
    </div>
    </>
  );
};

export default Kitchen;
