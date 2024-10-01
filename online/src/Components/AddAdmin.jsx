import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AdminNav from './AdminNav';

function AddAdmin() {
    const [formData, setFormData] = useState({
        kitchenName: '',
        ownerName: '',
        contactNumber: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        website: '',
        
        cuisineType: '',
        isVegetarian: false,
        operatingHours: {
            mondayToFriday: '',
            saturday: '',
            sunday: '',
        },
        deliveryRange: '',
        preparationTime: '',
        certifications: {
            foodSafety: false,
            healthDepartment: false,
        },
        bankDetails: {
            bankName: '',
            accountHolderName: '',
            accountNumber: '',
            ifscCode: '',
        },
        paymentMethods: [],
        menuFile: null,
        specialtyDishes: ['', '', ''],
        averagePricePerDish: '',
        discounts: '',
        kitchenType: '',
        equipment: '',
        dailyCapacity: '',
        specialPractices: '',
        staffCount: '',
        chefNames: '',
        staffTrained: false,
        hasDeliveryTeam: false,
        termsAccepted: false,
    });

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
      });
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
          ...inputs,
          [name]: value
        });
      };
    
    

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
       
          // Creating the object with user inputs
          const userData = {
            username: inputs.name,
            email: inputs.email,
            password: inputs.password,
            mobile: inputs.mobile,// assuming OTP is also a part of the form data
          };
          console.log(userData)
          // Sending the userData object in a POST request
          const res = await axios.post("http://localhost:8000/api/AddAdmin", userData);
          console.log(res.data);
      
          // Navigate or show success message after successful signup
          // navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
    

    return (
        <>
        <AdminNav />
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Kitchen Registration Form</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-700">1. Kitchen Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="text" name="kitchenName" placeholder="Kitchen Name" onChange={handleChange} className="input" />
                    <input type="text" name="ownerName" placeholder="Owner's Name" onChange={handleChange} className="input" />
                    <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} className="input" />
                    <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input" />
                    <input type="text" name="address" placeholder="Street Address" onChange={handleChange} className="input" />
                    <input type="text" name="city" placeholder="City" onChange={handleChange} className="input" />
                    <input type="text" name="state" placeholder="State/Province" onChange={handleChange} className="input" />
                    <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} className="input" />
                    <input type="text" name="country" placeholder="Country" onChange={handleChange} className="input" />
                    <input type="url" name="website" placeholder="Website (if any)" onChange={handleChange} className="input" />
                </div>

                <h3 className="text-lg font-semibold text-gray-600 mt-6">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <input type="text" name="socialMedia.instagram" placeholder="Instagram" onChange={handleChange} className="input" />
                    <input type="text" name="socialMedia.facebook" placeholder="Facebook" onChange={handleChange} className="input" />
                    <input type="text" name="socialMedia.twitter" placeholder="Twitter" onChange={handleChange} className="input" />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700">2. Operational Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <label className="block text-lg font-medium mb-2">Type of Cuisine</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="All">All</option>
                        <option value="Week Days">Week days</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Custom">Custom</option>
                    </select>
                    
                </div>

                <h3 className="text-lg font-semibold text-gray-600 mt-6">Operating Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <label className="block text-lg font-medium mb-2">Select Working Days</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="All">All</option>
                        <option value="Week Days">Week days</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="text" name="deliveryRange" placeholder="Delivery Range (in km/miles)" onChange={handleChange} className="input" />
                    <input type="text" name="preparationTime" placeholder="Average Order Preparation Time" onChange={handleChange} className="input" />
                </div>
            </section>

            

            <section>
                <h2 className="text-xl font-semibold text-gray-700">4. Payment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="text" name="bankDetails.bankName" placeholder="Bank Name" onChange={handleChange} className="input" />
                    <input type="text" name="bankDetails.accountNumber" placeholder="Account Number" onChange={handleChange} className="input" />
                </div>
            </section>

            

        

            <section>
                <h2 className="text-xl font-semibold text-gray-700">6. Terms and Conditions</h2>
                <label className="flex items-center mt-4">
                    
                    <span className="ml-2 text-gray-600">I agree to the terms and conditions of the food servicing app.</span>
                </label>
            </section>

            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 mt-6 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                Submit
            </button>
        </form>
        </>
    );
}

export default AddAdmin;
