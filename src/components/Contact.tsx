'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Integration logic would go here
        alert("Thank you! We'll be in touch soon.");
    };

    return (
        <section className={styles.section} id="contact">
            <h2 className={styles.heading}>Ready to Accelerate Your Career?</h2>
            <p className={styles.text}>
                Book a free consultation or drop us a message. Let&apos;s discuss your path to AI.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>How can we help?</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="I'm a backend dev looking to switch to ML..."
                        required
                        className={styles.textarea}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>
                    Send Message
                </button>
            </form>
        </section>
    );
}
