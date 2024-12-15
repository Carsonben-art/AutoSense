import React from "react";
import "../styles/benefits.css";
import benefitsImage from "../assets/benefits.webp";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="image-container">
        <img src={benefitsImage} alt="Benefits Background" className="background-image" />
       
      </div>
      {/* Text Section */}
      <div className="content">
        <span className="label">Benefits to Customers</span>
        <h2>Strategic Advantages for Your Business</h2>
        <div className="stats">
          <div className="stat">
            <h3>#1</h3>
            <p>Lower Operational Costs</p>
            <small>
            Save on energy and materials with optimized processes
            </small>
          </div>
          <div className="stat">
            <h3>#2</h3>
            <p>Increased Precision</p>
            <small>
            Achieve higher quality output with advanced robotics
            </small>
          </div>
          <div className="stat">
            <h3>#3</h3>
            <p>Eco-Friendly Production</p>
            <small>
            Support sustainability goals with reduced waste and energy consumption
            </small>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Benefits;
