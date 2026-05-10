import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import btmHero from "@/assets/btm-hero.jpg";

export const Route = createFileRoute("/rechtsgebiete/betaeubungsmittelrecht")({
  head: () => ({
    meta: [
      { title: "Betäubungsmittelrecht Berlin — Fachanwalt · Wenzel" },
      {
        name: "description",
        content:
          "Verteidigung im Betäubungsmittelrecht (BtMG, KCanG) in Berlin. Diskret. Strategisch. Erfahrener Fachanwalt für Strafrecht.",
      },
      { property: "og:title", content: "Betäubungsmittelrecht Berlin — Fachanwalt" },
      {
        property: "og:description",
        content: "Strafverteidigung in BtMG-Verfahren — Berlin & bundesweit.",
      },
      { property: "og:image", content: btmHero },
    ],
  }),
  component: BtmPage,
});

const beratungsfelder = [
  "Besitz, Erwerb, Anbau",
  "Handeltreiben (§ 29 ff. BtMG)",
  "Nicht geringe Menge (§ 30a BtMG)",
  "Bandenmäßiges Handeln",
  "Cannabis & KCanG",
];

const klassischeFaelle = [
  "Polizeikontrolle mit Auffinden",
  "Postsendung / Darknet",
  "Razzia & Hausdurchsuchung",
  "Telekommunikationsüberwachung",
];

const ablauf = [
  "Festnahme oder Vorladung",
  "Sicherstellung & Auswertung",
  "Akteneinsicht",
  "Stellungnahme oder Schweigen",
  "Hauptverhandlung",
];

const horizont = [
  "Geringe Menge — Einstellung möglich",
  "Eigenbedarf — § 31a BtMG, § 153 StPO",
  "Nicht geringe Menge — Mindeststrafe ab 1 Jahr",
  "Verbrechen § 30a — Mindeststrafe ab 5 Jahren",
];

const sonderbereiche = [
  ["Cannabis", "KCanG, Erwachsene & Konsumcannabis"],
  ["Medizinalcannabis", "BtM‑Rezept, Verkehrsteilnahme"],
  ["Synthetische Drogen", "NPS / Designer-Substanzen"],
  ["Auslandsbezug", "Schmuggel · § 30 I Nr. 4 BtMG"],
];

const verteidigungSchritte = [
  ["Akte zuerst", "Keine Einlassung vor Akteneinsicht."],
  ["Beweismittel prüfen", "Sicherstellungen, Spurenakten, Gutachten."],
  ["TKÜ‑Verwertung", "Beweisverwertungsverbote § 100a/e StPO."],
  ["Quantitätsbewertung", "Wirkstoffmenge, Reinheitsgrad — entscheidend."],
];

const bigCards = [
  ["Lange Strafmaße", "BtMG sieht Verbrechensqualifikationen mit Mindeststrafen ab 5 Jahren vor."],
  ["U‑Haft‑Risiko", "Hohe Fluchtgefahr‑ und Verdunkelungsannahmen."],
  ["Gutachten zentral", "Wirkstoffanalysen, BAK, Konsumeinordnung — entscheidend."],
  ["Asset‑Recovery", "Vermögensabschöpfung nach §§ 73 ff. StGB."],
];

const faqs = [
  { q: "Wie viel Cannabis ist legal?", a: "Erwachsene dürfen nach KCanG bis zu 25 g im öffentlichen Raum und 50 g zu Hause besitzen." },
  { q: "Was ist eine 'nicht geringe Menge'?", a: "Wirkstoffabhängig — bei THC z. B. 7,5 g THC. Ab dann § 29a BtMG, Mindeststrafe ein Jahr." },
  { q: "Ist Schweigen sinnvoll?", a: "In BtMG‑Verfahren fast immer ja — bis zur vollständigen Akteneinsicht." },
  { q: "Was passiert bei Postsendungen?", a: "Zollbeschlagnahme + Strafverfahren. Schnelles Handeln zur Verteidigung essenziell." },
];

function BtmPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-cream text-navy">
      <Header />

      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-20 overflow-hidden">
        <img
          src={btmHero}
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
            <span>Betäubungsmittelrecht</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Fachanwalt für
            <br />
            <span className="italic text-blue-accent">Betäubungsmittelrecht</span>
            <br />
            in Berlin
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:+4930120593430" className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm uppercase tracking-[0.2em]">
              <Phone className="size-4" />
              Beratung
            </a>
            <Link to="/notfall" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              Notfall <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] opacity-60">
            <span>BtMG · KCanG</span>
            <span>Diskret · Vertraulich</span>
            <span>Berlin & bundesweit</span>
          </div>
        </div>
      </section>

      {/* Diskret. Strategisch. */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Diskret.
            <br />
            <span className="italic">Strategisch.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Verfahren nach dem Betäubungsmittelgesetz sind regelmäßig
            verfahrensrechtlich komplex und mit erheblichen Strafdrohungen
            verbunden. Die Verteidigung beginnt mit Akteneinsicht und einer
            präzisen Bewertung der Beweislage.
          </p>

          <div className="mt-8 bg-navy text-navy-foreground rounded-xl p-6 max-w-xl">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60">
              Soforthilfe bei BtMG‑Vorwürfen
            </div>
            <a href="tel:+4930120593430" className="mt-3 flex items-center gap-2 text-sm font-medium">
              <Phone className="size-4 text-gold" />
              030 120 593 430
            </a>
            <div className="mt-1 text-xs opacity-60">Vertraulich · 24/7</div>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] opacity-55 mb-4">
                ▸ Beratungs- &amp; Verteidigungsfelder
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                Vollständiges Spektrum des materiellen und prozessualen
                Betäubungsmittelrechts.
              </p>
              <ul className="mt-5 space-y-3">
                {beratungsfelder.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-xs uppercase tracking-[0.2em] border-b border-navy/40 pb-1">
                Beratungsanfrage senden
              </button>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] opacity-55 mb-4">
                ▸ Klassische Verfahrenstypen
              </div>
              <p className="text-sm opacity-75 leading-relaxed">
                Welche Konstellationen begegnen uns am häufigsten?
              </p>
              <ul className="mt-5 space-y-3">
                {klassischeFaelle.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-navy/15 divide-y divide-navy/15">
            {[
              "Mehr zu Verfahrensphasen anzeigen",
              "Mehr zu Strafmaßen anzeigen",
            ].map((t) => (
              <button key={t} className="w-full py-4 flex items-center justify-between text-sm">
                <span>{t}</span>
                <Plus className="size-4 opacity-60" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf von Betäubungsmittel… (dark) */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Einfahr von
            <br />
            <span className="italic text-blue-accent">Betäubungsmitteln.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Verfahrensphasen — von der ersten Maßnahme bis zur Hauptverhandlung.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
                ▸ Verfahrensablauf
              </div>
              <ol className="space-y-3">
                {ablauf.map((s, i) => (
                  <li key={s} className="flex items-start gap-4 border-y border-navy-foreground/10 py-3">
                    <span className="font-serif text-gold w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
                ▸ Horizont — Strafrahmen
              </div>
              <ul className="space-y-3">
                {horizont.map((h) => (
                  <li key={h} className="flex items-start gap-3 border-y border-navy-foreground/10 py-3 text-sm">
                    <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ruhe bewahren. Sofort agieren. */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Ruhe bewahren.
            <br />
            <span className="italic">Sofort agieren.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75 leading-relaxed">
            Die ersten 24 Stunden entscheiden den Aufbau der Verteidigung.
          </p>

          <div className="mt-10 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-stretch">
            <div className="rounded-xl overflow-hidden bg-navy">
              <img src={btmHero} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
            <div className="bg-navy text-navy-foreground rounded-xl p-7">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-4">
                ▸ Soforthilfen
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Schweigen",
                  "Keine Einlassung gegenüber Polizei",
                  "Verteidiger sofort kontaktieren",
                  "Keine Einwilligung in Durchsuchung",
                  "Keine Spontanaussage",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 border-b border-navy-foreground/10 pb-3">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <a href="tel:+4930120593430" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                <Phone className="size-4 text-gold" />
                030 120 593 430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sonderbereiche im Betäubungsmittelrecht */}
      <section className="bg-cream pb-24">
        <div className="container-x">
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">
            Sonderbereiche im
            <br />
            <span className="italic">Betäubungsmittelrecht.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75">
            Spezialkonstellationen mit eigenen prozessualen Anforderungen.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {sonderbereiche.map(([t, d]) => (
              <li key={t} className="border border-navy/15 rounded-lg p-5">
                <div className="font-serif text-lg">{t}</div>
                <div className="mt-1 text-xs opacity-65">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Verteidigung strategisch */}
      <section className="bg-cream pb-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Verteidigung
            <br />
            <span className="italic">strategisch.</span>
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-navy/55">
            {["Akte", "Beweislage", "Strategie", "Hauptverhandlung", "Plädoyer", "Revision"].map((b, i, a) => (
              <span key={b} className="flex items-center gap-2">
                <span>{b}</span>
                {i < a.length - 1 && <span>›</span>}
              </span>
            ))}
          </div>

          <ul className="mt-10 divide-y divide-navy/15 border-y border-navy/15">
            {verteidigungSchritte.map(([t, d]) => (
              <li key={t} className="py-5 grid md:grid-cols-[1fr_2fr] gap-4">
                <div className="font-serif text-lg">{t}</div>
                <div className="text-sm opacity-75">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BtMG-Verfahren sind anspruchsvoll. */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            BtMG‑Verfahren sind
            <br />
            <span className="italic text-blue-accent">anspruchsvoll.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-navy-foreground/15 border border-navy-foreground/15">
            {bigCards.map(([t, d]) => (
              <div key={t} className="bg-navy p-7">
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{t}</div>
                <div className="mt-3 text-sm opacity-75 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antworten auf Ihre Fragen / FAQ */}
      <section className="bg-cream py-24">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Antworten
            <br />
            <span className="italic">auf Ihre Fragen.</span>
          </h2>
          <div className="mt-8 flex gap-2">
            <button className="px-3 py-1.5 rounded-full bg-navy text-navy-foreground text-[0.65rem] uppercase tracking-[0.2em]">
              BtMG &amp; KCanG
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
                    {isOpen ? <Minus className="size-4 opacity-60 shrink-0" /> : <Plus className="size-4 opacity-60 shrink-0" />}
                  </button>
                  {isOpen && (
                    <p className="pb-6 -mt-1 text-sm opacity-75 leading-relaxed pr-12">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Früh handeln / Kontaktkarte */}
      <section className="bg-cream pb-12">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Früh handeln.
            <br />
            <span className="italic">Besser verteidigen.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75">
            Je früher die Verteidigung beginnt, desto mehr Verfahrensoptionen bleiben erhalten.
          </p>
          <div className="mt-8 bg-navy text-navy-foreground rounded-2xl p-8">
            <div className="flex items-start gap-5">
              <div className="size-14 rounded-full bg-cream/10 grid place-items-center font-serif text-xl">BW</div>
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
              <a href="mailto:kanzlei@anwalt-wenzel.de" className="opacity-75 hover:opacity-100 transition">
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
            {[
              ["Vor- & Nachname", "text"],
              ["Telefon", "tel"],
            ].map(([l, t]) => (
              <div key={l}>
                <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">{l}</label>
                <input type={t} className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">E‑Mail (optional)</label>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">Worum geht es?</label>
              <textarea rows={3} className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy resize-none" />
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="px-7 py-3 rounded-full bg-navy text-navy-foreground text-sm uppercase tracking-[0.2em] hover:bg-navy/90 transition">
                Rückruf anfordern
              </button>
              <p className="mt-5 text-xs opacity-60 leading-relaxed border-t border-navy/15 pt-4">
                Mit Absenden akzeptieren Sie die <a className="underline" href="/datenschutz">Datenschutzerklärung</a>. Ihre Anfrage ist mandatsbezogen vertraulich.
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
            <p className="mt-2 text-sm opacity-65">Telefonisch erreichbar · vertraulich · ohne Verzögerung.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+4930120593430" className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm uppercase tracking-[0.2em]">
              <Phone className="size-4" />
              030 120 593 430
            </a>
            <Link to="/kontakt" className="inline-flex items-center rounded-full border border-navy-foreground/30 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
