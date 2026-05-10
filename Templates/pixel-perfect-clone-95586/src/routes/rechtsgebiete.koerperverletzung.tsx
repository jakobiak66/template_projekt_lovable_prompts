import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/koerperverletzung-hero.jpg";

export const Route = createFileRoute("/rechtsgebiete/koerperverletzung")({
  head: () => ({
    meta: [
      { title: "Körperverletzung — Anwalt Berlin · Wenzel" },
      {
        name: "description",
        content:
          "Strafverteidigung bei Körperverletzungsdelikten in Berlin: § 223, § 224, § 226 StGB — strukturiert, diskret, durchsetzungsstark.",
      },
      { property: "og:title", content: "Körperverletzung — Anwalt Berlin" },
      {
        property: "og:description",
        content: "Verteidigung bei Vorwürfen einfacher und gefährlicher Körperverletzung.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: KoerperverletzungPage,
});

const einfache = [
  "Vorwurf einer Schlägerei / Auseinandersetzung",
  "Häusliche Streitsituation",
  "Vorwurf nach Festnahme",
];

const gefaehrliche = [
  "Mit gefährlichem Werkzeug",
  "Gemeinschaftlich begangen",
  "Hinterlistiger Überfall",
  "Lebensgefährdende Behandlung",
];

const notwehrPunkte = [
  "Gegenwärtiger rechtswidriger Angriff",
  "Erforderlichkeit der Verteidigung",
  "Verhältnismäßigkeit beachtet",
];

const ablauf = [
  "Anzeige / Strafantrag",
  "Ermittlungen",
  "Ggf. Vorladung",
  "Akteneinsicht",
  "Anklage oder Einstellung",
  "Hauptverhandlung",
];

const ausgang = [
  ["Einstellung § 153 StPO", "Geringe Schuld, kein öffentliches Interesse."],
  ["Einstellung § 153a StPO", "Auflage, z. B. Geldzahlung — keine Verurteilung."],
  ["Einstellung § 170 II", "Tatverdacht nicht hinreichend."],
  ["Verfahrenseinstellung TOA", "Täter‑Opfer‑Ausgleich nach § 46a StGB."],
];

const strafrahmen = [
  ["§ 223 StGB", "Bis 5 Jahre Freiheitsstrafe oder Geldstrafe."],
  ["§ 224 StGB — gefährliche KV", "Sechs Monate bis 10 Jahre Freiheitsstrafe."],
  ["§ 226 StGB — schwere KV", "Ab 1 Jahr Freiheitsstrafe."],
];

const strategie = [
  ["Beweismittel zerlegen", "Zeugenwidersprüche, Verletzungsbild, Spuren."],
  ["Notwehr begründen", "Strukturierte Notwehrlage darstellen."],
  ["TOA prüfen", "Täter‑Opfer‑Ausgleich vor Hauptverhandlung."],
  ["Strafmilderung", "Geständnis taktisch & nur wenn beweisrechtlich indiziert."],
];

const faqs = [
  { q: "Wann ist es eine 'gefährliche' Körperverletzung?", a: "Wenn die Tat mit gefährlichem Werkzeug, gemeinschaftlich, hinterlistig oder lebensgefährdend begangen wird (§ 224 StGB)." },
  { q: "Reicht eine Ohrfeige für eine Anzeige?", a: "Ja — bereits eine Ohrfeige kann § 223 StGB erfüllen. Strafantrag innerhalb von 3 Monaten erforderlich." },
  { q: "Was bringt ein Täter‑Opfer‑Ausgleich?", a: "Erhebliche Strafmilderung oder Einstellung — § 46a StGB." },
  { q: "Was tun nach Vorladung?", a: "Schweigen, keine Aussage ohne Akteneinsicht, sofort Verteidiger kontaktieren." },
];

function KoerperverletzungPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-cream text-navy">
      <Header />

      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground pt-32 pb-20 overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full lg:w-2/3 object-cover object-right opacity-40 lg:opacity-55"
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
            <span>Körperverletzung</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Körperverletzung
            <br />
            <span className="italic text-blue-accent">Anwalt Berlin</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Verteidigung bei Vorwürfen nach §§ 223, 224, 226 StGB —
            strukturierte Bewertung der Beweislage, frühzeitige Strategie.
          </p>
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
            <span>§ 223 StGB</span>
            <span>§ 224 StGB</span>
            <span>§ 226 StGB</span>
          </div>
        </div>
      </section>

      {/* Einfache vs. gefährliche Körperverletzung */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Einfache vs. gefährliche
            <br />
            <span className="italic">Körperverletzung</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Die Abgrenzung entscheidet über Strafrahmen und prozessuale
            Optionen. Während die einfache Körperverletzung mit Geldstrafe
            enden kann, droht bei § 224 StGB eine Mindeststrafe von sechs
            Monaten Freiheitsstrafe.
          </p>

          <div className="mt-8 bg-navy text-navy-foreground rounded-xl p-6 max-w-xl">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60">
              Vertraulich beraten lassen
            </div>
            <a href="tel:+4930120593430" className="mt-3 flex items-center gap-2 text-sm font-medium">
              <Phone className="size-4 text-gold" />
              030 120 593 430
            </a>
            <div className="mt-1 text-xs opacity-60">Diskret &amp; sofort</div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="border border-navy/15 rounded-xl p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blue-accent mb-3">
                Einfache Körperverletzung
              </div>
              <ul className="space-y-3">
                {einfache.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-navy/15 rounded-xl p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blue-accent mb-3">
                Gefährliche Körperverletzung
              </div>
              <ul className="space-y-3">
                {gefaehrliche.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notwehr und Beweisfragen — dark */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
                Notwehr und
                <br />
                <span className="italic text-blue-accent">Beweisfragen.</span>
              </h2>
              <p className="mt-6 text-sm opacity-75 leading-relaxed">
                In nahezu jedem Verfahren zur Körperverletzung steht eine
                Notwehr‑ oder Provokationssituation im Raum. Entscheidend ist
                die Rekonstruktion der Tat anhand der vorhandenen Beweismittel.
              </p>

              <ul className="mt-8 space-y-3">
                {notwehrPunkte.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-y border-navy-foreground/10 py-3 text-sm">
                    <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-xs opacity-60 leading-relaxed">
                Weitere Aspekte: Notwehrexzess (§ 33 StGB),
                Putativnotwehr, Notstand (§ 34 StGB).
              </div>

              <div className="mt-8">
                <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-55 mb-3">
                  ▸ Beweismittel
                </div>
                <ul className="space-y-2 text-sm">
                  {["Zeugenaussagen", "Ärztliche Atteste", "Foto‑/Videodokumentation"].map((b) => (
                    <li key={b} className="flex items-center justify-between border-b border-navy-foreground/10 py-2">
                      <span>{b}</span>
                      <span className="opacity-50 text-xs">prüfen</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-navy">
              <img src={heroImg} alt="" loading="lazy" width={1920} height={1080} className="w-full h-72 object-cover" />
              <div className="p-5 text-xs opacity-65">
                Tat‑ und Beweissituation — strukturierte Auswertung.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf des Strafverfahrens */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Ablauf des
            <br />
            <span className="italic">Strafverfahrens</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75">
            Vom Strafantrag bis zur Hauptverhandlung — die typischen Stationen.
          </p>

          <ol className="mt-10 grid sm:grid-cols-2 gap-3">
            {ablauf.map((s, i) => (
              <li key={s} className="flex items-start gap-4 border-y border-navy/10 py-3">
                <span className="font-serif text-gold w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Nicht jedes Verfahren endet mit Verurteilung */}
      <section className="bg-cream pb-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Nicht jedes Verfahren
            <br />
            <span className="italic">endet mit Verurteilung.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75 leading-relaxed">
            In vielen Konstellationen lassen sich Verfahren durch Einstellungen
            oder den Täter‑Opfer‑Ausgleich beenden — ohne öffentliche
            Hauptverhandlung.
          </p>
          <ul className="mt-8 grid md:grid-cols-2 gap-4">
            {ausgang.map(([t, d]) => (
              <li key={t} className="border border-navy/15 rounded-lg p-5">
                <div className="font-serif text-lg">{t}</div>
                <div className="mt-1 text-xs opacity-65">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strafrahmen nach § 223 und § 224 StGB — dark */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Strafrahmen nach
            <br />
            <span className="italic text-blue-accent">§ 223 und § 224 StGB</span>
          </h2>
          <ul className="mt-12 divide-y divide-navy-foreground/15 border-y border-navy-foreground/15">
            {strafrahmen.map(([t, d]) => (
              <li key={t} className="py-5 grid md:grid-cols-[1fr_2fr] gap-4 items-baseline">
                <div className="font-serif text-lg">{t}</div>
                <div className="text-sm opacity-75">{d}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid sm:grid-cols-3 gap-px bg-navy-foreground/15 border border-navy-foreground/15">
            {[
              ["Mindeststrafe § 224", "6 Monate"],
              ["Höchststrafe § 224", "10 Jahre"],
              ["Antragsdelikt § 223", "3 Monate Frist"],
            ].map(([k, v]) => (
              <div key={k} className="bg-navy p-5">
                <div className="text-[0.65rem] uppercase tracking-[0.2em] opacity-55">{k}</div>
                <div className="mt-2 font-serif text-xl text-gold">{v}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs opacity-55 max-w-2xl">
            Strafrahmen können durch Versuch (§ 23 StGB) und besondere
            persönliche Merkmale modifiziert werden.
          </p>
        </div>
      </section>

      {/* Verteidigungsstrategie */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Verteidigungsstrategie
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {strategie.map(([t, d]) => (
              <li key={t} className="border border-navy/15 rounded-xl p-6">
                <div className="font-serif text-lg">{t}</div>
                <div className="mt-2 text-sm opacity-75 leading-relaxed">{d}</div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs opacity-55 max-w-2xl">
            Welche Strategie sinnvoll ist, ergibt sich erst nach
            Akteneinsicht und Beweismittelbewertung.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream pb-24">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Häufige
            <br />
            <span className="italic">Fragen.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75">
            Antworten zu typischen Konstellationen bei Körperverletzungsdelikten.
          </p>
          <div className="mt-10 divide-y divide-navy/15 border-y border-navy/15">
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

      {/* Früh beraten */}
      <section className="bg-cream pb-12">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Früh beraten.
            <br />
            <span className="italic">Besser verteidigt.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75">
            Frühzeitige Beratung bewahrt Verfahrensoptionen.
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
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">Vor- &amp; Nachname</label>
              <input className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">Telefon</label>
              <input className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
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
