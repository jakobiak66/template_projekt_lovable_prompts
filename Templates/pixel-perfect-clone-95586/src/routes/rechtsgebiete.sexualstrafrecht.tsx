import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus, Minus, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/sexualstrafrecht-hero.jpg";

export const Route = createFileRoute("/rechtsgebiete/sexualstrafrecht")({
  head: () => ({
    meta: [
      { title: "Sexualstrafrecht — Anwalt Berlin · Wenzel" },
      {
        name: "description",
        content:
          "Strafverteidigung im Sexualstrafrecht in Berlin: §§ 174 ff. StGB — diskret, strategisch, frühzeitige Akteneinsicht.",
      },
      { property: "og:title", content: "Sexualstrafrecht — Anwalt Berlin" },
      {
        property: "og:description",
        content: "Verteidigung bei Vorwürfen aus dem Sexualstrafrecht.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: SexualstrafrechtPage,
});

const tatvorwurf = [
  "Sexueller Missbrauch (§§ 174 ff. StGB)",
  "Sexuelle Nötigung / Vergewaltigung (§ 177 StGB)",
  "Verbreitung pornographischer Inhalte (§§ 184 ff. StGB)",
];

const erstmassnahmen = [
  ["Schweigen wahren", "Keine Aussage gegenüber Polizei ohne Verteidigung."],
  ["Verteidiger kontaktieren", "Bevor weitere Ermittlungsmaßnahmen erfolgen."],
  ["Akteneinsicht beantragen", "Kenntnis der Beweislage vor jeder Stellungnahme."],
];

const aussage = [
  "Glaubhaftigkeitsanalyse",
  "Aussagekonstanz prüfen",
  "Motivlage hinterfragen",
  "Fremdsuggestion ausschließen",
  "Belastungstendenzen erkennen",
];

const strafmassnahmen = [
  "Strukturierte Aktenanalyse",
  "Sachverständigenkritik",
  "Zeugenbefragung vorbereiten",
  "Beweisanträge formulieren",
  "Verfahrenseinstellung anstreben",
];

const ablauf = [
  ["Anzeige", "Strafanzeige bei Polizei oder Staatsanwaltschaft."],
  ["Ermittlungen", "Vernehmungen, Durchsuchungen, Sicherstellungen."],
  ["Akteneinsicht", "Strukturierte Bewertung aller Beweismittel."],
  ["Anklage", "oder Einstellung nach §§ 153, 170 II StPO."],
  ["Hauptverhandlung", "Beweisaufnahme, ggf. unter Ausschluss der Öffentlichkeit."],
];

const verteidigung = [
  "Aussage gegen Aussage entkräften",
  "Glaubhaftigkeitsgutachten beantragen",
  "Belastende Indizien relativieren",
  "Strafmilderungsgründe herausarbeiten",
];

const faqs = [
  { q: "Was tun bei einer Vorladung als Beschuldigter?", a: "Termin nicht wahrnehmen, keine Aussage tätigen, sofort einen Strafverteidiger einschalten und Akteneinsicht beantragen." },
  { q: "Wird das Verfahren öffentlich verhandelt?", a: "Im Sexualstrafrecht kann die Öffentlichkeit ausgeschlossen werden (§ 171b GVG) — insbesondere zum Schutz der Intimsphäre." },
  { q: "Welche Rolle spielt das Glaubhaftigkeitsgutachten?", a: "Bei Aussage gegen Aussage ist die aussagepsychologische Begutachtung oft entscheidend für den Verfahrensausgang." },
  { q: "Wie lange dauert ein solches Verfahren?", a: "Je nach Komplexität mehrere Monate bis über ein Jahr — frühzeitige Verteidigung verkürzt die Belastung." },
];

function SexualstrafrechtPage() {
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
            <span>Sexualstrafrecht</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Sexualstrafrecht
            <br />
            <span className="italic text-blue-accent">Anwalt Berlin.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Diskrete und strategische Verteidigung bei Vorwürfen nach
            §§ 174 ff. StGB. Frühzeitige Akteneinsicht entscheidet über
            den weiteren Verfahrensverlauf.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:+4930120593430" className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm uppercase tracking-[0.2em]">
              <Phone className="size-4" />
              Kontakt
            </a>
            <Link to="/notfall" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              Notfall <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] opacity-60">
            <span>§ 174 StGB</span>
            <span>§ 177 StGB</span>
            <span>§ 184 StGB</span>
          </div>
        </div>
      </section>

      {/* Tatvorwurf und rechtliche Einordnung */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Tatvorwurf und
            <br />
            <span className="italic">rechtliche Einordnung</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Vorwürfe aus dem Sexualstrafrecht erfordern eine besonders
            sorgfältige Prüfung der Tatbestandsmerkmale. Schon kleine
            Unterschiede in Aussage oder Beweislage entscheiden über den
            anzuwendenden Paragrafen — und damit den Strafrahmen.
          </p>

          <div className="mt-10">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blue-accent mb-4">
              Häufige Tatvorwürfe
            </div>
            <ul className="space-y-3">
              {tatvorwurf.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm border-b border-navy/10 pb-3">
                  <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blue-accent mb-4">
              Erste Maßnahmen
            </div>
            <ul className="space-y-3">
              {erstmassnahmen.map(([t, d]) => (
                <li key={t} className="grid sm:grid-cols-[1fr_2fr] gap-3 border-b border-navy/10 pb-3 text-sm">
                  <span className="font-serif">{t}</span>
                  <span className="opacity-70">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 bg-navy text-navy-foreground rounded-xl p-6 max-w-xl">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] opacity-60">
              Vertraulich beraten lassen
            </div>
            <a href="tel:+4930120593430" className="mt-3 flex items-center gap-2 text-sm font-medium">
              <Phone className="size-4 text-gold" />
              030 120 593 430
            </a>
            <div className="mt-1 text-xs opacity-60">Diskret &amp; sofort</div>
          </div>
        </div>
      </section>

      {/* Aussage gegen Aussage */}
      <section className="bg-cream pb-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Aussage gegen
            <br />
            <span className="italic">Aussage.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            In vielen Sexualstrafverfahren steht die Aussage des
            Belastungszeugen gegen die Einlassung des Beschuldigten. Die
            aussagepsychologische Bewertung wird zur entscheidenden Größe
            der Beweiswürdigung.
          </p>

          <div className="mt-10">
            <div className="text-[0.65rem] uppercase tracking-[0.25em] text-blue-accent mb-4">
              Prüfkriterien
            </div>
            <ul className="space-y-3">
              {aussage.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm border-b border-navy/10 pb-3">
                  <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Strafrahmen — dark */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Strafrahmen im
            <br />
            <span className="italic text-blue-accent">Sexualstrafrecht</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm opacity-75 leading-relaxed">
            Die Strafandrohung reicht von Geldstrafe bis hin zu langjährigen
            Freiheitsstrafen. Bei besonders schweren Fällen drohen
            Mindeststrafen ab zwei oder fünf Jahren.
          </p>

          <ul className="mt-10 space-y-3">
            {strafmassnahmen.map((s) => (
              <li key={s} className="flex items-start gap-3 border-y border-navy-foreground/10 py-3 text-sm">
                <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h3 className="font-serif text-2xl">Vorwurf nach <span className="italic text-blue-accent">§ 184 StGB</span></h3>
            <p className="mt-4 max-w-2xl text-sm opacity-75 leading-relaxed">
              Verbreitung, Erwerb und Besitz pornographischer Inhalte —
              insbesondere mit Bezug zu Minderjährigen — werden konsequent
              verfolgt. Schon der Besitz kann strafbar sein.
            </p>
            <div className="mt-6 text-xs opacity-65 border-t border-navy-foreground/15 pt-4">
              Hinweis: Bei Hausdurchsuchungen werden regelmäßig Datenträger
              sichergestellt — keine Aussage ohne anwaltliche Beratung.
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf des Ermittlungsverfahrens */}
      <section className="bg-cream py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Ablauf des
            <br />
            <span className="italic">Ermittlungsverfahrens</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75">
            Vom Anfangsverdacht bis zur Hauptverhandlung — die typischen
            Stationen eines Sexualstrafverfahrens.
          </p>

          <ol className="mt-10 space-y-4">
            {ablauf.map(([t, d], i) => (
              <li key={t} className="flex items-start gap-5 border-y border-navy/10 py-4">
                <span className="font-serif text-gold w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-serif text-lg">{t}</div>
                  <div className="text-sm opacity-70 mt-1">{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Verteidigungsstrategie */}
      <section className="bg-cream pb-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Verteidigungs-
            <br />
            <span className="italic">strategie</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm opacity-75 leading-relaxed">
            Jede Verteidigung im Sexualstrafrecht beginnt mit der
            strukturierten Aktenauswertung. Erst dann lässt sich
            entscheiden, ob Schweigen, Einlassung oder Beweisantrag
            taktisch sinnvoll sind.
          </p>

          <ul className="mt-8 space-y-3">
            {verteidigung.map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm border-b border-navy/10 pb-3">
                <Check className="size-4 text-blue-accent mt-0.5 shrink-0" />
                {v}
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-xl">
            <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">
              Vertrauliche Erstanfrage
            </label>
            <input
              type="email"
              placeholder="Ihre E‑Mail-Adresse"
              className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy"
            />
            <button className="mt-4 px-6 py-2.5 rounded-full bg-navy text-navy-foreground text-xs uppercase tracking-[0.2em]">
              Anfragen
            </button>
          </div>
        </div>
      </section>

      {/* Individuell — dark */}
      <section className="bg-navy text-navy-foreground py-24">
        <div className="container-x">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Individuell.
            <br />
            <span className="italic text-blue-accent">Ohne Pauschalansatz.</span>
          </h2>

          <ul className="mt-12 divide-y divide-navy-foreground/15 border-y border-navy-foreground/15">
            {[
              ["Akteneinsicht", "binnen weniger Tage"],
              ["Aussagestrategie", "individuell abgestimmt"],
              ["Sachverständige", "kritisch prüfen"],
              ["Hauptverhandlung", "präzise vorbereitet"],
            ].map(([k, v]) => (
              <li key={k} className="py-5 flex items-baseline justify-between gap-6">
                <div className="font-serif text-lg">{k}</div>
                <div className="text-sm opacity-70">{v}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid sm:grid-cols-2 gap-px bg-navy-foreground/15 border border-navy-foreground/15">
            <div className="bg-navy p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] opacity-55">U‑Haft</div>
              <div className="mt-2 font-serif text-xl text-gold">Vermeiden</div>
              <p className="mt-2 text-xs opacity-65">Haftprüfungsanträge frühzeitig stellen.</p>
            </div>
            <div className="bg-navy p-6">
              <div className="text-[0.65rem] uppercase tracking-[0.2em] opacity-55">Öffentlichkeit</div>
              <div className="mt-2 font-serif text-xl text-gold">Ausschluss</div>
              <p className="mt-2 text-xs opacity-65">§ 171b GVG schützt die Intimsphäre.</p>
            </div>
          </div>

          <p className="mt-6 text-xs opacity-55 max-w-2xl">
            Jeder Fall verlangt eine individuelle Bewertung — Schablonen
            führen im Sexualstrafrecht zu vermeidbaren Risiken.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Antworten
            <br />
            <span className="italic">auf Ihre Fragen.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75">
            Antworten auf häufige Fragen zum Sexualstrafrecht.
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

      {/* Diskrete Beratung */}
      <section className="bg-cream pb-12">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Diskrete Beratung.
            <br />
            <span className="italic">Frühe Lösungen.</span>
          </h2>
          <p className="mt-5 text-sm opacity-75">
            Vertraulichkeit und schnelle Reaktion bestimmen den Erfolg.
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

      {/* Vorabcheck */}
      <section className="bg-cream pb-28">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-5xl leading-[1.05]">
            Vorabcheck
            <br />
            <span className="italic">anfragen.</span>
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
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">E‑Mail</label>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] opacity-60">Worum geht es?</label>
              <textarea rows={3} className="mt-2 w-full bg-transparent border-b border-navy/30 py-2 text-sm focus:outline-none focus:border-navy resize-none" />
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="px-7 py-3 rounded-full bg-navy text-navy-foreground text-sm uppercase tracking-[0.2em] hover:bg-navy/90 transition">
                Vorabcheck anfragen
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
              Kontakt
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
