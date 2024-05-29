'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import '../styling/page.css'; // Import the CSS file
import pic from "../icons/changethis.jpg"

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after a short delay to trigger the animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const nameStyle = {
        marginBottom: '0.25rem',
        fontSize: '1.25rem', // Adjust font size as needed
        fontWeight: 'bold' // Adjust font weight as needed
    };

    const emailStyle = {
        marginTop: '0',
        fontSize: '0.875rem', // Adjust font size as needed
        color: '#666' // Adjust color as needed
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section id="about" className="section">
                <Card className={`${isVisible ? 'visible' : ""} max-w-[400px]`}>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="profile picture"
                            height={40}
                            width={40}
                            src="data:image/jpeg;base64,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" // Replace with your image URL
                        />
                        <div className="flex flex-col">
                            <p style={nameStyle}>Aleksander Kijewski</p>
                            <p style={emailStyle}>alekskijewski88@gmail.com</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Accomplished and driven during my time at ATU with a degree in Software and Electronic Engineering with a passion for programming and mathematics. Seeking a career with a reputable organization where I can apply my skills in C/C++, Embedded C, HTML, Java and many more languages. Proven communication, team working, and leadership skills from group projects to work experience.</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://linktr.ee/a.kijewski"
                        >
                            Visit Linktr
                        </Link>
                    </CardFooter>
                </Card>
            </section>
        </div>
    )
}


