import React from "react";
import ContactInfo from "../components/ContactInfo";
import '../styling/Contact.module.css';

export default function Contact() {
    return (
        <>
            <title>Portfolio - Contact</title>
            <div className="flex flex-col min-h-screen justify-center items-center">
                <section id="about" className="section">
                    <ContactInfo
                        name="Aleksander Kijewski"
                        phone="+123456789"
                        email="alekskijewski88@gmail.com"
                        address="123 Main St, City, Country"
                    />
                </section>
            </div>
        </>
    );
}
