"use client";

import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar glass">
            <div className="navbar-container">
                <Link href="/" className="logo">
                    <Image
                        src="/images/logo.png"
                        alt="Highpay_Careers"
                        width={60}
                        height={60}
                        className="logo-img"
                        priority
                    />
                    <span className="logo-text" style={{ marginLeft: '12px', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
                        Highpay_Careers
                    </span>
                </Link>
                <div className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/career#ebooks" className="nav-link">E-book</Link>
                    <Link href="/talk-to-expert" className="nav-link">Talk to an Expert</Link>
                </div>
            </div>
        </nav>
    );
}
