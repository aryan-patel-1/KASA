import React from "react";
import logo from "../../images/logo/logo_footer.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="logo-footer" />
      <p className="text-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

  