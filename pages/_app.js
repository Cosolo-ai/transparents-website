import Head from 'next/head';

import '../styles/styles.css';

// 2025-2026 SEO/GEO Optimized Schema.org Structured Data
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CourierService",
    "@id": "https://transparents.city/#business",
    "name": "TransPARENT's",
    "alternateName": "TransPARENTs Coursier Express",
    "description": "Service de coursier et livraison express à Valenciennes, Lille, Cambrai et Hauts-de-France. Livraison urgente de colis le jour même. Votre coursier express de confiance depuis 2024.",
    "slogan": "Votre coursier express de confiance",
    "url": "https://transparents.city",
    "telephone": "+33788478044",
    "email": "transparentsmain@outlook.com",
    "image": [
        "https://transparents.city/logo.png",
        "https://transparents.city/van.jpg",
        "https://transparents.city/scooter.jpg"
    ],
    "logo": "https://transparents.city/logo.png",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Card, Bank Transfer",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Valenciennes",
        "addressLocality": "Valenciennes",
        "addressRegion": "Hauts-de-France",
        "postalCode": "59300",
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
            "name": "Valenciennes",
            "@id": "https://www.wikidata.org/wiki/Q12718"
        },
        {
            "@type": "City",
            "name": "Lille",
            "@id": "https://www.wikidata.org/wiki/Q978"
        },
        {
            "@type": "City",
            "name": "Cambrai",
            "@id": "https://www.wikidata.org/wiki/Q80138"
        },
        {
            "@type": "City",
            "name": "Avesnes-sur-Helpe"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Hauts-de-France"
        }
    ],
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 50.3570,
            "longitude": 3.5235
        },
        "geoRadius": "100000"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "19:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "17:00"
        }
    ],
    "sameAs": [],
    "knowsLanguage": ["fr", "en"],
    "foundingDate": "2024",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de coursier TransPARENT's",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#livraison-urgente",
                    "name": "Livraison urgente de colis",
                    "description": "Livraison express le jour même dans les Hauts-de-France. Prise en charge en 30 minutes.",
                    "provider": { "@id": "https://transparents.city/#business" },
                    "areaServed": { "@type": "AdministrativeArea", "name": "Hauts-de-France" },
                    "serviceType": "Livraison express"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#transport-documents",
                    "name": "Transport de plis et documents",
                    "description": "Transport sécurisé de documents importants, contrats, dossiers juridiques.",
                    "provider": { "@id": "https://transparents.city/#business" },
                    "serviceType": "Coursier documents"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#courses-regionales",
                    "name": "Courses locales et régionales",
                    "description": "Livraisons B2B et B2C dans toute la région Hauts-de-France.",
                    "provider": { "@id": "https://transparents.city/#business" },
                    "serviceType": "Transport régional"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#transport-palettes",
                    "name": "Transport de palettes",
                    "description": "Livraison de palettes et gros volumes pour entreprises et professionnels.",
                    "provider": { "@id": "https://transparents.city/#business" },
                    "serviceType": "Transport palettes"
                }
            }
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12",
        "bestRating": "5",
        "worstRating": "1"
    }
};

// FAQ Schema for GEO (Generative Engine Optimization)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Quels sont les délais de livraison de TransPARENT's ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TransPARENT's propose une livraison le jour même pour toute commande passée avant 14h. La prise en charge se fait en 30 minutes après confirmation. Nous livrons dans toute la région Hauts-de-France : Valenciennes, Lille, Cambrai, Avesnois."
            }
        },
        {
            "@type": "Question",
            "name": "Quelles zones géographiques couvrez-vous ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nous intervenons sur Valenciennes et sa métropole, la métropole lilloise (Lille, Roubaix, Tourcoing), Cambrai et le Cambrésis, l'Avesnois, et l'ensemble de la région Hauts-de-France. Livraisons ponctuelles possibles vers Paris et la Belgique."
            }
        },
        {
            "@type": "Question",
            "name": "Quels types de colis pouvez-vous transporter ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TransPARENT's transporte tous types de colis : plis et documents urgents, colis standard jusqu'à 30kg, colis fragiles avec protection thermique, palettes complètes pour les professionnels. Notre flotte variée (scooter, vélo cargo, utilitaire, camion) s'adapte à vos besoins."
            }
        },
        {
            "@type": "Question",
            "name": "Comment obtenir un devis coursier à Valenciennes ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour un devis gratuit et rapide, appelez le 07 88 47 80 44 ou envoyez un email à transparentsmain@outlook.com. Réponse garantie en moins de 2 minutes pendant nos heures d'ouverture (Lun-Ven 8h-19h, Sam 9h-17h)."
            }
        },
        {
            "@type": "Question",
            "name": "TransPARENT's est-il assuré ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, TransPARENT's est une entreprise 100% assurée. Tous nos transports sont couverts par une assurance professionnelle qui protège vos marchandises pendant tout le trajet."
            }
        }
    ]
};

// BreadcrumbList Schema
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://transparents.city"
        }
    ]
};

// WebSite Schema for Sitelinks Search
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://transparents.city",
    "name": "TransPARENT's - Coursier Express Hauts-de-France",
    "description": "Service de coursier et livraison express à Valenciennes, Lille, Cambrai. Livraison le jour même.",
    "inLanguage": "fr-FR",
    "publisher": { "@id": "https://transparents.city/#business" }
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Canonical URL */}
                <link rel="canonical" href="https://transparents.city" />

                {/* Favicon & Icons */}
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/logo.png" />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

                {/* Primary Meta Tags - GEO Optimized */}
                <title>TransPARENT&apos;s | Coursier Express Valenciennes Lille Cambrai | Livraison Jour Même</title>
                <meta name="title" content="TransPARENT's | Coursier Express Valenciennes Lille Cambrai | Livraison Jour Même" />
                <meta name="description" content="🚚 Coursier express à Valenciennes, Lille, Cambrai. Livraison urgente de colis le jour même. ✅ 100% assuré ⚡ Devis en 2 min ☎️ 07 88 47 80 44. TransPARENT's, votre coursier de confiance dans les Hauts-de-France." />
                <meta name="keywords" content="coursier Valenciennes, livraison express Lille, transport colis Cambrai, coursier Hauts-de-France, livraison urgente Nord, coursier professionnel 59, livraison jour même, coursier Avesnois, transport express régional, devis coursier gratuit" />
                <meta name="author" content="TransPARENT's" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="language" content="French" />
                <meta name="revisit-after" content="7 days" />

                {/* GEO Meta Tags - Enhanced for Local SEO */}
                <meta name="geo.region" content="FR-HDF" />
                <meta name="geo.placename" content="Valenciennes, Nord, France" />
                <meta name="geo.position" content="50.3570;3.5235" />
                <meta name="ICBM" content="50.3570, 3.5235" />
                <meta name="DC.title" content="TransPARENT's - Coursier Express Valenciennes" />

                {/* Open Graph / Facebook - Enhanced */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://transparents.city" />
                <meta property="og:title" content="TransPARENT's | Coursier Express Valenciennes Lille Cambrai" />
                <meta property="og:description" content="Livraison urgente de colis le jour même à Valenciennes, Lille, Cambrai. Service rapide, fiable et 100% assuré. Devis gratuit en 2 minutes." />
                <meta property="og:image" content="https://transparents.city/van.jpg" />
                <meta property="og:image:alt" content="Véhicule TransPARENT's - Coursier Express" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="TransPARENT's" />

                {/* Twitter Card */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://transparents.city" />
                <meta property="twitter:title" content="TransPARENT's | Coursier Express Valenciennes Lille Cambrai" />
                <meta property="twitter:description" content="Livraison urgente de colis le jour même. Service rapide, fiable et 100% assuré. ☎️ 07 88 47 80 44" />
                <meta property="twitter:image" content="https://transparents.city/van.jpg" />

                {/* Mobile Optimization */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="theme-color" content="#00d9ff" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                {/* Schema.org Structured Data - Multiple Types for GEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
