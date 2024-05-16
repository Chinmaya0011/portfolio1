// src/components/GoToTopButton.js
import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the arrow up icon
import "../style/GoToTopButton.css"; // Import CSS for styling

const GoToTopButton = ({ show }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`go-to-top ${show ? "show" : ""}`}
      onClick={handleClick}
    >
      <FaArrowUp /> {/* Use the imported icon */}
    </button>
  );
};

export default GoToTopButton;
