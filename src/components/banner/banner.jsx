import React from "react";
import "./banner.css";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
      {text && <div className="text">{text}</div>} 
    </div>
  );
};

export default Banner;