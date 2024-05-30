import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Spacer,
    useDisclosure
} from '@nextui-org/react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    githubLink: string;
    demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubLink, demoLink }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleGitHubClick = () => {
        window.open(githubLink, '_blank');
    };

    const handleDemoClick = () => {
        if (demoLink) {
            window.open(demoLink, '_blank');
        }
    };

    const showReadMoreButton = description.length > 220;

    return (
            <Card style={{ height: '350px', width: '350px', maxWidth: '100%' }}>
                <CardHeader style={{fontSize: '35px'}}>{title}</CardHeader>
                <CardBody style={{ fontSize: '20px', fontWeight: 'normal', overflow: 'hidden' }}>
                    <p>{description.length > 220 ? description.substring(0, 220) + '...' : description}</p>
                    {imageUrl && <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />}
                    <Spacer y={5}/>
                </CardBody>
                
                <CardFooter>
                    <Button variant="ghost" color="success" onClick={handleGitHubClick}>
                        GitHub
                    </Button>
                    {demoLink && (
                        <>
                            <Spacer x={2} />
                            <Button variant="ghost" color="warning" onClick={handleDemoClick}>
                                Demo
                            </Button>
                        </>
                    )}
                    <Spacer x={2} />
                    {showReadMoreButton && (
                        <Button onPress={onOpen} className="max-w-fit">Read more</Button>
                    )}
                </CardFooter>
                <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent style={{ backgroundColor: '#333', color: '#fff' }}>
                        {(onClose) => (
                            <>
                                <ModalHeader>{title}</ModalHeader>
                                <ModalBody>
                                    <p style={{ color: '#fff' }}>{description}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </Card>
    );
};

export default ProjectCard;
