// NavBar.jsx
import React from 'react';
import NavItem from './NavItem';
import '../styling/NavBar.css'; // Import the CSS file

const NavBar = () => {
    return (
        <header className="navbar">
            <nav className="container">
                <div className="logo">My Resume</div>
                <ul>
                    <NavItem href="#about">About</NavItem>
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#contact">Contact</NavItem>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
