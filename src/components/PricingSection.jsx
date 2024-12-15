import React from "react";
import "../styles/pricingsection.css";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "You're just starting out on your comms journey.",
      price: "$4.99",
      frequency: "One-time payment",
      features: [
        "1 machine only",
        "Up to 2,000 contacts",
        "Unlimited stories",
      ],
      buttonText: "Try Now",
      buttonType: "primary",
    },
    {
      name: "Core",
      description: "This isn’t your first rodeo; you know what you’re doing.",
      price: "$49.99",
      frequency: "/month",
      features: [
        "Everything in Starter plan, plus",
        "7-days story version history",
        "Up to 10,000 contacts",
        "Custom sender addresses",
      ],
      buttonText: "Get Started",
      buttonType: "highlight",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "All the core features + 5 white label sites, and user permissions.",
      price: "$99.99",
      frequency: "/month",
      features: [
        "Everything in Core plan, plus",
        "5 machines included",
        "90-days story version history",
        "Up to 20,000 contacts",
      ],
      buttonText: "Contact Us",
      buttonType: "secondary",
    },
  ];

  return (
    <section className="pricing-section">
      <h2>Choose Your Plan</h2>
      <p>
        Our pricing is transparent, straightforward, and grows with your company,
        while making it easy to get started with AutoSense Robotics.
      </p>
      <div className="stars">
        <span>⭐️⭐️⭐️⭐️⭐️</span>
        <p>"Absolutely loving every part of the experience."</p>
        <span>⭐️⭐️⭐️⭐️⭐️</span>
        <p>"It's a game changer. 10/10 would recommend."</p>
        <span>⭐️⭐️⭐️⭐️⭐️</span>
        <p>"It's a superpower. Must try yourself."</p>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isPopular ? "popular" : ""}`}>
            {plan.isPopular && <div className="badge">Popular</div>}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price">
              <span>{plan.price}</span>
              <small>{plan.frequency}</small>
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className={`button ${plan.buttonType}`}>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
