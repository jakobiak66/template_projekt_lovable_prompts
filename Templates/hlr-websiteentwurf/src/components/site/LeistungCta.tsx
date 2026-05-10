import { ArrowRight, Phone, ShieldCheck, Clock, Award } from "lucide-react";

type Props = {
  headline?: string;
  subline?: string;
};

export function LeistungCta({
  headline = "Bereit für Ihr Projekt?",
  subline = "Kostenlose Vor-Ort-Beratung in Erkner – persönlich, unverbindlich und vom Meisterbetrieb.",
}: Props) {
  return (
    <section className="bg-muted/30 pb-16 md:pb-24">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-14 md:py-10 shadow-2xl"
          style={{ backgroundColor: "var(--ink)" }}
        >
          {/* Dekorative Akzent-Glows in HLR-Orange */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 w-96 h-96 rounded-full bg-brand/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-brand/15 blur-3xl"
          />

          <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-brand/15 text-brand text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              <Award size={14} />
              Meisterbetrieb seit 1990
            </span>

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {headline}
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
              {subline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/kontakt#kontaktformular"
                className="group inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground font-semibold text-base px-7 py-4 rounded-md shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
              >
                Jetzt Termin anfragen
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="tel:+4933628910"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-md transition-colors backdrop-blur-sm"
              >
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>

            {/* Trust-Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand" />
                Persönlich vor Ort
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-brand" />
                Rückruf in 24h
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand" />
                Kostenlos & unverbindlich
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
