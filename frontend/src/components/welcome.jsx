import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './AboutUs.css';

const Welcome = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      navigate('/'); // Redirect to login if username is not available
    }
  }, [navigate]);

  const handleBackClick = () => {
    localStorage.removeItem('userName'); // Optional: clear username on logout
    navigate('/');
  };

  return (
    <div>
      <Header /> {/* Include the Header here */}
      
      <div className="welcome-content">
      <button onClick={handleBackClick}>Logout</button>
        <h1 className='Wh'>Welcome {userName}</h1>
        <div className="about-features">
          <div className="feature-card">
            <img src="/ev1.jpg" alt="Elegant Weddings" />
            <h3>Elegant Weddings</h3>
            <p>We design unforgettable weddings with meticulous attention to detail, stunning décor, and personalized touches that make your day truly special.</p>
          </div>

          <div className="feature-card">
            <img src="/ev2.jpg" alt="Elegant Weddings" />
            <h3>Elegant Weddings</h3>
            <p>We design unforgettable weddings with meticulous attention to detail, stunning décor, and personalized touches that make your day truly special.</p>
          </div>

          <div className="feature-card">
            <img src="/ev7.jpg" alt="Elegant Weddings" />
            <h3>Elegant Weddings</h3>
            <p>We design unforgettable weddings with meticulous attention to detail, stunning décor, and personalized touches that make your day truly special.</p>
          </div>

          <div className="feature-card">
            <img src="/ev6.jpg" alt="Elegant Weddings" />
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
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
