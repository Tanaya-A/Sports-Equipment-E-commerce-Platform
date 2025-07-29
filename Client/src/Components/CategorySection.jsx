import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router";  
import Loading from "./Loading";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetch("https://sports2.vercel.app/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.categoryName)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filtered = items.filter((item) => item.categoryName === category);
    setFilteredItems(filtered);
    setVisibleItems(4);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold">{error}</div>;
  }

  const itemsToDisplay = filteredItems.length > 0 ? filteredItems : items;
  const displayedItems = itemsToDisplay.slice(0, visibleItems);

  return (
    <div className="container mx-auto my-6">
      

      <div className="grid grid-cols-4 md:grid-cols-8 justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 border border-cyan-400 text-cyan-600 rounded-md ${!selectedCategory ? "bg-cyan-100" : ""}`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 border border-cyan-400 text-cyan-600 rounded-md ${selectedCategory === category ? "bg-cyan-100" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6" data-aos="fade-up">
        {displayedItems.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition transform hover:scale-105"
            data-aos="zoom-in"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.itemName}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-[#01849b] text-white text-xs py-1 px-3 rounded-full">
                {item.rating} ★
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-[#01849b]">{item.itemName}</h2>
              <p className="text-gray-600 text-sm mt-1">{item.description.slice(0, 50)}...</p>
              <p className="text-[#01849b] font-bold mt-2"> $ {item.price}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="px-4 py-2 bg-[#01849b] text-white text-sm rounded-lg hover:bg-[#017F8A] transition">
                Add to Cart
              </button>
              <Link
                to={`/equipment/${item._id}`} 
                className="block text-center px-2 py-2 bg-[#0FABCA] text-white rounded-md hover:bg-[#01849b] transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {displayedItems.length < itemsToDisplay.length && (
        <div className="flex justify-center mt-4" data-aos="fade-up">
          <button
            className="px-6 py-3 bg-[#01849b] text-white rounded-md hover:bg-[#017F8A] transition"
            onClick={handleLoadMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
