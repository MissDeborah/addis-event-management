import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () =>{
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [role, setRole] = useState('user'); 
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () =>{
    
    try{
      const response = await axios.post('http://localhost:5000/api/users/register',
        {name,Gender,email,password,phone_number,role,}
      ); 
      if (response.data.success) {
        setMessage(response.data.message);
        localStorage.setItem('userName', response.data.name);
        navigate('/welcome'); // Redirect to the welcome page upon successful login
      }
    }catch(error){
    setMessage(error.response ?.data?.message || 'register error occurred');
    }
  };
  const handleLogon = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {email, password,});
      
      if (response.data.success) {
        setMessage(response.data.message);
        localStorage.setItem('userName', response.data.name);
        navigate('/welcome'); // Redirect to the welcome page upon successful login
      }
    

    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };
  const handleLogin = () => {
    
    try {
      
      console.log('Logging in with', { email, password });
      navigate('/welcome'); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'login error occurred');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
};
  return (
      <div className="AuthForm">
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          {message && <p>{message}</p>}
          <div className="login-container">
            <form onSubmit={handleSubmit}>

              {!isLogin &&(
              <>
                <div className="input-group">
                  <input type="text" id="name" value={name} placeholder="FullName" onChange={(e) =>setName(e.target.value)} required/>
                </div>
                <div className="input-group">
                  <select value={Gender} onChange={(e) => setGender(e.target.value)} required>
                      <option value="" disabled selected>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
                </div>
              </>)}
              <div className="input-group">
                <input type="email" id="email" value={email} placeholder="email" onChange={(e) =>setEmail(e.target.value)} required></input>
              </div>
              <div className="input-group">
                <input type="password" id="password" value={password} placeholder="Password" onChange={(e) =>setPassword(e.target.value)} required></input>
              </div>

              {!isLogin &&(
                <>
                <div className="input-group">
                  <input type="tel" id="tel" value={phone_number} placeholder="Phone_Number" onChange={(e) =>setPhone_Number(e.target.value)} required></input>
                </div>
                <div className="user-type">
                  <input type="radio" id="user" name="userType" value="user" checked={role === 'user'} onChange={(e) => setRole(e.target.value)} required></input>
                  <label for="user">User</label>
                  <input type="radio" id="admin" name="userType" value="admin" checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} required></input>
                  <label for="admin">Admin</label>
                </div>
                </>)}

              <div>
              <button type="submit" className="Submit-btn" onClick = {isLogin ? handleLogon: handleRegister}>{isLogin ? 'Login' : 'Register'}</button>   
              </div>
              <div className="Login-btn" >
              {!isLogin &&(<button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Login'}</button>)}   
              </div>
            </form>
          </div>
      </div>
  );
};

export default AuthForm;
