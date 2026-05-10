import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Plus } from "lucide-react";
import { useState } from "react";
import { articles } from "./blog.$slug";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Strafrecht Blog Berlin — Kanzlei Wenzel" },
      {
        name: "description",
        content:
          "Aktuelle Beiträge zu Strafrecht in Berlin: Hausdurchsuchung, Vorladung, Einstellung und mehr — verfasst vom Fachanwalt für Strafrecht.",
      },
      { property: "og:title", content: "Strafrecht Blog Berlin — Kanzlei Wenzel" },
      {
        property: "og:description",
        content:
          "Praxisnahe Analysen zu strafrechtlichen Verfahren in Berlin vom Fachanwalt Benjamin C. Wenzel.",
      },
    ],
  }),
  component: BlogPage,
});

const subnav = [
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Vorfeld",
  "Digitale Verteidigung",
];

const filters = [
  "Alle",
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Vorfeld",
  "Zigarettenstrafrecht",
  "Beweisrecht",
  "Hausdurchsuchung",
];


const themen = [
  "Ermittlungsverfahren",
  "Verfahrensrecht",
  "Hauptverfahren",
  "Vorfeld",
  "Digitale Strafrecht",
  "Verkehrsrecht",
  "Sexualdelikte",
  "Beweisrecht",
];

const beratungslist = [
  "Strafrecht Berlin — Übersicht",
  "Hinweis erhalten",
  "Beratung anfragen",
];

const optionen = [
  "Ermittlungsverfahren",
  "Darknet-Strafrecht",
  "Bewertung anfordern",
];

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const filteredArticles =
    activeFilter === "Alle"
      ? articles
      : articles.filter(
          (a) => a.badge.toLowerCase() === activeFilter.toLowerCase(),
        );
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-36 lg:pt-44 pb-16 lg:pb-24">
        <div className="container-x">
          <p className="eyebrow text-blue-accent mb-8">
            Blog · Strafrecht in Berlin
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Strafrecht Blog
            <br />
            <span className="italic text-blue-accent">Berlin</span>
          </h1>
          <div className="mt-10 max-w-xl border-t border-white/15 pt-6 text-sm leading-relaxed text-navy-foreground/65">
            <p>
              Strategische und tagesaktuelle Einordnung. Neue Entscheidungen,
              relevante Rechtsprechung und worauf es für Mandanten in Berlin in der
              Praxis ankommt.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Nav tabs */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65">
        <div className="container-x flex flex-wrap gap-x-10 gap-y-3 py-4 text-[0.7rem] tracking-[0.2em] uppercase">
          {subnav.map((s) => (
            <a key={s} href="#" className="hover:text-navy-foreground transition">
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-background">
        <div className="container-x py-4 text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55">
          <Link to="/" className="hover:text-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Blog · Aktuelle Beiträge</span>
        </div>
      </div>

      {/* Featured */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-x">
          <p className="eyebrow mb-10">Aktuelle Vorfälle</p>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-blue-accent border border-blue-accent/40 rounded-full px-3 py-1">
                  ◆ ERMITTLUNGSVERFAHREN
                </span>
                <span className="text-xs text-foreground/55">12. März 2026 · 8 min lesen</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Hausdurchsuchung —
                <br />
                Was tun?
              </h2>
              <p className="mt-5 text-sm italic text-foreground/65 leading-relaxed max-w-md">
                Rechte, Verhalten und erste Schritte beim Durchsuchungsbeschluss.
              </p>
              <p className="mt-6 text-sm text-foreground/75 leading-relaxed max-w-lg">
                Eine Hausdurchsuchung trifft Mandanten häufig überraschend und unter erheblichem Druck.
                Erste Reaktionen prägen das weitere Verfahren — wir zeigen, worauf es ankommt.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/75 max-w-lg">
                <li>· Welche Rechte Sie sofort haben.</li>
                <li>· Was Sie sagen sollten — und was nicht.</li>
                <li>· Wie der Durchsuchungsbeschluss zu prüfen ist.</li>
                <li>· Wann ein Anwalt zwingend erforderlich ist.</li>
              </ul>
              <Link to="/blog/$slug" params={{ slug: "hausdurchsuchung-was-tun" }} className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition">
                Beitrag lesen <span className="block w-8 h-px bg-foreground" />
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-navy text-navy-foreground p-6 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=900&q=70"
                alt="Hausdurchsuchung"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/65">
                  · ERMITTLUNGSVERFAHREN
                </p>
                <p className="mt-2 font-serif text-xl">Hausdurchsuchung — Was tun?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alle Beiträge */}
      <section id="alle-beitraege" className="bg-background pb-24 lg:pb-32 scroll-mt-24">
        <div className="container-x">
          <p className="eyebrow mb-8">Alle Beiträge</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f, i) => (
              <button
                key={f + i}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs border transition ${
                  activeFilter === f
                    ? "bg-navy text-navy-foreground border-navy"
                    : "bg-secondary border-border text-foreground/75 hover:bg-secondary/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
            {/* Article list */}
            <div className="divide-y divide-border border-y border-border">
              {filteredArticles.length === 0 && (
                <p className="py-8 text-sm text-foreground/60">
                  Keine Beiträge in dieser Kategorie.
                </p>
              )}
              {filteredArticles.map((a) => (
                <Link
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  key={a.slug}
                  className="grid grid-cols-[1fr_auto] items-center gap-6 py-8 group"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-blue-accent border border-blue-accent/40 rounded-full px-3 py-1">
                        ◆ {a.badge}
                      </span>
                      <span className="text-xs text-foreground/55">{a.date} · {a.readTime}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight group-hover:opacity-70 transition">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm italic text-foreground/65">{a.excerpt}</p>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed max-w-2xl">
                      {a.ausgangslage?.[0]}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="size-12 rounded-full border border-border grid place-items-center text-foreground/70 group-hover:bg-navy group-hover:text-navy-foreground group-hover:border-navy transition"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-cream p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-3">
                  Über den Blog
                </p>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  Rechtliche Orientierung, juristische Strategieanalysen und
                  Verteidigungsperspektiven aus der Berliner Praxis.
                </p>
                <p className="mt-5 font-serif text-lg">Benjamin C. Wenzel</p>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55">
                  Fachanwalt für Strafrecht
                </p>
                <a
                  href="/kanzlei/ueber-mich"
                  className="mt-3 inline-block text-xs text-blue-accent hover:opacity-80 transition"
                >
                  → Autor-Profil
                </a>
              </div>

              <div className="rounded-2xl bg-cream p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-4">
                  Themen
                </p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  {themen.map((t) => (
                    <li key={t}>
                      <button
                        onClick={() => {
                          setActiveFilter(t);
                          document
                            .getElementById("alle-beitraege")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hover:text-foreground transition text-left"
                      >
                        {t}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-navy text-navy-foreground p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-3">
                  Beratung im Einzelfall
                </p>
                <p className="font-serif text-lg italic leading-snug">
                  Jeder Fall ist individuell. Hier kostenfrei Einschätzung in nur
                  wenigen Klicks der Ermittlungsakte einholen.
                </p>
                <a
                  href="tel:+4930120593430"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream text-navy px-5 py-2.5 text-sm hover:bg-white transition"
                >
                  030 120 593 430
                </a>
                <p className="mt-3 text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55">
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
            Hausdurchsuchung — Berlin
          </p>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Kontinuierliche
                <br />
                <span className="italic text-blue-accent">Auseinandersetzung.</span>
              </h2>
              <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed max-w-md">
                Strafverteidigung erfordert eine fortlaufende Reaktion auf den
                Verfahrensstand — sowohl strategisch konzeptionell wie auch
                kommunikativ präzise im Umgang mit Ermittlungsbehörden, Staatsanwalt
                und Gericht in Berlin in einer höchsten Besonnenheit.
              </p>
              <ul className="mt-10 space-y-5 text-sm">
                <li className="border-t border-white/10 pt-4">
                  <p>Neue Rechtsprechung</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    Aktuelle Entscheidungen aus Berliner Gerichten.
                  </p>
                </li>
                <li className="border-t border-white/10 pt-4">
                  <p>Technische Entwicklungen</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    Cyberkriminalität, digitale Spuren, Beweisführung.
                  </p>
                </li>
                <li className="border-t border-white/10 pt-4">
                  <p>Verfahrensrechtliche Besonderheiten</p>
                  <p className="text-navy-foreground/55 mt-1 text-xs">
                    Ablauf, Verteidigungsmöglichkeiten.
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
                  Jeder Fall ist anders. Eine Einschätzung im konkreten Einzelfall
                  ersetzt keine anwaltlich beratene Akteneinsicht und sollte nicht
                  ausschließlich auf Basis dieses Blogs erfolgen.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-3">
                  Beitrag im einreichen
                </p>
                <p className="text-xs text-navy-foreground/70 leading-relaxed">
                  Juristische Praktiker und Fachjournalisten in Berlin — auch
                  Praktiker können Akteneinsichten beitragen.
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
          <p className="eyebrow mb-10">Beratung — Strafrecht Berlin</p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Beratung im
                <br />
                <span className="italic text-foreground/45">Einzelfall.</span>
              </h2>
              <p className="mt-6 text-sm text-foreground/65 leading-relaxed max-w-md">
                Über den Blog hinaus bieten wir individuelle anwaltliche Beratung. Für
                eine konkrete Einschätzung nehmen Sie direkt Kontakt auf.
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
              </div>

              <ul className="mt-6 max-w-md space-y-2">
                {beratungslist.map((b) => (
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
              <div className="rounded-2xl bg-cream p-6 lg:p-8">
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-foreground/55 mb-5">
                  Mandanten haben drei Optionen
                </p>
                <ul className="divide-y divide-border">
                  {optionen.map((o) => (
                    <li key={o} className="flex items-center justify-between py-4 text-sm">
                      <span>{o}</span>
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
