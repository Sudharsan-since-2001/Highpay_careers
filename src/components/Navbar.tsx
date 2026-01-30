'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Success Stories', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoContainer}>
                    <Image src="/images/logo.png" alt="Highpay_careers logo" width={200} height={100} className={styles.logoImg} />
                </Link>
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact" className={styles.ctaBtn}>
                        Start Now
                    </Link>
                </div>
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link} onClick={() => setMobileMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact" className={styles.ctaBtn} onClick={() => setMobileMenuOpen(false)}>
                        Start Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
