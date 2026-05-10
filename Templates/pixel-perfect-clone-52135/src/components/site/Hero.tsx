import { Button } from "@/components/ui/button";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroPerson from "@/assets/hero-person.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint">
      {/* decorative concentric circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 65% 50%, transparent 0, transparent 220px, color-mix(in oklab, var(--mint-deep) 55%, transparent) 221px, color-mix(in oklab, var(--mint-deep) 55%, transparent) 222px, transparent 223px), radial-gradient(circle at 65% 50%, transparent 0, transparent 320px, color-mix(in oklab, var(--mint-deep) 50%, transparent) 321px, color-mix(in oklab, var(--mint-deep) 50%, transparent) 322px, transparent 323px), radial-gradient(circle at 65% 50%, transparent 0, transparent 440px, color-mix(in oklab, var(--mint-deep) 45%, transparent) 441px, color-mix(in oklab, var(--mint-deep) 45%, transparent) 442px, transparent 443px)",
        }}
      />

      {/* full-bleed person photo on the right, blended into background */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[92%] w-[55%] md:block"
      >
        <img
          src={heroPerson}
          alt=""
          className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 85% at 60% 60%, black 55%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 75% 85% at 60% 60%, black 55%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-20 md:grid-cols-2 md:px-8 md:pt-24 md:pb-28">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[64px]">
            Büroreinigung Berlin <span className="text-orange">—</span> Ihr B2B-Spezialist für saubere Büros
          </h1>

          <p className="mt-8 text-base text-foreground/85 md:text-lg">
            Nur Büros. Nur Berlin. Dafür richtig — mit 4-Wochen-Zufriedenheitsgarantie.
          </p>

          <p className="mt-5 max-w-xl text-base text-foreground/75 leading-relaxed">
            Als Gründer von PutzKraft24 sorge ich mit meinem Team dafür, dass Sie sich nie wieder um Ihre Büroreinigung kümmern müssen. Unsere Reinigungsfirma in Berlin betreut bereits 35+ Unternehmen — zuverlässig und mit persönlichem Ansprechpartner.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-orange hover:bg-orange-hover text-primary-foreground rounded-full pl-7 pr-2 h-14 text-base font-semibold"
          >
            <Link to="/kontakt">
              Kostenlosen Büro-Check vereinbaren
              <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                <ChevronRight className="h-5 w-5" />
              </span>
            </Link>
          </Button>

          {/* Google Trustindex card */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-xl bg-background px-5 py-3 shadow-sm">
            <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.3-.1-2.3-.4-3.5z" />
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-orange text-lg leading-none tracking-tight">★★★★★</span>
                <span className="font-bold text-foreground">5.0</span>
              </div>
              <div className="mt-1 text-sm font-bold text-foreground">Bestbewerteter Service</div>
              <div className="flex items-center gap-1 text-xs text-foreground/70">
                verifiziert von: Trustindex <Info className="h-3 w-3" />
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-foreground/70">
            Kostenlos · unverbindlich · Antwort innerhalb 4 h
          </p>
        </div>
      </div>

    </section>
  );
}
