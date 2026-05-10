import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus } from "lucide-react";
import { useState } from "react";
import notfallHero from "@/assets/notfall-hero.jpg";

export const Route = createFileRoute("/notfall")({
  head: () => ({
    meta: [
      { title: "Notfall: Hausdurchsuchung — Was tun? | Kanzlei Wenzel Berlin" },
      {
        name: "description",
        content:
          "Soforthilfe bei Hausdurchsuchung in Berlin: 4 Schritte, was Sie tun und lassen sollten. 24/7 Notfallkontakt zum Fachanwalt für Strafrecht.",
      },
      {
        property: "og:title",
        content: "Hausdurchsuchung: Was tun? — Notfallhilfe Strafrecht Berlin",
      },
      {
        property: "og:description",
        content:
          "Praktische Sofort-Anleitung bei Hausdurchsuchung. Anwaltliche Soforthilfe rund um die Uhr.",
      },
    ],
  }),
  component: NotfallPage,
});

const steps = [
  {
    n: "01",
    title: "Ruhe bewahren",
    sub: "Unüberlegte Reaktionen können die Situation verschärfen.",
    items: [
      "Türe öffnen — Widerstand vermeiden.",
      "Beamte um den Durchsuchungsbeschluss bitten.",
      "Identität der Beamten notieren.",
    ],
  },
  {
    n: "02",
    title: "Keine Aussagen zur Sache",
    badge: "WICHTIG",
    sub: "Jede Aussage kann später gegen Sie verwendet werden.",
    items: [
      "Machen Sie keine spontanen Erklärungen.",
      "Geben Sie lediglich Ihre Personalien an.",
      "Unterschreiben Sie nichts ohne Prüfung.",
    ],
  },
  {
    n: "03",
    title: "Durchsuchungsbeschluss prüfen",
    sub: "Vorm jede Durchsuchung ist rechtlich justiziabel.",
    items: [
      "Ist Ihre Person oder Ihre Wohnung explizit benannt?",
      "Welcher Tatvorwurf wird genannt?",
      "Welche Gegenstände dürfen beschlagnahmt werden?",
    ],
  },
  {
    n: "04",
    title: "Sofort Anwalt kontaktieren",
    badge: "WICHTIG",
    sub: "Je früher anwaltlich eingegriffen wird, desto größer sind die Verteidigungsmöglichkeiten.",
    items: [
      "Prüfung der Rechtmäßigkeit der Maßnahme.",
      "Schutz Ihrer Rechte.",
      "Strategisches Vorgehen für weiteres Verfahren.",
      "Kommunikation mit der Ermittlungsbehörde.",
    ],
  },
];

const phases = [
  { title: "Auswertung", desc: "Beschlagnahmtes Material wird gesichtet." },
  { title: "Ermittlungen", desc: "Vorlauf der Staatsanwaltschaft." },
  { title: "Vorladung", desc: "Möglich, aber meist verzichtbar." },
  { title: "Verfahren", desc: "Möglicher Einstellungsantrag." },
];

const faqs = [
  {
    q: "Darf ich bei einer Wohnung stehen, in der kein Beschluss vorliegt?",
    a: "Grundsätzlich nicht. Verlangen Sie immer den Durchsuchungsbeschluss. Bei Gefahr im Verzug kann eine Ausnahme bestehen — auch dann sollten Sie sofort anwaltlichen Rat einholen.",
  },
  {
    q: "Muss ich aussagen oder etwas unterschreiben bei der Hausdurchsuchung?",
    a: "Nein. Sie haben ein umfassendes Schweigerecht. Geben Sie nur Personalien an. Unterschreiben Sie nichts, was Sie nicht vorher mit einem Anwalt besprochen haben.",
  },
  {
    q: "Welche Gegenstände dürfen bei einer Durchsuchung beschlagnahmt werden?",
    a: "Nur die im Beschluss benannten oder mit dem Tatvorwurf in Zusammenhang stehenden Gegenstände. Alles andere ist rechtswidrig — ein Anwalt kann später die Herausgabe erwirken.",
  },
  {
    q: "Was sollten Sie tun nach der Durchsuchung tun?",
    a: "Notieren Sie alle Beobachtungen, fordern Sie das Sicherstellungsverzeichnis und kontaktieren Sie umgehend einen Strafverteidiger.",
  },
];

function NotfallPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-36 lg:pt-44 pb-20 lg:pb-28 relative overflow-hidden">
        <img
          src={notfallHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full lg:w-[60%] object-cover object-right opacity-50 lg:opacity-70 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30 pointer-events-none" />
        <div className="container-x relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <p className="eyebrow text-blue-accent mb-8">
              Soforthilfe — Strafrecht Berlin
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              Hausdurchsuchung:
              <br />
              <span className="italic text-blue-accent">Was tun?</span>
            </h1>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-navy-foreground/65">
              Eine Hausdurchsuchung erfolgt häufig im frühen Tagesverlauf. Die Beamten
              betreten die Wohnung sofort — ohne dass Sie Zeit für eine rechtliche
              Vorbereitung haben. Folgen Sie nun den Verhaltensregeln unten.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <a
                href="tel:+4930120593430"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-navy px-7 py-4 text-sm font-medium hover:bg-white transition"
              >
                <Phone className="size-4" />
                030 120 593 430 — Sofort anrufen
              </a>
            </div>
            <p className="mt-4 text-xs text-blue-accent/80">
              24/7 Notfall-Erreichbarkeit für laufende Hausdurchsuchung
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65 text-[0.7rem] tracking-[0.2em] uppercase">
        <div className="container-x py-4">
          <Link to="/" className="hover:text-navy-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Hausdurchsuchung — Was tun? · Kanzlei Wenzel</span>
        </div>
      </div>

      {/* Steps */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-16">4 Schritte — sofort handeln</p>

          <div className="divide-y divide-border border-y border-border">
            {steps.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_minmax(0,1.1fr)_minmax(0,1fr)] gap-x-8 gap-y-4 py-12"
              >
                <div className="font-serif text-2xl text-foreground/45 italic">{s.n}</div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
                    {s.title}
                  </h2>
                  {s.badge && (
                    <span className="inline-block mt-3 text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[#ff0000] border border-[#ff0000]/50 rounded-full px-3 py-1">
                      ◆ {s.badge}
                    </span>
                  )}
                  <p className="mt-4 text-sm italic text-foreground/65 leading-relaxed max-w-sm">
                    {s.sub}
                  </p>
                </div>
                <ul className="col-span-2 lg:col-span-1 space-y-3 lg:pt-3">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-sm text-foreground/80 leading-relaxed"
                    >
                      <span className="block w-4 h-px bg-foreground/40 mt-2.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was kommt als nächstes */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-12">
            Ablauf — Verfahrensgang
          </p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Was kommt
                <br />
                <span className="italic text-blue-accent">als nächstes?</span>
              </h2>
              <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
                Nach einer Hausdurchsuchung beginnt regelmäßig die Auswertung der
                beschlagnahmten Beweismittel. Die Staatsanwaltschaft prüft, ob ein
                hinreichender Tatverdacht für eine Anklageerhebung gem. §§ 170, 152 StPO
                besteht.
              </p>
            </div>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {phases.map((p) => (
                <li key={p.title} className="py-5 flex items-start gap-4">
                  <span className="block w-5 h-px bg-blue-accent mt-3 shrink-0" />
                  <div>
                    <p className="font-serif text-2xl">{p.title}</p>
                    <p className="mt-1 text-sm text-navy-foreground/65">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sofort klären — FAQ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">
            Häufige Fragen — Hausdurchsuchung in Berlin
          </p>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Sofort
                <br />
                <span className="italic text-foreground/45">klären.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-sm">
                Kurze Antworten für die erste Schritte. Für die konkrete Lage in Ihrem
                Fall ist eine individuelle Einschätzung erforderlich.
              </p>
              <a
                href="tel:+4930120593430"
                className="mt-8 inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition"
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
                      className="w-full py-6 flex items-start justify-between gap-6 text-left"
                    >
                      <span className="text-sm md:text-base">{f.q}</span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 mt-1" />
                      ) : (
                        <Plus className="size-4 shrink-0 mt-1" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="pb-6 text-sm text-foreground/70 leading-relaxed max-w-2xl">
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

      {/* Schnell reagieren / Vertraulich anfragen */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">Kontakt — Laufende Durchsuchung in Berlin</p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left card */}
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Schnell
                <br />
                <span className="italic text-foreground/45">reagieren.</span>
              </h2>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
                Wir kennen das Ablaufmuster und greifen sofort ein. Anwalt direkt erreichen
                oder Rückrufanfrage hinterlassen — auch außerhalb der Geschäftszeiten.
              </p>

              <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-7 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full bg-cream text-navy grid place-items-center font-serif text-xl">
                    BW
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                      Notfallkontakt
                    </p>
                    <p className="mt-1 font-serif text-xl">Benjamin C. Wenzel</p>
                  </div>
                </div>
                <p className="mt-6 text-xs text-navy-foreground/70 leading-relaxed">
                  Fachanwalt für Strafrecht
                  <br />
                  Kurfürstendamm 216, 10719 Berlin
                </p>
                <a
                  href="tel:+4930120593430"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
                >
                  <Phone className="size-4" /> 030 120 593 430
                </a>
                <p className="mt-3 text-[0.65rem] tracking-[0.2em] uppercase text-navy-foreground/55">
                  · 24/7 Notfall ·
                </p>
              </div>

              <div className="mt-4 max-w-md rounded-xl border border-border bg-secondary/40 px-5 py-4">
                <p className="text-xs text-foreground/65 leading-relaxed">
                  Notruf-Checkliste: Hausdurchsuchung
                </p>
              </div>
            </div>

            {/* Right form */}
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Vertraulich
                <br />
                <span className="italic text-blue-accent">anfragen.</span>
              </h2>

              <form className="mt-10 space-y-5 max-w-lg">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" placeholder="Ihr vollständiger Name" />
                  <Field label="Telefon" placeholder="Ihre Rückrufnummer" type="tel" />
                </div>
                <Field label="E-Mail" placeholder="Ihre E-Mail-Adresse" type="email" />
                <div>
                  <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
                    Ihr Anliegen
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Kurz schildern: Wann war die Durchsuchung? Welche Gegenstände wurden mitgenommen?"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition"
                >
                  Nachricht senden
                </button>
                <label className="flex gap-3 text-xs text-foreground/65 leading-relaxed">
                  <input type="checkbox" className="mt-0.5 accent-navy" />
                  <span>
                    Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung
                    meiner Angaben zur Kontaktaufnahme zu. Die Einwilligung kann ich
                    jederzeit mit Wirkung für die Zukunft widerrufen.
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Soforthilfe in Berlin / Jetzt strukturiert handeln */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-8">Soforthilfe in Berlin</p>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Soforthilfe
              <br />
              <span className="italic text-blue-accent">in Berlin.</span>
            </h2>
            <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
              Strafrechtskanzlei am Kurfürstendamm
              <br />
              Benjamin C. Wenzel
              <br />
              Kurfürstendamm 216, Berlin
            </p>
            <p className="mt-4 text-xs text-foreground/55">
              Sofortlinie 24/7: 030 120 593 430
            </p>
          </div>

          <div className="rounded-2xl bg-navy text-navy-foreground p-8 lg:p-10">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-4">
              Mandanten haben jetzt drei Optionen
            </p>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Jetzt strukturiert handeln.
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+4930120593430"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
              >
                <Phone className="size-4" /> Jetzt anrufen
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/10 transition"
              >
                Soforthilfe
              </a>
            </div>
            <p className="mt-6 text-[0.65rem] tracking-[0.2em] uppercase text-navy-foreground/55 text-center">
              · Verteidigung anfragen ·
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-foreground/75">
              <li className="flex items-center gap-3">
                <span className="block w-4 h-px bg-white/30" /> Akteneinsicht
              </li>
              <li className="flex items-center gap-3">
                <span className="block w-4 h-px bg-white/30" /> Rücksprache mit Ermittler
              </li>
              <li className="flex items-center gap-3">
                <span className="block w-4 h-px bg-white/30" /> Antrag
              </li>
            </ul>
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
