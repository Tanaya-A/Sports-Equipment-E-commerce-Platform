import React, { useEffect, useState, useMemo } from "react";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const AllProducts = () => {
  const [equipment, setEquipment] = useState([]);
  const [filteredEquipment, setFilteredEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const debouncedSearch = useDebounce(search, 500); 
  useEffect(() => {
    fetch("https://sports2.vercel.app/data")
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = data.sort(() => Math.random() - 0.5); 
        setEquipment(shuffledData); 
        setFilteredEquipment(shuffledData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredAndSortedEquipment = useMemo(() => {
    let filtered = equipment;
    if (debouncedSearch) {
      filtered = filtered.filter((item) =>
        item.itemName?.toLowerCase().includes(debouncedSearch.toLowerCase()) 
      );
    }

    if (sortOption === "name-asc") {
      filtered = filtered.sort((a, b) => a.itemName.localeCompare(b.itemName)); 
    } else if (sortOption === "name-desc") {
      filtered = filtered.sort((a, b) => b.itemName.localeCompare(a.itemName));
    } else if (sortOption === "price-low") {
      filtered = filtered.sort((a, b) => a.price - b.price); 
    } else if (sortOption === "price-high") {
      filtered = filtered.sort((a, b) => b.price - a.price); 
    }

    return filtered;
  }, [equipment, debouncedSearch, sortOption]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Products</h1>

      {/* Search and Sort  */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedEquipment.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

     
      {filteredAndSortedEquipment.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No products match your search or sort criteria.
        </div>
      )}
    </div>
  );
};

export default AllProducts;
