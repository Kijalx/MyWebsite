'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import '../styling/page.css';
import Chatbot from "../components/Chatbot";
import { Spacer } from "@nextui-org/react";
import ProfileCard from "../components/ProfileCard";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <section id="about" className="section">
                <ProfileCard />
                <Spacer y={5} />
                <Chatbot />
            </section>
        </div>
    )
}


