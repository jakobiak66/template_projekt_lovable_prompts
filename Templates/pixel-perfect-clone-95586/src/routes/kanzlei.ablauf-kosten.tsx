import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kanzlei/ablauf-kosten")({
  head: () => ({
    meta: [
      { title: "Ablauf & Kosten — Strafverteidigung in Berlin · Kanzlei Wenzel" },
      {
        name: "description",
        content:
          "Ablauf, Kosten und Vergütung der Strafverteidigung in Berlin: Erstberatung, Mandatsphasen, Pflicht- und Wahlverteidigung — transparent und nachvollziehbar.",
      },
      {
        property: "og:title",
        content: "Ablauf & Kosten der Strafverteidigung in Berlin",
      },
      {
        property: "og:description",
        content:
          "Transparente Darstellung von Mandatsablauf, Honoraren und Verteidigungsmodellen.",
      },
    ],
  }),
  component: AblaufKostenPage,
});

const erstberatung = [
  ["Erstgespräch", "telefonisch · 15 Min"],
  ["Termin vor Ort", "Kurfürstendamm 216"],
  ["Honorar Erstberatung", "190 € zzgl. USt."],
];

const mandatierung = [
  "Akteneinsicht beantragen",
  "Beweislage prüfen, Strategie entwickeln",
  "Verteidigungsschrift / Stellungnahme",
  "Hauptverhandlung & Plädoyer",
  "Revisionsverfahren bei Bedarf",
];

const transparent = [
  ["Mandatsbeginn", "schriftlich vereinbart"],
  ["Honorarart", "Zeitvergütung oder Pauschale"],
  ["Auslagen", "nach VV RVG"],
];

const transparentBox = [
  "Klare Konditionen vorab",
  "Schriftliche Honorarvereinbarung",
  "Detaillierte Abrechnung pro Verfahrensphase",
];

const modelle = [
  {
    title: "Beratung im Einzelgespräch (RVG)",
    desc:
      "Einmalige Beratung — Honorar nach gesetzlichem Rahmen oder Pauschale, je nach Komplexität.",
    cta: "Erstberatung",
  },
  {
    title: "Strafverteidigung",
    desc:
      "Vergütungsvereinbarung auf Basis Stunden- oder Pauschalhonorar, je nach Verfahrensumfang.",
    cta: "Mandat anfragen",
  },
  {
    title: "Revision",
    desc:
      "Gesondert vereinbart — Pauschalhonorar nach Aktenumfang und Komplexität der Revision.",
    cta: "Revision anfragen",
  },
];

const pflicht = [
  ["Voraussetzungen Pflichtverteidigung", "§§ 140 ff. StPO"],
  ["Auswahl", "freie Anwaltswahl"],
  ["Vergütung", "RVG-Sätze"],
];

const faqs = [
  {
    q: "Was kostet ein anwaltliches Erstgespräch?",
    a: "Das Erstgespräch wird mit einer Pauschale von 190 € zzgl. USt. abgerechnet. Diese wird bei Mandatierung auf das Honorar angerechnet.",
  },
  {
    q: "Wie hoch ist die Pauschale für die Verteidigung?",
    a: "Die Höhe richtet sich nach Verfahrensphase, Aktenumfang und Komplexität. Eine konkrete Einschätzung erfolgt nach Akteneinsicht.",
  },
  {
    q: "Lassen sich Kosten mit einer Rechtsschutzversicherung erstatten?",
    a: "In Strafsachen übernimmt die Rechtsschutzversicherung in der Regel nur Kosten bei Vorwürfen fahrlässiger Delikte. Wir prüfen im Einzelfall.",
  },
  {
    q: "Was unterscheidet Wahl- und Pflichtverteidigung?",
    a: "Die Wahlverteidigung beruht auf einer privaten Vergütungsvereinbarung. Die Pflichtverteidigung wird vom Staat vergütet — die freie Anwaltswahl bleibt bestehen.",
  },
];

function AblaufKostenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-background pt-36 lg:pt-44 pb-12 lg:pb-16">
        <div className="container-x">
          <p className="eyebrow mb-8">◆ Ablauf & Kosten · Berlin</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Kosten & Ablauf der
            <br />
            <span className="italic">Strafverteidigung in</span>
            <br />
            <span className="italic">Berlin</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-foreground/65">
            Transparente Darstellung der Honorierung und des Verfahrensablaufs.
            Klare Konditionen, schriftliche Vereinbarung und nachvollziehbare
            Abrechnung — keine Überraschungen.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Mandat", "Leistungen", "Kontakt"].map((t, i) => (
              <button
                key={t}
                className={`px-4 py-2 rounded-full text-xs border transition ${
                  i === 0
                    ? "bg-navy text-navy-foreground border-navy"
                    : "bg-secondary border-border text-foreground/75 hover:bg-secondary/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65">
        <div className="container-x py-4 text-[0.7rem] tracking-[0.2em] uppercase">
          <Link to="/" className="hover:text-navy-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Kanzlei · Ablauf & Kosten</span>
        </div>
      </div>

      {/* Erstberatung. Der erste Schritt. */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <p className="eyebrow text-navy-foreground/55 mb-8">— Mandatsbeginn</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Erstberatung.
              <br />
              <span className="italic text-blue-accent">Der erste Schritt.</span>
            </h2>
          </div>
          <div>
            <p className="text-sm text-navy-foreground/70 leading-relaxed max-w-xl">
              Im Erstgespräch verschaffe ich mir einen Überblick über den
              Sachverhalt, kläre die Rahmenbedingungen und gebe eine erste
              Einschätzung. Das Erstgespräch ist verbindlich, aber kostengünstig.
            </p>
            <dl className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {erstberatung.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-6 py-4 text-sm">
                  <dt className="text-navy-foreground/65">— {k}</dt>
                  <dd className="text-right text-navy-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-navy-foreground/55 leading-relaxed max-w-xl">
              Im Anschluss folgt die schriftliche Honorarvereinbarung — transparent.
            </p>
          </div>
        </div>

        {/* Ablauf der Mandatierung */}
        <div className="container-x mt-24 grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Ablauf der
              <br />
              <span className="italic text-blue-accent">Mandatierung.</span>
            </h2>
          </div>
          <div>
            <ol className="space-y-4">
              {mandatierung.map((m, i) => (
                <li
                  key={m}
                  className="flex gap-5 border-t border-white/10 pt-4 text-sm"
                >
                  <span className="font-serif text-base text-blue-accent w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p>{m}</p>
                    <p className="text-xs text-navy-foreground/55 mt-1">
                      Strukturiert, dokumentiert, nachvollziehbar.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-navy-foreground/55 leading-relaxed">
              Jede Mandatsphase wird schriftlich dokumentiert.
            </p>
          </div>
        </div>
      </section>

      {/* Transparent. Nachvollziehbar. */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">— Honorierung</p>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Transparent.
                <br />
                <span className="italic text-foreground/45">Nachvollziehbar.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-md">
                Konkrete Honorarvereinbarung vor Mandatsbeginn — die Höhe richtet
                sich nach Verfahrensphase und Aufwand.
              </p>
            </div>
            <div>
              <dl className="divide-y divide-border border-t border-border">
                {transparent.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 gap-6 py-4 text-sm">
                    <dt className="text-foreground/65">— {k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 rounded-2xl bg-navy text-navy-foreground p-6">
                <ul className="space-y-3 text-sm">
                  {transparentBox.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="block w-3 h-px bg-blue-accent mt-2.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-navy-foreground/65">
                  Pauschale gegen Stundenhonorar — Auswahl nach Aktenumfang.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drei Modelle */}
        <div className="container-x mt-24">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
            Drei Modelle.
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {modelle.map((m) => (
              <article
                key={m.title}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl">{m.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <button className="self-start md:self-auto inline-flex items-center rounded-full border border-border px-5 py-2.5 text-xs hover:bg-secondary transition shrink-0">
                  {m.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pflichtverteidigung / Kostenerstattung */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <p className="eyebrow text-navy-foreground/55 mb-8">— Sonderfälle</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Pflicht­
              <br />
              <span className="italic text-blue-accent">verteidigung.</span>
            </h2>
            <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
              In Verfahren mit notwendiger Verteidigung wird ein Pflichtverteidiger
              bestellt — die Anwaltswahl bleibt frei.
            </p>
          </div>
          <div>
            <dl className="divide-y divide-white/10 border-t border-white/10">
              {pflicht.map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 gap-6 py-4 text-sm">
                  <dt className="text-navy-foreground/65">— {k}</dt>
                  <dd className="text-right text-navy-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-navy-foreground/55 leading-relaxed">
              Pflichtverteidigung ersetzt nicht die anwaltliche Sorgfalt.
            </p>
          </div>
        </div>

        <div className="container-x mt-24 grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Kosten­
              <br />
              <span className="italic text-blue-accent">erstattung.</span>
            </h2>
            <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
              Bei Freispruch oder Einstellung erfolgt die Kostenerstattung nach
              Maßgabe der StPO. Wir setzen die Erstattung konsequent durch.
            </p>
          </div>
          <div>
            <div className="rounded-2xl bg-cream text-foreground p-7">
              <p className="font-serif text-xl italic leading-snug">
                Eine Verteidigung sich zu leisten ist möglich, ja vermutlich
                deutlich günstiger als Sie denken.
              </p>
              <p className="mt-4 text-xs text-foreground/65 leading-relaxed">
                Klären Sie Ihre individuelle Situation in einem Erstgespräch.
              </p>
              <button className="mt-6 w-full rounded-full bg-navy text-navy-foreground py-3 text-sm hover:opacity-90 transition">
                Jetzt anfragen
              </button>
            </div>
            <p className="mt-4 text-xs text-navy-foreground/55 leading-relaxed">
              Wir prüfen für Sie, ob eine Rechtsschutzversicherung Kosten übernimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Häufige Fragen */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">— Kosten & Ablauf · FAQ</p>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Häufige
                <br />
                <span className="italic text-foreground/45">Fragen.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-sm">
                Antworten auf typische Fragen zu Honorar, Ablauf und Pflichtverteidigung.
              </p>
              <a
                href="tel:+4930120593430"
                className="mt-8 inline-flex items-center rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm hover:opacity-90 transition"
              >
                030 120 593 430
              </a>
            </div>
            <div className="border-t border-border">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={f.q} className="border-b border-border">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full py-5 flex items-start justify-between gap-6 text-left"
                    >
                      <span className="text-sm md:text-base">{f.q}</span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 mt-1" />
                      ) : (
                        <Plus className="size-4 shrink-0 mt-1" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="pb-5 text-sm text-foreground/70 leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Jetzt beraten lassen / Nachricht senden */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="container-x">
          <p className="eyebrow mb-10">— Kontakt aufnehmen</p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Jetzt
                <br />
                <span className="italic text-foreground/45">beraten lassen.</span>
              </h2>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
                Klären Sie Ihre Situation in einem persönlichen Erstgespräch.
              </p>

              <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-6 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full bg-cream text-navy grid place-items-center font-serif text-xl">
                    BW
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                      STRAFVERTEIDIGER · BERLIN
                    </p>
                    <p className="mt-1 font-serif text-xl">Benjamin C. Wenzel</p>
                  </div>
                </div>
                <p className="mt-5 text-xs text-navy-foreground/70 leading-relaxed">
                  Fachanwalt für Strafrecht
                  <br />
                  Kurfürstendamm 216, 10719 Berlin
                </p>
                <a
                  href="tel:+4930120593430"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-navy px-5 py-2.5 text-sm hover:bg-white transition"
                >
                  <Phone className="size-4" /> 030 120 593 430
                </a>
              </div>

              <ul className="mt-6 max-w-md space-y-2">
                {["Erstgespräch buchen", "Kontakt anfragen"].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs text-foreground/70"
                  >
                    <span className="block w-3 h-px bg-foreground/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Nachricht
                <br />
                <span className="italic text-foreground/45">senden.</span>
              </h2>

              <form className="mt-10 space-y-5 max-w-lg">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" placeholder="Ihr vollständiger Name" />
                  <Field label="Telefon" placeholder="Rückrufnummer" type="tel" />
                </div>
                <Field label="E-Mail" placeholder="Ihre E-Mail-Adresse" type="email" />
                <div>
                  <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
                    Ihr Anliegen
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Schildern Sie kurz Ihre Situation."
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition"
                >
                  Nachricht senden
                </button>
                <p className="text-[0.65rem] text-foreground/55 leading-relaxed">
                  Mit dem Versand stimmen Sie der Verarbeitung Ihrer Angaben zur
                  Kontaktaufnahme zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
      />
    </div>
  );
}
