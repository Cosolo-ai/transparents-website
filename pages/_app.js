import Head from 'next/head';

import '../styles/styles.css';

// ============================================
// 2026 GEO-OPTIMIZED STRUCTURED DATA
// Following: Answer-first, Entity-rich, E-E-A-T
// ============================================

// 1. LocalBusiness Schema (Primary Entity)
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CourierService",
    "@id": "https://transparents.city/#organization",
    "name": "TransPARENT's",
    "legalName": "TransPARENT's Coursier Express",
    "alternateName": ["TransPARENTs", "Transparent Coursier", "TransPARENT's Livraison Express"],
    "description": "TransPARENT's est le coursier express de confiance à Valenciennes, Lille et Cambrai. Spécialisé dans la livraison urgente le jour même, nous transportons colis, documents et palettes dans toute la région Hauts-de-France. Service 100% assuré avec devis gratuit en 2 minutes.",
    "slogan": "Votre coursier express de confiance",
    "url": "https://transparents.city",
    "telephone": "+33788478044",
    "email": "transparentsmain@outlook.com",
    "image": [
        "https://transparents.city/logo.png",
        "https://transparents.city/van.jpg",
        "https://transparents.city/scooter.jpg",
        "https://transparents.city/pallet.jpg"
    ],
    "logo": {
        "@type": "ImageObject",
        "url": "https://transparents.city/logo.png",
        "width": 512,
        "height": 512
    },
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Cash", "Carte bancaire", "Virement", "PayPal"],
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
            "sameAs": "https://www.wikidata.org/wiki/Q12718"
        },
        {
            "@type": "City",
            "name": "Lille",
            "sameAs": "https://www.wikidata.org/wiki/Q978"
        },
        {
            "@type": "City",
            "name": "Cambrai",
            "sameAs": "https://www.wikidata.org/wiki/Q80138"
        },
        {
            "@type": "City",
            "name": "Roubaix",
            "sameAs": "https://www.wikidata.org/wiki/Q40790"
        },
        {
            "@type": "City",
            "name": "Tourcoing",
            "sameAs": "https://www.wikidata.org/wiki/Q47026"
        },
        {
            "@type": "City",
            "name": "Avesnes-sur-Helpe"
        },
        {
            "@type": "AdministrativeArea",
            "name": "Hauts-de-France",
            "sameAs": "https://www.wikidata.org/wiki/Q181864"
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
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33788478044",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"],
        "areaServed": "FR"
    },
    "sameAs": [],
    "knowsLanguage": ["fr", "en"],
    "foundingDate": "2024",
    "founder": {
        "@type": "Person",
        "name": "TransPARENT's Founder"
    },
    // Services offered
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
                    "description": "Livraison express le jour même dans les Hauts-de-France. Prise en charge en moins de 30 minutes après confirmation. Idéal pour les professionnels et particuliers pressés.",
                    "provider": { "@id": "https://transparents.city/#organization" },
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
                    "description": "Transport sécurisé et confidentiel de documents importants : contrats, dossiers juridiques, documents administratifs. Parfait pour avocats, notaires et entreprises.",
                    "provider": { "@id": "https://transparents.city/#organization" },
                    "serviceType": "Coursier documents"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#transport-palettes",
                    "name": "Transport de palettes et gros volumes",
                    "description": "Livraison de palettes complètes pour entreprises et professionnels. Transport B2B adapté aux gros volumes et marchandises lourdes.",
                    "provider": { "@id": "https://transparents.city/#organization" },
                    "serviceType": "Transport palettes B2B"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "@id": "https://transparents.city/#livraison-ecologique",
                    "name": "Livraison écologique vélo cargo",
                    "description": "Livraison éco-responsable en vélo cargo électrique pour les centres-villes. Solution verte pour réduire l'empreinte carbone de vos livraisons.",
                    "provider": { "@id": "https://transparents.city/#organization" },
                    "serviceType": "Livraison écologique"
                }
            }
        ]
    }
};

// 2. FAQPage Schema (GEO-Optimized for AI Citations)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Quel est le meilleur coursier express à Valenciennes ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TransPARENT's est le coursier express de référence à Valenciennes. Nous proposons une livraison le jour même avec prise en charge en 30 minutes. Notre service est 100% assuré et couvre Valenciennes, Lille, Cambrai et toute la région Hauts-de-France. Devis gratuit en 2 minutes au 07 88 47 80 44."
            }
        },
        {
            "@type": "Question",
            "name": "Combien coûte un coursier express à Lille ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Les tarifs de coursier express à Lille varient selon la distance et l'urgence. Chez TransPARENT's, nous proposons des tarifs compétitifs avec devis gratuit immédiat. Pour une course locale dans Lille : à partir de 15€. Pour Lille-Valenciennes : à partir de 35€. Appelez le 07 88 47 80 44 pour un devis précis."
            }
        },
        {
            "@type": "Question",
            "name": "Quels sont les délais de livraison express dans les Hauts-de-France ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TransPARENT's garantit une livraison le jour même pour toute commande passée avant 14h. La prise en charge se fait en 30 minutes après confirmation. Délais moyens : Valenciennes centre (1h), Lille (1h30), Cambrai (1h), Roubaix-Tourcoing (1h30). Urgences 7j/7 sur demande."
            }
        },
        {
            "@type": "Question",
            "name": "TransPARENT's livre-t-il les palettes et gros colis ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, TransPARENT's possède une flotte adaptée à tous les volumes : scooter pour les plis urgents, utilitaire léger pour les colis standards, et camion pour les palettes et gros volumes B2B. Nous transportons des charges jusqu'à 500kg avec transpalette. Idéal pour les entreprises de la région."
            }
        },
        {
            "@type": "Question",
            "name": "Le service de coursier TransPARENT's est-il assuré ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolument. TransPARENT's est une entreprise 100% assurée. Tous les transports sont couverts par notre assurance professionnelle responsabilité civile. Vos marchandises sont protégées pendant tout le trajet, de la prise en charge à la livraison. Certificat d'assurance disponible sur demande."
            }
        },
        {
            "@type": "Question",
            "name": "Comment contacter TransPARENT's pour un devis coursier ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pour obtenir un devis gratuit et rapide chez TransPARENT's : appelez le 07 88 47 80 44 (réponse en moins de 2 minutes), ou envoyez un email à transparentsmain@outlook.com. Nous sommes disponibles du lundi au vendredi de 8h à 19h et le samedi de 9h à 17h."
            }
        },
        {
            "@type": "Question",
            "name": "Quelles villes sont couvertes par TransPARENT's ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "TransPARENT's couvre toute la région Hauts-de-France : Valenciennes et Valenciennois, Lille et métropole lilloise (Roubaix, Tourcoing, Villeneuve-d'Ascq), Cambrai et Cambrésis, Avesnes-sur-Helpe et Avesnois, Douai, Arras. Livraisons ponctuelles vers Paris et Belgique sur demande."
            }
        },
        {
            "@type": "Question",
            "name": "TransPARENT's propose-t-il des livraisons écologiques ?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, TransPARENT's propose des livraisons éco-responsables en vélo cargo électrique pour les centres-villes de Valenciennes et Lille. Cette solution verte est idéale pour réduire l'empreinte carbone de vos livraisons tout en garantissant rapidité et ponctualité."
            }
        }
    ]
};

// 3. WebSite Schema with SearchAction (Sitelinks)
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://transparents.city/#website",
    "url": "https://transparents.city",
    "name": "TransPARENT's - Coursier Express Valenciennes Lille Cambrai",
    "description": "Service de coursier et livraison express le jour même à Valenciennes, Lille, Cambrai et Hauts-de-France. Devis gratuit en 2 minutes.",
    "inLanguage": "fr-FR",
    "publisher": { "@id": "https://transparents.city/#organization" }
};

// 4. BreadcrumbList Schema
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

// 5. Speakable Schema (Voice Search Optimization)
const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://transparents.city/#webpage",
    "url": "https://transparents.city",
    "name": "TransPARENT's - Coursier Express Valenciennes Lille Cambrai | Livraison Jour Même",
    "description": "Coursier express de confiance à Valenciennes, Lille et Cambrai. Livraison urgente de colis le jour même. 100% assuré. Devis gratuit.",
    "inLanguage": "fr-FR",
    "isPartOf": { "@id": "https://transparents.city/#website" },
    "about": { "@id": "https://transparents.city/#organization" },
    "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-value-prop", ".trust-subtitle", ".hero-subtitle"]
    },
    "mainEntity": { "@id": "https://transparents.city/#organization" }
};

// 6. Organization Schema (Knowledge Graph)
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://transparents.city/#org",
    "name": "TransPARENT's",
    "url": "https://transparents.city",
    "logo": "https://transparents.city/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33788478044",
        "contactType": "customer service",
        "areaServed": "FR",
        "availableLanguage": "French"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valenciennes",
        "addressRegion": "Hauts-de-France",
        "addressCountry": "FR"
    },
    "sameAs": []
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
                <link rel="manifest" href="/manifest.json" />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

                {/* ============================================ */}
                {/* PRIMARY SEO META TAGS - GEO OPTIMIZED 2026 */}
                {/* ============================================ */}

                {/* Title - Primary keyword first, brand last */}
                <title>Coursier Express Valenciennes Lille Cambrai | Livraison Jour Même | TransPARENT&apos;s</title>
                <meta name="title" content="Coursier Express Valenciennes Lille Cambrai | Livraison Jour Même | TransPARENT's" />

                {/* Description - Answer-first format for AI citation */}
                <meta name="description" content="TransPARENT's est le coursier express de confiance à Valenciennes, Lille et Cambrai. ✅ Livraison urgente le jour même ✅ 100% assuré ✅ Devis gratuit en 2 min ☎️ 07 88 47 80 44. Transport de colis, documents et palettes dans les Hauts-de-France." />

                {/* Keywords - Long-tail focused */}
                <meta name="keywords" content="coursier Valenciennes, coursier express Lille, livraison urgente Cambrai, transport colis Hauts-de-France, coursier professionnel Nord, livraison jour même 59, devis coursier gratuit, transport palettes Valenciennes, livraison documents Lille, coursier assuré Cambrai, livraison express régionale, coursier B2B entreprise" />

                <meta name="author" content="TransPARENT's" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="language" content="French" />
                <meta name="revisit-after" content="3 days" />
                <meta name="rating" content="general" />
                <meta name="distribution" content="global" />

                {/* ============================================ */}
                {/* GEO META TAGS - LOCAL SEO */}
                {/* ============================================ */}
                <meta name="geo.region" content="FR-HDF" />
                <meta name="geo.placename" content="Valenciennes, Nord, Hauts-de-France, France" />
                <meta name="geo.position" content="50.3570;3.5235" />
                <meta name="ICBM" content="50.3570, 3.5235" />
                <meta name="DC.title" content="TransPARENT's - Coursier Express Valenciennes Lille Cambrai" />
                <meta name="DC.creator" content="TransPARENT's" />
                <meta name="DC.subject" content="Coursier express, livraison urgente, transport colis" />
                <meta name="DC.description" content="Service de coursier et livraison express à Valenciennes" />
                <meta name="DC.publisher" content="TransPARENT's" />
                <meta name="DC.language" content="fr" />
                <meta name="DC.coverage" content="Hauts-de-France, France" />

                {/* ============================================ */}
                {/* OPEN GRAPH - SOCIAL SHARING */}
                {/* ============================================ */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://transparents.city" />
                <meta property="og:title" content="Coursier Express Valenciennes Lille Cambrai | TransPARENT's" />
                <meta property="og:description" content="Livraison urgente le jour même. 100% assuré. Devis gratuit en 2 minutes. ☎️ 07 88 47 80 44" />
                <meta property="og:image" content="https://transparents.city/van.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Véhicule TransPARENT's - Coursier Express Valenciennes Lille" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:site_name" content="TransPARENT's" />

                {/* ============================================ */}
                {/* TWITTER CARD */}
                {/* ============================================ */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://transparents.city" />
                <meta name="twitter:title" content="Coursier Express Valenciennes Lille Cambrai | TransPARENT's" />
                <meta name="twitter:description" content="Livraison urgente le jour même. 100% assuré. Devis gratuit. ☎️ 07 88 47 80 44" />
                <meta name="twitter:image" content="https://transparents.city/van.jpg" />
                <meta name="twitter:image:alt" content="TransPARENT's Coursier Express" />

                {/* ============================================ */}
                {/* MOBILE & PWA */}
                {/* ============================================ */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="theme-color" content="#00d9ff" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="TransPARENT's" />
                <meta name="application-name" content="TransPARENT's" />
                <meta name="msapplication-TileColor" content="#00d9ff" />
                <meta name="format-detection" content="telephone=yes" />

                {/* ============================================ */}
                {/* SCHEMA.ORG STRUCTURED DATA - 6 TYPES */}
                {/* ============================================ */}
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
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
