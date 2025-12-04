import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollbarColor = () => {
  useEffect(() => {
    // Set CSS custom property for scrollbar color based on scroll position
    const updateScrollbarColor = () => {
      const villageSection = document.getElementById('village-nird');
      const transitionSection = document.getElementById('transition');

      if (!villageSection || !transitionSection) return;

      // Create ScrollTrigger for transition to village (change to blue)
      ScrollTrigger.create({
        trigger: transitionSection,
        start: 'center center',
        end: 'bottom top',
        onEnter: () => {
          document.documentElement.style.setProperty('--scrollbar-color', '#298fba');
          document.documentElement.style.setProperty('--scrollbar-track', '#1a2a3a');
        },
        onLeaveBack: () => {
          document.documentElement.style.setProperty('--scrollbar-color', '#ff2d2d');
          document.documentElement.style.setProperty('--scrollbar-track', '#0a0a0f');
        },
      });
    };

    // Initial color (Empire red)
    document.documentElement.style.setProperty('--scrollbar-color', '#ff2d2d');
    document.documentElement.style.setProperty('--scrollbar-track', '#0a0a0f');

    // Wait for DOM to be ready
    const timer = setTimeout(updateScrollbarColor, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};
