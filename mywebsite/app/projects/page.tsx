'use client'
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectsCard";

interface Project {
    demoLink: string;
    title: string;
    githubLink: string;
    description: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_GETPROJ) {
            fetchProjects();
        } else {
            setError('Authentication link is not defined');
        }
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_GETPROJ!); // Add a null assertion operator (!) to ensure the variable is not null or undefined
            const data = await response.json();
            setProjects(data.projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setError('Error fetching projects');
        }
    };

    const chunkProjects = (array: Project[], size: number): Project[][] => {
        const chunkedProjects: Project[][] = [];
        let i = 0;
        while (i < array.length) {
            chunkedProjects.push(array.slice(i, i + size));
            i += size;
        }
        return chunkedProjects;
    };

    const groupedProjects = chunkProjects(projects, 3);

    return (
        <>
            <title>Portfolio - Projects</title>
            <div className="flex flex-col min-h-screen justify-center items-center">
                <section id="about" className="section">
                    <div className="project-container">
                        {groupedProjects.map((group, index) => (
                            <div key={index} className="flex flex-wrap justify-center">
                                {group.map((project, projectIndex) => (
                                    <React.Fragment key={projectIndex}>
                                        <ProjectCard
                                            demoLink={project.demoLink}
                                            title={project.title}
                                            githubLink={project.githubLink}
                                            description={project.description}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Projects;
