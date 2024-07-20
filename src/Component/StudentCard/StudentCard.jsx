import React, { useState } from "react";
import "./StudentCard.css";
import Photo from "./img.jpeg";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: NIVETHA M</h2>
      <p className="details">Registration No: 212221240034</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Department: Artificial Intelligence and Machine Learning</p>
          <p>Email ID: nivetham1710@gmail.com</p>
          <p>Father's Name: Muthan M</p>
        </div> 
      )}
    </div>
  );
};

export default StudentCard;