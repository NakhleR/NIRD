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

      <div ref={contentRef} className="relative z-10 text-center px-8 max-w-6xl py-12">
        <h2 className="font-display text-[clamp(2rem,8vw,6rem)] text-empire-red text-glow-red mb-6">
          L'EMPIRE NUMÉRIQUE
        </h2>
        <p className="font-body text-lg md:text-xl text-text-muted-light leading-relaxed mb-4">
          Un monde dominé par les géants GAFAM — Google, Amazon, Meta, Microsoft, Apple.
          Des entreprises mondiales qui imposent leurs règles : obsolescence programmée,
          trafic de données, perte de liberté et de souveraineté.
        </p>
        <p className="font-body text-base text-text-muted-light/80 leading-relaxed mb-8 max-w-4xl mx-auto">
          La fin des mises à jour de Windows 10 et les problèmes de compatibilité de Windows 11
          contraignent des tas d'entreprises et de collectivités à mettre une partie de leur parc
          informatique au rebut. Windows est encore installé sur les 3/4 des ordinateurs dans le monde.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Obsolescence Programmée</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              La fin du support de Windows 10 rend artificiellement obsolètes plus de 400 millions
              d'ordinateurs dans le monde. On croit qu'un ordinateur est "mort" parce qu'il devient lent —
              en réalité, c'est le système qui devient trop lourd, pas la machine qui est cassée.
            </p>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Dépendance Technologique</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              "On a fini par penser que ces logiciels étaient des biens communs, mais en réalité non.
              Il y a bien des intérêts capitalistiques, géopolitiques et si nous n'y prenons pas garde,
              l'Europe peut sortir de l'Histoire." — Sénateur Simon Uzenat
            </p>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Impact Environnemental</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              75% de l'empreinte environnementale du numérique provient de la seule fabrication des appareils.
              Chaque machine jetée inutilement aggrave la crise écologique. L'allongement de la durée de vie
              des terminaux est un axe majeur de travail.
            </p>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Coûts Imposés</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              La vente liée et le poids des habitudes rendent difficiles les migrations.
              Microsoft impose des changements coûteux : en 2002, passer à Windows 2000
              coûtait déjà 8 millions d'euros à la Gendarmerie Nationale.
            </p>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Perte de Souveraineté</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              L'argent public investi profite à des acteurs privés étrangers plutôt qu'aux solutions
              françaises et européennes. Les décideurs ne décident plus : un acteur externe impose
              des changements pas forcément bienvenus.
            </p>
          </div>
          <div className="p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-empire-red/30">
            <h3 className="font-display text-xl text-empire-red mb-3">Fracture Numérique</h3>
            <p className="font-body text-sm text-text-muted-light leading-relaxed">
              Le renouvellement forcé du matériel creuse les inégalités. Les familles qui n'ont pas
              les moyens d'acheter du matériel neuf sont laissées pour compte, alors que leurs
              ordinateurs fonctionnent encore parfaitement.
            </p>
          </div>
        </div>

        <p className="font-body text-base text-text-muted-light/70 leading-relaxed mt-8 max-w-3xl mx-auto italic">
          "Il est question d'obsolescence programmée, de trafic de données, de problème de sécurité,
          de perte de liberté et de souveraineté." — Ville de Grenoble
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
