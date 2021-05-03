import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    totalRating.push(
      <li className={i < rating ? "star" : "star-o"} key={i}>
        <FaStar />
      </li>
    );
  }
  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
