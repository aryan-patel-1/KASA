import React from "react";
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import homeBanner from "../images/banner/homeBanner.png";  // Import de l’image

const PageAccueil = () => {
  return (
    <div>
      <Header />
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" /> {/* Image + texte */}
      <Card />
    </div>
  );
};

export default PageAccueil;
