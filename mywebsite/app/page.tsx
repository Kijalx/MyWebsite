// Home.jsx
import React from 'react';
import NavBar from './components/NavBar';
import './styling/page.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <section id="about" className="section">
                    <h1>Welcome</h1>
                </section>

            <footer className="footer">
                <div className="container mx-auto">
                    <p>&copy; 2024 My Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
