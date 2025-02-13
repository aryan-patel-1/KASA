import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAccueil from "./pages/page-accueil";
import APropos from "./pages/A-Propos";
import PageErreur404 from "./pages/page-erreur-404";
import Logement from "./pages/logement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<PageErreur404 />} />
      </Routes>
    </Router>
  );
};

export default App;
