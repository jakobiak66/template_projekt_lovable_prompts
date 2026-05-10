import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/strafrecht-hero.jpg";

export const Route = createFileRoute("/rechtsgebiete/strafrecht-berlin")({
  head: () => ({
    meta: [
      { title: "Strafverteidiger in Berlin — Fachanwalt für Strafrecht · Wenzel" },
      {
        name: "description",
        content:
          "Fachanwalt für Strafrecht in Berlin. Erfahrene Verteidigung im Ermittlungs- und Hauptverfahren — schnell, vertraulich, strukturiert.",
      },
      {
        property: "og:title",
        content: "Strafverteidiger in Berlin — Fachanwalt für Strafrecht",
      },
      {
        property: "og:description",
        content:
          "Strukturierte Strafverteidigung in Berlin. Erstberatung, Akteneinsicht, Hauptverhandlung.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: StrafrechtBerlinPage,
});

const kernbereiche = [
  ["Verteidigung im Ermittlungsverfahren", "Akteneinsicht · Stellungnahme"],
  ["Hauptverhandlung", "Strategie · Plädoyer"],
  ["Wirtschaftsstrafrecht", "WiStG · StGB"],
  ["Verkehrsstrafrecht", "§§ 315c, 316 StGB"],
  ["Betäubungsmittelrecht", "BtMG · KCanG"],
  ["Revision & Rechtsmittelinstanzen", "BGH-erfahren"],
];

const steps = [
  ["Vorladung", "Bei jeder Vorladung als Beschuldigter zuerst schweigen — Akteneinsicht beantragen."],
  ["Hausdurchsuchung", "Maßnahme dulden, nichts erklären, sofort Verteidiger kontaktieren."],
  ["U‑Haft / Festnahme", "Schweigen, Verteidiger fordern. Haftprüfung & Beschwerde."],
  ["Einstellung anstreben", "§§ 153, 153a, 170 II StPO — wo möglich, ohne öffentliche Hauptverhandlung."],
];

const struktur = [
  ["Akte zuerst", "Keine Einlassung vor vollständiger Akteneinsicht."],
  ["Strategie schriftlich", "Verteidigungslinie wird dokumentiert und mit Mandant abgestimmt."],
  ["Beweislage prüfen", "Zeugen, Spuren, Gutachten — strukturierte Bewertung jeder Säule."],
  ["Verfahrensrecht nutzen", "§ 136 StPO, Beweisverwertungsverbote, Verfahrensrügen."],
];

const meilensteine = [
  "Erstberatung & Vollmacht",
  "Akteneinsicht & Bewertung",
  "Stellungnahme / Schriftsatz",
  "Hauptverhandlung & Plädoyer",
  "Rechtsmittel sofern indiziert",
];

const fachInfo = [
  ["Fachanwalt für Strafrecht", "Geprüfte Spezialisierung mit jährlicher Fortbildung."],
  ["Berliner Justiz vertraut", "Amts- und Landgericht Berlin, Kammergericht."],
  ["Pflicht‑ & Wahlverteidigung", "Beiordnung möglich nach §§ 140 ff. StPO."],
  ["Schnelle Erreichbarkeit", "Telefonisch innerhalb weniger Stunden, auch außerhalb der Bürozeiten."],
];

const faqs = [
  { q: "Was kostet eine Erstberatung?", a: "Die Erstberatung kostet 190 € zzgl. USt. Im Rahmen einer Mandatierung wird sie verrechnet." },
  { q: "Wie schnell sind Sie erreichbar?", a: "Telefonisch innerhalb weniger Stunden. Bei Notfällen (Festnahme, Durchsuchung) priorisiert." },
  { q: "Übernehmen Sie auch Pflichtverteidigungen?", a: "Ja — Beiordnung nach §§ 140 ff. StPO. Wir prüfen die Voraussetzungen kostenfrei." },
  { q: "Verteidigen Sie auch außerhalb Berlins?", a: "Ja, bundesweit. Schwerpunkt sind die Berliner Gerichte und das Land Brandenburg." },
];

function StrafrechtBerlinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-cream text-navy">
      <Header />

      {/* Hero with background image */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-20 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full lg:w-2/3 object-cover object-right opacity-40 lg:opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="container-x relative">
          <nav className="text-xs uppercase tracking-[0.25em] opacity-60 mb-8">
            <Link to="/">Start</Link>
            <span className="mx-2">/</span>
            <span>Rechtsgebiete</span>
            <span className="mx-2">/</span>
            <span>Strafrecht Berlin</span>
          </nav>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Strafverteidiger in Berlin —
            <br />
            <span className="italic text-blue-accent">Fachanwalt für Strafrecht</span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+4930120593430"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              <Phone className="size-4" />
              030 120 593 430
            </a>
            <Link
              to="/notfall"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              Notfall <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] opacity-60">
            <span>Fachanwalt für Strafrecht</span>
            <span>Erreichbar 24/7</span>
            <span>Kurfürstendamm 216</span>
          </div>
        </div>
      </section>

      {/* Kernbereiche */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
                Fachanwalt für Strafrecht
                <br />
                <span className="italic">auf Ihrer Seite.</span>
              </h2>
              <p className="mt-6 text-sm opacity-75 leading-relaxed">
                Strafrechtliche Verteidigung erfordert Spezialisierung,
                Erfahrung und konsequente Strukturierung jedes Verfahrens —
                vom Ermittlungsverfahren bis zur Revision.
              </p>

              <div className="mt-8 bg-navy text-navy-foreground rounded-xl p-6">
                <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60">
                  Sofort erreichbar
                </div>
                <div className="mt-2 font-serif text-2xl">
                  Direkter Draht zur Kanzlei
                </div>
                <div className="mt-1 text-sm opacity-70">Kurfürstendamm 216 · Berlin</div>
                <a
                  href="tel:+4930120593430"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
                >
                  <Phone className="size-4 text-gold" />
                  030 120 593 430
                </a>
              </div>
            </div>

            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] opacity-55 mb-6">
                ▸ Schwerpunkte der Verteidigung
              </div>
              <ul className="divide-y divide-navy/15 border-y border-navy/15">
                {kernbereiche.map(([title, sub]) => (
                  <li key={title} className="py-5 flex items-start gap-4">
                    <Check className="size-4 text-blue-accent mt-1 shrink-0" />
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-xs opacity-60 mt-0.5">{sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs opacity-55 leading-relaxed">
                Auswahl. Vollständige Übersicht in der Beratung — Mandate werden
                ausschließlich mit klarer Strategie übernommen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strafverteidigung im Ermittlungsverfahren — dark */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] max-w-3xl">
            Strafverteidigung im
            <br />
            <span className="italic text-blue-accent">Ermittlungsverfahren.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Frühzeitige Verteidigung entscheidet das Verfahren. Die ersten
            Stunden nach Vorladung, Festnahme oder Durchsuchung sind
            verfahrensentscheidend.
          </p>

          <div className="mt-12">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
              ▸ Soforthilfen
            </div>
            <ul className="grid sm:grid-cols-2 gap-px bg-navy-foreground/15 border border-navy-foreground/15">
              {steps.map(([t, d]) => (
                <li key={t} className="bg-navy p-6">
                  <div className="font-serif text-lg">{t}</div>
                  <div className="mt-2 text-sm opacity-70 leading-relaxed">{d}</div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs opacity-60 max-w-2xl leading-relaxed">
              Die Reihenfolge ist nicht bindend — entscheidend ist die
              individuelle Lagebewertung. Nehmen Sie vor jeder Aussage Kontakt
              auf.
            </p>
          </div>

          <div className="mt-14">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
              ▸ Vorwurfssituationen
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "BtM‑Vorwürfe — Besitz / Handel",
                "Körperverletzung & Gewaltdelikte",
                "Sexualdelikte — sensibel & vertraulich",
                "Wirtschafts‑ und Vermögensdelikte",
              ].map((v) => (
                <div
                  key={v}
                  className="flex items-center gap-3 border border-navy-foreground/15 rounded-full px-5 py-3 text-sm"
                >
                  <span className="size-1.5 rounded-full bg-gold" />
                  {v}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs opacity-55 max-w-2xl leading-relaxed">
              Jeder Vorwurf wird individuell bewertet. Eine Mandatsannahme
              erfolgt nur, wenn eine konsequente Verteidigung gewährleistet
              werden kann.
            </p>
          </div>
        </div>
      </section>

      {/* Strafverteidigung mit Struktur */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
                Strafverteidigung
                <br />
                <span className="italic">mit Struktur.</span>
              </h2>
              <div className="mt-10 text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
                ▸ Vier Prinzipien der Verteidigung
              </div>
              <ul className="space-y-6">
                {struktur.map(([t, d]) => (
                  <li key={t} className="border-l-2 border-blue-accent pl-5">
                    <div className="font-serif text-lg">{t}</div>
                    <div className="mt-1 text-sm opacity-70 leading-relaxed">{d}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-75 leading-relaxed">
                Strukturierte Verteidigung bedeutet, dass jede prozessuale
                Entscheidung nachvollziehbar begründet ist und einem
                übergeordneten Verteidigungsziel folgt — kein Aktionismus,
                keine Improvisation.
              </p>
              <p className="mt-4 text-sm opacity-75 leading-relaxed">
                Mandanten werden in jeden wesentlichen Schritt eingebunden und
                erhalten eine schriftlich nachvollziehbare Strategie.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-navy/55">
            {[
              "Akteneinsicht",
              "Beweismittelprüfung",
              "Strategie",
              "Hauptverhandlung",
              "Plädoyer",
              "Revision",
            ].map((b, i, arr) => (
              <span key={b} className="flex items-center gap-2">
                <span>{b}</span>
                {i < arr.length - 1 && <span>›</span>}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
              ▸ Meilensteine
            </div>
            <ol className="grid md:grid-cols-2 gap-3">
              {meilensteine.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-4 border-y border-navy/10 py-4"
                >
                  <span className="font-serif text-lg text-gold w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Fachanwalt für Strafrecht — dark cards */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Fachanwalt für
            <br />
            <span className="italic text-blue-accent">Strafrecht.</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-navy-foreground/15 border border-navy-foreground/15">
            {fachInfo.map(([t, d]) => (
              <div key={t} className="bg-navy p-7">
                <div className="font-serif text-xl">{t}</div>
                <div className="mt-3 text-sm opacity-70 leading-relaxed">{d}</div>
              </div>
            ))}
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
          <div className="mt-10 flex gap-2">
            <button className="px-3 py-1.5 rounded-full bg-navy text-navy-foreground text-[0.65rem] uppercase tracking-[0.2em]">
              Allgemein
            </button>
          </div>

          <div className="mt-8 divide-y divide-navy/15 border-y border-navy/15">
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

      {/* Früh handeln */}
      <section className="bg-cream pb-12">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Früh handeln.
            <br />
            <span className="italic">Besser verteidigen.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75 leading-relaxed">
            Je früher die Verteidigung beginnt, desto mehr Verfahrensoptionen
            bleiben erhalten.
          </p>

          <div className="mt-8 bg-navy text-navy-foreground rounded-2xl p-8">
            <div className="flex items-start gap-5">
              <div className="size-14 rounded-full bg-cream/10 grid place-items-center font-serif text-xl">
                BW
              </div>
              <div>
                <div className="font-serif text-2xl">Benjamin C. Wenzel</div>
                <div className="mt-1 text-sm opacity-70">
                  Fachanwalt für Strafrecht
                  <br />
                  Kurfürstendamm 216 · 10719 Berlin
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="tel:+4930120593430" className="inline-flex items-center gap-2 font-medium">
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

      {/* Rückruf */}
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
              <input className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                Telefon
              </label>
              <input className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
                E‑Mail (optional)
              </label>
              <input className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
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

      {/* CTA */}
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
