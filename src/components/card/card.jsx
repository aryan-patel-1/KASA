import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import du Link pour la navigation
import "./card.scss";
import imgData from "../../img.json";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(imgData);
  }, []);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Link to={`/logement/${card.id}`} key={card.id} className="card">
          <img src={card.cover} alt={card.title} className="card-img" />
          <h3 className="card-title">{card.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Card;