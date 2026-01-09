import * as React from 'react';
import { useFadeInUp, useStaggerChildren } from '../utils/animations';

export const ZonesSection = (props) => {
    const headingRef = useFadeInUp(0);
    const listRef = useStaggerChildren(0.1, 0.2);

    const zones = [
        { name: 'Valenciennes & Valenciennois', primary: true },
        { name: 'Lille & métropole lilloise', primary: true },
        { name: 'Cambrai & Cambrésis', primary: false },
        { name: 'Avesnes-sur-Helpe & Avesnois', primary: false },
        { name: 'Hauts-de-France', primary: false }
    ];

    return (
        <div className="zones outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="zones-container inner">
                <h2 className="section-heading" data-sb-field-path=".heading" ref={headingRef}>
                    Zones de livraison coursier : Valenciennes, Lille, Cambrai, Hauts-de-France
                </h2>
                <p className="zones-intro">Nous intervenons rapidement sur :</p>
                <div className="zones-list" ref={listRef}>
                    {zones.map((zone, idx) => (
                        <div className={`zone-item ${zone.primary ? 'zone-primary' : ''}`} key={idx}>
                            <span className="zone-pin glow-icon-small">
                                <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            <span className="zone-name">{zone.name}</span>
                        </div>
                    ))}
                </div>
                <p className="zones-footer">Autres destinations sur demande.</p>
            </div>
        </div>
    );
};
