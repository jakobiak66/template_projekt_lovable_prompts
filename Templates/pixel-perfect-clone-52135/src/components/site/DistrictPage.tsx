import { Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reviews } from "@/components/site/Reviews";
import { Partners } from "@/components/site/Partners";
import teamBerlin from "@/assets/team-berlin.png";

const bullets = [
  "Ihr Top-Partner für Büroreinigung",
  "Gründlich, professionell und termintreu!",
  "100 % persönliche Beratung!",
  "Kostenloses Angebot!",
  "Sauber oder Geld zurück!",
];

export function DistrictPage({ name }: { name: string }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
              <div className="px-8 py-16 md:px-14 md:py-24">
                <div className="max-w-xl text-white">
                  <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                    Büroreinigung {name}
                  </h1>
                  <p className="mt-5 text-base text-white/85 md:text-lg">
                    Professionelle Büroreinigung in {name} — zuverlässig,
                    gründlich und mit persönlichem Ansprechpartner. PutzKraft24
                    ist Ihr B2B-Spezialist für saubere Büros in {name}.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2.5 text-sm backdrop-blur"
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
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Reinigungsfirma in {name} — was uns auszeichnet
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/75">
              Als spezialisierte Reinigungsfirma für Büros in {name} kennen wir
              die Anforderungen lokaler Unternehmen genau. Von Tech-Startups
              über Kanzleien bis hin zu Beratungsunternehmen — wir betreuen
              Büroflächen jeder Größe in {name} mit festem Stammteam,
              transparenten Reinigungsprotokollen und persönlichem
              Ansprechpartner.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Ob Unterhaltsreinigung, Grundreinigung oder Glasreinigung — wir
              passen den Reinigungsumfang an Ihre Anforderungen in {name} an.
              Sprechen Sie uns für ein unverbindliches Angebot an.
            </p>
          </div>
        </section>

        <Reviews />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
