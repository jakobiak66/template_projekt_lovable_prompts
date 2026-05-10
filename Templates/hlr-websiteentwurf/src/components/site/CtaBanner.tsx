import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 md:py-12 shadow-xl"
          style={{ backgroundColor: "var(--ink)" }}
        >
          {/* Dezente Akzent-Glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-brand/10 blur-3xl"
          />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="inline-flex items-center gap-2 bg-brand/15 text-brand text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                Persönlich erreichbar
              </span>
              <h2 className="mt-4 text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                Fragen oder Terminwunsch?
                <br />
                <span className="text-white/70 font-extrabold">Wir sind für Sie da.</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                Beratung und unverbindliches Festpreisangebot – Rückruf innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 items-stretch sm:items-center justify-center">
              <a
                href="/kontakt#kontaktformular"
                className="group inline-flex items-center justify-center gap-2 bg-brand hover:brightness-110 text-brand-foreground font-semibold text-base px-6 py-3.5 rounded-md shadow-lg transition-all"
              >
                Kontakt aufnehmen
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+4933628910"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-base px-6 py-3.5 rounded-md transition-colors backdrop-blur-sm"
              >
                <Phone size={18} />
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
