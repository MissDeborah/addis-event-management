import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';


const Welcome = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default Welcome;
// AuthForm.jsx