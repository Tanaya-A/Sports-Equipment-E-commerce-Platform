import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ConfirmModal from "../Components/ConfirmModal"; // Modal to confirm deletion
import { AuthContext } from "../Auth/AuthProvider";
import AOS from "aos";

const MyEquipment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [equipmentToDelete, setEquipmentToDelete] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  useEffect(() => {
    if (user && user.email) {
      fetch(`https://sports2.vercel.app/data`)
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item) => item.userEmail === user.email);
          setEquipmentList(filteredData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching equipment:", error);
          toast.error("Error fetching equipment.");
          setLoading(false);
        });
    }
  }, [user]);

  const handleUpdate = (id) => {
    navigate(`/update-equipment/${id}`);
  };

  const handleDelete = (id) => {
    setEquipmentToDelete(id);
    setDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await fetch(`https://sports2.vercel.app/data/${equipmentToDelete}`, {
        method: "DELETE",
      });
      setEquipmentList((prev) =>
        prev.filter((equipment) => equipment._id !== equipmentToDelete)
      );
      toast.success("Equipment deleted successfully.");
    } catch (error) {
      toast.error("Error deleting equipment.");
    } finally {
      setLoading(false);
      setDeleteConfirm(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container text-black mx-auto my-6">
      <h1 className="text-3xl font-bold mb-4 text-center">My Equipment</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border  border-cyan-300">
          <thead className="bg-cyan-200">
            <tr>
              <th className="border  border-cyan-300 px-4 py-2">Image</th>
              <th className="border  border-cyan-300 px-4 py-2">Name</th>
              <th className="border  border-cyan-300 px-4 py-2">Description</th>
              <th className="border  border-cyan-300 px-4 py-2">Category</th>
              <th className="border  border-cyan-300 px-4 py-2">Price</th>
              <th className="border  border-cyan-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment, index) => (
              <tr
                key={equipment._id}
                data-aos="fade-up"
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border  border-cyan-300 px-4 py-2 text-center">
                  <img
                    src={equipment.image}
                    alt={equipment.itemName}
                    className="w-16 h-16 object-cover mx-auto"
                  />
                </td>
                <td className="border  border-cyan-500 px-4 py-2">{equipment.itemName}</td>
                <td className="border  border-cyan-300 px-4 py-2 text-sm">
                  {equipment.description}
                </td>
                <td className="border  border-cyan-300 px-4 py-2">{equipment.categoryName}</td>
                <td className="border  border-cyan-300 px-4 py-2">${equipment.price}</td>
                <td className="border  border-cyan-300 px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(equipment._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteConfirm && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setDeleteConfirm(false)}
        />
      )}
    </div>
  );
};

export default MyEquipment;
