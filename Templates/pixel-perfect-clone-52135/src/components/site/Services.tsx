import { ArrowRight, Brush, SprayCan, AppWindow, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Brush,
    title: "Unterhaltsreinigung",
    text: "Regelmäßige Unterhaltsreinigung in Berlin nach Ihrem Zeitplan — 2 bis 5 Mal pro Woche. Wir kümmern uns um Böden, Oberflächen, Sanitäranlagen und Küchenbereiche Ihrer Büroflächen. Zuverlässig, mit festem Reinigungsteam und persönlichem Ansprechpartner.",
    cta: "Mehr erfahren",
  },
  {
    icon: SprayCan,
    title: "Grundreinigung",
    text: "Professionelle Grundreinigung in Berlin für den frischen Start — ideal nach einem Umzug, Mieterwechsel oder als Basis für die laufende Unterhaltsreinigung. Wir reinigen Ihre Büroflächen intensiv von Grund auf, damit Sie sauber durchstarten.",
    cta: "Mehr erfahren",
  },
  {
    icon: AppWindow,
    title: "Glasreinigung",
    text: "Professionelle Glasreinigung in Berlin für Ihr Büro — Fenster, Glastrennwände und Fassaden, streifenfrei und termingerecht. Ob einmalig oder als regelmäßiger Reinigungsservice: Wir sorgen für klare Sicht in Ihren Büroräumen.",
    cta: "Mehr erfahren",
  },
  {
    icon: Sparkles,
    title: "Sonderreinigung",
    text: "Teppichreinigung, Polsterreinigung oder spezielle Anforderungen — als erfahrene Reinigungsfirma in Berlin finden wir die passende Lösung für Ihr Büro. Sprechen Sie uns an, und wir erstellen Ihnen ein unverbindliches Angebot.",
    cta: "Anfrage stellen",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Unsere Leistungen im Überblick
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            const target =
              s.cta === "Mehr erfahren" ? "/bueroreinigung-berlin" : "/kontakt";
            return (
              <Link
                key={s.title}
                to={target}
                className="flex gap-5 rounded-2xl bg-mint p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background shadow-sm">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {s.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-orange">
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
