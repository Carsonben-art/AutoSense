import React from "react";
import "../styles/pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h2>Choose Your Plan</h2>
        <p>
          Our pricing is transparent, straightforward, and grows with your
          company, while making it easy to get started with AutoSense Robotics.
        </p>
        <div className="testimonials">
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <p>"Absolutely loving every part of the experience."</p>
          </div>
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <p>"It's a game changer. 10/10 would recommend."</p>
          </div>
          <div>
            <span>⭐⭐⭐⭐⭐</span>
            <p>"It's a superpower. Must try yourself."</p>
          </div>
        </div>
      </div>

      {/* <div className="pricing-cards-test">
        
        <div className="card">
          <h3>Starter</h3>
          <p>You're just starting out on your comms journey.</p>
          <h4>$4.99</h4>
          <p className="payment-type">One-time payment</p>
          <button>Try Now</button>
          <ul>
            <li>✔ 1 site only</li>
            <li>✔ Up to 2,000 contacts</li>
            <li>✔ Unlimited stories</li>
          </ul>
        </div>

        
        <div className="card popular">
          <h3>
            Core <span className="badge">Popular</span>
          </h3>
          <p>This isn’t your first rodeo; you know what you’re doing.</p>
          <h4>$49.99</h4>
          <p className="payment-type">/month</p>
          <button>Get Started</button>
          <ul>
            <li>✔ Everything in Starter plan, plus</li>
            <li>✔ 7-days story version history</li>
            <li>✔ Up to 10,000 contacts</li>
            <li>✔ Custom sender addresses</li>
          </ul>
        </div>

        
        <div className="card">
          <h3>Enterprise</h3>
          <p>All the core features + 5 white label sites, and user permissions.</p>
          <h4>$99.99</h4>
          <p className="payment-type">/month</p>
          <button>Contact Us</button>
          <ul>
            <li>✔ Everything in Core plan, plus</li>
            <li>✔ 5 sites included</li>
            <li>✔ 90-days story version history</li>
            <li>✔ Up to 20,000 contacts</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Pricing;