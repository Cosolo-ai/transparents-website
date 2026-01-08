import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for fade-in-up animation on scroll
 */
export const useFadeInUp = (delay = 0) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 60
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [delay]);

    return ref;
};

/**
 * Hook for staggered children animation
 */
export const useStaggerChildren = (stagger = 0.1, delay = 0) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const children = ref.current.children;
        if (!children.length) return;

        gsap.fromTo(
            children,
            {
                opacity: 0,
                y: 40,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay,
                stagger,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [stagger, delay]);

    return ref;
};

/**
 * Hook for hero text reveal animation
 */
export const useHeroReveal = () => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const tl = gsap.timeline();

        tl.fromTo(
            ref.current.querySelector('.hero-heading'),
            { opacity: 0, y: 80, clipPath: 'inset(100% 0% 0% 0%)' },
            {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                ease: 'power4.out'
            }
        )
            .fromTo(
                ref.current.querySelector('.hero-subtitle'),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(
                ref.current.querySelector('.hero-subheading'),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.3'
            )
            .fromTo(
                ref.current.querySelectorAll('.button'),
                { opacity: 0, y: 20, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'back.out(1.4)'
                },
                '-=0.2'
            );

        return () => {
            tl.kill();
        };
    }, []);

    return ref;
};

/**
 * Hook for counter animation
 */
export const useCountUp = (endValue, duration = 2) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { innerText: 0 },
            {
                innerText: endValue,
                duration,
                ease: 'power2.out',
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }, [endValue, duration]);

    return ref;
};

/**
 * Hook for glowing pulse effect
 */
export const useGlowPulse = () => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, []);

    return ref;
};
