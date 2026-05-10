import { Star, ChevronRight } from "lucide-react";

type T = { name: string; text: string; avatar?: string; role?: string };

const items: T[] = [
  {
    name: "Anna W.",
    text: "„Beide Aufträge wurden schnell und zuverlässig ausgeführt. Unkomplizierte Kommunikation und kompetente Beratung – können wir ruhigen Gewissens weiterempfehlen.\"",
  },
  {
    name: "Michael Bohmeier",
    text: "„Preis-Leistung einfach Top! Alle Mitarbeiter pünktlich und sehr freundlich, bei Änderungswünschen schnell und flexibel. Absolute Empfehlung.\"",
  },
  {
    name: "Sascha Knapp",
    text: "„Mit handwerklicher Fachkompetenz und Zuverlässigkeit wurde die Modernisierung von Bad und Küche durchgeführt. Rundum ein perfekter Service.\"",
  },
];

function Card({ t }: { t: T }) {
  return (
    <div className="bg-card rounded-lg p-5 shadow-card border border-border/60 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-ink">{t.name}</div>
          <div className="mt-1 flex gap-0.5 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-current" />
            ))}
          </div>
        </div>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
          alt="Google"
          className="w-5 h-5 mt-1"
        />
      </div>
      <p className="mt-3 text-sm text-foreground leading-relaxed">{t.text}</p>
      <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
          alt="Google"
          className="w-4 h-4"
        />
        Google Rezension
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="pt-20 md:pt-24 pb-10 md:pb-12">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <span className="badge-pill mb-5">Bewertungen</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Das sagen unsere zufriedenen Kundinnen und Kunden
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            Unsere Kundinnen und Kunden schätzen vor allem unsere
            Schnelligkeit, Transparenz und den freundlichen Service.
            Überzeugen Sie sich selbst von unserer Arbeit.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {items.map((t) => (
            <Card key={t.name} t={t} />
          ))}
          <a
            href="https://www.google.com/search?q=H-L-R+Heizung+und+Sanit%C3%A4r+GmbH+Erkner+Bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-lg p-5 shadow-card flex flex-col justify-between group transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                  alt="Google"
                  className="w-6 h-6 bg-white rounded-full p-0.5"
                />
                <span className="text-sm font-semibold">Google</span>
              </div>
              <p className="mt-4 text-lg font-extrabold leading-snug">
                Weitere Bewertungen auf Google ansehen
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">
              Zu den Rezensionen <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
