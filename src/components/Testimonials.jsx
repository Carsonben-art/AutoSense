import React from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    type: "case",
    title: "Case Study: Energy Savings",
    description:
      "Company A reduced energy consumption by 35% within the first year of implementing AutoSense Robotics.",
  },
  {
    id: 2,
    type: "case",
    title: "Case Study: Waste Reduction",
    description:
      "Manufacturer B saw a 25% decrease in production waste after adopting our smart automation system.",
  },
  {
    id: 3,
    type: "testimonial",
    name: "CEO of a Mid-Sized Manufacturer",
    description:
      "AutoSense Robotics transformed our manufacturing process. We’re now more efficient and eco-friendlier than ever before.",
  },
  {
    id: 4,
    type: "testimonial",
    name: "Production Manager",
    description:
      "The predictive analytics feature helped us avoid costly downtimes.",
  },
  {
    id: 5,
    type: "testimonial",
    name: "Operations Director",
    description:
      "Real-time monitoring provided us with actionable insights to optimize production workflows seamlessly.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Case Studies & Testimonials</h2>
        <p>See how AutoSense Robotics is transforming manufacturing processes.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className={`testimonial-card ${item.type}`}>
            <div className="testimonial-content">
              {item.type === "case" ? (
                <>
                  <h3 className="case-title">{item.title}</h3>
                  <p>{item.description}</p>
                </>
              ) : (
                <>
                  <p className="testimonial-text">"{item.description}"</p>
                  <h4 className="testimonial-author">- {item.name}</h4>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
