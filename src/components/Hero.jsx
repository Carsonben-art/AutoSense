import React from "react";
import "../styles/hero.css";
import robot from '../assets/robots1.webp'
import algo from '../assets/algo.jpg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">AutoSense Robotics</span>
          <h1>Transforming Manufacturing with Sustainable Automation</h1>
          <p>
          Revolutionizing mid-sized manufacturers with AI-powered robotics for eco-friendly and efficient production
          </p>
          <div className="hero-buttons">
            <a href="#services"><button className="btn primary">Learn More</button></a>
            <a href="#contact"><button className="btn secondary">Contact Us</button></a>
          </div>
        </div>
        <div className="hero-images">
          <div className="image-stack">
            <img
              src={robot}
              alt="Background"
              className="background-image"
            />
            <div className="overlay-card">
              <p>198</p>
              <span>Automation Systems</span>
            </div>
            <div className="chart-card">
              <p>Best AI algorithms</p>
              <div className="chart">
              <img
              src={algo}
              alt="AI"
              className="algo-img"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;