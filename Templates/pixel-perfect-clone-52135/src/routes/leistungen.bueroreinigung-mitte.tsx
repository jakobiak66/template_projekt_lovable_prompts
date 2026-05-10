import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LogoBar } from "@/components/site/LogoBar";
import { Challenge } from "@/components/site/Challenge";
import { VideoSection } from "@/components/site/VideoSection";
import { Reviews } from "@/components/site/Reviews";
import { Promise as PromiseSection } from "@/components/site/Promise";
import { Services } from "@/components/site/Services";
import { Districts } from "@/components/site/Districts";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Partners } from "@/components/site/Partners";
import mitteHero from "@/assets/mitte-hero.jpg";
import cleanerMale from "@/assets/cleaner-male.jpg";
import cleanerFemale from "@/assets/cleaner-female.jpg";
import cleanOffice from "@/assets/clean-office.jpg";

export const Route = createFileRoute("/leistungen/bueroreinigung-mitte")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Mitte | PutzKraft24" },
      {
        name: "description",
        content:
          "Professionelle Büroreinigung in Berlin-Mitte – zentral, zuverlässig und mit festem Stammteam. Jetzt kostenloses Angebot anfordern.",
      },
    ],
  }),
  component: MittePage,
});

const bullets = [
  "Ihr Top-Partner in Berlin-Mitte",
  "Zuverlässig & gründlich!",
  "100 % persönliche Beratung!",
  "Büro-Check vereinbaren",
  "Sauber oder Geld zurück!",
];

function MittePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO with Mitte landmark */}
        <section className="relative overflow-hidden">
          <img
            src={mitteHero}
            alt="Büroreinigung Mitte – Moderne Bürogebäude in Berlin-Mitte"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-full md:w-2/5"
            style={{
              backdropFilter: "blur(3px)",
              WebkitBackdropFilter: "blur(3px)",
              maskImage: "linear-gradient(to right, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 50%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
                Büroreinigung Mitte
              </h1>
              <p className="mt-6 text-base text-white/90 md:text-lg">
                Suchen Sie eine zuverlässige Büroreinigung in Berlin-Mitte?
                PutzKraft24 ist Ihr Top-Partner in Berlin-Mitte für gründliche
                Reinigung, persönliche Beratung und faire Preise. Jetzt Büro-Check anfragen!
              </p>
              <ul className="mt-8 flex flex-col items-start gap-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex w-fit items-center gap-3 rounded-full bg-white/10 px-4 py-2.5 text-sm backdrop-blur"
                  >
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#c5e6e0" }}
                    >
                      <Check className="h-4 w-4" style={{ color: "#1f4d3f" }} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 h-14 rounded-full bg-orange pl-7 pr-2 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Kostenloses Angebot erhalten!
                  <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <LogoBar />

        {/* Section: Zentrale Büroreinigung */}
        <section className="bg-background py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <img
              src={cleanerMale}
              alt="PutzKraft24 Mitarbeiter bei der professionellen Büroreinigung Berlin"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-2xl object-cover shadow-md"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Zentrale Büroreinigung für Unternehmen im Herzen Berlins
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">
                Berlin-Mitte ist das pulsierende Wirtschaftszentrum der Stadt – von
                Startups über Agenturen bis hin zu Finanz- und Beratungsunternehmen.
                Ein sauberes Büro steigert die Produktivität und das Wohlbefinden der
                Mitarbeiter. Unser erfahrenes Reinigungsteam sorgt für hygienische
                Sauberkeit und gepflegte Arbeitsplätze.
              </p>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                Unsere Services für Büros in Berlin-Mitte:
              </h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                {[
                  "Tägliche, wöchentliche oder bedarfsgerechte Reinigung",
                  "Spezielle Hygienekonzepte für offene Bürostrukturen",
                  "Umweltfreundliche Reinigungsmittel für nachhaltige Unternehmen",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange" strokeWidth={3} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-orange hover:underline"
              >
                Ihre Experten für Büro- &amp; Gebäudereinigung in Berlin-Mitte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <VideoSection />

        {/* Section: Coworking Alexanderplatz */}
        <section className="bg-background py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="md:order-2">
              <img
                src={cleanerFemale}
                alt="PutzKraft24 Reinigungsfachkraft bei der Arbeit in einem Berliner Büro"
                loading="lazy"
                width={1280}
                height={1280}
                className="rounded-2xl object-cover shadow-md"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Spezialreinigung für moderne Coworking-Spaces am Alexanderplatz
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">
                Coworking-Spaces in Berlin-Mitte sind hochfrequentierte Arbeitsbereiche
                mit wechselnden Nutzern. Hier sind flexible Reinigungspläne und
                spezielle Hygiene-Konzepte gefragt. Wir bieten eine gründliche
                Reinigung für gemeinsam genutzte Arbeitsplätze, Meetingräume und
                Gemeinschaftsflächen.
              </p>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                Besondere Leistungen für Coworking-Spaces in Berlin-Mitte:
              </h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                {[
                  "Reinigung von Shared Desks und Konferenzräumen",
                  "Sanierung von Küchen- und Pausenbereichen",
                  "Desinfektion von Türgriffen und Oberflächen zur Vermeidung von Keimen",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-orange" strokeWidth={3} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-orange hover:underline"
              >
                Perfekte Reinigungslösungen für Coworking-Spaces in Berlin-Mitte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Challenge />

        <Reviews />

        {/* Services intro for Mitte */}
        <section className="bg-background pt-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Unsere Leistungen für Ihre Büroreinigung
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/75">
              Wir bieten professionelle und individuelle Reinigungslösungen für Büros
              im Herzen von Berlin-Mitte. Egal ob in den belebten Straßen rund um den
              Potsdamer Platz, in den historischen Vierteln des Scheunenviertels oder
              in der Nähe des Brandenburger Tors – wir sorgen für eine saubere und
              hygienische Arbeitsumgebung, die einen positiven Eindruck bei
              Mitarbeitern und Kunden hinterlässt.
            </p>
            <Button
              asChild
              className="mt-8 h-14 rounded-full bg-orange pl-7 pr-2 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
            >
              <Link to="/kontakt">
                Jetzt Büro-Check vereinbaren
                <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </Link>
            </Button>
          </div>
          <img
            src={cleanOffice}
            alt="Büroreinigung in Berlin-Mitte — sauberes Büro nach professioneller Reinigung"
            loading="lazy"
            width={1280}
            height={960}
            className="mx-auto mt-12 max-w-6xl rounded-2xl px-4 md:px-6"
          />
        </section>

        <Services />

        <PromiseSection />

        <FAQ />

        <Districts />

        <CTASection />

        <Partners />
      </main>
      <Footer />
    </div>
  );
}
