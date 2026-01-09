import * as React from 'react';
import Markdown from 'markdown-to-jsx';
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
                        {/* H1 with primary keywords */}
                        <h1 className="brand-name">TransPARENT&apos;s</h1>
                        <span className="brand-tagline">Votre coursier express de confiance</span>
                    </div>
                </div>

                {/* Secondary H2 with geo keywords */}
                <h2 className="hero-subtitle">
                    Coursier Express Valenciennes • Lille • Cambrai • Avesnois
                </h2>

                {/* Value proposition - short and punchy */}
                <p className="hero-value-prop">
                    Livraison urgente de colis le jour même dans les Hauts-de-France.<br />
                    Service rapide, fiable et 100% assuré.
                </p>

                {props.buttons?.length > 0 && (
                    <div className="hero-buttons" data-sb-field-path=".buttons">
                        {props.buttons.map((button, idx) => (
                            <Button {...button} key={idx} data-sb-field-path={`.${idx}`} />
                        ))}
                    </div>
                )}

                <p className="hero-cta-text">
                    <i className="bi bi-clock glow-icon-inline"></i> Devis gratuit en 2 minutes
                </p>
            </div>
            <div className="hero-glow"></div>
            <div className="hero-grid"></div>

            {/* Sticky mobile CTA */}
            <a href="tel:+33788478044" className="sticky-cta" aria-label="Appeler TransPARENT's coursier Valenciennes">
                <i className="bi bi-telephone-fill"></i>
                <span>Appeler</span>
            </a>
        </div>
    );
};
