import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await fetch(`https://sports2.vercel.app/data/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
        setError(error.message);
      }
    };
    fetchEquipmentData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://sports2.vercel.app/data/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update equipment");
      }
      const data = await response.json();
      setSuccessMessage("Equipment updated successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error updating equipment:", error);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container mx-auto my-6 pt-16">
      <h1 className="text-3xl text-cyan-500 font-bold mb-4">Update Equipment</h1>

      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleUpdate} className="p-6 shadow-md rounded">
        {Object.keys(formData).map((field) =>
          field !== "_id" ? (
            <div key={field} className="mb-4">
              <label className="block font-semibold mb-2 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "price" || field === "rating" ? "number" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                readOnly={field === "userEmail" || field === "userName"}
                className={`w-full p-2 border rounded ${
                  field === "userEmail" || field === "userName"
                    ? "bg-gray-100 text-gray-600"
                    : ""
                }`}
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`}
              />
            </div>
          ) : null
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Equipment
        </button>
      </form>
    </div>
  );
};

export default UpdateEquipment;