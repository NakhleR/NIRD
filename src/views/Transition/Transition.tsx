import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Transition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Text fade in
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transition"
      className="relative min-h-[150vh] w-full overflow-hidden"
    >
      {/* Gradient stays in dark empire tones - blends seamlessly into ShooterGame */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              var(--color-empire-bg) 0%,
              var(--color-empire-bg-secondary) 25%,
              var(--color-empire-bg-tertiary) 50%,
              #0f0f18 75%,
              #0a0a0f 100%
            )
          `,
        }}
      />

      {/* Subtle grid fading out */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(to bottom, white 0%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 50%)',
        }}
      />

      {/* Text Content - sticky */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div ref={textRef} className="text-center px-8 max-w-4xl z-10">
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-text-light text-glow-cyan mb-6">
            LA RÉSISTANCE S'ORGANISE
          </h2>
          <p className="font-body text-lg text-text-light/70">
            Un autre numérique est possible...
          </p>
        </div>
      </div>
    </section>
  );
};
