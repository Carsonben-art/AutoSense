import React, { useState } from "react";
import "../styles/nav.css";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            AutoSense<span>Robotics</span>
          </div>
          <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#home" onClick={handleSmoothScroll}>Home</a>
            <a href="#features" onClick={handleSmoothScroll}>Features</a>
            <a href="#contact" onClick={handleSmoothScroll}>Contact</a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </nav>
    );
  };

export default Nav;