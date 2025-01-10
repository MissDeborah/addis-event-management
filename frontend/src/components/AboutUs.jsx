import React from 'react';
import './AboutUs.css'; // Import the custom CSS
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Header /> {/* Reusing the Header component */}
      <div className="about-container">
        <h1 className="about-title">About Addis Event Manager</h1>
        <p className="about-description">
          Welcome to <strong>Addis Event Manager</strong>, your premier destination for top-notch event planning and management in Addis Ababa. Whether you're hosting a grand wedding, a corporate gala, or an intimate celebration, we bring your visions to life with professionalism, creativity, and a touch of elegance.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <img src="/ev1.jpg" alt="Elegant Weddings" />
            <h3>Elegant Weddings</h3>
            <p>We design unforgettable weddings with meticulous attention to detail, stunning décor, and personalized touches that make your day truly special.</p>
          </div>

          <div className="feature-card">
            <img src="/ev4.jpg" alt="Corporate Events" />
            <h3>Corporate Events</h3>
            <p>From conferences to galas, we deliver flawless corporate events that inspire success and leave lasting impressions on attendees.</p>
          </div>

          <div className="feature-card">
            <img src="/ev5.jpg" alt="Birthday Celebrations" />
            <h3>Private Celebrations</h3>
            <p>Whether it's birthdays or anniversaries, we create intimate and joyful celebrations tailored to your needs.</p>
          </div>
        </div>

        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            At <strong>Addis Event Manager</strong>, we believe every event tells a story. Our mission is to craft experiences that bring people together, ignite joy, and create unforgettable memories. We combine modern trends, seamless coordination, and a passion for perfection to exceed your expectations.
          </p>
        </div>

        <div className="about-team">
          <h2>Our Team</h2>
          <p>
            Our experienced team of planners, designers, and coordinators is dedicated to ensuring your event runs smoothly from start to finish. With creativity and precision, we transform ordinary moments into extraordinary memories.
          </p>
        </div>
      </div>
      <Footer /> {/* Reusing the Footer component */}
    </div>
  );
};

export default AboutUs;
