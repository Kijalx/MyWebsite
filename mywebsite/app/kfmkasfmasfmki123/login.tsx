'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button } from '@nextui-org/react';
import './login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!process.env.NEXT_PUBLIC_AUTH) {
            setError('Authentication link is not defined');
            return;
        }
        
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_AUTH, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login successful");
                console.log(data);
                router.push('/dashboard'); // Redirect to the dashboard or another page
            } else {
                console.error('Login failed:', data.message);
                setError(data.message);
            }
            console.log("Data", data);
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <Input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        fullWidth 
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        fullWidth 
                    />
                    <Button type="submit">Login</Button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}
