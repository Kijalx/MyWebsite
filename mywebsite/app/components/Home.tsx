// app/Home.tsx
// Ensure this component is treated as a client component

import React from 'react';
import NavBar from '../components/NavBar';
import '../styling/page.css'; // Import the CSS file
import { Button, ButtonGroup } from '@nextui-org/react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section id="about" className="section">
                <h1>Welcome</h1>
            </section>
            
        </div>
    );
};

export default Home;
