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
                        <img src="/logo.png" alt="TransPARENT's" />
                    </div>
                    <div className="hero-brand-text">
                        <span className="brand-name">TransPARENT&apos;s</span>
                        <span className="brand-tagline">Coursier & Colis Express</span>
                    </div>
                </div>

                <p className="hero-subtitle">
                    Valenciennes • Lille • Cambrai • Avesnois
                </p>

                {/* Value proposition - short and punchy */}
                <p className="hero-value-prop">
                    Livraison urgente de colis le jour même.<br />
                    Service rapide, fiable et transparent.
                </p>

                {props.buttons?.length > 0 && (
                    <div className="hero-buttons" data-sb-field-path=".buttons">
                        {props.buttons.map((button, idx) => (
                            <Button {...button} key={idx} data-sb-field-path={`.${idx}`} />
                        ))}
                    </div>
                )}

                <p className="hero-cta-text">
                    <i className="bi bi-clock glow-icon-inline"></i> Devis en 2 minutes
                </p>
            </div>
            <div className="hero-glow"></div>
            <div className="hero-grid"></div>

            {/* Sticky mobile CTA */}
            <a href="tel:+33788478044" className="sticky-cta">
                <i className="bi bi-telephone-fill"></i>
                <span>Appeler</span>
            </a>
        </div>
    );
};
