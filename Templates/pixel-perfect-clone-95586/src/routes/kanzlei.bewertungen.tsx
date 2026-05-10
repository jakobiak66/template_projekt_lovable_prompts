import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Star, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kanzlei/bewertungen")({
  head: () => ({
    meta: [
      { title: "Bewertungen — Fachanwalt für Strafrecht Berlin · Kanzlei Wenzel" },
      {
        name: "description",
        content:
          "Mandantenbewertungen der Kanzlei Wenzel — Fachanwalt für Strafrecht in Berlin. 4,9 auf anwalt.de und 4,99 auf Google.",
      },
      { property: "og:title", content: "Bewertungen — Kanzlei Wenzel" },
      {
        property: "og:description",
        content:
          "Was Mandanten über die Strafverteidigung der Kanzlei Wenzel in Berlin sagen.",
      },
    ],
  }),
  component: BewertungenPage,
});

const heroFacts: [string, string][] = [
  ["Bewertungen gesamt", "über 250"],
  ["Empfehlungsquote", "98 %"],
  ["Aktiv seit", "Januar 2010"],
];

const filters = ["Alle", "Google", "anwalt.de", "Verifiziert", "Strafrecht"];

type Review = {
  initial: string;
  name: string;
  date: string;
  rating: number;
  topic: string;
  text: string;
  source: "GOOGLE" | "ANWALT.DE";
  verified?: boolean;
};

const reviews: Review[] = [
  {
    initial: "M",
    name: "M. K.",
    date: "März 2026",
    rating: 5,
    topic: "Strafverfahren · Vorwurf BtMG",
    text:
      "Herr Wenzel hat das Verfahren von Beginn an strukturiert geführt, klare Strategie kommuniziert und die Hauptverhandlung souverän geführt. Einstellung nach §153a StPO.",
    source: "GOOGLE",
    verified: true,
  },
  {
    initial: "T",
    name: "T. F.",
    date: "Februar 2026",
    rating: 5,
    topic: "Verkehrsstrafrecht — fahrlässige Körperverletzung",
    text:
      "Sehr klare, ehrliche und erreichbare Beratung. Akteneinsicht zügig, Strategie nachvollziehbar.",
    source: "GOOGLE",
    verified: true,
  },
  {
    initial: "S",
    name: "S. R.",
    date: "Januar 2026",
    rating: 5,
    topic: "Revision",
    text:
      "Präzise und in der Sache hart. Hat eine vermeintlich aussichtslose Revision erfolgreich begründet — Urteil aufgehoben und zurückverwiesen.",
    source: "ANWALT.DE",
    verified: true,
  },
  {
    initial: "A",
    name: "A. L.",
    date: "Dezember 2025",
    rating: 5,
    topic: "Beratung — Hausdurchsuchung",
    text:
      "Innerhalb weniger Stunden erreichbar. Kein Aktionismus, sondern saubere Bewertung der Lage.",
    source: "GOOGLE",
    verified: true,
  },
  {
    initial: "J",
    name: "J. W.",
    date: "November 2025",
    rating: 5,
    topic: "Wirtschaftsstrafrecht",
    text:
      "Komplexes Verfahren über mehrere Monate. Herr Wenzel hat die Verteidigungslinie konsequent durchgehalten und in der Hauptverhandlung Akzente gesetzt, die zur Einstellung führten.",
    source: "ANWALT.DE",
    verified: true,
  },
  {
    initial: "K",
    name: "K. D.",
    date: "Oktober 2025",
    rating: 5,
    topic: "Vorladung als Beschuldigter",
    text:
      "Vorladung erhalten, Termin abgesagt, schriftliche Stellungnahme — Verfahren nach kurzer Zeit eingestellt. Sehr empfehlenswert.",
    source: "GOOGLE",
    verified: true,
  },
];

const faqs = [
  {
    q: "Wie wird auf anwalt.de bewertet?",
    a: "Bewertungen auf anwalt.de werden ausschließlich von verifizierten Mandanten abgegeben und vor Veröffentlichung redaktionell geprüft.",
  },
  {
    q: "Was bedeuten 5 Sterne?",
    a: "Fünf Sterne stehen für eine durchgehend ausgezeichnete Bewertung in Beratung, Erreichbarkeit, fachlicher Qualität und Ergebnis.",
  },
  {
    q: "Kann ich anonym bewerten?",
    a: "Auf Wunsch ist eine pseudonymisierte Veröffentlichung möglich — die Mandantenbeziehung bleibt vollständig vertraulich.",
  },
  {
    q: "Wie reiche ich eine Bewertung ein?",
    a: "Nach Abschluss des Mandats erhalten Sie auf Wunsch einen direkten Link zu Google oder anwalt.de.",
  },
];

function Stars({ value, size = "size-3.5" }: { value: number; size?: string }) {
  return (
    <div className="inline-flex items-center gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${i < value ? "fill-current" : "opacity-25"}`}
          strokeWidth={1.25}
        />
      ))}
    </div>
  );
}

function BewertungenPage() {
  const [filter, setFilter] = useState("Alle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = reviews.filter((r) => {
    if (filter === "Alle") return true;
    if (filter === "Google") return r.source === "GOOGLE";
    if (filter === "anwalt.de") return r.source === "ANWALT.DE";
    if (filter === "Verifiziert") return !!r.verified;
    return true;
  });

  return (
    <div className="min-h-screen bg-cream text-navy">
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-32 pb-20">
        <div className="container-x">
          <nav className="text-xs uppercase tracking-[0.25em] opacity-60 mb-8">
            <Link to="/">Start</Link>
            <span className="mx-2">/</span>
            <span>Kanzlei</span>
            <span className="mx-2">/</span>
            <span className="opacity-100">Bewertungen</span>
          </nav>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Bewertungen
            <br />
            <span className="italic text-blue-accent">
              Fachanwalt für Strafrecht
            </span>
            <br />
            <span className="italic text-blue-accent">Berlin</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base opacity-75 leading-relaxed">
            Über 250 Mandanten‑ und Kollegenbewertungen auf Google und
            anwalt.de — verifiziert, redaktionell geprüft und unredigiert.
            Auswahl der jüngsten Stimmen.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-foreground/15 border border-navy-foreground/15 max-w-3xl">
            {heroFacts.map(([k, v]) => (
              <div key={k} className="bg-navy px-6 py-5">
                <div className="text-[0.65rem] uppercase tracking-[0.2em] opacity-55">
                  {k}
                </div>
                <div className="mt-2 font-serif text-xl">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregated ratings */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 max-w-4xl">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55">
                anwalt.de
              </div>
              <div className="mt-3 font-serif text-7xl text-gold leading-none">
                4,9
              </div>
              <div className="mt-3">
                <Stars value={5} size="size-4" />
              </div>
              <div className="mt-3 text-sm opacity-70">
                aus 168 Mandantenbewertungen
              </div>
              <div className="mt-1 text-xs opacity-50">Stand: Mai 2026</div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55">
                Google
              </div>
              <div className="mt-3 font-serif text-7xl text-gold leading-none">
                4,99
              </div>
              <div className="mt-3">
                <Stars value={5} size="size-4" />
              </div>
              <div className="mt-3 text-sm opacity-70">
                aus 92 Google‑Bewertungen
              </div>
              <div className="mt-1 text-xs opacity-50">Stand: Mai 2026</div>
            </div>
          </div>

          <p className="mt-20 max-w-3xl mx-auto text-center font-serif italic text-lg opacity-75">
            „Vertrauen entsteht durch Ergebnisse — nicht durch Versprechen."
          </p>
        </div>
      </section>

      {/* Reviews list */}
      <section className="bg-cream pb-24 border-t border-navy/10">
        <div className="container-x pt-16">
          <h2 className="font-serif text-2xl mb-8">
            <span className="opacity-50">▸ </span>Mandantenstimmen
          </h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full border text-xs uppercase tracking-[0.15em] transition ${
                  filter === f
                    ? "bg-navy text-navy-foreground border-navy"
                    : "border-navy/20 text-navy/70 hover:border-navy/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {filtered.map((r, i) => (
              <article key={i} className="py-7 grid md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-3 items-start">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-navy text-navy-foreground grid place-items-center font-serif text-lg">
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs opacity-55">{r.date}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <Stars value={r.rating} />
                    <span className="text-xs opacity-60">{r.topic}</span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-85">{r.text}</p>
                </div>
                <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em]">
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-blue-accent">
                      <Check className="size-3" />
                      Verifiziert
                    </span>
                  )}
                  <span className="opacity-50">{r.source}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="text-sm uppercase tracking-[0.2em] border-b border-navy/40 pb-1 hover:border-navy transition">
              Auf anwalt.de weiterlesen
            </button>
          </div>
        </div>
      </section>

      {/* Ausgezeichnet auf anwalt.de */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] opacity-50 mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            Empfehlung & Auszeichnung
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
                Ausgezeichnet
                <br />
                <span className="italic text-gold">auf anwalt.de</span>
              </h2>
              <p className="mt-6 max-w-xl opacity-75 leading-relaxed">
                Für die Auszeichnung „TOP‑Anwalt" werden Anwälte mit
                überdurchschnittlich vielen Top‑Bewertungen aus allen
                Tätigkeitsbereichen jährlich ausgezeichnet.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs">
                {[
                  "TOP‑Anwalt 2024",
                  "TOP‑Anwalt 2023",
                  "TOP‑Anwalt 2022",
                  "TOP‑Anwalt 2021",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center px-3 py-1.5 rounded-full border border-navy-foreground/25 uppercase tracking-[0.15em]"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-navy-foreground/25 uppercase tracking-[0.15em]">
                  5 Jahre Mitglied
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-navy-foreground/25 uppercase tracking-[0.15em]">
                  Premium‑Profil
                </span>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="justify-self-center">
              <div className="w-[260px] rounded-[2.5rem] border-[10px] border-navy-foreground/20 bg-cream text-navy p-4 shadow-2xl">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] opacity-60 px-1 pb-2">
                  <span>anwalt.de</span>
                  <Stars value={5} />
                </div>
                <div className="border-t border-navy/10 pt-3">
                  <div className="font-serif text-4xl text-gold">4,9</div>
                  <div className="text-[0.65rem] opacity-60 mt-1">
                    aus 168 Bewertungen
                  </div>
                </div>
                <div className="mt-4 space-y-3 text-[0.7rem]">
                  {[
                    ["Beratung", 5],
                    ["Erreichbarkeit", 5],
                    ["Ergebnis", 5],
                  ].map(([k, v]) => (
                    <div key={k as string} className="flex items-center justify-between">
                      <span className="opacity-70">{k}</span>
                      <Stars value={v as number} size="size-3" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-navy/10 text-[0.65rem] opacity-65 leading-relaxed">
                  „Hervorragende Beratung — schnell, klar und auf den Punkt."
                </div>
                <button className="mt-5 w-full text-[0.65rem] uppercase tracking-[0.2em] border-t border-navy/10 pt-3 opacity-70">
                  Profil ansehen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24">
        <div className="container-x max-w-3xl">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] opacity-50 mb-6">
            FAQ
          </div>
          <h2 className="font-serif text-5xl leading-[1.05]">
            Häufige
            <br />
            <span className="italic">Fragen.</span>
          </h2>

          <div className="mt-12 divide-y divide-navy/15 border-y border-navy/15">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-5 flex items-center justify-between gap-6 text-left"
                  >
                    <span className="font-serif text-lg">{f.q}</span>
                    {isOpen ? (
                      <Minus className="size-4 shrink-0 opacity-60" />
                    ) : (
                      <Plus className="size-4 shrink-0 opacity-60" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="pb-6 -mt-1 text-sm opacity-75 leading-relaxed pr-12">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section className="bg-cream pb-24">
        <div className="container-x max-w-3xl">
          <div className="bg-navy text-navy-foreground rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="size-14 rounded-full bg-cream/10 grid place-items-center font-serif text-xl">
                BW
              </div>
              <div>
                <div className="font-serif text-2xl">Benjamin C. Wenzel</div>
                <div className="mt-1 text-sm opacity-70">
                  Rechtsanwalt &amp; Fachanwalt
                  <br />
                  für Strafrecht · Berlin
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href="tel:+4930120593430"
                className="inline-flex items-center gap-2 font-medium"
              >
                <Phone className="size-4 text-gold" />
                030 120 593 430
              </a>
              <a
                href="mailto:kanzlei@anwalt-wenzel.de"
                className="opacity-75 hover:opacity-100 transition"
              >
                kanzlei@anwalt‑wenzel.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rückruf form */}
      <section className="bg-cream pb-28">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Rückruf
            <br />
            <span className="italic">anfordern.</span>
          </h2>

          <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                Vor- &amp; Nachname
              </label>
              <input
                type="text"
                className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy"
              />
            </div>
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                Telefon
              </label>
              <input
                type="tel"
                className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                E‑Mail (optional)
              </label>
              <input
                type="email"
                className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                Worum geht es?
              </label>
              <textarea
                rows={3}
                className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy resize-none"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-navy text-navy-foreground text-sm uppercase tracking-[0.2em] hover:bg-navy/90 transition"
              >
                Rückruf anfordern
              </button>
              <p className="mt-5 text-xs opacity-60 leading-relaxed border-t border-navy/15 pt-4">
                Mit Absenden akzeptieren Sie die{" "}
                <a className="underline" href="/datenschutz">
                  Datenschutzerklärung
                </a>
                . Ihre Anfrage ist mandatsbezogen vertraulich.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-navy text-navy-foreground py-14">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-3xl">Jetzt beraten lassen.</h3>
            <p className="mt-2 text-sm opacity-65">
              Telefonisch erreichbar · vertraulich · ohne Verzögerung.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+4930120593430"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              <Phone className="size-4" />
              030 120 593 430
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center rounded-full border border-navy-foreground/30 px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
