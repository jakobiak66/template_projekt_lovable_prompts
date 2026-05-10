import { Star } from "lucide-react";

const stats = [
  { v: "1", l: "Meisterbetrieb" },
  { v: "10", l: "Mitarbeiter" },
  { v: "24h", l: "Reaktionszeit" },
  { v: "86+", l: "Glückliche Kunden" },
];

const reviews = [
  {
    name: "Markus S.",
    text: "Super schnell, freundlich und fair. Heizung war am gleichen Tag wieder fit. Klare Empfehlung!",
  },
  {
    name: "Julia P.",
    text: "Endlich ein Handwerksbetrieb, der Termine einhält und transparent abrechnet. Top Beratung.",
  },
  {
    name: "Andreas W.",
    text: "Komplettes Bad saniert — vom Angebot bis zur Übergabe alles digital und perfekt organisiert.",
  },
];

export const Stats = () => {
  return (
    <section className="relative bg-surface-soft py-20">
      <div className="absolute inset-0 hex-pattern opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">In Zahlen</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">
            Dein digitaler Handwerksbetrieb
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.l} className="bg-card rounded-2xl p-8 text-center shadow-soft border border-border">
              <div className="text-4xl sm:text-5xl font-extrabold text-primary-dark">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-5 py-2 shadow-soft">
            <span className="font-bold text-primary-dark">Google</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4,9 / 5</span>
            <span className="text-muted-foreground text-sm">· 142 Bewertungen</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">{r.name}</div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
