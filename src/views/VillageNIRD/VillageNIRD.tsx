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
      style={{ backgroundColor: '#298fba' }}
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
      <div className="sticky top-0 min-h-screen flex items-center justify-center py-12">
        <div className="relative z-10 text-center px-8 max-w-6xl">
          <h2 className="font-display text-[clamp(2rem,8vw,6rem)] text-text-light text-glow-green mb-6">
            LE VILLAGE NIRD
          </h2>
          <p className="font-body text-lg md:text-xl text-text-light/90 leading-relaxed mb-4 drop-shadow-lg">
            Pour un Numérique Inclusif, Responsable et Durable dans les établissements scolaires.
            Au carrefour de la transformation numérique et de la transition écologique.
          </p>
          <p className="font-body text-base text-text-light/80 leading-relaxed mb-8 drop-shadow-lg max-w-4xl mx-auto">
            Un collectif enseignant issu de la forge des communs numériques éducatifs invite les établissements
            scolaires et les collectivités à s'engager progressivement vers un numérique libre et écocitoyen,
            en adoptant Linux — un système léger qui permet à un ordinateur de 10 ou 12 ans de fonctionner
            aussi vite qu'au premier jour.
          </p>

          {/* Les 3 piliers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-green/30">
              <h3 className="font-display text-2xl text-village-leaf mb-3">Inclusif</h3>
              <p className="font-body text-sm text-text-light/80 leading-relaxed">
                Accès équitable au numérique, réduction de la fracture numérique. Les ordinateurs
                reconditionnés sont redistribués aux écoles voisines et aux familles dans le besoin.
                Chaque élève peut contribuer selon ses talents.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sky/30">
              <h3 className="font-display text-2xl text-village-sky mb-3">Responsable</h3>
              <p className="font-body text-sm text-text-light/80 leading-relaxed">
                Usage raisonné et réflexif de technologies souveraines, respectueuses des données
                personnelles. Les élèves développent leur esprit critique et comprennent l'importance
                de l'effacement sécurisé des données.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sun/30">
              <h3 className="font-display text-2xl text-village-sun mb-3">Durable</h3>
              <p className="font-body text-sm text-text-light/80 leading-relaxed">
                Lutte contre l'obsolescence programmée par le choix de Linux. Chaque machine sauvée
                est un déchet en moins. Le décret du 12 avril 2023 fixe 50% de biens orientés
                vers le réemploi en 2025.
              </p>
            </div>
          </div>

          {/* Les 3 jalons */}
          <h3 className="font-display text-2xl text-text-light mt-10 mb-6 drop-shadow-lg">
            La démarche en 3 jalons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-black/40 backdrop-blur-sm rounded-lg border border-village-leaf/30">
              <h4 className="font-display text-lg text-village-leaf mb-2">1. Mobilisation</h4>
              <p className="font-body text-xs text-text-light/80 leading-relaxed">
                Un enseignant volontaire devient contact NIRD, sensibilise l'équipe éducative
                et se met en réseau via Tchap avec d'autres établissements engagés.
              </p>
            </div>
            <div className="p-5 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sky/30">
              <h4 className="font-display text-lg text-village-sky mb-2">2. Expérimentation</h4>
              <p className="font-body text-xs text-text-light/80 leading-relaxed">
                Installation de postes Linux neufs ou reconditionnés. Création d'un club informatique
                où les élèves participent au reconditionnement. PrimTux pour le primaire, Linux NIRD
                pour le secondaire.
              </p>
            </div>
            <div className="p-5 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sun/30">
              <h4 className="font-display text-lg text-village-sun mb-2">3. Intégration</h4>
              <p className="font-body text-xs text-text-light/80 leading-relaxed">
                Inscription dans le projet d'établissement, coopération structurée avec la collectivité,
                le coordinateur devient référent NIRD reconnu auprès de la direction et du ministère.
              </p>
            </div>
          </div>

          {/* Reconditionnement et succès */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-leaf/30">
              <h3 className="font-display text-xl text-village-leaf mb-3">Le Reconditionnement par les élèves</h3>
              <p className="font-body text-sm text-text-light/80 leading-relaxed">
                Démontage, diagnostic, réparation et installation de Linux. Les élèves apprennent
                en faisant, développent leur autonomie et voient concrètement que leurs actions
                ont un effet positif pour la planète. Une expérience éducative, écologique et solidaire.
              </p>
            </div>
            <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-village-sky/30">
              <h3 className="font-display text-xl text-village-sky mb-3">Ceux qui montrent l'exemple</h3>
              <p className="font-body text-sm text-text-light/80 leading-relaxed">
                La Gendarmerie : 100 000 postes, 97% sous Linux depuis 2002. Échirolles : 2M€ économisés.
                Lyon, Grenoble, Strasbourg, Blois, Angoulême, Les Abymes... De plus en plus de collectivités
                s'orientent vers les logiciels libres.
              </p>
            </div>
          </div>

          {/* Soutien officiel */}
          <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-text-light/20">
            <h3 className="font-display text-lg text-text-light mb-3">Soutenu par l'institution</h3>
            <p className="font-body text-xs text-text-light/70 leading-relaxed">
              Programme NSI (Eduscol), Stratégie numérique 2023-2027 (MEN), Doctrine technique du numérique,
              Guide transition écologique (Eduscol), Recommandations ADEME, Loi AGEC, Commission européenne,
              UNESCO... La démarche NIRD est parfaitement alignée avec les documents officiels.
            </p>
          </div>

          <p className="font-body text-base text-text-light/70 leading-relaxed mt-8 drop-shadow-lg max-w-3xl mx-auto italic">
            "Le choix du logiciel libre n'est pas fou. On n'est pas perdus, tout fonctionne de manière
            très similaire et mon travail est exactement le même qu'auparavant." — Témoignage Échirolles
          </p>
        </div>
      </div>
    </section>
  );
};
