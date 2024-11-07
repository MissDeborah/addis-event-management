import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Welcome from './components/welcome';

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />} 
                />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    );
};

export default App;


