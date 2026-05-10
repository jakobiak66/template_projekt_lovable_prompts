import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPlumber from "@/assets/hero-plumber.jpg";
import heroWorker from "@/assets/hero-worker.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-10 py-12 lg:py-20 items-center">
        {/* Left content card */}
        <div className="bg-background rounded-2xl shadow-card p-7 sm:p-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary-dark mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Meisterbetrieb seit 2008
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary-dark">
            Dein Team für <span className="text-primary">Sanitär und Heizung</span> in Berlin & Frankfurt (Oder)
          </h1>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Schnelle Termine, transparente Preise und Handwerk, das hält. Wir kümmern uns vom Notfall bis zur kompletten Sanierung — digital geplant, persönlich ausgeführt.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-5">
            {[
              { k: "24h", v: "Reaktionszeit" },
              { k: "86+", v: "Kunden" },
              { k: "5★", v: "Bewertungen" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-border bg-surface-soft px-3 py-4 text-center">
                <div className="text-2xl font-extrabold text-primary-dark">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                <CheckCircle2 className="h-5 w-5" /> Kostenloses Angebot
              </a>
            </Button>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-primary-dark">Google · 4,9</span>
            </div>
          </div>
        </div>

        {/* Right images */}
        <div className="relative grid grid-cols-2 gap-4 h-[420px] sm:h-[520px]">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img src={heroPlumber} alt="Sanitär- und Heizungstechniker bei der Arbeit" className="h-full w-full object-cover" width={1024} height={1024} />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card mt-10">
            <img src={heroWorker} alt="Handwerker mit Rohren in der Werkstatt" loading="lazy" className="h-full w-full object-cover" width={1024} height={1024} />
          </div>
          {/* Floating green badge */}
          <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground text-center text-xs font-bold leading-tight rotate-[-8deg]">
            Meister<br />betrieb
          </div>
        </div>
      </div>

      {/* Logo strip */}
      <div className="container pb-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
          {["Vaillant", "BWT", "Grohe", "Viessmann", "Buderus"].map((b) => (
            <span key={b} className="text-lg sm:text-xl font-bold text-primary-dark/70 tracking-wide">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
