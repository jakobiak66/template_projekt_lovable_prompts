import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import berlinSkyline from "@/assets/berlin-skyline.png";

const heroImage =
  "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0af9_69e9f8dda1809670a847ee79_reinigungsfirma-wechseln-hero.jpeg";

export const Route = createFileRoute("/blog/reinigungsfirma-wechseln")({
  head: () => ({
    meta: [
      { title: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress — PutzKraft24" },
      {
        name: "description",
        content:
          "Wechsel der Reinigungsfirma in 4 Wochen — ohne Lücken, ohne Stress. Kündigungsfristen kennen, mindestens 3 Angebote vergleichen, Pilot-Monat vereinbaren.",
      },
      { property: "og:title", content: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress" },
      {
        property: "og:description",
        content:
          "4-Wochen-Fahrplan, Warnsignale, Checkliste und die 3 größten Fehler beim Wechsel der Reinigungsfirma.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: ArticlePage,
});

const related = [
  {
    to: "/blog/buero-reinigungs-frequenz",
    title:
      "Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide für Berliner Unternehmen 2026",
    image:
      "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69ea02da8b009bc03342ffe3_bueroreinigung-frequenz-hero.svg",
  },
  {
    to: "/blog/kosten-bueroreinigung-berlin",
    title: "Was kostet Büroreinigung in Berlin? Stundensatz & Festpreis",
    image:
      "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0b06_69e9f8dd2ab0439e13d2a423_bueroreinigung-kosten-hero.jpeg",
  },
  {
    to: "/blog/reinigungsmythen-entlarvt",
    title: "Reinigungsmythen entlarvt",
    image:
      "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0afd_69e9f8ddc48bf5627426579e_reinigungsmythen-hero.jpeg",
  },
];

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="flex min-h-[calc(100vh-80px)] items-center bg-background">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
            <div>
              <nav className="mb-4 text-xs font-medium" style={{ color: "#3d5450" }}>
                <Link to="/" className="hover:underline">Home</Link>{" "}
                ›{" "}
                <Link to="/blog" className="hover:underline">Blog</Link>{" "}
                › <span>Reinigungsfirma wechseln Checkliste</span>
              </nav>
              <h1
                className="text-4xl font-bold leading-tight md:text-[56px] md:leading-[1.05]"
               
              >
                Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress
              </h1>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Drei Personen besprechen einen Reinigungsvertrag in einem hellen Berliner Büro"
                className="h-[340px] w-full object-cover md:h-[460px]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* SUMMARY BOX */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed md:text-[15px]"
              style={{ backgroundColor: "#dfeae6", color: "#1a2e2b" }}
            >
              <strong>Kurz zusammengefasst:</strong> Ein Wechsel der
              Reinigungsfirma gelingt in 4 Wochen — ohne Lücken, ohne Stress.
              Der Schlüssel: Kündigungsfristen kennen, mindestens 3 Angebote
              vergleichen, Pilot-Monat vereinbaren.
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <p className="text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Montagmorgen, 8:47 Uhr, in einer Stunde kommt ein wichtiger Kunde.
              Sie betreten den Besprechungsraum: Kaffeeflecken auf dem Tisch,
              voller Mülleimer, Staub auf dem Sideboard. Ihre Reinigungsfirma
              war offensichtlich wieder nicht da.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Wenn Ihnen das bekannt vorkommt: Sie sind nicht allein.{" "}
              <strong>
                Unzuverlässige Reinigung ist der häufigste Grund, warum Office
                Manager in Berlin ihren Dienstleister wechseln.
              </strong>{" "}
              Die gute Nachricht: Ein Wechsel ist einfacher als gedacht.
            </p>
          </div>
        </section>

        {/* SECTION: 5 Warnsignale */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Die 5 Warnsignale: Wann ein Wechsel überfällig ist
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Wenn Sie mehr als zwei dieser Punkte wiedererkennen, sollten Sie
              handeln:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Wiederkehrende No-Shows", v: " — Die Reinigungskraft erscheint nicht, niemand informiert Sie" },
                { k: "Schwankende Qualität", v: " — Montags sauber, mittwochs wie nicht geputzt" },
                { k: "Keine Antwort auf Nachrichten", v: " — Reaktionszeit über 24 Stunden" },
                { k: "Ständig wechselnde Reinigungskräfte", v: " — Niemand kennt Ihre Räume" },
                { k: "Preiserhöhungen ohne Mehrwert", v: " — Mehr zahlen, gleiche oder schlechtere Leistung" },
              ].map((item) => (
                <li key={item.k} className="flex gap-2">
                  <span style={{ color: "#e8a23a" }}>•</span>
                  <span>
                    <strong>{item.k}</strong>
                    {item.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: 4-Wochen-Fahrplan */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Der 4-Wochen-Fahrplan zum neuen Dienstleister
            </h2>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Woche 1: Bestandsaufnahme
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>Vertrag prüfen.</strong>{" "}
              Notieren Sie die Kündigungsfrist — meistens 3 Monate zum
              Monatsende. Achten Sie auf automatische Verlängerungsklauseln.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>
                Dokumentieren Sie den Ist-Zustand.
              </strong>{" "}
              Machen Sie Fotos von Problemzonen. Notieren Sie konkrete Vorfälle
              der letzten Wochen.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Woche 2: Angebote einholen
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Holen Sie mindestens 3 Angebote ein. Achten Sie nicht nur auf den
              Preis, sondern auch auf:
            </p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {[
                "Festes Objektleiter vor Ort?",
                "Festes Team oder wechselndes Personal?",
                "Direkter Ansprechpartner für Kommunikation?",
                "Pilot-Monat oder Testphase möglich?",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span style={{ color: "#e8a23a" }}>•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Woche 3: Entscheidung und Übergangsvorbereitung
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Vereinbaren Sie als Startdatum nahtlos nach dem Ende des alten
              Vertrages. Planen Sie eine Objektbegehung: Der neue Anbieter soll
              Ihre Räume kennen, bevor er beginnt.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Woche 4: Start und Qualitätskontrolle
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Begleiten Sie die ersten Tage aufmerksam. Nach vier Wochen ist die
              Qualität konstant? Punkte in der Kommunikation? Wenn ja —
              erfolgreicher Wechsel.
            </p>
          </div>
        </section>

        {/* SECTION: Checkliste */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Checkliste: Was im Angebot stehen muss
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                "Reinigungsfrequenz und Umfang klar definiert",
                "Monatlicher Gesamtbetrag ohne versteckte Zuschläge",
                "Vertragslaufzeit und Kündigungsfrist",
                "Festes Objektteam und festes Team",
                "Zufriedenheitsgarantie oder kostenloser Pilot-Monat",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span style={{ color: "#e8a23a" }}>•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: 3 größten Fehler */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Die 3 größten Fehler beim Wechsel
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>
                Fehler 1: Nur auf den Preis schauen.
              </strong>{" "}
              Der günstigste Anbieter hat oft die höchste Personalfluktuation.
              Am Ende wechseln Sie erneut.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>
                Fehler 2: Den Übergang nicht planen.
              </strong>{" "}
              Planen Sie mindestens einen Tag Überlappung. Klären Sie die
              Schlüsselübergabe frühzeitig.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>
                Fehler 3: Keine klaren Erwartungen.
              </strong>{" "}
              Erstellen Sie eine kurze Prioritätenliste: Welche 3 Bereiche
              müssen immer einwandfrei sein?
            </p>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-16 md:px-6">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: "#dfeae6" }}
            >
              <p className="text-[15px] leading-relaxed">
                <strong>Bereit für den Wechsel?</strong> PutzKraft24 bietet
                einen kostenlosen, unverbindlichen Büro-Check inkl. Vor-Ort-
                Besichtigung und einer Analyse Ihres bisherigen Angebots — und
                einen 4-Wochen-Pilot-Monat ohne Risiko.
              </p>
              <Button
                asChild
                className="mt-5 h-12 rounded-full bg-orange px-6 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">→ Kostenlosen Büro-Check vereinbaren</Link>
              </Button>
              <p className="mt-4 text-sm" style={{ color: "#3d5450" }}>
                Oder telefonisch: +49 30 5563 4067
              </p>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
            <h2
              className="mb-8 text-center text-2xl font-bold md:text-[28px] text-[#0d3b2e]"
             
            >
              Ähnliche Blogartikel
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-base font-semibold group-hover:text-orange text-[#0d3b2e]"
                     
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SKYLINE */}
        <section style={{ backgroundColor: "#dfeae6" }}>
          <img
            src={berlinSkyline}
            alt="Berlin Skyline"
            className="mx-auto block w-full max-w-6xl"
            loading="lazy"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
