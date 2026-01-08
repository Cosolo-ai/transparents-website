import * as React from 'react';
import { useFadeInUp, useStaggerChildren } from '../utils/animations';

export const TrustSection = (props) => {
    const headingRef = useFadeInUp(0);
    const gridRef = useStaggerChildren(0.15, 0.2);

    const fleetItems = [
        {
            image: '/van.jpg',
            title: 'Utilitaire léger',
            description: 'Livraisons rapides en ville',
            icon: 'bi-truck',
            highlight: 'Rapide & Agile'
        },
        {
            image: '/scooter.jpg',
            title: 'Scooter de livraison',
            description: 'Urgences centre-ville',
            icon: 'bi-bicycle',
            highlight: 'Ultra-rapide'
        },
        {
            image: '/van-cargo.jpg',
            title: 'Espace cargo isolé',
            description: 'Colis fragiles & alimentaires',
            icon: 'bi-box-seam',
            highlight: 'Protection thermique'
        },
        {
            image: '/pallet.jpg',
            title: 'Transport palettes',
            description: 'Grandes quantités B2B',
            icon: 'bi-boxes',
            highlight: 'Gros volumes'
        },
        {
            image: '/ebike.jpg',
            title: 'Vélo cargo électrique',
            description: 'Livraison écologique',
            icon: 'bi-lightning-charge',
            highlight: 'Éco-responsable'
        }
    ];

    return (
        <section className="trust-section" data-sb-field-path={props['data-sb-field-path']}>
            <div className="inner">
                <h2 className="section-title" ref={headingRef}>
                    <i className="bi bi-truck glow-icon"></i>
                    Notre flotte adaptée à vos besoins
                </h2>
                <p className="trust-subtitle">
                    Du petit colis urgent à la palette complète, nous avons la solution
                </p>

                <div className="fleet-grid" ref={gridRef}>
                    {fleetItems.map((item, idx) => (
                        <div className={`fleet-card ${idx === 0 ? 'fleet-card-featured' : ''}`} key={idx}>
                            <div className="fleet-image-container">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="fleet-image-overlay"></div>
                                <span className="fleet-highlight">
                                    <i className={`bi ${item.icon}`}></i>
                                    {item.highlight}
                                </span>
                            </div>
                            <div className="fleet-card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trust-badges">
                    <div className="trust-badge">
                        <i className="bi bi-shield-check"></i>
                        <span>100% Assuré</span>
                    </div>
                    <div className="trust-badge">
                        <i className="bi bi-clock-history"></i>
                        <span>Livraison le jour même</span>
                    </div>
                    <div className="trust-badge">
                        <i className="bi bi-geo-alt"></i>
                        <span>Hauts-de-France</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
