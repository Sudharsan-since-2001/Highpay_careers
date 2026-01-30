'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.background}>
                <Image
                    src="/images/hero-ai.png"
                    alt="AI Background"
                    fill
                    className={styles.backgroundImg}
                    priority
                />
            </div>
            <div className={styles.overlay} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        The best career <br /> for anyone <br />
                        <span className={styles.highlight}>
                            <svg className={styles.sparkle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#ff6b6b" />
                            </svg>
                            is in AI.
                        </span>
                    </h1>

                    <div className={styles.subtitle}>
                        <p className={styles.paragraph}>
                            In 2026, the global job market is undergoing a seismic shift. As Large Language Models and autonomous agents redefine productivity, the window for early adoption is closing. By 2026, AI literacy will no longer be a niche skill but the foundation of every high-growth profession. Our platform provides the roadmap, tools, and community to transition your career into the machine learning era.
                        </p>
                        <p className={styles.paragraph}>
                            Whether you are a developer, creative, or strategist, understanding the neural architecture of the future is your greatest competitive advantage. Start building today to ensure professional longevity in an automated world. The rise of generative systems creates unprecedented opportunities for those who can bridge the gap between human intent and algorithmic execution.
                        </p>
                        <p className={styles.paragraph}>
                            Join thousands of pioneers who are already securing their place in the next industrial revolution. Your journey into the heart of artificial intelligence begins here. Don&apos;t just witness the future—architect it.
                        </p>
                    </div>

                    <div className={styles.buttons}>
                        <a href="#services" className={styles.primaryBtn}>
                            Join the revolution
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
