'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../styling/page.css'; // Import the CSS file
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import styles from "../styling/CVCard.module.css"; // Create a CSS file for animation styles

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <section id="about" className="section">
                <h1>Home</h1>
            </section>
        </div>
    );
};

export default Home;
