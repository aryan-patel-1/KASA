import React from "react";
import "./title.scss"; // Importation du fichier SCSS pour le style
const Title = ({ title, location }) => {
  return (
    <div className="title-container">
      <h1 className="title-name">{title}</h1>
      <p className="location">{location}</p>
    </div>
  );
};
export default Title;