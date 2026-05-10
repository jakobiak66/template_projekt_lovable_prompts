import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LeistungCta } from "@/components/site/LeistungCta";
import { ExternalLink } from "lucide-react";
import heizungstechnikHero from "@/assets/heizungstechnik-hero.png";
import heizungstechnik1 from "@/assets/heizungstechnik-fussbodenheizung.png";
import heizungstechnik2 from "@/assets/heizungstechnik-2.png";
import heizungstechnik3 from "@/assets/heizungstechnik-3.png";
import heizungstechnik4 from "@/assets/heizungstechnik-waermepumpe.png";

export const Route = createFileRoute("/leistungen/heizungstechnik")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Heizungstechnik – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Energiesparende Wohlfühlräume durch moderne Heizungstechnik – Neuinstallation, Modernisierung, Wärmepumpen, Brennwerttechnik und Wartung. Partner von Brötje.",
      },
      { property: "og:title", content: "Heizungstechnik – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content: "Energiesparende Wohlfühlräume – Heizungstechnik vom Fachbetrieb HLR.",
      },
    ],
  }),
});

const leistungen = [
  "Neuinstallation und Modernisierung",
  "Etagen- und Zentralheizung",
  "Fußboden- und Wandflächenheizung",
  "Einbau von Wärmepumpen",
  "Gas- und Öl-Brennwerttechnik",
  "Lüftungsanlagen",
  "Wartung und Reparatur",
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero / Intro */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-page grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <div>
              <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
                Leistung
              </span>
              <h1 className="text-ink">Heizungstechnik</h1>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-brand">
                Energiesparende Wohlfühlräume.
              </p>

              <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
                <p>
                  Mit unserem Fachwissen unterstützen wir Sie dabei, Ihre Wohnräume
                  zu energiesparenden Wohlfühlräumen zu machen.
                </p>
                <p>
                  Unser besonderes Augenmerk liegt auf energiesparenden,
                  umweltbewussten und komfortabel zu bedienenden Installationen.
                </p>
                <p>
                  Vorzugsweise installieren wir Heiztechnik unseres langjährigen
                  Partners Brötje.
                </p>
              </div>

              {/* Brötje Partner-Hinweis */}
              <p className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-ink">Partner:</span>{" "}
                <a
                  href="https://www.broetje.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brand font-semibold inline-flex items-center gap-1"
                >
                  broetje.de <ExternalLink size={14} />
                </a>
              </p>
            </div>

            {/* Hauptbild */}
            <div className="relative w-full h-full min-h-[360px] md:min-h-[480px] rounded-lg overflow-hidden border border-border bg-card shadow-card">
              <img
                src={heizungstechnikHero}
                alt="Mitarbeiter der H-L-R Heizung und Sanitär GmbH bei der Wartung einer Gastherme"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Leistungen + Bildergalerie */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-4">Unsere Leistungen im Überblick</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Von der Planung bis zur Wartung – wir sorgen für zuverlässige Wärme in Ihrem Zuhause.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ob Neuinstallation oder Modernisierung einer bestehenden Anlage – wir realisieren Etagen- und Zentralheizungen ebenso wie Fußboden- und Wandflächenheizungen. Beim Einbau von Wärmepumpen sowie Gas- und Öl-Brennwerttechnik setzen wir auf bewährte Technologie und sorgfältige Ausführung. Ergänzend planen und installieren wir Lüftungsanlagen und stehen Ihnen auch nach der Inbetriebnahme mit Wartung und Reparatur zuverlässig zur Seite.
              </p>
            </div>

            {/* Bildergalerie – Platzhalter */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card shadow-card">
                <img
                  src={heizungstechnik1}
                  alt="HLR-Mitarbeiter bei der Verlegung einer Fußbodenheizung"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card shadow-card">
                <img
                  src={heizungstechnik3}
                  alt="Moderner Heizungsraum mit Brennwertkesseln und Pufferspeicher, installiert von HLR"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card shadow-card">
                <img
                  src={heizungstechnik2}
                  alt="Moderner Heizungsraum mit Brennwertgeräten, Verteilern und Pufferspeicher, installiert von HLR"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-border bg-card shadow-card">
                <img
                  src={heizungstechnik4}
                  alt="HLR-Mitarbeiter bei der Installation einer Wärmepumpe vor einem Wohnhaus"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <LeistungCta
          headline="Zeit für moderne Heiztechnik?"
          subline="Kostenlose Beratung zu Wärmepumpe, Brennwert & Co. – persönlich vor Ort in Erkner."
        />
        
      </main>
      <Footer />
    </div>
  );
}
