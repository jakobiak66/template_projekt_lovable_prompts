import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const steps = [
  { n: "1", title: "Kostenloser Büro-Check", text: "Wir kommen zu Ihnen und schauen uns Ihre Räume an — 15 Minuten, ohne Verpflichtung." },
  { n: "2", title: "Individuelles Angebot", text: "Basierend auf Ihren Quadratmetern und Anforderungen erhalten Sie ein unverbindliches Angebot für Ihre Büroreinigung. Transparent, ohne versteckte Kosten." },
  { n: "3", title: "Start in 48 Stunden", text: "Nach Ihrer Zusage beginnen wir innerhalb von 48 Stunden mit der Reinigung." },
  { n: "4", title: "Laufende Betreuung", text: "Ihr persönlicher Objektleiter ist Ihr fester Ansprechpartner für die regelmäßige Gebäudereinigung in Berlin. Digitale Reinigungsprotokolle sorgen für volle Transparenz. Mit unserer 4-Wochen-Zufriedenheitsgarantie gehen Sie kein Risiko ein." },
];

export function Steps() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          In 4 Schritten zu Ihrer Büroreinigung in Berlin
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Vom ersten Kontakt bis zur laufenden Betreuung — so einfach geht's
        </p>

        <div className="relative mt-14">
          {/* Verbindungslinie zwischen den Schritten */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border md:block"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s) => {
              const isActive = active === s.n;
              return (
                <div key={s.n} className="relative text-center">
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? null : s.n)}
                    aria-pressed={isActive}
                    className={`relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-orange text-primary-foreground"
                        : "bg-foreground text-background hover:bg-orange hover:text-primary-foreground"
                    }`}
                  >
                    {s.n}
                  </button>
                  <h3 className="mt-5 text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-orange hover:bg-orange-hover text-primary-foreground rounded-md px-7 h-12 font-semibold">
            <Link to="/kontakt">Jetzt kostenlosen Büro-Check vereinbaren</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
