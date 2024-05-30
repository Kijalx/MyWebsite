import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import '../styling/CVCard.module.css';

interface ProfileCardProps {
    name: string;
    email: string;
    imageUrl: string;
    description: string;
    link: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, imageUrl, description, link }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const nameStyle = {
        marginBottom: '0.1rem',
        fontSize: '1.25rem',
        fontWeight: 'bold'
    };

    const emailStyle = {
        marginTop: '0',
        fontSize: '0.875rem',
        color: '#666',
        marginBottom: '0rem'
    };

    const pStyle = {
        marginBottom: '0rem'
    };

    return (
        <Card className={`${isVisible ? 'visible' : ""} max-w-[800px]`}>
            <CardHeader className="flex flex-col items-center text-center">
                <Image
                    alt="profile picture"
                    height={40}
                    width={40}
                    src={imageUrl}
                />
                <div className="flex flex-col items-center">
                    <p style={nameStyle}>{name}</p>
                    <p style={emailStyle}>{email}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p style={pStyle}>{description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href={link}
                >
                    Visit Linktr
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;
