import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus } from "lucide-react";

export const Route = createFileRoute("/blog/betaeubungsmittelrecht")({
  head: () => ({
    meta: [
      { title: "Blog: Betäubungsmittelrecht Berlin — Kanzlei Wenzel" },
      {
        name: "description",
        content:
          "Aktuelle Beiträge zum Betäubungsmittelrecht in Berlin: Versandhandel, Darknet, Internet-BtM und neue Entscheidungen — vom Fachanwalt für Strafrecht.",
      },
      {
        property: "og:title",
        content: "Blog: Betäubungsmittelrecht Berlin — Kanzlei Wenzel",
      },
      {
        property: "og:description",
        content:
          "Praxisnahe Analysen zum BtM-Strafrecht in Berlin vom Fachanwalt Benjamin C. Wenzel.",
      },
    ],
  }),
  component: BtMBlogPage,
});

const subnav = [
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Darknet",
  "Digitales Strafrecht",
];

const filters = [
  "Alle",
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Darknet",
  "Digitales Strafrecht",
  "Verfahrensrecht",
  "Sexualstrafrecht",
  "Körperverletzung",
];

const themen = [
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Darknet",
  "Digitales Strafrecht",
  "Verkehrsrecht",
  "Sexualstrafrecht",
  "Körperverletzung",
];

function BtMBlogPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-36 lg:pt-44 pb-16 lg:pb-24">
        <div className="container-x">
          <p className="eyebrow text-blue-accent mb-8">
            ◆ Blog · Betäubungsmittelrecht Berlin
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Blog
            <br />
            Betäubungsmittelrecht
            <br />
            <span className="italic text-blue-accent">Berlin</span>
          </h1>
          <div className="mt-10 max-w-xl border-t border-white/15 pt-6 text-sm leading-relaxed text-navy-foreground/65">
            <p>
              Strafrechtsbeiträge, ständige Entwicklung. Neue Entscheidungen,
              technische Ermittlungsverfahren und gesetzliche Änderungen zwischen aus
              der Praxis erklärt.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Nav tabs */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65">
        <div className="container-x grid sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-3 py-4 text-[0.7rem] tracking-[0.2em] uppercase">
          {subnav.map((s) => (
            <a key={s} href="#" className="hover:text-navy-foreground transition">
              {s}
              <span className="block text-[0.55rem] tracking-[0.18em] text-navy-foreground/35 mt-1 normal-case">
                Aktuelle Beiträge
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-background">
        <div className="container-x py-4 text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55">
          <Link to="/" className="hover:text-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <Link to="/blog" className="hover:text-foreground transition">Blog</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Betäubungsmittelrecht Berlin</span>
        </div>
      </div>

      {/* Articles + Sidebar */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-x">
          <p className="eyebrow mb-8">— Alle Beiträge</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f, i) => (
              <button
                key={f + i}
                className={`px-4 py-2 rounded-full text-xs border transition ${
                  i === 0
                    ? "bg-navy text-navy-foreground border-navy"
                    : "bg-secondary border-border text-foreground/75 hover:bg-secondary/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            <div className="divide-y divide-border border-y border-border">
              <article className="py-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-blue-accent border border-blue-accent/40 rounded-full px-3 py-1">
                    ◆ DARKNET
                  </span>
                  <span className="text-xs text-foreground/55">12. März 2026 · 6 min</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
                  Drogen aus dem Versandhandel
                </h3>
                <p className="mt-3 text-sm italic text-foreground/65">
                  Darknet, Internet-BtM und die verfahrensrechtlichen Risiken.
                </p>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed max-w-2xl">
                  Die zunehmende Anonymität im Internet führt häufig zu Verfahren des
                  Ermittlungsbehörden, die in der Methodik bei Versand- und
                  Sphärenfahndern deutlich aussehen.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-cream p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-3">
                  Über den Blog
                </p>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Rechtliche Orientierung zu typischen Konstellationen, aktueller
                  Rechtsprechung und Verteidigungspraxis aus der Berliner Praxis.
                </p>
                <p className="mt-5 font-serif text-lg">Benjamin C. Wenzel</p>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55">
                  Fachanwalt für Strafrecht · Berlin
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs text-blue-accent hover:opacity-80 transition"
                >
                  → Zum BtM-Hub
                </a>
              </div>

              <div className="rounded-2xl bg-cream p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-4">
                  Kategorien
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  {themen.map((t) => (
                    <li key={t}>
                      <a href="#" className="hover:text-foreground transition">
                        — {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy text-navy-foreground p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-3">
                  Beratung im Einzelfall
                </p>
                <p className="font-serif text-base italic leading-snug">
                  Jeder Fall ist individuell. Eine konkrete Einschätzung ist nur nach
                  Prüfung der Ermittlungsakte möglich.
                </p>
                <a
                  href="tel:+4930120593430"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cream text-navy px-5 py-2.5 text-sm w-full hover:bg-white transition"
                >
                  030 120 593 430
                </a>
                <p className="mt-3 text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 text-center">
                  · Kontakt aufnehmen ·
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Kontinuierliche Auseinandersetzung */}
      <section className="bg-navy text-navy-foreground py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-10">
            — Aktuelle Themen aus dem BtM-Strafrecht
          </p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Kontinuierliche
                <br />
                <span className="italic text-blue-accent">Auseinandersetzung.</span>
              </h2>
              <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
                Strafverteidigung bedeutet nicht nur Reaktion im Gerichtssaal — sondern
                auch ständige Beschäftigung mit neuer Rechtsprechung, technischer
                Entwicklung und verfahrensrechtlichen Besonderheiten.
              </p>
              <ul className="mt-10 space-y-5 text-sm">
                <li className="border-t border-white/10 pt-4">
                  <p>Neue Rechtsprechung</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    BGH und Berliner Obergerichte ausgewertet.
                  </p>
                </li>
                <li className="border-t border-white/10 pt-4">
                  <p>Technische Entwicklungen</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    Cyberkriminalität und Versandstrukturen analysiert.
                  </p>
                </li>
                <li className="border-t border-white/10 pt-4">
                  <p>Verfahrensrechtliche Besonderheiten</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    Beweisverwertung und Verteidigungsstrategie eingeordnet.
                  </p>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-3">
                  Haftungshinweis
                </p>
                <p className="font-serif text-xl italic leading-snug">
                  Die hier dargestellten Inhalte ersetzen keine individuelle Rechtsberatung.
                </p>
                <p className="mt-4 text-xs text-navy-foreground/65 leading-relaxed">
                  Jeder Fall ist anders. Eine konkrete Einschätzung ist nur nach Prüfung
                  der Ermittlungsakte und nach individueller Rechtsberatung möglich.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-3">
                  Beitrag mit Praxisbezug
                </p>
                <p className="text-xs text-navy-foreground/70 leading-relaxed">
                  In der praktischen Arbeit mit Strafverteidigern in Berlin — auch
                  Praktiker können einer praktischen Verallgemeinerung beitragen.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Bewerten", "Empfehlen", "Anregen"].map((b) => (
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

      {/* Beratung im Einzelfall */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x">
          <p className="eyebrow mb-10">— Kontakt & Anfrage</p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Beratung im
                <br />
                <span className="italic text-foreground/45">Einzelfall.</span>
              </h2>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
                Die im Blog dargestellten Inhalte dienen der allgemeinen Orientierung.
                Für eine individuelle Einschätzung nehmen Sie direkt Kontakt auf.
              </p>

              <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-6 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full bg-cream text-navy grid place-items-center font-serif text-xl">
                    BW
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                      STRAFVERTEIDIGER & FACHANWALT
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
                <p className="mt-3 text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                  info@anwalt-wenzel.com
                </p>
              </div>

              <ul className="mt-6 max-w-md space-y-2">
                <li className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs text-foreground/70">
                  <span className="block w-3 h-px bg-foreground/40" />
                  Betäubungsmittelrecht Berlin
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs text-foreground/70">
                  <span className="block w-3 h-px bg-foreground/40" />
                  Kontakt aufnehmen
                </li>
              </ul>
            </div>

            <div>
              <div className="rounded-2xl bg-cream p-6 lg:p-8">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-5">
                  Empfohlene Inhalte zu BtM
                </p>
                <ul className="divide-y divide-border">
                  {["Alle Beiträge", "BtMG Praxis-Hub"].map((o) => (
                    <li
                      key={o}
                      className="flex items-center justify-between py-4 text-sm"
                    >
                      <span>→ {o}</span>
                      <Plus className="size-4 text-foreground/40" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
