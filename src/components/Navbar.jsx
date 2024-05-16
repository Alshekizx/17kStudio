import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll"); // Clean up to ensure no scroll is always removed on component unmount
    };
  }, [isOpen]); // Only re-run the effect if isOpen changes

  return (
    <nav className="navbar">
      <div
        className={`toggleDIV ${isOpen ? "active" : ""}`}
        onClick={toggleNav}
      >
        <div className="toggleBar"></div>
        <div className="toggleBar"></div>
        <div className="toggleBar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Project" className="nav-link" onClick={toggleNav}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" onClick={toggleNav}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link" onClick={toggleNav}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
