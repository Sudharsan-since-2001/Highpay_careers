"use client";

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer glass">
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Highpay_Careers. All rights reserved.</p>
            </div>
        </footer>
    );
}
