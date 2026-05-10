import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import berlinSkyline from "@/assets/berlin-skyline.png";

const heroImage =
  "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0b06_69e9f8dd2ab0439e13d2a423_bueroreinigung-kosten-hero.jpeg";

export const Route = createFileRoute("/blog/kosten-bueroreinigung-berlin")({
  head: () => ({
    meta: [
      {
        title:
          "Was kostet Büroreinigung in Berlin? Stundensatz & Festpreis — PutzKraft24",
      },
      {
        name: "description",
        content:
          "Büroreinigung in Berlin: Stundensätze marktüblich 30–35 €/Stunde inkl. Reinigungsmittel und Anfahrt. Was den Preis beeinflusst und warum ein Festpreis transparenter ist.",
      },
      {
        property: "og:title",
        content:
          "Was kostet Büroreinigung in Berlin? Stundensatz & Festpreis",
      },
      {
        property: "og:description",
        content:
          "Stundensätze, was enthalten sein sollte und warum ein verbindliches Festpreis-Angebot meistens transparenter ist.",
      },
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
    to: "/blog/reinigungsfirma-wechseln",
    title: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress",
    image:
      "https://cdn.prod.website-files.com/692b074a1bebe48ab83c265d/69e9f9504461b269300e0af9_69e9f8dda1809670a847ee79_reinigungsfirma-wechseln-hero.jpeg",
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
                › <span>Kosten Büroreinigung</span>
              </nav>
              <h1
                className="text-4xl font-bold leading-tight md:text-[56px] md:leading-[1.05]"
               
              >
                Was kostet Büroreinigung in Berlin? Stundensatz &amp; Festpreis
              </h1>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Hände halten ein Notizbuch mit Kosten-Notizen vor einem hellen Berliner Büro mit sage-grünen Pflanzen"
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
              <strong>Kurz zusammengefasst:</strong> Büroreinigung in Berlin
              liegt bei seriösen Anbietern marktüblich zwischen 30 und 35 Euro
              pro Stunde — Reinigungsmittel, Equipment und Anfahrt inklusive.
              Was den Stundensatz beeinflusst, was im Preis enthalten sein
              sollte und warum ein verbindliches Festpreis-Angebot oft
              transparenter ist als reine Stundenabrechnung.
            </div>
          </div>
        </section>

        {/* SECTION: Marktüblich */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Büroreinigung Stundensatz Berlin — was marktüblich ist
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Der Stundensatz für professionelle Büroreinigung in Berlin liegt
              je nach Anbietertyp in einer klaren Spanne. Diese Orientierung
              hilft, Angebote richtig einzuordnen:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Etablierte Reinigungsfirmen:", v: " rund 30–35 €/Stunde (zzgl. MwSt.) — inkl. Reinigungsmittel und Anfahrt" },
                { k: "Facility-Management-Konzerne:", v: " 35–50 €/Stunde — meist mit zusätzlichen Servicegebühren" },
                { k: "Einzelpersonen / Aushilfen:", v: " ab ca. 20 €/Stunde — ohne Vertretungsregel bei Krankheit" },
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
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Wer in Berlin nach Büroreinigung sucht, sollte nicht nur den
              Stundensatz vergleichen, sondern auch was darin enthalten ist.
              Hier liegen die größten Unterschiede zwischen Anbietern.
            </p>
          </div>
        </section>

        {/* SECTION: Was enthalten sein sollte */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Was im Stundensatz enthalten sein sollte
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Bei seriösen Reinigungsfirmen sind im Stundensatz alle
              Verbrauchs- und Arbeitsmittel enthalten. Achten Sie im Angebot
              konkret auf:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Reinigungsmittel und -chemie", v: " — keine separate Verbrauchsabrechnung" },
                { k: "Equipment", v: " (Wischmopp, Staubsauger, Mikrofasertücher) — wird vom Anbieter gestellt" },
                { k: "Anfahrt zum Berliner Bürostandort", v: " — keine Extra-Kilometerpauschale" },
                { k: "Arbeitskleidung und Versicherung", v: " der Reinigungskraft" },
                { k: "Qualitätskontrolle", v: " durch den Objektleiter" },
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
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Bei PutzKraft24 sind alle fünf Punkte im Stundensatz enthalten.
              Es gibt keine versteckten Zusatzkosten und keine nachträglichen
              Verbrauchspauschalen.
            </p>
          </div>
        </section>

        {/* SECTION: Was beeinflusst den Stundensatz */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Was beeinflusst den Büroreinigung Stundensatz?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Die Bandbreite bei Büroreinigung Preisen in Berlin ist real — und
              hat konkrete Ursachen. Vier Faktoren bestimmen, was Büroreinigung
              für Ihr Unternehmen tatsächlich kostet:
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              1. Flächengröße und Layout
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Größere, offene Büros lassen sich pro Stunde effizienter reinigen
              als verwinkelte Altbau-Etagen mit vielen kleinen Räumen.
              Effizienz pro Stunde beeinflusst, wie viele Stunden für Ihren
              Standort kalkuliert werden.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              2. Reinigungsfrequenz
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Wer sein Büro drei- bis fünfmal pro Woche reinigen lässt,
              profitiert von gleichmäßigerer Auslastung des Reinigungsteams und
              geringeren Verschmutzungsgraden pro Einsatz. Höhere Frequenz
              wirkt günstig auf den effektiven Aufwand.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              3. Leistungsumfang
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Unterhaltsreinigung — Böden, Oberflächen, Sanitäranlagen,
              Papierkörbe — ist die Basis. Jede Erweiterung
              (Fensterinnenseiten, Küchenbereiche, Konferenzraumausstattung)
              erhöht den Zeitaufwand. Den Umfang legen Sie gemeinsam mit dem
              Anbieter im Büro-Check fest.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              4. Lage in Berlin
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Büros in Bezirken mit dichter Bebauung und eingeschränkten
              Parkmöglichkeiten — etwa Mitte, Prenzlauer Berg oder Kreuzberg —
              können geringfügig höhere Anfahrtszeiten verursachen als
              Standorte in Randbezirken. Bei PutzKraft24 ist die Anfahrt im
              Stundensatz enthalten.
            </p>
          </div>
        </section>

        {/* SECTION: Stundenabrechnung vs Festpreis */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Stundenabrechnung vs. Festpreis — was ist transparenter?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Der Stundensatz ist ein guter Marktorientierungswert — aber für
              die regelmäßige Unterhaltsreinigung ist ein{" "}
              <strong>verbindliches Festpreis-Angebot</strong>{" "}
              meistens transparenter:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Stundenabrechnung", v: " ist flexibel, aber unkalkulierbar: Sie wissen vorher nicht, wie lange ein Einsatz dauert. Eignet sich für Sonderreinigungen oder unregelmäßige Einsätze." },
                { k: "Festpreis-Angebot", v: " basiert auf einem Vor-Ort-Termin (Büro-Check), bei dem Fläche, Frequenz und Umfang gemeinsam festgelegt werden. Ergebnis: ein verbindlicher Monatspreis ohne Überraschungen." },
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
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Bei PutzKraft24 ist der Standard ein verbindliches
              Festpreis-Angebot nach kostenlosem Büro-Check — innerhalb von 24
              Stunden, transparent, ohne versteckte Zusatzkosten.
            </p>
          </div>
        </section>

        {/* SECTION: Eigenes Personal vs. extern */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Eigenes Personal vs. externer Reinigungsdienstleister
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Viele Berliner Unternehmen prüfen, ob eigenes Reinigungspersonal
              wirtschaftlich sinnvoller wäre als ein externer Dienstleister.
              Folgende Punkte sprechen für Outsourcing:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Keine Personalverwaltung", v: " — keine Lohnabrechnung, keine Krankheitsvertretung, keine Urlaubsplanung" },
                { k: "Keine Equipment-Investition", v: " — keine Anschaffung von Industriestaubsaugern, Wischsystemen oder Reinigungsmitteln" },
                { k: "Verlässliche Vertretung", v: " bei Ausfällen — etabliertes Vertretungsmodell beim Dienstleister" },
                { k: "Qualitätssicherung", v: " durch Objektleiter — nicht durch HR oder Office Manager nebenbei" },
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
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              <strong>Fazit:</strong> Bei Flächen,
              die mit eigener Halbtagskraft nicht voll ausgelastet wären, ist
              ein professioneller Reinigungsdienstleister meistens
              wirtschaftlicher und verlässlicher.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Häufige Fragen zu Büroreinigung Kosten
            </h2>

            {[
              {
                q: "Was kostet Büroreinigung pro Stunde in Berlin?",
                a: "Bei etablierten Reinigungsfirmen rund 30–35 €/Stunde (zzgl. MwSt.), inklusive Reinigungsmittel und Anfahrt. Facility-Management-Konzerne liegen bei 35–50 €/Stunde, Einzelpersonen ab ca. 20 €/Stunde — letztere allerdings ohne Vertretungsgarantie bei Krankheit.",
              },
              {
                q: "Was sollte im Stundensatz enthalten sein?",
                a: "Reinigungsmittel, Equipment, Anfahrt, Arbeitskleidung der Reinigungskraft und Qualitätskontrolle durch einen Objektleiter. Bei seriösen Anbietern in Berlin sind alle fünf Punkte enthalten — Verbrauchsabrechnungen oder Anfahrts-Aufschläge sind unüblich.",
              },
              {
                q: "Wie oft sollte ein Büro gereinigt werden?",
                a: "Mindestens 3× pro Woche bei regulärem Betrieb und Kundenverkehr. Kleinere Büros ohne Publikumsverkehr kommen mit 1–2× wöchentlich aus. Höhere Frequenz senkt den effektiven Aufwand pro Einsatz.",
              },
              {
                q: "Was kostet ein Reinigungsfirma-Wechsel?",
                a: "Der Wechsel selbst kostet nichts. Bei PutzKraft24: Start innerhalb 48 Stunden möglich, 4-Wochen-Zufriedenheitsgarantie — kostenlose Nachreinigung bei Unzufriedenheit, monatlich kündbar.",
              },
            ].map((f) => (
              <div key={f.q} className="mt-5">
                <h3 className="text-base font-bold text-[#0d3b2e]">
                  {f.q}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
                  {f.a}
                </p>
              </div>
            ))}
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
                <strong>Jetzt kostenlosen Büro-Check vereinbaren:</strong>{" "}
                PutzKraft24 erstellt nach einem kostenlosen Vor-Ort-Termin ein
                verbindliches Festpreis-Angebot — transparent, innerhalb von 24
                Stunden. Keine versteckten Kosten, kein Verkaufsdruck.
              </p>
              <Button
                asChild
                className="mt-5 h-12 rounded-full bg-orange px-6 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Kostenlosen Büro-Check vereinbaren
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-sm" style={{ color: "#3d5450" }}>
                Oder telefonisch:{" "}
                <a href="tel:+493055634067" className="font-semibold underline">
                  <Phone className="mr-1 inline h-3.5 w-3.5" />
                  +49 30 55634067
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#ecf3f3" }}>
          <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:px-6">
            <h2
              className="text-center text-3xl font-bold md:text-4xl text-[#0d3b2e]"
             
            >
              Ähnliche Blogartikel
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.title}
                  to={r.to}
                  className="group relative h-60 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <h3 className="absolute inset-x-5 bottom-4 text-sm font-bold leading-snug text-white text-[#0d3b2e]">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          <img
            src={berlinSkyline}
            alt="Berlin Skyline"
            className="block w-full select-none align-bottom"
            loading="lazy"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
