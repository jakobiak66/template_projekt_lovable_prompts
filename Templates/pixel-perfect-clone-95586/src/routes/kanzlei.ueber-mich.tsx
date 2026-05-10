import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus } from "lucide-react";

export const Route = createFileRoute("/kanzlei/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Benjamin C. Wenzel · Fachanwalt für Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Benjamin C. Wenzel — Fachanwalt für Strafrecht in Berlin. Konsequente Spezialisierung, persönliche Beratung und konsequente Verteidigung am Kurfürstendamm.",
      },
      { property: "og:title", content: "Über mich — Kanzlei Wenzel Berlin" },
      {
        property: "og:description",
        content:
          "Persönliches Profil, Spezialisierung und Verteidigungsphilosophie von Benjamin C. Wenzel.",
      },
    ],
  }),
  component: UeberMichPage,
});

const stats = [
  { v: "15+", l: "Jahre" },
  { v: "Berlin", l: "Standort" },
  { v: "Fachanwalt", l: "Strafrecht" },
];

const verfahren = [
  "Vermögens­strafrecht",
  "Betäubungsmittel",
  "Jugend- und Erwachsenen­strafrecht",
  "Internetrecht & Cyberstrafrecht",
  "Verkehrsstrafrecht & Ordnungs­widrigkeiten",
  "Sexual­strafrecht",
];

const erfahrung = [
  { l: "Tätigkeitsbereiche", v: "Strafrecht" },
  { l: "Landgerichtsbezirk", v: "Berlin & Brandenburg" },
  { l: "Sammelnde Verfahren", v: "BtM, Wirtschaft" },
  { l: "Dauer der Strafverteidigung", v: "Seit 2009" },
];

const erfahrungBox = [
  "Strafprozessordnung (StPO)",
  "Beweisrecht & Verwertungsverbote",
  "Akteneinsicht & Beweisanträge",
  "Hauptverhandlung & Revisionsverfahren",
];

const aktuell = [
  { l: "Aktuelle Verfahrenslage", v: "BtM-Komplex Berlin" },
  { l: "Schwerpunkt aktuelles Verfahren", v: "Akte XXL — Hauptverfahren" },
  { l: "Eingehende Mandate", v: "Telefonisch & Onlinebanking" },
  { l: "Verfügbarkeit", v: "n. Vereinbarung" },
  { l: "Region", v: "Berlin & Brandenburg" },
  { l: "Honorar", v: "ab 250 €/h zzgl." },
];

function UeberMichPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-28 lg:pt-36 pb-12 lg:pb-16">
        <div className="container-x grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <p className="eyebrow text-navy-foreground/55 mb-8">
              ◆ Strafverteidiger · Berlin
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              Benjamin C.
              <br />
              Wenzel
            </h1>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-navy-foreground/65">
              Strafrecht ausschließlich, durchgängig und seit über 15 Jahren in Berlin.
              Konsequente Spezialisierung schafft die Grundlage konsequenter Verteidigung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+4930120593430"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
              >
                <Phone className="size-4" /> 030 120 593 430
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/10 transition"
              >
                Kontakt aufnehmen
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.v} className="border-t border-white/15 pt-4">
                  <dt className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                    {s.l}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                alt="Benjamin C. Wenzel"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-right text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/45">
              Berlin · Kurfürstendamm
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65">
        <div className="container-x py-4 text-[0.7rem] tracking-[0.2em] uppercase">
          <Link to="/" className="hover:text-navy-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Kanzlei · Über Benjamin C. Wenzel</span>
        </div>
      </div>

      {/* Konsequente Spezialisierung / Fachanwalt für Strafrecht */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">— Profil & Spezialisierung</p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Konsequente
                <br />
                <span className="italic text-foreground/45">Spezialisierung.</span>
              </h2>

              <div className="mt-10 divide-y divide-border border-t border-border">
                <Block title="Strafrecht ausschließlich.">
                  Meine Kanzlei behandelt ausschließlich strafrechtliche Mandate. Diese
                  enge Spezialisierung ermöglicht es, in jedem Fall die Tiefe der
                  Aktenkenntnis und den Verteidigungsbeitrag in voller Schärfe zu führen.
                </Block>
                <Block title="Berufliche Tätigkeit seit über 15 Jahren.">
                  Seit Beginn meiner Tätigkeit bin ich konsequent im Strafrecht
                  positioniert — vom Ermittlungsverfahren bis zur Revision, mit
                  einheitlicher Linie.
                </Block>
                <Block title="Individuelle Akzentuierung der Verteidigung.">
                  Verteidigung ist nicht nur Handwerk, sie ist auch Haltung. Ich
                  übernehme keine Mandate ohne individuelle inhaltliche Prüfung.
                </Block>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Fachanwalt
                <br />
                <span className="italic text-foreground/45">für Strafrecht.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-md">
                Der Titel „Fachanwalt für Strafrecht" wird nur bei besonderen
                theoretischen und praktischen Kenntnissen verliehen — Voraussetzung
                erheblicher Fortbildung und langjähriger anwaltlicher Tätigkeit im
                Strafrecht.
              </p>

              <dl className="mt-10 divide-y divide-border border-t border-border">
                {[
                  ["Verfahren mit besonderer Bedeutung", "über 60 Verfahren"],
                  ["Wirtschaftsstrafrecht", "Schwerpunkt"],
                  ["Cybercrime / Darknet", "Spezialisierung"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 gap-6 py-4 text-sm">
                    <dt className="text-foreground/65">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-7">
                <p className="font-serif text-xl italic leading-snug">
                  „Strafrecht ist kein Nebenbereich meiner Tätigkeit — es ist mein
                  ausschließlicher Schwerpunkt."
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Profil", "Vita", "Karriere"].map((b) => (
                    <button
                      key={b}
                      className="px-4 py-2 rounded-full text-xs border border-white/20 hover:bg-white/10 transition"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nicht Konfrontation um jeden Preis */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-10">
            — Verteidigungsphilosophie
          </p>
          <div className="max-w-3xl">
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Nicht Konfrontation
              <br />
              <span className="italic text-blue-accent">um jeden Preis.</span>
            </h2>
            <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-xl">
              Strategie schlägt Eskalation. Im Vordergrund steht ein souveränes,
              technisches und strategisches Vorgehen — niemals die unreflektierte
              Provokation.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 border-t border-white/10 pt-10">
            {[
              { t: "Akte", d: "Tiefe Aktenkenntnis ist die Grundlage jeder erfolgreichen Verteidigung." },
              { t: "Beweis", d: "Konsequente Bewertung der Beweismittel und ihrer Verwertbarkeit." },
              { t: "Kommunikation", d: "Klare Kommunikation mit Gericht, Staatsanwaltschaft und Mandant." },
              { t: "Strategie", d: "Strategische Ausrichtung, angepasst an die individuelle Verfahrenslage." },
            ].map((s) => (
              <div key={s.t}>
                <p className="font-serif text-xl">{s.t}</p>
                <p className="mt-3 text-xs text-navy-foreground/65 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-x-10 gap-y-6 border-t border-white/10 pt-6">
            {[
              ["Diskretion", "Vertraulicher Umgang mit Mandat."],
              ["Verlässlichkeit", "Klare Kommunikation und Erreichbarkeit."],
              ["Präzision", "Saubere Methodik. Klare Linie. Keine Show."],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[0.7rem] tracking-[0.2em] uppercase text-navy-foreground/55">
                  {k}
                </p>
                <p className="mt-2 text-xs text-navy-foreground/70">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensible Verfahren / Gerichtliche Erfahrung */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">— Schwerpunkte & Erfahrung</p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Sensible
                <br />
                <span className="italic text-foreground/45">Verfahren.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-md">
                Belastbare diskrete Vertretung in sensiblen oder reputationsrelevanten
                Verfahren — auch in komplexen, mehrjährigen Verfahrenslagen.
              </p>

              <ul className="mt-10 space-y-3 max-w-md">
                {verfahren.map((v) => (
                  <li
                    key={v}
                    className="flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground/80"
                  >
                    <span>— {v}</span>
                    <Plus className="size-4 text-foreground/40" />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Gerichtliche
                <br />
                <span className="italic text-foreground/45">Erfahrung.</span>
              </h2>
              <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-md">
                Über zehn Jahre Praxiserfahrung — Hauptverhandlungen vor Amts- und
                Landgerichten in Berlin, Revisionsverfahren beim Bundesgerichtshof.
              </p>

              <dl className="mt-10 divide-y divide-border border-t border-border">
                {erfahrung.map((e) => (
                  <div key={e.l} className="grid grid-cols-2 gap-6 py-4 text-sm">
                    <dt className="text-foreground/65">{e.l}</dt>
                    <dd className="text-right">{e.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 rounded-2xl bg-cream p-6">
                <ul className="space-y-3 text-sm text-foreground/75">
                  {erfahrungBox.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span className="block w-3 h-px bg-foreground/40 mt-2.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs italic text-foreground/65 leading-relaxed">
                  Sorgfältige Vorbereitung, klare juristische Argumentation, ehrliche
                  Einschätzung der Erfolgsaussichten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuell. Spezialisiert. */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-10">
            — PRAXIS, AKTUELLE VERFAHREN
          </p>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Aktuell.
                <br />
                <span className="italic text-blue-accent">Spezialisiert.</span>
              </h2>
              <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
                Ein konsistenter Ausschnitt aus laufenden Mandaten und Schwerpunkten
                der Berliner Praxis. Aktuelle Tätigkeitsschwerpunkte:
              </p>
              <ul className="mt-10 space-y-4 max-w-md">
                {[
                  ["Aktuelle Verfahrenslage", "BtM-Komplex"],
                  ["Regelmäßige Mandatslagen", "Wirtschaftsstrafrecht"],
                  ["Aktuelle Forschungsschwerpunkte", "Cybercrime"],
                ].map(([t, sub]) => (
                  <li key={t}>
                    <p className="text-sm">— {t}</p>
                    <p className="text-xs text-navy-foreground/55 mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-7">
              <dl className="divide-y divide-white/10">
                {aktuell.map((a) => (
                  <div
                    key={a.l}
                    className="grid grid-cols-2 gap-6 py-4 text-sm items-center"
                  >
                    <dt className="text-navy-foreground/55 text-xs tracking-wider uppercase">
                      {a.l}
                    </dt>
                    <dd className="text-right text-navy-foreground/85">{a.v}</dd>
                  </div>
                ))}
              </dl>
              <button className="mt-6 w-full rounded-full bg-cream text-navy py-3 text-sm hover:bg-white transition">
                Mandat anfragen
              </button>
              <p className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-navy-foreground/45 text-center">
                Eine konkrete Übernahme erst nach Aktenprüfung und Konfliktprüfung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ich berate persönlich / Kontakt aufnehmen */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">— Kontakt</p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Ich berate
                <br />
                <span className="italic text-foreground/45">persönlich.</span>
              </h2>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
                Ein konzeptioneller Schritt für Sie und meine Mandanten ist ein
                persönliches Gespräch — diskret, vertraulich, sachlich.
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
                {[
                  "Strafverteidiger Berlin",
                  "Erstkontakt aufnehmen",
                  "Kanzlei besuchen",
                ].map((b) => (
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
                Kontakt
                <br />
                <span className="italic text-foreground/45">aufnehmen.</span>
              </h2>

              <form className="mt-10 space-y-5 max-w-lg">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Vor- und Nachname" placeholder="Ihr vollständiger Name" />
                  <Field label="Telefon" placeholder="Rückrufnummer" type="tel" />
                </div>
                <Field label="E-Mail" placeholder="Ihre E-Mail-Adresse" type="email" />
                <div>
                  <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
                    Kurz zur Sache
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Schildern Sie kurz und konkret, worauf wir uns vorbereiten dürfen."
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
                  Die Datenverarbeitung erfolgt ausschließlich zur Vorbereitung des
                  anwaltlichen Mandats.
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-5">
      <p className="font-serif text-base">— {title}</p>
      <p className="mt-2 text-xs text-foreground/65 leading-relaxed max-w-md">
        {children}
      </p>
    </div>
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
