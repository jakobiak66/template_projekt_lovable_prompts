import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Shield, Clock, Lock } from "lucide-react";

export const Route = createFileRoute("/fall-pruefen")({
  head: () => ({
    meta: [
      { title: "Fall prüfen — Kanzlei Wenzel" },
      {
        name: "description",
        content:
          "Digitales Intake der Kanzlei Wenzel. Schildern Sie Ihre Situation strukturiert — vertraulich, ohne Verpflichtung.",
      },
      { property: "og:title", content: "Fall prüfen — Kanzlei Wenzel" },
      {
        property: "og:description",
        content:
          "Vertrauliche Erstprüfung Ihres Falls durch den Fachanwalt für Strafrecht.",
      },
    ],
  }),
  component: FallPruefenPage,
});

const steps = [
  {
    nr: "01",
    title: "Situation wählen",
    text: "Hausdurchsuchung, Vorladung, Ermittlungsverfahren oder anderes.",
  },
  {
    nr: "02",
    title: "Eckdaten angeben",
    text: "Was ist passiert, wann, wo — in wenigen Feldern.",
  },
  {
    nr: "03",
    title: "Konto erstellen",
    text: "Zugangsdaten für Ihr persönliches Mandantenportal.",
  },
  {
    nr: "04",
    title: "Prüfung abwarten",
    text: "Die Kanzlei meldet sich innerhalb von 24 Stunden.",
  },
];

const trust = [
  {
    icon: Shield,
    title: "Anwaltliche Verschwiegenheit",
    text: "Alle Angaben unterliegen der gesetzlichen Verschwiegenheitspflicht.",
  },
  {
    icon: Clock,
    title: "Antwort in 24 Stunden",
    text: "Bei dringenden Fällen — Hausdurchsuchung, Festnahme — sofort.",
  },
  {
    icon: Lock,
    title: "Ende-zu-Ende verschlüsselt",
    text: "Ihre Daten werden ausschließlich kanzleiintern verarbeitet.",
  },
];

const situationen = [
  {
    title: "Hausdurchsuchung",
    text: "Wohnung, Büro oder Fahrzeug wurde durchsucht.",
  },
  {
    title: "Vorladung",
    text: "Polizei oder Staatsanwaltschaft lädt zur Vernehmung.",
  },
  {
    title: "Beschlagnahme",
    text: "Gegenstände, Geräte oder Dokumente wurden eingezogen.",
  },
  {
    title: "Ermittlungsverfahren",
    text: "Sie sind beschuldigt oder Ziel laufender Ermittlungen.",
  },
  {
    title: "Sonstiges",
    text: "Eine andere Situation im Bereich des Strafrechts.",
  },
];

function FallPruefenPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-navy text-navy-foreground pt-36 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555417400-a18b6326dde3?auto=format&fit=crop&w=1800&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="container-x relative">
          <p className="eyebrow text-navy-foreground/65 mb-8">
            § DIGITAL INTAKE · STRAFRECHT BERLIN
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Ihr Fall.
            <br />
            Vertraulich
            <br />
            geprüft.
          </h1>
          <p className="mt-8 max-w-md text-base text-navy-foreground/70 leading-relaxed">
            Beschreiben Sie Ihre Situation in wenigen Minuten. Wir prüfen
            diskret — ohne Verpflichtung, ohne Gebühr.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#situationen"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
            >
              Fall jetzt prüfen <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm hover:bg-white/10 transition"
            >
              Bereits Mandant — Anmelden
            </a>
          </div>
        </div>
      </section>

      {/* Was ist Fall-Prüfung */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div className="relative">
            <span className="absolute -top-8 -left-2 font-serif text-[10rem] leading-none text-foreground/5 select-none">
              §
            </span>
            <p className="eyebrow mb-5 relative">WAS IST FALL-PRÜFUNG?</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight relative">
              Der erste Schritt.
              <br />
              Ohne Risiko.
            </h2>
            <p className="mt-6 text-sm text-foreground/75 leading-relaxed max-w-md">
              Das digitale Intake-Verfahren ermöglicht es Ihnen, Ihre Situation
              strukturiert zu schildern — sicher, vertraulich und ohne
              Vorabkosten.
            </p>
            <p className="mt-4 text-sm text-foreground/75 leading-relaxed max-w-md">
              Auf Basis Ihrer Angaben entscheidet die Kanzlei, ob und wie wir
              Ihnen helfen können. Sie erhalten eine Einschätzung — kein Angebot,
              keine Verpflichtung.
            </p>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {steps.map((s) => (
              <li
                key={s.nr}
                className="grid grid-cols-[60px_1fr] gap-6 py-6 items-start"
              >
                <span className="text-xs text-foreground/55 pt-1">{s.nr}</span>
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="mt-1 text-sm text-foreground/65">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-navy text-navy-foreground py-16 lg:py-20">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {trust.map((t) => (
            <div key={t.title}>
              <t.icon className="size-5 text-navy-foreground/70 mb-5" strokeWidth={1.5} />
              <p className="font-medium">{t.title}</p>
              <p className="mt-2 text-sm text-navy-foreground/65 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Situationstypen */}
      <section id="situationen" className="bg-background py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow mb-6">SITUATIONSTYPEN</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl">
            Welche Situation beschreibt
            <br />
            Ihren Fall?
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-2">
            {situationen.map((s) => (
              <a
                key={s.title}
                href="#"
                className="grid grid-cols-[1fr_auto] items-center gap-6 py-6 border-t border-border group"
              >
                <div>
                  <p className="font-medium group-hover:opacity-80 transition">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm text-foreground/60">{s.text}</p>
                </div>
                <ArrowRight className="size-4 text-foreground/40 group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background border-t border-border py-16 lg:py-20">
        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight">
              Jetzt Fall einreichen.
            </h3>
            <p className="mt-3 text-sm text-foreground/65">
              Kein Anwalt am Telefon. Kein Termin. Nur Ihr Fall — strukturiert
              und vertraulich.
            </p>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm hover:opacity-90 transition self-start md:self-auto"
          >
            Fall prüfen lassen <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
