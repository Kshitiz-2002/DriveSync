import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {app} from './fireBaseAuth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
    const auth = getAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,username,password);
            console.log("User Login Successful");
            navigate('/homepage');
        }catch(error){
            console.log("User Login is Successful");
        }
        if (!username && !password) {
            setError('Please enter email and password.');
            return;
        }
        if (!username) {
            setError('Please enter email.');
            return;
        }
        if (!password) {
            setError('Please enter password.');
            return;
        }
    };

    const handleRegister = () => {
        if (!username && !password) {
            setError('Please enter email and password.');
            return;
        }
        if (!username) {
            setError('Please enter email.');
            return;
        }
        if (!password) {
            setError('Please enter password.');
            return;
        }
        createUserWithEmailAndPassword(auth, username, password)
            .then((response) => {
                console.log(response.user);
                navigate('/dashboard'); // Redirect to dashboard or desired page after registration
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="login-container">
            <h1 className="login-title">LOGIN</h1>
            <form className="login-form">
                <input
                    type="text"
                    id="username"
                    className="login-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    id="password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {error && <p className="error-message">{error}</p>}
                <button type="button" className="login-button" onClick={handleLogin}>
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
