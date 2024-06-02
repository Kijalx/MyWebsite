'use client'
import React, { useState } from 'react';
import '../styling/page.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const authLink = process.env.AUTH;

    const handleLogin = async () => {
        try {
            const response = await fetch('https://adminforportfolio.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
    
            if (response.ok) {
                // Login successful, log message
                console.log("Login successful");
                console.log(data); // Log any data received from the server
            } else {
                // Login failed, display error message
                console.error('Login failed:', data.message);
                setError(data.message);
            }
            console.log("DAta", data)
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login');
        }
        
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}