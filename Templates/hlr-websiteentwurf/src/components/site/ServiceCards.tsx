import { Clock, Calendar, Star, Check } from "lucide-react";

const cards = [
  {
    number: "01",
    icon: Clock,
    title: "Immer die aktuellste Technik",
    desc: "Wir setzen bei jedem Projekt auf die neuesten Technologien – für maximale Effizienz und Zukunftssicherheit.",
    badge: "Modernste Standards",
  },
  {
    number: "02",
    icon: Calendar,
    title: "27 Jahre Expertise",
    desc: "Seit 1990 lösen wir Heizungs- und Sanitärprobleme mit Erfahrung, die man nicht kaufen kann – nur erarbeiten.",
    badge: "Seit 1990 im Betrieb",
  },
  {
    number: "03",
    icon: Star,
    title: "Hohe Kundenzufriedenheit",
    desc: "Unsere Kunden empfehlen uns weiter – das spiegelt sich in unseren top Google-Bewertungen wider.",
    badge: "Top-Bewertungen bei Google",
  },
];

export function ServiceCards() {
  return (
    <section id="leistungen" className="relative -mt-20 z-10">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-lg p-6 shadow-card-lg border border-border/50 flex flex-col"
            >
              <div className="mb-4">
                <div className="w-10 h-10 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                  <c.icon size={22} />
                </div>
              </div>
              <h3 className="text-lg font-extrabold leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {c.desc}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand/10 text-brand px-3 py-2 text-sm font-semibold">
                <Check size={16} />
                {c.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
