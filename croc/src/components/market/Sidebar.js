import React, { useState } from "react";

const Sidebar = ({ handleFilter }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange([event.target.value, priceRange[1]]);
  };

  const applyFilters = () => {
    handleFilter({ category, priceRange });
  };

  return (
    <div className="sidebar">
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="Accessories">Accessories</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Home appliances">Home appliances</option>
        <option value="New Arrivals">New Arrivals</option>
      </select>
      <label htmlFor="price">Price Range:</label>
      <input
        type="range"
        id="price"
        min="0"
        max="1000"
        value={priceRange[0]}
        onChange={handlePriceChange}
      />
      <span>${priceRange[0]} - ${priceRange[1]}</span>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Sidebar;
