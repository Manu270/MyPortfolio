import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs.config';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                form.current,
                EMAILJS_CONFIG.publicKey
            );

            if (result.text === 'OK') {
                setStatus('success');
                form.current.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-container">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Contact Me
            </motion.h2>

            <motion.form 
                ref={form} 
                onSubmit={sendEmail}
                className="contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        name="user_name" 
                        placeholder="Your Name"
                        required 
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        name="user_email" 
                        placeholder="Your Email"
                        required 
                    />
                </div>

                <div className="form-group">
                    <textarea 
                        name="message" 
                        placeholder="Your Message"
                        required
                    />
                </div>

                <motion.button 
                    type="submit" 
                    className="submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'success' && (
                    <motion.p 
                        className="success-message"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Message sent successfully!
                    </motion.p>
                )}

                {status === 'error' && (
                    <motion.p 
                        className="error-message"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Failed to send message. Please try again.
                    </motion.p>
                )}
            </motion.form>
        </div>
    );
};

export default Contact;
