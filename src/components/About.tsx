'use client';
import styles from './About.module.css';

export default function About() {
    const features = [
        {
            title: "Explosive Demand",
            description: "The demand for AI professionals is outpacing supply. Companies are aggressively hiring for roles in Machine Learning, NLP, and Computer Vision.",
            icon: "⚡"
        },
        {
            title: "Command Higher Pay",
            description: "AI Engineers and Data Scientists consistently rank among the highest-paid tech roles, often commanding 30-50% premiums over traditional software engineering.",
            icon: "💰"
        },
        {
            title: "Future-Proof Career",
            description: "Mastering Generative AI and ML ensures you stay relevant in a rapidly evolving tech landscape. Build the systems that are shaping the future.",
            icon: "🚀"
        }
    ];

    return (
        <section className={styles.section} id="about">
            <div className={styles.heading}>
                <h2 className={styles.title}>Here we guide you to <br /> best AI careers</h2>
                <p className={styles.subtitle}>
                    The artificial intelligence revolution is just beginning. Position yourself at the forefront of the most transformative technology of our time.
                </p>
            </div>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardText}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
