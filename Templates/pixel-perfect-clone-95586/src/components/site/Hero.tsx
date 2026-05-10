import heroImg from "@/assets/hero-lawyer.jpg";

export function Hero() {
  return (
    <section className="relative bg-navy text-navy-foreground overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_1fr] min-h-screen">
        <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 pt-32 pb-16 lg:pt-40">
          <p className="eyebrow mb-8 text-navy-foreground/70">Strafverteidigung</p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.02]">
            Fachanwalt für<br />
            <span className="italic text-blue-accent">Strafrecht in Berlin</span>
          </h1>

          <div className="mt-10 max-w-md">
            <p className="text-sm text-navy-foreground/70 pb-3 border-b border-white/15">
              Kurfürstendamm 216
            </p>
            <p className="mt-6 text-base leading-relaxed text-navy-foreground/85">
              Als Fachanwalt für Strafrecht vertrete ich ausschließlich Ihre Interessen —
              konsequent, strategisch und mit über 15 Jahren Erfahrung in Berliner Strafverfahren.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+4930120593430"
              className="inline-flex items-center rounded-full bg-cream text-navy px-7 py-3.5 text-sm font-medium hover:bg-white transition"
            >
              Jetzt beraten lassen
            </a>
            <a
              href="#bewertungen"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm hover:bg-white/10 transition"
            >
              Bewertungen
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl border-t border-white/10 pt-8">
            <Stat n="15+" l="Jahre Erfahrung" />
            <Stat n="444" l="Bewertungen" />
            <Stat n="4,9★" l="Sterne Schnitt" />
            <Stat n="Berlin" l="Kurfürstendamm 216" serif />
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src={heroImg}
            alt="Benjamin C. Wenzel — Fachanwalt für Strafrecht Berlin"
            className="absolute inset-0 w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent lg:from-navy/80" />
          <div className="absolute bottom-6 right-6 text-right text-xs text-navy-foreground/80">
            <div className="flex items-center gap-2 justify-end">
              <span className="h-px w-6 bg-white/40" />
              <span className="tracking-[0.2em] uppercase">Benjamin C. Wenzel</span>
            </div>
            <p className="mt-1 italic font-serif text-sm">
              Fachanwalt für Strafrecht · Kurfürstendamm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l, serif }: { n: string; l: string; serif?: boolean }) {
  return (
    <div>
      <div className={serif ? "font-serif text-2xl" : "font-serif text-2xl"}>{n}</div>
      <div className="text-xs text-navy-foreground/60 mt-1">{l}</div>
    </div>
  );
}
