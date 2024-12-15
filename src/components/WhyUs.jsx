import React from "react";
import { FaRobot, FaChartLine, FaRecycle } from "react-icons/fa"; // Importing icons
import "../styles/why.css";

const WhyUs = () => {
  return (
    <section className="why-section">
      <div className="why-header">
        <button className="why-badge">Why AutoSense Robotics?</button>
        <h2>Empowering Smarter Manufacturing</h2>
        <p>
          Discover how AutoSense Robotics is transforming the manufacturing
          landscape with cutting-edge AI-driven automation.
        </p>
      </div>
      <div className="why-cards">
        <div className="why-card">
          <FaRobot className="icon" />
          <h3>Advanced Machine Learning</h3>
          <p>Precision and efficiency through AI-powered automation systems.</p>
        </div>
        <div className="why-card">
          <FaChartLine className="icon" />
          <h3>Real-Time Data Insights</h3>
          <p>
            Empowering proactive decision-making with real-time data monitoring.
          </p>
        </div>
        <div className="why-card">
          <FaRecycle className="icon" />
          <h3>Scalable Green Solutions</h3>
          <p>
            Tailored for mid-sized manufacturers transitioning to
            environmentally friendly operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;