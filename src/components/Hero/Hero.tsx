"use client";

import Link from "next/link";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero animate-fade-in">
            <div className="hero-content">
                <h1 className="hero-title gradient-text">
                    Hard Work Gets You Nowhere Without the Right Skills.
                </h1>
                <p className="hero-subtitle">
                    Here&apos;s what separates you from those high-paying tech roles: knowing which skills actually matter and how to master them.
                    Our ebooks give you the in-demand skills and the exact roadmap to learn them—no guessing, no wasted time.
                    Still confused about where to start? Book a 1-on-1 call with our career experts.
                    They&apos;ll break it down, answer your questions, and help you figure out your next move.
                </p>
                <div className="hero-actions">
                    <Link href="/career#ebooks">
                        <button className="btn-primary">Get the Ebook</button>
                    </Link>
                    <Link href="/talk-to-expert">
                        <button className="btn-secondary">Talk to an Expert</button>
                    </Link>
                </div>
            </div>
            <div className="hero-visual">
                <div className="tech-stack-container">
                    <div className="tech-badge lvl-badge">HIGHPAY_CAREERS</div>
                    <div className="code-window">
                        <div className="window-header">
                            <span className="window-title">CAREER_ROADMAP.PY</span>
                            <div className="window-controls">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="keyword">class</span> <span className="type">HighPayCareer</span>:<br />
                                    &nbsp;&nbsp;<span className="keyword">def</span> <span className="function">__init__</span>(self):<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;self.roles = [<span className="string">&quot;AI_Engineer&quot;</span>, <span className="string">&quot;Data_Scientist&quot;</span>]<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;self.target = <span className="string">&quot;23_LPA+&quot;</span><br />
                                    <br />
                                    &nbsp;&nbsp;<span className="keyword">def</span> <span className="function">accelerate</span>(self, current_skills):<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment"># Mastering AI/ML frameworks...</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;roadmap = self.get_roadmap(self.roles)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> roadmap.optimize_for(self.target)<br />
                                    <br />
                                    <span className="comment"># High-paying roles within reach.</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="tech-badge status-badge">
                        <span className="check">✔</span>
                        <div className="status-info">
                            <span className="status-label">LATEST ACHIEVEMENT</span>
                            <span className="status-value">AI/ML Roadmap Unlocked</span>
                        </div>
                    </div>
                    <div className="glow-orb"></div>
                </div>
            </div>
        </section>
    );
}
