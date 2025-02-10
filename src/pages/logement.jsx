import React from "react";
import { useParams } from "react-router-dom";
import imgData from "../image.json";
import Header from "../components/header/header"; 
import Carrousel from "../components/carrousel/carrousel"; 
import Title from "../components/title/title"; 
import Host from "../components/host/host"; 


const Logement = () => {
  const { id } = useParams();
  const logement = imgData.find((item) => item.id === id);
  if (!logement) {
    return <h2>Logement non trouvé</h2>; // Au cas où il n'y aurait pas de logement trouvé
  }
  return (
    <>
      <Header />
      <Carrousel pictures={logement.pictures} />
      {/* Affichage du titre, location et du propriétaire */}
      <div className="title-container">
        <Title title={logement.title} location={logement.location} />
        <Host name={logement.host.name} picture={logement.host.picture} />
      </div>
    </>
  );
};
export default Logement;