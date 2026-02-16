"use client";

import "./Guidance.css";

const services = [
    {
        title: "Resume Audit",
        description: "Personalized feedback to get your resume selected by top-tier algorithms.",
        icon: "📄"
    },
    {
        title: "1:1 Career Coaching",
        description: "Strategy sessions with industry experts to map your path to tech leadership.",
        icon: "🤝"
    },
    {
        title: "Mock Interviews",
        description: "Realistic technical and behavioral rounds with actionable feedback.",
        icon: "🎙️"
    }
];

export default function Guidance() {
    return (
        <section className="guidance-section animate-fade-in" id="guidance">
            <h2 className="section-title">Career Guidance</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-item glass">
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
