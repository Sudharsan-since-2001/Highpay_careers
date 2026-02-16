"use client";

import "./Ebooks.css";

const ebookList = [
    {
        title: "How to get 25LPA as a fresher",
        description: "Proven strategies and roadmap to land high-paying roles right out of college.",
        price: "₹499",
        tag: "Best Seller",
        link: "#"
    },
    {
        title: "Salary Negotiation Pro",
        description: "How to negotiate a 50% hike without breaking a sweat.",
        price: "₹299",
        tag: "Essential",
        link: "#"
    },
    {
        title: "Ai engineer resources",
        description: "Complete roadmap and essential resources to become a top-tier AI Engineer.",
        price: "₹399",
        tag: "New",
        link: "https://superprofile.bio/vp/ai-engineer-roadmap-with-links"
    }
];

export default function Ebooks() {
    return (
        <section className="ebooks-section animate-fade-in" id="ebooks">
            <h2 className="section-title">Exclusive Resources</h2>
            <div className="ebooks-grid">
                {ebookList.map((ebook, index) => (
                    <div key={index} className="ebook-card glass">
                        {ebook.tag && <span className="ebook-tag">{ebook.tag}</span>}
                        <h3>{ebook.title}</h3>
                        <p>{ebook.description}</p>
                        <div className="ebook-footer">
                            <span className="price">{ebook.price}</span>
                            <a
                                href={ebook.link}
                                target={ebook.link !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
