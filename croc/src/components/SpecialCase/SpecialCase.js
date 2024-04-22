import React from "react";
import { Link } from "react-router-dom";
import "./Special.css";

const SpecialCase = () => {
  return (
    <nav className="">
      <div className="container navbar-container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>
        <ul className="navbar-nav d-flex flex-row align-items-center">
          <li className="nav-item me-3">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SpecialCase;
