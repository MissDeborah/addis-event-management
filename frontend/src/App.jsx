import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Welcome from './components/welcome';
import Home from './components/Home';
import Contact from './components/Contact';
import AdminMessages from './components/Admin';
import AboutUs from './components/AboutUs';
import Event from './components/Event';
import Blog from './components/Blog';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>                
                <Route path="/AuthForm" element={<AuthForm />}/>
                <Route path="/Contact" element={<Contact />} />
                <Route path="/AboutUs" element={<AboutUs />} /> 
                <Route path="/welcome" element={<Welcome isLogin={isLogin} setIsLogin={setIsLogin}/>} />              
                <Route path="/Event" element={<Event />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/messages" element={<AdminMessages />} />
            </Routes>
        </Router>
    );
};

export default App;


