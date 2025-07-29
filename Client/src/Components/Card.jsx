import React, { useState } from "react";
import { Link } from "react-router";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

const Card = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { _id, image, itemName, price, stockStatus } = product;

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300  h-auto p-4 relative">
      {/* Stock Badge */}
      {stockStatus > 0 ? (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded-md">
          In Stock
        </span>
      ) : (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-md">
          Out of Stock
        </span>
      )}

      {/* Favorite Icon */}
      <button
        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <RiHeartFill className="text-red-500 text-lg" />
        ) : (
          <RiHeartAddLine className="text-gray-600 text-lg" />
        )}
      </button>

      {/* Product Image */}
      <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={itemName}
          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {itemName}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-bold text-gray-900">${price || "N/A"}</p>
        </div>

        {/* Call-to-Action */}
        <div>
          <Link
            to={`/equipment/${_id}`}
            className="block text-center py-2 bg-[#0FABCA] text-white rounded-md hover:bg-[#01849b] transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
