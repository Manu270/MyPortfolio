import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Code with Gemma",
            description: "This project introduces an AI-powered code compiler that provides real-time code compilation, error detection, and optimization recommendations. Developed using Python, Flask, HTML, and CSS, this compiler supports four major programming languages—Python, Java, C, and C++. It employs both online and offline AI models, Gemini and Ollama, for code analysis and suggestions.",
            image: "/assets/compiler.jpg",
            technologies: ["Python", "Flask", "Html" , "CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/Code-with-Gemma.git"
        },
        // Add more projects following the same structure
        {
            title: "Simple Portfolio Tracker",
            description: "A full-stack web application for seamless stock portfolio management with features to add, edit, and delete stocks while dynamically tracking portfolio value. The platform offers intuitive data handling and plans to include advanced dashboards and real-time stock price integration. Perfect for streamlined portfolio tracking.",
            image: "/assets/portfolio tracker.png",
            technologies: ["React", "Tailwand CSS", "java springboot" , "MySQL"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/CapX.git"
        },

        {
            title: "lowlight image enhancemnt",
            description: "This project focuses on enhancing the quality of images captured in low-light conditions using advanced image processing and deep learning techniques. It aims to improve brightness, contrast, and detail visibility while minimizing noise and preserving natural color balance. Applications include photography, surveillance, and medical imaging.",
            image: "/assets/low-light.jpg",
            technologies: ["Python", "Flask", "Html" , "CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/lowlight.git"
        },

        {
            title: "E-Giftedly website",
            description: "The e-gifting platform aims to facilitate seamless and personalized gifting through an intuitive interface, diverse gift options, and instant delivery. It prioritizes security, mobile accessibility, and user feedback while enabling robust customization features. Additionally, integrated",
            image: "/assets/giftedly.png",
            technologies: ["Html", "CSS", "Javascript","Php"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/giftedly-website.git"
        },

        {
            title: "Twitter Sentiment Analysis",
            description: "This project analyzes tweets to classify sentiments as positive, negative, or neutral using Natural Language Processing (NLP) techniques. It involves data collection via the Twitter API, text preprocessing, and applying machine learning models for sentiment classification.",
            image: "/assets/twitter.jpg",
            technologies: ["Python"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/Twitter-Sentiment-Analysis.git"
        },
        {
            title: "Heart Attack Prediction",
            description: "The project aims to predict the risk of heart attacks using machine learning algorithms and diverse health data. The predictive model facilitates early identification and proactive intervention, enhancing patient outcomes and healthcare efficiency.",
            image: "/assets/heartattack.jpg",
            technologies: ["Python", "Flask", "Html","CSS"],
            liveLink: "https://project1.com",
            githubLink: "https://github.com/Manu270/Heart-Attack-Prediction.git"
        },
    ];

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;