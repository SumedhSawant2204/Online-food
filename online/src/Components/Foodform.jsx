// import React, { useState } from 'react';

// const FoodForm = () => {
//   const [formData, setFormData] = useState({
//     foodName: '',
//     foodImage: '',
//     dateStart: '',
//     dateEnd: '',
//     status: 'active',
//     aboutFood: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can add the logic here to send data to the backend
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
//       <h1 className="text-2xl font-bold mb-6">Add Food</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Food Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Food Name</label>
//           <input
//             type="text"
//             name="foodName"
//             value={formData.foodName}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter food name"
//             required
//           />
//         </div>

//         {/* Food Image */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Food Image (URL)</label>
//           <input
//             type="text"
//             name="foodImage"
//             value={formData.foodImage}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter food image URL"
//           />
//         </div>

//         {/* Date Start */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Date Start</label>
//           <input
//             type="date"
//             name="dateStart"
//             value={formData.dateStart}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Date End */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Date End</label>
//           <input
//             type="date"
//             name="dateEnd"
//             value={formData.dateEnd}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* Status */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </div>

//         {/* About Food */}
//         <div className="mb-4">
//           <label className="block text-gray-700">About Food</label>
//           <textarea
//             name="aboutFood"
//             value={formData.aboutFood}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Write about the food..."
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mb-4">
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FoodForm;


import React, { useState } from 'react';

const FoodForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    id: user?.id || '',
    name: user?.name || '',
    Indate: user?.Indate || '',
    Outdate: user?.Outdate || '',
    image: user?.image || '',
    status: user?.status || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData); // Call the onSave prop with the updated form data
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>In Date</label>
          <input
            type="date"
            name="Indate"
            value={formData.Indate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Out Date</label>
          <input
            type="date"
            name="Outdate"
            value={formData.Outdate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            type="checkbox"
            name="status"
            checked={formData.status}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                status: e.target.checked,
              }))
            }
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
