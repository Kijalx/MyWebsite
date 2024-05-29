'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import '../styling/page.css';
import Chatbot from "../components/Chatbot";
import { Spacer } from "@nextui-org/react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const nameStyle = {
        marginBottom: '0.25rem',
        fontSize: '1.25rem',
        fontWeight: 'bold'
    };

    const emailStyle = {
        marginTop: '0',
        fontSize: '0.875rem',
        color: '#666'
    };

    return (
        <div className="flex flex-col min-h-screen">
            <section id="about" className="section">
                <Card className={`${isVisible ? 'visible' : ""} max-w-[800px]`}>
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="profile picture"
                            height={40}
                            width={40}
                            src="" // Replace with your image URL
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
                <Spacer y={5} />
                <Chatbot />
            </section>
            
        </div>
    )
}


