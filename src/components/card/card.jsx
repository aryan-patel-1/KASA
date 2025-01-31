import React, { useState, useEffect } from "react";
import "./card.scss";  // Importation du fichier SCSS pour les styles
import imgData from "../../image.json";  // Importation du fichier JSON

function Card () {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Charger les données du fichier JSON (img.json)
    setCards(imgData);
  }, []);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.cover} alt={card.title} className="card-img" />
          <h3 className="card-title">{card.title}</h3> {/* Titre sur l'image */}
        </div>
      ))}
    </div>
  );
};

export default Card;