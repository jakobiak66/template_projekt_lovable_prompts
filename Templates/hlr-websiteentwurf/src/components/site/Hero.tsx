import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-heizung-sanitaer.png";

export function Hero() {
  return (
    <section className="relative isolate min-h-[760px] md:min-h-[760px] flex items-center pt-20 pb-24 md:pt-16 md:pb-20 overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="HLR Heizung und Sanitär GmbH – Monteure bei der Arbeit"
        className="absolute inset-0 w-full h-full object-cover object-[0%_center] md:object-[20%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />

      <div className="container-page relative text-white">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-white">
            Ihr Fachbetrieb für
            <br />
            Heizung, Sanitär & Lüftung
          </h1>

          <p className="mt-10 md:mt-8 text-base md:text-lg text-white leading-relaxed max-w-2xl">
            Die <strong className="font-bold">H-L-R Heizung und Sanitär GmbH</strong> ist
            seit 1999 Ihr verlässlicher Partner in Erkner und Umgebung.
            Wir planen, installieren und warten Ihre Haustechnik –
            persönlich, zuverlässig und auf dem neuesten Stand.
          </p>

          <div className="mt-10 md:mt-8 flex items-center gap-4 justify-center md:justify-start">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-brand text-white text-sm font-bold flex items-center justify-center">
                4,8
              </div>
            </div>
            <div className="text-sm text-white">
              <div className="font-semibold">4,8 von 5</div>
              <div className="text-white/85">aus 17 Google-Bewertungen</div>
            </div>
          </div>

          <a
            href="/kontakt"
            className="mt-10 md:mt-8 inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-brand-foreground font-semibold text-base px-7 py-4 rounded-md transition-colors shadow-lg"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
