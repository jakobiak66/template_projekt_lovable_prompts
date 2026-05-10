import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import teamBerlin from "@/assets/team-berlin.png";

export function Challenge() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
        {/* Left: Über uns content */}
        <div className="md:order-1">
          <p className="text-sm font-medium text-muted-foreground">Über uns</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
            Zuverlässige Reinigungskräfte in Berlin zu finden, ist eine große Herausforderung!
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-foreground/80 md:text-[15px]">
            PutzKraft24 ist eine auf B2B-Büroreinigung spezialisierte Reinigungsfirma in Berlin — gegründet 2023 aus der Überzeugung, dass Unternehmen einen Reinigungspartner verdienen, auf den sie sich verlassen können. Aus langjähriger Erfahrung in der Berliner Immobilienbranche wissen wir, wie frustrierend unzuverlässige Dienstleister sind — und haben PutzKraft24 als Antwort darauf aufgebaut. Heute betreuen wir mit einem Team aus 10 Reinigungskräften und einem festen Objektleiter über 35 Büroflächen in ganz Berlin — von Tech-Startups über Kanzleien bis zu Beratungsunternehmen. Unser Ansatz: professionelle Gebäudereinigung in Berlin mit persönlichem Ansprechpartner, klarer Kommunikation und einem Vertretungssystem, das funktioniert.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-mint p-5">
            <ShieldCheck className="mt-1 h-7 w-7 flex-shrink-0 text-foreground" />
            <p className="italic text-foreground">
              "Wir garantieren Ihnen 100% zuverlässige Abläufe und stellen Ihnen die besten Reinigungskräfte aus Berlin zur Verfügung!"
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-orange hover:bg-orange-hover text-primary-foreground rounded-full pl-7 pr-2 h-14 text-base font-semibold"
          >
            <Link to="/about">
              Erfahren Sie mehr über uns
              <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                <ChevronRight className="h-5 w-5" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Right: Team-Foto vor Berlin-Skyline-Silhouette */}
        <div className="relative aspect-square w-full md:order-2">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1587330979470-3016b6702d89?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: "85% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center 60%",
              opacity: 0.18,
              filter: "saturate(0.4) hue-rotate(80deg)",
            }}
          />
          <div className="absolute left-4 top-8 z-20 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 shadow-md">
            <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-[#d00]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Berlin.svg/240px-Coat_of_arms_of_Berlin.svg.png"
                alt="Wappen von Berlin"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </span>
            <span className="pr-2 text-sm font-semibold text-foreground">Berlin</span>
          </div>
          <img
            src={teamBerlin}
            alt="PutzKraft24 Reinigungsteam in Berlin"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative z-10 h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
