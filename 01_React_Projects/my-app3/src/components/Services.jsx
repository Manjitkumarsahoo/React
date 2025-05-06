import React from 'react'
import financeLogo from '../assets/finance.svg'
import manufacturingLogo from '../assets/manufacturing.svg'
import technologyLogo from '../assets/technology.svg'
import retailLogo from '../assets/retail.svg'
import healthLogo from '../assets/health.svg'
import '../css/services.css'


const industries = [
    {
        icon: <img src={technologyLogo} alt="" />,
        title: 'Technology',
        description: 'Software development, IT infrastructure, cybersecurity, and product management roles.',
    },
    {
        icon: <img src={financeLogo} alt="" />,
        title: 'Finance',
        description: 'Banking, investment, accounting, financial analysis, and compliance positions.',
    },
    {
        icon: <img src={healthLogo} alt="" />,
        title: 'Healthcare',
        description: 'Clinical, administrative, research, and healthcare technology professionals.',
    },
    {
        icon: <img src={manufacturingLogo} alt="" />,
        title: 'Manufacturing',
        description: 'Engineering, operations, supply chain, and quality assurance specialists.',
    },
    {
        icon: <img src={retailLogo} alt="" />,
        title: 'Retail',
        description: 'Management, merchandising, e-commerce, and customer experience roles.',
    },
    {
        icon: <img src={retailLogo} alt="" />,
        title: 'Professional Services',
        description: 'Consulting, legal, marketing, and business development positions.',
    },
];


function Services() {
    return (
        <>
            <section className="industries-section">
                <p className="section-subtitle">Services</p>
                <h2 className="section-title">Industries We Serve</h2>
                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-card">
                            <div className="industry-icon">{industry.icon}</div>
                            <h3 className="industry-title">{industry.title}</h3>
                            <p className="industry-description">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Services