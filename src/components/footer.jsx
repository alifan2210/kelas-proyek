import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text center">
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#contact">contact</a>
      </div>

      <div className="credit">
        <p>
          created by<span>alifan sutawijaya</span>| &copy;2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
