import React from "react";
import "./card.scss";  // Importation du fichier SCSS pour les styles



function Card () {
    return (
      <div className="card-container">
        <div className="card">Carte 1</div>
        <div className="card">Carte 2</div>
        <div className="card">Carte 3</div>
        <div className="card">Carte 4</div>
        <div className="card">Carte 5</div>
        <div className="card">Carte 6</div>
      </div>
    );
  };

  export default Card;