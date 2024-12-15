import React from "react";
import "../styles/features.css";
import featuresImage from "../assets/robot.jpg";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Automation",
      description:
        "Empower your production lines with AI-driven technology that ensures precision and efficiency.",
      icon: "🤖",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Get live updates on your manufacturing operations and address inefficiencies instantly.",
      icon: "⏱️",
    },
    {
      title: "Predictive Analytics",
      description:
        "Stay ahead of potential disruptions with advanced analytics that predict and prevent issues.",
      icon: "📊",
    },
    {
      title: "Customizable Dashboards",
      description:
        "Tailor your interface to focus on the msetrics that matter most to your operations.",
      icon: "📋",
    },
    {
      title: "Eco-Friendly Design",
      description:
        "Built with sustainability at its core, our robotics technology supports your green initiatives.",
      icon: "🌱",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Transform Your Operations with AI</h2>
        <p>
          Discover cutting-edge features to optimize and elevate your
          manufacturing processes.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="features-background">
        <img src={featuresImage} alt="Features Background" />
      </div>
    </section>
  );
};

export default FeaturesSection;
