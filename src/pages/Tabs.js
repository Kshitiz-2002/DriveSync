import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="tabs-container">
            <div className="tabs">
                <div className="tab_buttons">
                <button 
                    className={`tab ${activeTab === 'login' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button 
                    className={`tab ${activeTab === 'signup' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('signup')}
                >
                    Signup
                </button>
                </div>
                {activeTab === 'login' ? <LoginPage/> : <SignupPage />}
        </div>
    </div>
    );
};

export default Tabs;
