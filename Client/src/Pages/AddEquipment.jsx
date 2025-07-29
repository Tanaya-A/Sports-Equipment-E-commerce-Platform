import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider"; // Assuming this provides the logged-in user data
import Swal from "sweetalert2";

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: "", 
    userName: "", 
  });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        userEmail: user.email,
        userName: user.displayName || "Default User", 
      }));
    }
  }, [user]);

  const validateForm = () => {
    const requiredFields = [
      "image",
      "itemName",
      "categoryName",
      "description",
      "price",
      "rating",
      "processingTime",
      "stockStatus",
      "userEmail",
      "userName",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          title: "Validation Error",
          text: `Please fill in the ${field} field.`,
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return false;
      }
    }
    return true;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate form submission (you can use fetch/axios here to send the data to your server)
    fetch("https://sports2.vercel.app/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setFormData({
            image: "",
            itemName: "",
            categoryName: "",
            description: "",
            price: "",
            rating: "",
            customization: "",
            processingTime: "",
            stockStatus: "",
            userEmail: user?.email || "mockEmail@example.com",
            userName: user?.displayName || "Mock User",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add equipment. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto  shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Equipment</h2>
      <form onSubmit={handleSubmit}>
        {/* Image URL */}
        <div className="mb-5">
          <label htmlFor="image" className="block text-sm text-primary">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            id="image"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Item Name */}
        <div className="mb-5">
          <label htmlFor="itemName" className="block text-sm text-primary">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter item name"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Name */}
        <div className="mb-5">
          <label htmlFor="categoryName" className="block text-sm text-primary">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            id="categoryName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category name"
            value={formData.categoryName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label htmlFor="description" className="block text-sm text-primary">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-5">
          <label htmlFor="price" className="block text-sm text-primary">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Rating */}
        <div className="mb-5">
          <label htmlFor="rating" className="block text-sm text-primary">
            Rating (1-5)
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>

        {/* Customization */}
        <div className="mb-5">
          <label htmlFor="customization" className="block text-sm text-primary">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            id="customization"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter customization options"
            value={formData.customization}
            onChange={handleChange}
          />
        </div>

        {/* Processing Time */}
        <div className="mb-5">
          <label htmlFor="processingTime" className="block text-sm text-primary">
            Processing Time (days)
          </label>
          <input
            type="number"
            name="processingTime"
            id="processingTime"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter processing time"
            value={formData.processingTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Stock Status */}
        <div className="mb-5">
          <label htmlFor="stockStatus" className="block text-sm text-primary">
            Stock Status (Quantity Available)
          </label>
          <input
            type="number"
            name="stockStatus"
            id="stockStatus"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter stock quantity"
            value={formData.stockStatus}
            onChange={handleChange}
            required
          />
        </div>

        {/* User Email */}
        <div className="mb-5">
          <label htmlFor="userEmail" className="block text-sm text-primary">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.userEmail}
            readOnly
          />
        </div>

        {/* User Name */}
        <div className="mb-5">
          <label htmlFor="userName" className="block text-sm text-primary">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.userName}
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEquipment;
