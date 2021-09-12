import React from "react";

// Styles
import "../../assets/styles/Header.css";
import Logo from "../../assets/static/logo.svg";

const Header = (props) => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="header__navbar">
        <a href="#" className="header__link">
          Inicio
        </a>
        <a href="#" className="header__link">
          Descripción
        </a>
        <button className="header__cta">Pre-ordenar</button>
      </nav>
    </div>
  </header>
);

export default Header;
