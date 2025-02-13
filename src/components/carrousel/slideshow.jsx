import React, { useState } from "react";
import "./slideshow.scss"; 

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Fonction pour changer l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };
  // Fonction pour changer l'image précédente
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };
  return (
    <div className="carrousel-container">
      {/* Flèche précédente */}
      <button className="prev" onClick={prevImage}>
        &#10094;
      </button>
      {/* Image actuelle */}
      <div className="carrousel-image">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {/* Numérotation des images */}
      <div className="carrousel-number">
        {currentIndex + 1}/{pictures.length}
      </div>
      {/* Flèche suivante */}
      <button className="next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};
export default Slideshow;