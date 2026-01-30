'use client';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            title: "Career Strategy",
            description: "Define your niche in AI. Whether you're targeting AI Research, ML Engineering, or Data Science, we'll build a roadmap tailored to your strengths.",
            icon: "🎯"
        },
        {
            title: "Portfolio Development",
            description: "Stop building generic projects. We help you create and showcase complex, industry-relevant AI applications that catch recruiters' eyes.",
            icon: "💻"
        },
        {
            title: "Technical Interview Prep",
            description: "Master the toughest AI interviews. From LeetCode hard problems to system design and ML theory, we'll get you ready.",
            icon: "📚"
        },
        {
            title: "Profile Optimization",
            description: "Your profile needs to scream 'AI Expert'. We optimize your presence to attract top-tier recruiters and bypass ATS filters.",
            icon: "📄"
        }
    ];

    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={styles.title}>Create more impact</h2>
                    <p className={styles.subtitle}>
                        Comprehensive support to ensure your transition into AI is seamless, successful, and highly rewarding.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                                <div className={styles.dot} />
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <div className={styles.learnMore}>
                                    Request more info <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
