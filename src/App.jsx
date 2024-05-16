import React from "react";
import { Navbar, Body, Footer, About, Contact, Project } from "./components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navClass, setNavClass] = useState("NavDiv");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setNavClass("NavDiv hide");
      } else {
        setNavClass("NavDiv");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div className={navClass}>
        <div className="logoDiv">
          <img
            src="../src/assets/17kStudio.png"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <div className="Navbar">
          <Navbar />
        </div>
      </div>
      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
