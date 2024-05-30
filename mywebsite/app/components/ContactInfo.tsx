import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import '../styling/Contact.module.css';

interface ContactInfoProps {
    name: string;
    phone: string;
    email: string;
    address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ name, phone, email, address }) => {
    const nameStyle = {
        marginBottom: '0.1rem',
        fontSize: '1.25rem',
        fontWeight: 'bold'
    };

    const contactStyle = {
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: '#666',
    };

    return (
        <Card className="max-w-[800px]">
            <CardHeader className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center">
                    <p style={nameStyle}>{name}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex flex-col items-center">
                    <p style={contactStyle}><strong>Phone:</strong> {phone}</p>
                    <p style={contactStyle}><strong>Email:</strong> {email}</p>
                    <p style={contactStyle}><strong>Address:</strong> {address}</p>
                </div>
            </CardBody>
        </Card>
    );
};

export default ContactInfo;
