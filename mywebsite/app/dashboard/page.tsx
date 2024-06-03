'use client';
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [demoLink, setDemoLink] = useState('');
    const [error, setError] = useState('');
    const handleCreateProject = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //
        if (!process.env.NEXT_PUBLIC_PROJ) {
            setError('Authentication link is not defined');
            return;
        }

        const projectData = {
            title,
            description,
            imageUrl,
            githubLink,
            demoLink
        };

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_PROJ, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Project created successfully:', data);
                // Reset form or give feedback to user
                setTitle('');
                setDescription('');
                setImageUrl('');
                setGithubLink('');
                setDemoLink('');
            } else {
                console.error('Error creating project:', data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px' }}>
                <h2>Create New Project</h2>
                <form onSubmit={handleCreateProject}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Image URL:</label>
                        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} style={{ width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>GitHub Link:</label>
                        <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} required style={{ width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Demo Link:</label>
                        <input type="text" value={demoLink} onChange={(e) => setDemoLink(e.target.value)} style={{ width: '100%' }} />
                    </div>
                    <button type="submit" style={{ width: '100%' }}>Create Project</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
