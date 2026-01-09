import * as React from 'react';
import { useFadeInUp, useStaggerChildren, useGlowPulse } from '../utils/animations';

export const ContactSection = (props) => {
    const headingRef = useFadeInUp(0);
    const gridRef = useStaggerChildren(0.15, 0.2);
    const phoneRef = useGlowPulse();

    return (
        <div className="contact outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="contact-container inner">
                <h2 className="section-heading" data-sb-field-path=".heading" ref={headingRef}>
                    Contactez votre coursier express Valenciennes
                </h2>
                <div className="contact-grid" ref={gridRef}>
                    <a href="tel:+33788478044" className="contact-item contact-phone" ref={phoneRef}>
                        <span className="contact-icon glow-icon-large">
                            <i className="bi bi-telephone-fill"></i>
                        </span>
                        <span className="contact-label">Téléphone</span>
                        <span className="contact-value">+33 7 88 47 80 44</span>
                    </a>
                    <a href="mailto:transparentsmain@outlook.com" className="contact-item contact-email">
                        <span className="contact-icon glow-icon-large">
                            <i className="bi bi-envelope-fill"></i>
                        </span>
                        <span className="contact-label">Email</span>
                        <span className="contact-value">transparentsmain@outlook.com</span>
                    </a>
                    <div className="contact-item contact-zone">
                        <span className="contact-icon glow-icon-large">
                            <i className="bi bi-geo-alt-fill"></i>
                        </span>
                        <span className="contact-label">Zone</span>
                        <span className="contact-value">Valenciennois – Hauts-de-France</span>
                    </div>
                </div>
                <div className="contact-hours">
                    <p><i className="bi bi-calendar-check"></i> Disponible du lundi au samedi</p>
                    <p><i className="bi bi-lightning-charge"></i> Devis rapide par téléphone</p>
                </div>
            </div>
        </div>
    );
};
