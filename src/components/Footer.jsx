import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">AutoSense<span>Robotics</span></h2>
          <p>Revolutionizing mid-sized manufacturers with AI-powered </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#blog">Blog</a></li>
            {/* <li><a href="#template">Get template</a></li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">X (formerly Twitter)</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 AutoSense. All rights reserved.</p>
        <p>Kintech</p>
      </div>
    </footer>
  );
};

export default Footer;