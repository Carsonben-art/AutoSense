import React from 'react';
import '../styles/services.css';
import { FaBolt, FaChartBar, FaRecycle, FaCogs, FaUserAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Products/Services</h2>
        <p>
          AutoSense Robotics offers AI-integrated automation solutions designed
          to optimize manufacturing efficiency while minimizing environmental impact.
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <FaBolt className="service-icon" />
          <h3>Energy Optimization</h3>
          <p>
            Maximize energy savings with AI algorithms that dynamically adjust
            energy usage.
          </p>
        </div>
        <div className="service-card">
          <FaChartBar className="service-icon" />
          <h3>Real-Time Data Analysis</h3>
          <p>
            Enhance decision-making with continuous monitoring and actionable
            insights.
          </p>
        </div>
        <div className="service-card">
          <FaRecycle className="service-icon" />
          <h3>Waste Reduction Technology</h3>
          <p>
            Cut production waste significantly with precise automation.
          </p>
        </div>
        <div className="service-card">
          <FaCogs className="service-icon" />
          <h3>Scalable Integration</h3>
          <p>
            Seamlessly integrate with existing manufacturing systems for a
            smooth transition.
          </p>
        </div>
        <div className="service-card">
          <FaUserAlt className="service-icon" />
          <h3>User-Friendly Interface</h3>
          <p>
            Intuitive design for easy adoption and minimal training time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;