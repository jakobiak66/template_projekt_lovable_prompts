import { Star, Check, ArrowUpRight } from "lucide-react";

const reviews = [
  { i: "A. R.", text: "Super BtM-Anwalt in Berlin. Bin sehr zufrieden!" },
  { i: "T. F.", text: "Tolle Vertretung im Ermittlungsverfahren und eine rasche Einstellung." },
  { i: "S. B.", text: "Meinen Führerschein habe ich noch und ein Bußgeld gab es auch nicht. Bei Verkehrsfrage…" },
  { i: "L. H.", text: "Korrekte Beratung – keine Überraschungen. Das war gut!" },
];

export function Awards() {
  return (
    <section className="bg-navy text-navy-foreground py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
        {/* Left */}
        <div>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.0]">
            Ausgezeichnet<br />
            <span className="italic text-gold">auf anwalt.de</span>
          </h2>

          <div className="mt-10 pt-10 border-t border-white/15 max-w-xl">
            <p className="text-base leading-relaxed text-navy-foreground/80">
              Mandanten bewerten Herrn Wenzel auf anwalt.de — einem der größten deutschen
              Anwaltsportale. Die Bewertungen werden unabhängig verifiziert und können nicht manipuliert werden.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Verifizierte Bewertungen", "Fachanwalt für Strafrecht", "Berlin · Kurfürstendamm"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-navy-foreground/85"
              >
                <Check className="size-4 text-gold" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="rounded-full border border-white/40 px-7 py-3.5 text-sm text-navy-foreground hover:bg-white/10 transition">
              Bewertung abgeben
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm text-navy-foreground/85 hover:bg-white/10 transition">
              Auf anwalt.de ansehen
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          {/* Gold header */}
          <div className="bg-gold text-navy flex items-center justify-between px-6 py-5">
            <span className="text-xs tracking-[0.25em] uppercase font-medium">anwalt.de</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-navy text-navy" />)}
            </div>
          </div>

          {/* Score */}
          <div className="px-6 py-6 flex items-center gap-6 border-b border-white/10">
            <span className="font-serif text-5xl">4,9</span>
            <div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}
              </div>
              <p className="text-xs text-navy-foreground/70">aus 236 Bewertungen · verifiziert</p>
            </div>
          </div>

          {/* Reviews */}
          <ul className="divide-y divide-white/10">
            {reviews.map((r) => (
              <li key={r.i} className="px-6 py-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="size-8 rounded-full bg-navy-foreground/10 grid place-items-center text-xs">
                      A
                    </span>
                    <span className="text-sm">{r.i}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-gold text-gold" />)}
                  </div>
                </div>
                <p className="text-sm text-navy-foreground/75 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>

          {/* Footer button */}
          <a
            href="#"
            className="block text-center px-6 py-5 border-t border-white/10 text-xs tracking-[0.25em] uppercase text-gold hover:bg-white/5 transition"
          >
            Bewertung abgeben
          </a>
        </div>
      </div>
    </section>
  );
}
