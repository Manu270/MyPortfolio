import React from 'react';
import './About.css';
import { motion } from 'framer-motion'; // You'll need to install framer-motion

const Study = () => {
    const educationData = [
        {
            year: "2021 - 2025",
            degree: "Bachelor of Technology in Computer Science",
            institution: "Vellore Institute of Technology",
            description: "Acquired 90.4% inB.Tech in Computer Science and Engineering",
            image: "/assets/vit.jpg" // Add your university image
        },
        {
            year: "2019 - 2021",
            degree: "Higher Secondary Education",
            institution: "Sri Chaitanya Junior College",
            description: "Completed with 98% in Science Stream",
            image: "/assets/inter.jpg" // Add your school image
        },
        {
            year: "2018 - 2019",
            degree: "Higher Education",
            institution: "Nava Bharat Public School",
            description: "Completed with 93.6%",
            image: "/assets/nbps.jpg" // Add your school image
        }
    ];

    return (
        <section className="study-section">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-title"
            >
                Education Journey
            </motion.h2>
            
            <div className="timeline">
                {educationData.map((edu, index) => (
                    <motion.div 
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        key={index}
                    >
                        <div className="timeline-content">
                            <div className="image-container">
                                <img src={edu.image} alt={edu.institution} />
                            </div>
                            <div className="content">
                                <span className="year">{edu.year}</span>
                                <h3>{edu.degree}</h3>
                                <h4>{edu.institution}</h4>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                className="skills-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3>Key Skills Acquired</h3>
                <div className="skills-grid">
                    {['Python', 'Java', 'Machine Learning', 'Data Structures','Html','CSS','Flask','React','Communication skills','Leadership skills','Teamwork'].map((skill, index) => (
                        <motion.div 
                            className="skill-item"
                            whileHover={{ scale: 1.05 }}
                            key={index}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Study;