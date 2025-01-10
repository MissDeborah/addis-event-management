import React, { useState } from "react";
import axios from 'axios';
import "./Contact.css";
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",phone: "",message: "",});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Send data to backend API
    try {
      const response = await axios.post('http://localhost:5000/api/Contact', {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div>
      <Header />
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="subtitle">Any questions or remarks? Just write us a message</p>
      
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Fill up the form and our team will get back to you in 24 hours.</p>
          <div className="info-item">
            <span>📞</span> <p>+251900000000</p>
          </div>
          <div className="info-item">
            <span>📧</span> <p>addisevent@gmail.com</p>
          </div>
          <div className="info-item">
            <span>📍</span> <p>5 Kilo, Addis Ababa</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John Deo"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="John Deo"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+251-"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">SEND ➡</button>
        </form>
      </div>
      
    </div>
    <Footer />
  </div>
  );
};

export default Contact;

