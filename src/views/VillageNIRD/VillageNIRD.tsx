import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VillageNIRD = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax scroll effect on background image
      gsap.fromTo(
        bgRef.current,
        { y: 0 },
        {
          y: -200,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
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
      id="village-nird"
      className="relative min-h-[200vh] w-full overflow-hidden"
    >
      {/* Parallax background image */}
      <img
        ref={bgRef}
        src="/images/greencity.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-auto min-h-[130%] object-cover object-top"
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content - sticky while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h2 className="font-display text-[clamp(2rem,8vw,6rem)] text-text-light text-glow-green mb-6">
            LE VILLAGE NIRD
          </h2>
          <p className="font-body text-lg md:text-xl text-text-light/90 leading-relaxed mb-8 drop-shadow-lg">
            Numérique Inclusif, Responsable et Durable. Un écosystème où la technologie sert l'humain et la planète.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-green/30">
              <h3 className="font-display text-2xl text-village-leaf mb-2">Inclusif</h3>
              <p className="font-body text-sm text-text-light/80">Accessible à tous, sans discrimination</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sky/30">
              <h3 className="font-display text-2xl text-village-sky mb-2">Responsable</h3>
              <p className="font-body text-sm text-text-light/80">Éthique et respectueux des données</p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sun/30">
              <h3 className="font-display text-2xl text-village-sun mb-2">Durable</h3>
              <p className="font-body text-sm text-text-light/80">Sobre et éco-conçu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
