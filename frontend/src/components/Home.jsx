import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Home = () => {
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
        <h1 className='Wh'>Welcome, Here what you may need</h1>
        <div className='manage-ur'>
          <div className='manage-txt'>
            <h2 className='h2'>Manage Your Event and Your Conference</h2>
            <p className='manage-p'>Simplify management of your entire conference, start-to-finish. Manage calls for proposals, create schedules, and promote education sessions. Our technology puts you in control of the event with tools for speaker, exhibitor and attendee engagement. The perfect complement to the MYS trade show operations platform. </p>
          </div>
          <div className='manage-img-div'>
            <img className="manage-img" src="/Test.PNG" alt='Our  home page'/>
          </div>
        </div>
        <div className='cont-div'>
          <div className='cont-txt-div'>
            <p className='cont-txt'>Ready to see how Map Your Show can solve your event challenges?</p>
          </div>
          <nav className='cont-btn-div'>
            <Link to="/Contact"className='cont-btxt'>Get Demo</Link>
          </nav>
        </div>
        <div className="image-gallery">
          {/* <img src="/ev1.jpg" alt="Image 1" /> */}
          
          <img src="/ev3.jpeg" alt="Image 3" />
          
          <img src="/ev5.jpg" alt="Image 5" />
          <img src="/ev6.jpg" alt="Image 6" />
          <img src="/ev7.jpg" alt="Image 7" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

