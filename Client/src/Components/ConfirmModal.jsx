import React from "react";

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-800  bg-opacity-60 flex justify-center items-center z-50">
      <div className="  p-6 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Are you sure you want to delete this equipment?</h3>
        <div className="flex justify-between">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
