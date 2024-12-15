import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <div className="mission-statement">
          <h2>Mission Statement</h2>
          <p>
            "At AutoSense Robotics, our mission is to revolutionize manufacturing by creating AI-driven automation systems that enhance productivity and sustainability, driving a greener future."
          </p>
        </div>
        <div className="core-values">
          <h2>Core Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Efficiency</li>
            <li>Customer-Centric Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;