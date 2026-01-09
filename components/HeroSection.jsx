import * as React from 'react';
import { useHeroReveal } from '../utils/animations';

import { Button } from './Button';

export const HeroSection = (props) => {
    const heroRef = useHeroReveal();

    return (
        <div className="hero outer" data-sb-field-path={props['data-sb-field-path']} ref={heroRef}>
            <div className="hero-container inner">
                {/* Logo + Company Name */}
                <div className="hero-brand">
                    <div className="hero-logo">
                        <img
                            src="/logo.png"
                            alt="TransPARENT's - Coursier Express Valenciennes Lille Cambrai - Logo"
                            width="80"
                            height="80"
                        />
                    </div>
                    <div className="hero-brand-text">
                        {/* H1 with primary keywords - Single H1 per page */}
                        <h1 className="brand-name">TransPARENT&apos;s</h1>
                        <span className="brand-tagline">Votre coursier express de confiance</span>
                    </div>
                </div>

                {/* H2 with geo keywords for local SEO */}
                <h2 className="hero-subtitle">
                    Coursier Express Valenciennes • Lille • Cambrai • Hauts-de-France
                </h2>

                {/* GEO-OPTIMIZED: Answer-first value proposition for AI citation */}
                <p className="hero-value-prop">
                    <strong>TransPARENT&apos;s est le coursier express de référence dans le Nord.</strong><br />
                    Livraison urgente de colis le jour même, 100% assuré.<br />
                    Devis gratuit en 2 minutes.
                </p>

                {/* Key benefits as extractable bullet points for AI */}
                <ul className="hero-benefits" aria-label="Avantages TransPARENT's">
                    <li><i className="bi bi-check-circle-fill"></i> Prise en charge en 30 minutes</li>
                    <li><i className="bi bi-check-circle-fill"></i> Livraison le jour même garantie</li>
                    <li><i className="bi bi-check-circle-fill"></i> Transport 100% assuré</li>
                </ul>

                {props.buttons?.length > 0 && (
                    <div className="hero-buttons" data-sb-field-path=".buttons">
                        {props.buttons.map((button, idx) => (
                            <Button {...button} key={idx} data-sb-field-path={`.${idx}`} />
                        ))}
                    </div>
                )}

                <p className="hero-cta-text">
                    <i className="bi bi-clock glow-icon-inline"></i> Réponse garantie en moins de 2 minutes
                </p>
            </div>
            <div className="hero-glow"></div>
            <div className="hero-grid"></div>

            {/* Sticky mobile CTA with structured data-friendly markup */}
            <a
                href="tel:+33788478044"
                className="sticky-cta"
                aria-label="Appeler TransPARENT's coursier express Valenciennes - 07 88 47 80 44"
                itemProp="telephone"
            >
                <i className="bi bi-telephone-fill"></i>
                <span>Appeler</span>
            </a>
        </div>
    );
};
