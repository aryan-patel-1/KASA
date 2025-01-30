import React from "react";
import Header from "../components/header/header";  // Importation du composant Header
import Banner from "../components/banner/banner";


const PageAccueil = () => {
  return (
    <div>
      <Header />  {/* Utilisation du composant Header */}
      <Banner />
  

    </div>
  );
};

export default PageAccueil;
