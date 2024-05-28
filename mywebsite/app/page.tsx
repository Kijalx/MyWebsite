// Home.jsx
import React from 'react';
import NavBar from './components/NavBar';
import './styling/page.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="main-section">
                <section id="about" className="section">
                    <h1>About Me</h1>
                    <p>Hello! I am a software engineer with experience in ...</p>
                </section>

                <section id="projects" className="section">
                    <h1>Projects</h1>
                    <p>Here are some of the projects I&apos;ve worked on ...</p>
                </section>

                <section id="contact" className="section">
                    <h1>Contact</h1>
                    <p>You can reach me at ...</p>
                </section>
            </main>

            <footer className="footer">
                <div className="container mx-auto">
                    <p>&copy; 2024 My Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
