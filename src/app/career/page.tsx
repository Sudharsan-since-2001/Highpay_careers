import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Ebooks from "../../components/Ebooks/Ebooks";

export default function CareerPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px' }}>
                <section className="career-header animate-fade-in">
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '16px', textAlign: 'center' }}>
                        Elevate Your Career
                    </h1>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.25rem', textAlign: 'center', marginBottom: '60px' }}>
                        Master the tech industry with our premium resources and personalized guidance.
                    </p>
                </section>

                <Ebooks />
            </main>
            <Footer />
        </>
    );
}
