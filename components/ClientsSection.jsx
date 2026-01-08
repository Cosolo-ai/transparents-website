import * as React from 'react';
import { useFadeInUp, useStaggerChildren } from '../utils/animations';

export const ClientsSection = (props) => {
    const headingRef = useFadeInUp(0);
    const gridRef = useStaggerChildren(0.1, 0.2);

    const clients = [
        { icon: 'bi-building', name: 'Entreprises' },
        { icon: 'bi-tools', name: 'Artisans' },
        { icon: 'bi-shop', name: 'Commerçants' },
        { icon: 'bi-bank', name: 'Administrations' },
        { icon: 'bi-person', name: 'Particuliers' }
    ];

    return (
        <div className="clients outer" data-sb-field-path={props['data-sb-field-path']}>
            <div className="clients-container inner">
                <h2 className="section-heading" data-sb-field-path=".heading" ref={headingRef}>
                    {props.heading || 'Professionnels & particuliers'}
                </h2>
                <p className="clients-intro">Nous accompagnons :</p>
                <div className="clients-grid" ref={gridRef}>
                    {clients.map((client, idx) => (
                        <div className="client-item" key={idx}>
                            <span className="client-icon glow-icon-large">
                                <i className={`bi ${client.icon}`}></i>
                            </span>
                            <span className="client-name">{client.name}</span>
                        </div>
                    ))}
                </div>
                <p className="clients-footer">Pour des besoins urgents, ponctuels ou réguliers.</p>
            </div>
        </div>
    );
};
