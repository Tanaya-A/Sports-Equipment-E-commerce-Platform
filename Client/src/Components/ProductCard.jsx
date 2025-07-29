import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-lg">
      {/* Product Image */}
      <div className="relative">
        <img
          alt={product.itemName}
          src={product.image}
          className="w-full h-40 object-cover rounded-md"
        />
        {/* Favorite Icon */}
        <div
          className="p-2 rounded-full bg-gray-600 absolute top-2 right-2 cursor-pointer"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <IoIosHeart className="text-[#0FABCA] text-[1.2rem]" />
          ) : (
            <IoMdHeartEmpty className="text-white text-[1.2rem]" />
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-[1.1rem] font-medium line-clamp-1">{product.itemName}</h3>
        <p className="text-gray-500 text-[0.9rem]">Category: {product.categoryName}</p>

        {/* Ratings */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => {
            const starRating = index + 1;
            return (
              <FaStar
                key={starRating}
                className={starRating <= product.rating ? "text-yellow-400" : "text-gray-300"}
                size={15}
              />
            );
          })}
          <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-[#0FABCA]">${product.price}</p>
          <Link
            to={`/equipment/${product._id}`}
            className="py-2 px-4 bg-[#0FABCA] text-white rounded-md hover:bg-cyan-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
