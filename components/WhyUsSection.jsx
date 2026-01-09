import * as React from 'react';
import { useFadeInUp, useStaggerChildren } from '../utils/animations';

export const WhyUsSection = (props) => {
    const headingRef = useFadeInUp(0);
    const listRef = useStaggerChildren(0.12, 0.2);

    const benefits = [
        { icon: 'bi-speedometer2', text: 'Réactivité et rapidité' },
        { icon: 'bi-shield-check', text: 'Livraison sécurisée' },
        { icon: 'bi-chat-dots', text: 'Communication claire' },
        { icon: 'bi-clock-history', text: 'Respect des délais' },
        { icon: 'bi-person-heart', text: 'Service humain et professionnel' }
    ];

    return (
        <div className="why-us outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="why-us-container inner">
                <h2 className="section-heading" data-sb-field-path=".heading" ref={headingRef}>
                    Pourquoi choisir TransPARENT&apos;s pour vos livraisons express ?
                </h2>
                <div className="benefits-list" ref={listRef}>
                    {benefits.map((benefit, idx) => (
                        <div className="benefit-item" key={idx}>
                            <span className="benefit-check glow-icon">
                                <i className={`bi ${benefit.icon}`}></i>
                            </span>
                            <span className="benefit-text">{benefit.text}</span>
                        </div>
                    ))}
                </div>
                <p className="why-us-tagline">La livraison express, en toute transparence.</p>
            </div>
        </div>
    );
};
