// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [userName, setUserName] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const publicRoutes = ['/contact', '/about'];
    const storedUserName = localStorage.getItem('userName');
  
    if (!storedUserName && !publicRoutes.includes(window.location.pathname)) {
      navigate('/'); // Redirect only for restricted routes
    } else {
      setUserName(storedUserName);
    }
  }, [navigate]);
  

const handleBackClick = () => {
  localStorage.removeItem('userName'); 
  navigate('/AuthForm');
};
  return (
    <header className="header">
      <div className="logo">
        <img src={isLogin ? "/logo192.PNG": "/logo11.PNG"} alt="EventManagment Logo" />
        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Courses" />
        <button className='iconB'>
          <img className="icon" src='/sear.PNG' alt='search icon'/>
        </button>
      </div>
      
      <nav className="nav-links">
        <Link to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</Link>
        <Link to="/Event"className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Event</Link>
        <Link to="/Blog"className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blogs</Link>
        
        <Link to="/AboutUs"className= "nav-link">About</Link>
        <Link to="/Contact"className= "nav-link">Contact</Link>
      </nav>
      
      <div className="cart-login">
        <button onClick={handleBackClick} className='login-button'> {userName ? userName : 'Login/Register'}</button>
      </div>
    </header>
  );
};

export default Header;
