import React from "react";
import bannerImage from "../../images/banner/homeBanner.png";  // Corrige le chemin relatif
import "./banner.css";

function Banner ()  {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
      <div className="text">Chez vous, partout et ailleurs</div>
    </div>
  );
};

export default Banner;
