import React from "react";
import Header from "../components/header/header";  // Importation du composant Header
import Banner from "../components/banner/banner";
import Card from "../components/card/card";


function PageAccueil () {
  return (
    <div>
      <Header />  {/* Utilisation du composant Header */}
      <Banner />
      <Card />
  

    </div>
  );
};

export default PageAccueil;
