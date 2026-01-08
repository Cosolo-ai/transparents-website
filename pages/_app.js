import Head from 'next/head';

import '../styles/styles.css';

// Schema.org Structured Data for Local SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://transparents.city",
    "name": "TransPARENT's - Coursier & Colis Express",
    "description": "Service de coursier et livraison express à Valenciennes, Lille, Cambrai et Hauts-de-France. Livraison urgente de colis le jour même.",
    "url": "https://transparents.city",
    "telephone": "+33788478044",
    "email": "transparentsmain@outlook.com",
    "image": "https://transparents.city/logo.png",
    "priceRange": "€€",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valenciennes",
        "addressRegion": "Hauts-de-France",
        "addressCountry": "FR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.3570,
        "longitude": 3.5235
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Valenciennes"
        },
        {
            "@type": "City",
            "name": "Lille"
        },
        {
            "@type": "City",
            "name": "Cambrai"
        },
        {
            "@type": "City",
            "name": "Avesnes-sur-Helpe"
        }
    ],
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
    },
    "sameAs": [],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de coursier",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Livraison urgente de colis",
                    "description": "Livraison express le jour même"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Transport de plis et documents",
                    "description": "Transport sécurisé de documents importants"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Courses locales et régionales",
                    "description": "Livraisons dans les Hauts-de-France"
                }
            }
        ]
    }
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

                {/* SEO Meta Tags */}
                <meta name="description" content="TransPARENT's - Coursier et livraison express à Valenciennes, Lille, Cambrai, Avesnois. Livraison urgente de colis le jour même. Service rapide, fiable et transparent." />
                <meta name="keywords" content="coursier Valenciennes, livraison express Lille, transport colis Cambrai, coursier Hauts-de-France, livraison urgente, colis express, coursier professionnel" />
                <meta name="author" content="TransPARENT's" />
                <meta name="robots" content="index, follow" />

                {/* GEO Meta Tags */}
                <meta name="geo.region" content="FR-HDF" />
                <meta name="geo.placename" content="Valenciennes" />
                <meta name="geo.position" content="50.3570;3.5235" />
                <meta name="ICBM" content="50.3570, 3.5235" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="TransPARENT's - Coursier & Colis Express" />
                <meta property="og:description" content="Livraison urgente de colis le jour même à Valenciennes, Lille, Cambrai, Avesnois. Service rapide et transparent." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />

                {/* Mobile Optimization */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0a0a0a" />

                {/* Schema.org Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
