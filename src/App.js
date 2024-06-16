import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'; 
import PublishPage from './pages/PublishPage'; 
import RidePage from './pages/RidePage'; 
import Tabs from './pages/Tabs';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tabs/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/searchpage" element={<SearchPage />} /> 
        <Route path="/publishpage" element={<PublishPage />} /> 
        <Route path="/ridepage" element={<RidePage />} /> 
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;
