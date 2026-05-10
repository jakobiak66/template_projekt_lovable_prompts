import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Leaf, Sparkles, Building2, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { LogoBar } from "@/components/site/LogoBar";
import { VideoSection } from "@/components/site/VideoSection";
import { Reviews } from "@/components/site/Reviews";
import { Promise as PromiseSection } from "@/components/site/Promise";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";
import heroPerson from "@/assets/hero-person.png";
import teamBerlin from "@/assets/team-berlin.png";

export const Route = createFileRoute("/leistungen/unterhaltsreinigung")({
  head: () => ({
    meta: [
      {
        title:
          "Unterhaltsreinigung Berlin – Regelmäßige Büroreinigung | PutzKraft24",
      },
      {
        name: "description",
        content:
          "Professionelle Unterhaltsreinigung in Berlin: regelmäßige Büroreinigung mit festem Stammteam, faire Preise und persönliche Beratung. Jetzt Angebot anfordern!",
      },
    ],
  }),
  component: UnterhaltsreinigungPage,
});

const heroBullets = [
  "Festes Stammteam für Ihr Büro",
  "Flexible Reinigungsintervalle",
  "100 % persönliche Beratung",
  "1A Preis-Leistungs-Verhältnis",
  "Sauber oder Geld zurück",
];

const sustainabilityPoints = [
  "Wir verwenden umweltfreundliche, biologisch abbaubare Reinigungsmittel",
  "Unsere ressourcenschonenden Verfahren reduzieren Wasser- und Energieverbrauch",
  "Unsere Reinigung verbessert die Luftqualität und sorgt für ein gesundes Arbeitsumfeld",
];

const services = [
  { icon: Sparkles, title: "Unterhaltsreinigung", note: "Ab 30 €/Std." },
  { icon: Building2, title: "Grundreinigung" },
  { icon: Wind, title: "Sonderreinigung" },
  { icon: Sparkles, title: "Glas- und Fassadenreinigung" },
  { icon: Building2, title: "Büroreinigung" },
];

function UnterhaltsreinigungPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-background pt-6">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(20,40,35,0.88) 0%, rgba(20,40,35,0.45) 55%, rgba(20,40,35,0) 75%), url(${teamBerlin})`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="px-8 py-16 md:px-14 md:py-20 lg:py-24">
                <div className="max-w-xl text-white">
                  <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                    Unterhaltsreinigung Berlin — Zuverlässig, regelmäßig, professionell
                  </h1>
                  <p className="mt-5 text-base text-white/85 md:text-lg">
                    Suchen Sie eine zuverlässige Unterhaltsreinigung in Berlin?
                    PutzKraft24 übernimmt die regelmäßige Reinigung Ihrer
                    Büroflächen — 2 bis 5 Mal pro Woche, mit festem Stammteam
                    und persönlichem Ansprechpartner.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {heroBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur"
                      >
                        <Check className="h-4 w-4 flex-shrink-0 text-orange" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
                  >
                    <Link to="/kontakt">
                      Kostenloses Angebot erhalten!
                      <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoBar />

        {/* WAS UMFASST UNTERHALTSREINIGUNG */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroPerson}
                alt="PutzKraft24 Mitarbeiterin bei der Unterhaltsreinigung in Berlin"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Was umfasst unsere Unterhaltsreinigung in Berlin?
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Unsere Unterhaltsreinigung sorgt für dauerhaft saubere und
                hygienische Büroräume. Wir kümmern uns regelmäßig um alle
                Bereiche Ihres Büros — von Arbeitsplätzen über Sanitäranlagen
                bis hin zu Küchen und Gemeinschaftsräumen.
              </p>
              <h3 className="mt-6 font-semibold text-foreground">
                Unsere Leistungen im Überblick:
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {[
                  "Reinigung von Böden, Oberflächen und Arbeitsplätzen",
                  "Hygienische Reinigung von Sanitäranlagen und Küchen",
                  "Leerung von Papierkörben und Mülltrennung",
                  "Pflege von Empfangsbereichen und Besprechungsräumen",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                    {t}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-7 h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Ihre Experten für Unterhaltsreinigung
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <VideoSection />

        {/* NACHHALTIGKEIT */}
        <section className="bg-mint py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm">
                <Leaf className="h-6 w-6 text-foreground" strokeWidth={1.8} />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
                Nachhaltige Unterhaltsreinigung für umweltbewusste Unternehmen
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                Auch bei der regelmäßigen Unterhaltsreinigung setzt PutzKraft24
                auf biologisch abbaubare Mittel und wassersparende Verfahren —
                ohne Mehrkosten für Sie.
              </p>
              <h3 className="mt-6 font-semibold text-foreground">
                Vorteile unserer nachhaltigen Reinigung:
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {sustainabilityPoints.map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                    {t}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-7 h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Perfekte Reinigungslösungen anfragen
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl bg-background">
              <img
                src={teamBerlin}
                alt="PutzKraft24 Reinigungsteam Berlin — Unterhaltsreinigung"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <Reviews />

        {/* LEISTUNGEN LISTE */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Unsere weiteren Leistungen
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-foreground/75 leading-relaxed">
              Neben der Unterhaltsreinigung bieten wir Ihnen das komplette
              Leistungsspektrum einer professionellen Reinigungsfirma für Berlin.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                className="h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Jetzt Angebot anfordern
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="mt-10 space-y-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-mint p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background">
                      <s.icon className="h-5 w-5 text-foreground" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                  </div>
                  {s.note && (
                    <span className="text-sm font-semibold text-orange">{s.note}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <PromiseSection />
        <FAQ />
        <CTASection />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
