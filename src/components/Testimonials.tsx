'use client';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const reviews = [
        {
            name: "Michael Chen",
            role: "AI Engineer at Meta",
            quote: "The roadmap was a game-changer. I went from a struggling backend developer to leading model training in just 6 months.",
            initials: "MC"
        },
        {
            name: "Sarah Patel",
            role: "ML Researcher",
            quote: "I was overwhelmed by all the tutorials online. This mentorship gave me the focus and real-world project experience I needed.",
            initials: "SP"
        },
        {
            name: "James Wilson",
            role: "Data Scientist at Startup",
            quote: "Worth every penny. The resume review alone got me interviews I never thought possible.",
            initials: "JW"
        }
    ];

    return (
        <section className={styles.section} id="testimonials">
            <h2 className={styles.title}>What Our Students Say</h2>
            <div className={styles.grid}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.card}>
                        <p className={styles.quote}>&quot;{review.quote}&quot;</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>{review.initials}</div>
                            <div className={styles.info}>
                                <span className={styles.name}>{review.name}</span>
                                <span className={styles.role}>{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
