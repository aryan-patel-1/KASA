import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import APropos from "./pages/APropos";
import PageErreur404 from "./pages/page-erreur-404";
import Logement from "./pages/logement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/about" element={<APropos />} /> {/* Alias pour "/about" */}
        <Route path="*" element={<PageErreur404 />} />
        <Route path="/logement/:id" element={<Logement />} /> 
      </Routes>
    </Router>
  );
};

export default App;
