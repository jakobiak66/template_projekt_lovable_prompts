import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { LeistungCta } from "@/components/site/LeistungCta";
import { Check } from "lucide-react";

type GalleryImage = { src: string; alt: string };

type Props = {
  title: string;
  titleClassName?: string;
  subtitle?: string;
  paragraphs: string[];
  heroImage: string;
  heroImageAlt: string;
  leistungen: string[];
  leistungenIntro?: string;
  leistungenText?: string | string[];
  gallery: GalleryImage[];
  ctaHeadline?: string;
  ctaSubline?: string;
};

export function LeistungLayout({
  title,
  titleClassName,
  subtitle,
  paragraphs,
  heroImage,
  heroImageAlt,
  leistungen,
  leistungenIntro,
  leistungenText,
  gallery,
  ctaHeadline,
  ctaSubline,
}: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero / Intro */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-page flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-14 md:items-stretch">
            {/* Badge + Überschrift + Subline */}
            <div className="flex flex-col md:contents">
              <div className="md:order-1">
                <span className="inline-flex w-fit items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  Leistung
                </span>
                <h1 className={["max-w-full text-ink break-words hyphens-auto", titleClassName].filter(Boolean).join(" ")}>{title}</h1>
                {subtitle && (
                  <p className="mt-4 text-xl md:text-2xl font-semibold text-brand">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Hauptbild – Mobile: nach Subline, Desktop: rechte Spalte */}
            <div className="relative w-full h-64 sm:h-80 md:h-full md:min-h-[480px] rounded-lg overflow-hidden border border-border bg-card shadow-card md:order-2 md:row-span-2">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Lange Textabsätze – Mobile: nach Bild, Desktop: unter Überschrift in linker Spalte */}
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground md:order-3 md:-mt-2">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Leistungen + Bildergalerie */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-page grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col">
              <h2 className="mb-4">Unsere Leistungen im Überblick</h2>
              {leistungenIntro && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {leistungenIntro}
                </p>
              )}
              {leistungenText ? (
                <div className="space-y-5 flex-1">
                  {(Array.isArray(leistungenText) ? leistungenText : [leistungenText]).map((t, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {leistungen.map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-3 bg-card border border-border/50 rounded-md px-4 py-3 shadow-sm"
                    >
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium">{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bildergalerie */}
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-border bg-card shadow-card"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeistungCta headline={ctaHeadline} subline={ctaSubline} />

        
      </main>
      <Footer />
    </div>
  );
}

export type { GalleryImage };
