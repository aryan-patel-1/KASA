import React from 'react';
import Header from "../components/header/header";  
import '../pages/css/page-erreur-404.css'; 
const PageErreur404 = () => {
  return (
    <div>
      <Header />  
      <div className="container-404">
        <h2>404</h2>  
      </div>
      
      <div className="oops-text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      
      <div className="return-link">
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    </div>
  );
};
export default PageErreur404;