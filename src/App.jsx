import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import APropos from "./pages/APropos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/about" element={<APropos />} /> {/* Alias pour "/about" */}
      </Routes>
    </Router>
  );
};

export default App;
