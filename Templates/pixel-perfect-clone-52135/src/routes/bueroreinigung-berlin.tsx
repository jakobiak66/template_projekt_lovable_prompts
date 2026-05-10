import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Leaf, Sparkles, Building2, Wind, Shield, Recycle, Zap } from "lucide-react";
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
import heroPerson from "@/assets/cleaner-vacuum.png";
import teamBerlin from "@/assets/team-berlin.png";
import berlinStreet from "@/assets/berlin-street-hero.jpg";
import greenPlantsBg from "@/assets/green-plants-bg.jpg";
import cleanerWipingTable from "@/assets/cleaner-wiping-table.jpg";

export const Route = createFileRoute("/bueroreinigung-berlin")({
  head: () => ({
    meta: [
      {
        title:
          "Büroreinigung Berlin – Der vollständige Leitfaden | PutzKraft24",
      },
      {
        name: "description",
        content:
          "Professionelle Büroreinigung in Berlin: Unterhalts-, Grund- und Glasreinigung von PutzKraft24. Persönliche Beratung, faire Preise — jetzt Angebot anfordern.",
      },
    ],
  }),
  component: BueroreinigungBerlinPage,
});

const heroBullets = [
  "Top-Partner Berlin",
  "Zuverlässig",
  "Persönliche Beratung",
  "Faires Preis-Leistung",
  "Sauber oder Geld zurück",
];

const sustainabilityPoints = [
  "Wir verwenden umweltfreundliche, biologisch abbaubare Reinigungsmittel",
  "Unsere ressourcenschonenden Verfahren reduzieren Wasser- und Energieverbrauch",
  "Unsere Reinigung verbessert die Luftqualität und sorgt für ein gesundes Arbeitsumfeld",
];

const services = [
  { icon: Sparkles, title: "Unterhaltsreinigung" },
  { icon: Building2, title: "Grundreinigung" },
  { icon: Wind, title: "Sonderreinigung" },
  { icon: Sparkles, title: "Glas- und Fassadenreinigung" },
  { icon: Building2, title: "Büroreinigung", note: "Ab 30 €/Std." },
];

function BueroreinigungBerlinPage() {
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
                backgroundImage: `linear-gradient(90deg, rgba(20,40,35,0.78) 0%, rgba(20,40,35,0.35) 55%, rgba(20,40,35,0.05) 100%), url(${berlinStreet})`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="px-8 py-16 md:px-14 md:py-20 lg:py-24">
                <div className="max-w-xl text-white">
                  <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                    Professionelle Büroreinigung in Berlin — Der vollständige Leitfaden
                  </h1>
                  <p className="mt-5 text-base text-white/85 md:text-lg">
                    Suchen Sie eine professionelle Büroreinigung in Berlin?
                    PutzKraft24 — Ihre Reinigungsfirma für Büro und Gewerbe in
                    Berlin. Persönliche Beratung, faire Preise. Jetzt Angebot
                    anfordern!
                  </p>
                  <ul className="mt-8 space-y-2">
                    {heroBullets.map((b) => (
                      <li
                        key={b}
                        className="flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur md:text-sm"
                      >
                        <Check className="h-3.5 w-3.5 flex-shrink-0 text-orange" />
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

        {/* AGENTUREN / KREATIV */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroPerson}
                alt="PutzKraft24 Mitarbeiterin bei der Büroreinigung in Berlin"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Büroreinigung für Agenturen und Verlage im Kreativ-Hotspot in Berlin
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Viele Medien- und PR-Agenturen haben sich in Berlin angesiedelt.
                Als professionelle Büroreinigung für Kreativbüros sorgt
                PutzKraft24 für ein hygienisches und inspirierendes
                Arbeitsumfeld.
              </p>
              <h3 className="mt-6 font-semibold text-foreground">
                Unsere Leistungen für Medienunternehmen in Berlin:
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                {[
                  "Reinigung von Redaktionsbüros und Besprechungsräumen",
                  "Pflege von Teppichen und Holzböden in Altbau-Büros",
                  "Staubfreie Reinigung für Technik und empfindliche Geräte",
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
                  Ihre Experten für Büro- & Gebäudereinigung
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <VideoSection />

        {/* NACHHALTIGE REINIGUNG */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Nachhaltige Reinigungsdienste für umweltbewusste Unternehmen
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Als professionelle Büroreinigung in Berlin für umweltbewusste Unternehmen setzt PutzKraft24 auf biologisch abbaubare Mittel und wassersparende Verfahren — als spezialisierte Reinigungsfirma für Büro und Gewerbe ohne Mehrkosten.
              </p>
              <h3 className="mt-7 font-bold text-foreground">
                Vorteile unserer Büroreinigung für umweltbewusste Unternehmen in Berlin:
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                {sustainabilityPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint">
                      <Check className="h-3 w-3 text-foreground" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Perfekte Reinigungslösungen für umweltbewusste Unternehmen in Berlin
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={cleanerWipingTable}
                alt="Nachhaltige Büroreinigung in Berlin durch PutzKraft24"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </section>

        {/* ÜBER UNS */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
            <div className="overflow-hidden rounded-2xl bg-background md:order-1">
              <img
                src={teamBerlin}
                alt="PutzKraft24 Reinigungsteam Berlin — professionelle Büroreinigung"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:order-2">
              <p className="text-sm font-medium text-foreground/70">Über uns</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Zuverlässige Reinigungskräfte in Berlin zu finden, ist eine große Herausforderung!
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Mit über 10 Jahren Erfahrung in der Immobilienbranche wissen wir bei
                PutzKraft24 genau, wie wichtig ein vollumfänglicher Service ist. Wir bieten
                Unternehmen in ganz Berlin einen zuverlässigen Reinigungsservice, der nicht
                nur durch höchste Qualität überzeugt, sondern auch durch klare
                Kommunikation und schnelle Problemlösungen.
              </p>

              <div className="mt-6 flex items-start gap-4 rounded-2xl bg-mint p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background">
                  <Shield className="h-5 w-5 text-foreground" strokeWidth={1.8} />
                </div>
                <p className="italic text-foreground/85">
                  "Wir garantieren Ihnen 100% zuverlässige Abläufe und stellen Ihnen die besten Reinigungskräfte aus Berlin zur Verfügung!"
                </p>
              </div>

              <Button
                asChild
                className="mt-7 h-12 rounded-full bg-orange pl-6 pr-2 font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Erfahren Sie mehr über uns
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Reviews />

        {/* LEISTUNGEN LISTE */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Unsere Leistungen für Ihre Büroreinigung
              </h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                Wir bieten professionelle und individuelle Reinigungslösungen für
                Büros in Berlin. Egal ob in den charmanten Altbauten am
                Kollwitzplatz, in der belebten Kastanienallee oder rund um den
                Helmholtzplatz – wir sorgen für eine saubere und hygienische
                Arbeitsumgebung.
              </p>
              <div className="mt-8">
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
            </div>

            <div className="space-y-3">
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

        {/* GREEN / NACHHALTIGKEIT */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15,40,25,0.85) 0%, rgba(15,40,25,0.55) 50%, rgba(15,40,25,0.4) 100%), url(${greenPlantsBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="px-6 py-12 md:px-14 md:py-20 lg:py-24">
                <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                  Ohne Mehrkosten, dafür gut für die Umwelt
                </h2>

                <div className="mt-12 grid gap-5 md:mt-24 md:grid-cols-2 md:ml-auto md:max-w-3xl">
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center">
                      <Zap className="h-7 w-7 text-white" strokeWidth={1.6} />
                    </div>
                    <p className="text-sm leading-relaxed text-white/90">
                      Wir reduzieren CO₂-Emissionen auf ein Minimum und gleichen unvermeidbare Mengen aus. Unser "Green Office" setzt auf papierloses Arbeiten und grüne Energie. Mit umweltfreundlichen Reinigungsmethoden und smarter Tourenplanung gestalten wir unsere Prozesse effizient und nachhaltig.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/15">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center">
                      <Recycle className="h-7 w-7 text-white" strokeWidth={1.6} />
                    </div>
                    <p className="text-sm leading-relaxed text-white/90">
                      Diese Maßnahmen kommen nicht nur der Umwelt zugute, sondern fördern auch ein gesundes Arbeitsumfeld für Ihre Mitarbeiter – ohne zusätzliche Kosten für Sie.
                    </p>
                  </div>
                </div>
              </div>
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
