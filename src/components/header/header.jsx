import React from "react";
import logo from "../../images/logo/LOGO.svg";
import "./header.css";

function Header ()  {
  return (
    <header>
      <img src={logo} alt="Kasa Logo" className="logo" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  );
};

export default Header;