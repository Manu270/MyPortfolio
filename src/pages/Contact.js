import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-info">
                    <h1 className="contact-title">Get in Touch</h1>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <p>chittimanu2703@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <p>+91-9121266548</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Bhadradri Kothagudem , Telangana</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Manu270" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/chitti-manogna-b6b9a2250" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="bottom-section">
                <div className="quick-contact">
                    <h2>Let's Connect</h2>
                    <p>Feel free to reach out for:</p>
                    <ul>
                        <li><i className="fas fa-briefcase"></i> Job Opportunities</li>
                        <li><i className="fas fa-code-branch"></i> Collaboration</li>
                        <li><i className="fas fa-lightbulb"></i> Project Ideas</li>
                        <li><i className="fas fa-comments"></i> General Discussion</li>
                    </ul>
                </div>
                <div className="map-section">
                    <h2>Find Me Here</h2>
                    <div className="map-container">
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121658.92520491312!2d80.5547791761636!3d17.555799895657775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a363be3d9c35a51%3A0x9af60d434cec4bdb!2sBhadradri%20Kothagudem%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710825938407!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
