import React, { useState } from "react";

const StarRating = ({ rating, setRating, handleUpdate }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [rates, setRates] = useState({
    rate: 0,
    userId: "",
  });

  const handleClick = (index) => {
    const newRating = index + 1; // Rating starts from 1
    console.log("New rating:", newRating);
    setRating(newRating, () => {
      console.log("Rating state:", rating);
      setRates({ ...rates, rate: newRating });
      ; // Update the rate state
    });
   
  };
  
  

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < (hoveredRating || rating);
    return (
      <span
        key={index}
        className="star"
        onClick={() => handleClick(index)}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {filled ? "★" : "☆"}
      </span>
    );
  });

  console.log("Stars:", stars); // Add this line for debugging

  return (
    <div>
      <div className="star-rating">
        {stars}
        <button
          type="button"
          className="btn btn-danger w-100 mt-4 rounded-pill"
          onClick={() => handleUpdate()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default StarRating;
