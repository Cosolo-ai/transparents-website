import * as React from 'react';
import { useFadeInUp, useStaggerChildren } from '../utils/animations';

export const ServicesSection = (props) => {
    const headingRef = useFadeInUp(0);
    const gridRef = useStaggerChildren(0.08, 0.2);

    const services = [
        { icon: 'bi-box-seam', title: 'Livraison urgente de colis' },
        { icon: 'bi-file-earmark-text', title: 'Transport express de plis et documents' },
        { icon: 'bi-geo-alt', title: 'Courses locales et régionales' },
        { icon: 'bi-lightning-charge', title: 'Livraison le jour même' },
        { icon: 'bi-arrow-repeat', title: 'Transport ponctuel ou régulier' },
        { icon: 'bi-building', title: 'Solutions adaptées aux entreprises' }
    ];

    return (
        <div className="services outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="services-container inner">
                <h2 className="section-heading" data-sb-field-path=".heading" ref={headingRef}>
                    {props.heading || 'Nos services de coursier express'}
                </h2>
                <div className="services-grid" ref={gridRef}>
                    {services.map((service, idx) => (
                        <div className="service-card" key={idx}>
                            <span className="service-icon glow-icon">
                                <i className={`bi ${service.icon}`}></i>
                            </span>
                            <span className="service-title">{service.title}</span>
                        </div>
                    ))}
                </div>
                <p className="services-footer">
                    Chaque mission est réalisée avec ponctualité, discrétion et professionnalisme.
                </p>
            </div>
        </div>
    );
};
