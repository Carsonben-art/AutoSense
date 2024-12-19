import React from "react";
import "../styles/contacts.css";

const Contacts = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Get in Touch</h2>
          <p>
            Get in touch with us using the contact form below. Our team will
            respond to your inquiries promptly.
          </p>
          <div className="contact-info">
            <div>
              <h3>Address</h3>
              <p>00100 Nairobi, Kenya. | 72680 00200</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>contact@autosenserobotics.com</p>
            </div>
          </div>
        </div>
        <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.734935026216!2d36.66976787574816!3d-1.3352493356832016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f034cdccc3f45%3A0xbde78b03444307f!2sNgong%20Rd!5e0!3m2!1sen!2ske!4v1734258058924!5m2!1sen!2ske"
            width="600" 
            height="450"
            title="AutoSense Robotics" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      </div>
      <form className="contact-form">
        <h3>Contact Form</h3>
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contacts;
