import React, { useState } from 'react';
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
        socialMedia: {
            instagram: '',
            facebook: '',
            twitter: '',
        },
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
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
                    <label className="flex items-center">
                        <input type="checkbox" name="isVegetarian" onChange={handleCheckboxChange} className="checkbox" />
                        <span className="ml-2 text-gray-600">Are you a Vegetarian/Vegan Kitchen?</span>
                    </label>
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
                <h2 className="text-xl font-semibold text-gray-700">3. Certifications and Licenses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <label className="flex items-center">
                        <input type="checkbox" name="certifications.foodSafety" onChange={handleCheckboxChange} className="checkbox" />
                        <span className="ml-2 text-gray-600">Food Safety Certification</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="certifications.healthDepartment" onChange={handleCheckboxChange} className="checkbox" />
                        <span className="ml-2 text-gray-600">Health Department License</span>
                    </label>
                    <input type="file" name="certificationsFile" onChange={handleFileChange} className="file-input" />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700">4. Payment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="text" name="bankDetails.bankName" placeholder="Bank Name" onChange={handleChange} className="input" />
                    <input type="text" name="bankDetails.accountHolderName" placeholder="Account Holder's Name" onChange={handleChange} className="input" />
                    <input type="text" name="bankDetails.accountNumber" placeholder="Account Number" onChange={handleChange} className="input" />
                    <input type="text" name="bankDetails.ifscCode" placeholder="IFSC Code / SWIFT Code" onChange={handleChange} className="input" />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700">5. Menu and Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input type="file" name="menuFile" onChange={handleFileChange} className="file-input" />
                    <input type="text" name="specialtyDishes[0]" placeholder="Specialty Dish 1" onChange={handleChange} className="input" />
                    <input type="text" name="specialtyDishes[1]" placeholder="Specialty Dish 2" onChange={handleChange} className="input" />
                    <input type="text" name="specialtyDishes[2]" placeholder="Specialty Dish 3" onChange={handleChange} className="input" />
                    <input type="text" name="averagePricePerDish" placeholder="Average Price per Dish" onChange={handleChange} className="input" />
                    <input type="text" name="discounts" placeholder="Discounts or Offers (if any)" onChange={handleChange} className="input" />
                </div>
            </section>

        

            <section>
                <h2 className="text-xl font-semibold text-gray-700">6. Terms and Conditions</h2>
                <label className="flex items-center mt-4">
                    <input type="checkbox" name="termsAccepted" onChange={handleCheckboxChange} className="checkbox" />
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
