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
import kreuzbergHero from "@/assets/kreuzberg-hero.jpg";
import cleanerMale from "@/assets/cleaner-male.jpg";
import cleanerFemale from "@/assets/cleaner-female.jpg";
import cleanOffice from "@/assets/clean-office.jpg";

export const Route = createFileRoute("/leistungen/bueroreinigung-kreuzberg")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Kreuzberg | PutzKraft24" },
      {
        name: "description",
        content:
          "Professionelle Büroreinigung in Berlin-Kreuzberg – nachhaltig, zuverlässig und mit festem Stammteam. Jetzt kostenloses Angebot anfordern.",
      },
    ],
  }),
  component: KreuzbergPage,
});

const bullets = [
  "Ihr Top-Partner in Berlin-Kreuzberg",
  "Zuverlässig & gründlich!",
  "100 % persönliche Beratung",
  "1A Preis-Leistungs-Verhältnis!",
  "Sauber oder Geld zurück!",
];

function KreuzbergPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO with Kreuzberg landmark */}
        <section className="relative overflow-hidden">
          <img
            src={kreuzbergHero}
            alt="Büroreinigung Kreuzberg – Blick über Berlin-Kreuzberg"
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
                Büroreinigung Kreuzberg
              </h1>
              <p className="mt-6 text-base text-white/90 md:text-lg">
                Suchen Sie eine zuverlässige Büroreinigung in Berlin-Kreuzberg?
                PutzKraft24 ist Ihr Top-Partner in Berlin-Kreuzberg für gründliche
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

        {/* Section: Nachhaltige Büroreinigung */}
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
                Ökologisch nachhaltige Büroreinigung für die grüne Startup-Szene
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">
                Berlin-Kreuzberg ist das Zentrum der Berliner Startup-Kultur – viele
                Unternehmen legen hier besonderen Wert auf Nachhaltigkeit und
                Umweltbewusstsein. Deshalb bieten wir eine Büroreinigung mit
                ökologischen Reinigungsmitteln und nachhaltigen Konzepten.
              </p>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                Nachhaltige Büroreinigung in Berlin-Kreuzberg umfasst:
              </h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                {[
                  "Umweltfreundliche, biologisch abbaubare Reinigungsmittel",
                  "Ressourcenschonende Reinigungstechniken",
                  "Staubfreie Reinigung für gesunde Luftqualität",
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
                Ihre Experten für Büro- &amp; Gebäudereinigung in Berlin-Kreuzberg
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <VideoSection />

        {/* Section: Kreativagenturen Oranienstraße */}
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
                Büroreinigung für Kreativagenturen rund um die Oranienstraße
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/75">
                Viele Designstudios, Werbeagenturen und IT-Firmen haben ihren Sitz in
                Berlin-Kreuzberg. Kreative Büros erfordern eine passgenaue Reinigung,
                die sich an offene Raumkonzepte anpasst.
              </p>
              <h3 className="mt-8 text-lg font-bold text-foreground">
                Unsere Lösungen für Kreativbüros in Berlin-Kreuzberg:
              </h3>
              <ul className="mt-4 space-y-3 text-foreground/80">
                {[
                  "Reinigung von Großraumbüros mit individueller Arbeitsplatzpflege",
                  "Entfernung von Staub, Schmutz und Fingerabdrücken auf Glasflächen",
                  "Gründliche Bodenreinigung für langlebige Materialien",
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
                Perfekte Reinigungslösungen für Kreativagenturen in Berlin-Kreuzberg
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Challenge />

        <Reviews />

        {/* Services intro for Kreuzberg */}
        <section className="bg-background pt-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Unsere Leistungen für Ihre Büroreinigung
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/75">
              Wir bieten professionelle und individuelle Reinigungslösungen für Büros
              in Berlin-Kreuzberg. Ob im belebten Bergmannkiez oder rund um das
              Wrangelkiez – unser Ziel ist es, Ihnen eine saubere und hygienische
              Arbeitsumgebung zu schaffen, die den Wohlfühlfaktor Ihrer Mitarbeiter
              steigert und einen positiven Eindruck bei Ihren Kunden hinterlässt.
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
            alt="Büroreinigung in Berlin-Kreuzberg — sauberes Büro nach professioneller Reinigung"
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
