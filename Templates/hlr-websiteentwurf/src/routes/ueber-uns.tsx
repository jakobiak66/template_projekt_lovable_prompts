import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import teamPhoto from "@/assets/team-hlr.png";
import heroBg from "@/assets/erkner-see-hero.jpg";

export const Route = createFileRoute("/ueber-uns")({
  component: UeberUnsPage,
  head: () => ({
    meta: [
      { title: "Über uns – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Seit 1999 Ihr Fachbetrieb für Heizung und Sanitär in Erkner. Erfahrenes Team, geprüfte Qualität und persönliche Beratung.",
      },
      { property: "og:title", content: "Über uns – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content:
          "Seit 1999 Ihr Fachbetrieb für Heizung und Sanitär in Erkner – mit Erfahrung, Fachkompetenz und einem starken Team.",
      },
    ],
  }),
});

function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Über uns"
          backgroundImage={heroBg}
          backgroundAlt="Ruhiger See bei Erkner im Morgennebel"
          overlayOpacity={55}
        />

        <section className="pt-16 md:pt-24 pb-8 md:pb-10 bg-background">
          <div className="container-page">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div className="rounded-md overflow-hidden shadow-card-lg md:sticky md:top-24">
                <img
                  src={teamPhoto}
                  alt="Das Team der H-L-R Heizung und Sanitär GmbH"
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                  Unser Betrieb
                </p>
                <h2 className="mt-3 text-ink">
                  H-L-R Heizung und<br />Sanitär GmbH
                </h2>
                <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Die H-L-R Heizung und Sanitär GmbH wurde im Mai 1999 in
                    Erkner gegründet und steht seit vielen Jahren für Leistung
                    und Qualität im Bereich Haustechnik. Mit über 25 Jahren
                    Erfahrung wissen wir, worauf es ankommt, und setzen Ihre
                    Projekte fachgerecht und terminsicher um.
                  </p>
                  <p>
                    Mit den sich wandelnden Anforderungen, insbesondere im
                    Bereich Umwelttechnik, haben wir unser Leistungsspektrum
                    kontinuierlich erweitert. So können wir Ihnen heute moderne
                    und zeitgemäße Lösungen rund um Heizung und Sanitär
                    anbieten.
                  </p>
                  <p>
                    Ob Modernisierung, Neubau oder Wartung, wir begleiten Sie
                    von Anfang an mit einer persönlichen Beratung und
                    entwickeln gemeinsam mit Ihnen eine Lösung, die zu Ihren
                    Anforderungen passt. Dabei achten wir auf langlebige
                    Technik und eine saubere, sorgfältige Ausführung.
                  </p>
                  <p>
                    Durch regelmäßige Schulungen bleiben unsere Mitarbeiter
                    immer auf dem aktuellen Stand.
                  </p>
                  <p>
                    Bei uns erhalten Sie alle Leistungen aus einer Hand. Von
                    der Planung über die Installation bis hin zur Wartung
                    kümmern wir uns um jedes Detail. So haben Sie einen festen
                    Ansprechpartner und können sich auf eine zuverlässige
                    Umsetzung verlassen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8 md:gap-10">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  25+
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Jahre Erfahrung
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Seit 1999 zuverlässig im Einsatz für Heizung und Sanitär.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  100%
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Fachkompetenz
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Geschulte Mitarbeiter mit regelmäßiger Weiterbildung.
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-brand">
                  A–Z
                </p>
                <h3 className="mt-2 font-extrabold text-base text-ink">
                  Alles aus einer Hand
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Beratung, Planung, Installation und Wartung – komplett bei uns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
