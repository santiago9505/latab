import React from "react";

// Styles
import "../../assets/styles/Footer.css";

// Statics
import Logo from "../../assets/static/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__brand">
          <img src={Logo} alt="Logotipo de labtab, satandig desk for latam." />
        </div>
        <div className="footer__navbar">
          <a href="" className="navbar__link">
            Home
          </a>
          <a href="" className="navbar__link">
            About
          </a>
          <a href="" className="navbar__link">
            Service
          </a>
          <a href="" className="navbar__link">
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer__section">
        <div className="footer__social-media">
          <a href="" className="social-media__link" target="_blank">
            Github
          </a>
          <a href="" className="social-media__link" target="_blank">
            Github
          </a>
          <a href="" className="social-media__link" target="_blank">
            Github
          </a>
        </div>
        <span className="footer__info">Copyright Latab.</span>
      </div>
    </footer>
  );
};

export default Footer;
