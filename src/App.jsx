import React from "react";
import { Navbar, Body, Footer, About, Contact, Project } from "./components";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navClass, setNavClass] = useState("NavDiv");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 2) {
        setNavClass("NavDiv");
      } else if (currentScrollY > lastScrollY) {
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
            src="https://firebasestorage.googleapis.com/v0/b/myportfolio-96ac3.appspot.com/o/assets%2F17kStudio.png?alt=media&token=5130fe24-92f4-491b-a8c0-110f508bd073"
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
          <Route path="/17kStudio/" element={<Body />} />
          <Route path="/17kStudio/about" element={<About />} />
          <Route path="/17kStudio/contact" element={<Contact />} />
          <Route path="/17kStudio/Project" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
