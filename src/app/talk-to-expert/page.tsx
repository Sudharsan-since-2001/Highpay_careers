import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function TalkToExpertPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px' }}>
                <section className="expert-header animate-fade-in" style={{ paddingBottom: '20px' }}>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '16px', textAlign: 'center' }}>
                        Stop Guessing. Start Growing.
                    </h1>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.25rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Haven&apos;t figured out what career suits you? Book a session with our career experts and get real answers.
                        They&apos;ll look at where you are right now, what you&apos;re interested in, and what the market actually needs.
                    </p>
                </section>

                <section className="booking-cta animate-fade-in" style={{ textAlign: 'center', paddingTop: '0' }}>
                    <div className="glass" style={{ padding: '60px', maxWidth: '900px', margin: '0 auto' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>One Call. Zero Confusion.</h2>
                        <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.7' }}>
                            We&apos;ll map out the perfect role for you and show you step-by-step how to land it.
                        </p>
                        <p style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '40px' }}>
                            Just ₹499
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <a href="tel:+918754626675" className="btn-primary" style={{ textDecoration: 'none', fontSize: '1.2rem', padding: '16px 40px', width: '100%', maxWidth: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Book a session
                            </a>

                            <a href="https://wa.me/918754626675?text=Hi%20I%20would%20like%20to%20talk%20to%20you" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%', maxWidth: '400px', fontSize: '1.1rem', padding: '12px 24px', border: '1px solid #25D366', color: '#25D366' }}>
                                <span>💬</span> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
