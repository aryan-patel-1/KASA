import React from "react";
import { useParams } from "react-router-dom";
import imgData from "../img.json";
import Header from "../components/header/header"; 
import Slideshow from "../components/carrousel/slideshow"; 
import Title from "../components/title/title"; 
import Host from "../components/host/host"; 
import TagStar from "../components/star/tagstar"; 
import Collapse from "../components/collapse/collapse";

import "./scss/page-logement.scss"

const Logement = () => {
  const { id } = useParams();
  const logement = imgData.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement non trouvé</h2>;
  }

  return (
    <>
      <Header />
      <Slideshow pictures={logement.pictures} />
      <div className="title-container">
        <Title title={logement.title} location={logement.location} />
        <Host name={logement.host.name} picture={logement.host.picture} />
      </div>
      <TagStar tags={logement.tags} rating={parseInt(logement.rating)} />
      
      {/* Collapses pour Description et Equipement */}
      <div className="collapse-container">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
};

export default Logement;