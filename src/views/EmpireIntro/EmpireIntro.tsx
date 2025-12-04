import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const EmpireIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in content as user scrolls into section
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="empire-intro"
      className="relative min-h-screen w-full bg-empire-bg flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 45, 45, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 45, 45, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div ref={contentRef} className="relative z-10 text-center px-8 max-w-4xl">
        <h2 className="font-display text-[clamp(2rem,8vw,6rem)] text-empire-red text-glow-red mb-6">
          L'EMPIRE NUMÉRIQUE
        </h2>
        <p className="font-body text-lg md:text-xl text-text-muted-light leading-relaxed">
          Un monde dominé par les géants du numérique. Surveillance, addiction, obsolescence programmée...
        </p>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, var(--color-empire-bg) 100%)',
        }}
      />
    </section>
  );
};
