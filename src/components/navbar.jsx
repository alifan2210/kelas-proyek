import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className=" navbar bg-light border-bottom border-dark bg-white border-2 shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bolder fs-5" href="#home">
          start<span>Coffe</span>
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link to="../" className="nav-link link-dark fw-semibold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link link-dark fw-semibold">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link to="../ListMenu" className="nav-link link-dark fw-semibold">
              List Menu
            </Link>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link link-dark fw-semibold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
