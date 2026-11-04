import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger safely on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE_EDITORIAL = 'power3.out';
export const EASE_EXPO = 'expo.out';
export const DURATION_REVEAL = 0.9;
export const STAGGER_STANDARD = 0.08;

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Smoothly scrolls to an anchor target using Lenis instance if available
 */
export const scrollToAnchor = (targetId: string, lenisInstance?: any) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: -40,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
