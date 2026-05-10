import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { i: "A. M.", tag: "BtMG", text: "Schnell reagiert, klare Strategie und am Ende Einstellung des Verfahrens." },
  { i: "M. M.", tag: "Verkehrsstrafrecht", text: "Klare Kommunikation, klare Strategie und am Ende ein gutes Ergebnis." },
  { i: "S. M.", tag: "Strafrecht", text: "Ruhig, sachlich und sehr kompetent während des gesamten Verfahrens." },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = reviews[active];

  return (
    <section id="bewertungen" className="bg-cream text-cream-foreground py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column */}
        <div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pb-8 border-b border-border">
            <p className="eyebrow !mb-0">Mandantenstimmen</p>
            <a href="#" className="text-xs tracking-[0.2em] uppercase text-navy hover:opacity-70 transition">
              Zur Bewertungsseite →
            </a>
          </div>

          <div className="mt-12">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-7xl md:text-8xl leading-none">4,9</span>
              <span className="text-sm text-foreground/60">/ 5 Sterne</span>
            </div>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-navy text-navy" />)}
            </div>
            <p className="mt-6 text-sm text-foreground/70">
              aus 444 Bewertungen · anwalt.de & Google
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="eyebrow mb-4">Kanzlei</p>
            <p className="font-serif text-xl">Benjamin C. Wenzel</p>
            <p className="mt-3 text-sm text-foreground/70">Fachanwalt für Strafrecht</p>
            <p className="text-sm text-foreground/70">Kurfürstendamm 216, 10719 Berlin</p>
          </div>
        </div>

        {/* Right column */}
        <div>
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-navy text-navy" />)}
          </div>
          <blockquote className="font-serif italic text-3xl md:text-4xl leading-[1.2] text-foreground">
            „{current.text}"
          </blockquote>
          <div className="mt-10 text-foreground">— {current.i}</div>
          <div className="mt-2 text-sm text-navy">{current.tag}</div>

          <ul className="mt-12 pt-8 border-t border-border">
            {reviews.map((r, i) => {
              const isActive = i === active;
              return (
                <li key={r.i}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center justify-between py-5 border-b border-border text-left transition ${
                      isActive ? "text-navy" : "text-foreground/40 hover:text-foreground/70"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`size-1.5 rounded-full ${isActive ? "bg-navy" : "bg-foreground/30"}`} />
                      <span className="text-sm">{r.i}</span>
                    </span>
                    <span className="text-sm">{r.tag}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-navy hover:opacity-70 transition"
          >
            <span aria-hidden className="h-px w-8 bg-navy" />
            Weitere Bewertungen auf Google →
          </a>
        </div>
      </div>
    </section>
  );
}
