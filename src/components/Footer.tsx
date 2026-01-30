'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandSection}>
                    <Link href="/" className={styles.logoRow}>
                        <Image src="/images/logo.png" alt="Highpay_careers logo" width={180} height={90} className={styles.logoImg} />
                    </Link>
                    <p className={styles.description}>Helping professionals shape the future with AI.</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <span className={styles.linkTitle}>Company</span>
                        <Link href="#about" className={styles.linkItem}>About</Link>
                        <Link href="#services" className={styles.linkItem}>Services</Link>
                        <Link href="#testimonials" className={styles.linkItem}>Success Stories</Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <span className={styles.linkTitle}>Connect</span>
                        <Link href="https://linkedin.com" className={styles.linkItem}>LinkedIn</Link>
                        <Link href="https://twitter.com" className={styles.linkItem}>Twitter</Link>
                        <Link href="mailto:hello@example.com" className={styles.linkItem}>Email</Link>
                    </div>
                </div>
            </div>

            <div className={styles.legal}>
                &copy; {new Date().getFullYear()} Highpay_careers. All rights reserved.
            </div>
        </footer>
    );
}
