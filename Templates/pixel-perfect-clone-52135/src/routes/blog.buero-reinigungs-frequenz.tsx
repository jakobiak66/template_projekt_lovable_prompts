import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import berlinSkyline from "@/assets/berlin-skyline.png";
import heroImage from "@/assets/blog-frequenz-hero.png";

export const Route = createFileRoute("/blog/buero-reinigungs-frequenz")({
  head: () => ({
    meta: [
      {
        title:
          "Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide 2026 — PutzKraft24",
      },
      {
        name: "description",
        content:
          "Frequenz-Guide für Büroreinigung in Berlin: Wie oft Büros, Sanitär, Küche & Co. gereinigt werden sollten — inklusive Empfehlungen nach Mitarbeiterzahl.",
      },
      {
        property: "og:title",
        content:
          "Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide 2026",
      },
      {
        property: "og:description",
        content:
          "Frequenz-Guide für Büroreinigung in Berlin — Empfehlungen nach Bürotyp, Mitarbeiterzahl und Nutzungsintensität.",
      },
    ],
  }),
  component: ArticlePage,
});


const related = [
  {
    to: "/blog",
    title: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    to: "/blog",
    title: "Reinigungsmythen entlarvt",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
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
                <Link to="/" className="hover:underline">
                  Home
                </Link>{" "}
                ›{" "}
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>{" "}
                › <span>Frequenz-Guide</span>
              </nav>
              <h1
                className="text-4xl font-bold leading-tight md:text-[56px] md:leading-[1.05]"
               
              >
                Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide für Berliner Unternehmen 2026
              </h1>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Modernes, sauberes Büro mit natürlichem Licht"
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
              <strong>Kurz zusammengefasst:</strong> Die meisten Berliner Büros mit
              10–50 Mitarbeitenden fahren mit zwei bis drei Reinigungsterminen pro
              Woche optimal. Kleinere Teams (bis 10 Personen) reichen oft mit
              einmal wöchentlich. Sanitärbereiche, Küchen und Kontaktflächen
              brauchen unabhängig davon eine eigene, häufigere Frequenz.
              Entscheidend ist nicht die maximale Häufigkeit, sondern eine
              Frequenz, die zum tatsächlichen Nutzungsmuster Ihres Büros passt —
              und die im Vertrag transparent festgelegt ist.
            </div>
          </div>
        </section>

        {/* SECTION: Warum es keine pauschale Antwort gibt */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2
              className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]"
             
            >
              Warum es keine pauschale Antwort gibt
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Wer im Internet nach „Wie oft sollte ein Büro gereinigt werden?"
              sucht, findet meistens Pauschalaussagen wie „mindestens zweimal pro
              Woche" oder „täglich für hygienische Standards". In der Praxis ist
              das zu grob. Eine Anwaltskanzlei mit 8 Mitarbeitenden in
              Charlottenburg hat einen anderen Reinigungsbedarf als ein
              Coworking-Space mit 60 wechselnden Nutzern in Friedrichshain — und
              beide unterscheiden sich grundlegend von einer IT-Firma im
              Homeoffice-Hybridmodell, deren Räume nur an zwei Tagen pro Woche
              voll besetzt sind.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Die richtige Frequenz hängt von vier Faktoren ab:{" "}
              <strong>
                Mitarbeiterzahl, tatsächliche Anwesenheitstage, Branche und
                Bürotyp
              </strong>{" "}
              (offen, geschlossen, mit Empfang, mit Küche). Wir bei PutzKraft24
              ermitteln diese Faktoren bei jedem neuen Kunden in einem
              kostenlosen Büro-Check vor Ort, weil eine Ferndiagnose
              erfahrungsgemäß zu falschen Empfehlungen führt.
            </p>
          </div>
        </section>

        {/* SECTION: Empfehlungen nach Bürogröße */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2
              className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]"
             
            >
              Empfehlungen nach Bürogröße
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Als grobe Orientierung — bevor wir gleich auf Branchen-Spezifika
              eingehen — gilt für reguläre Büros mit Anwesenheitsmodell:
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-[15px]">
                <thead>
                  <tr style={{ backgroundColor: "#ecf3f3" }}>
                    <th className="border border-[#cfe0dc] px-3 py-2 text-left font-bold">Mitarbeiterzahl</th>
                    <th className="border border-[#cfe0dc] px-3 py-2 text-left font-bold">Empfohlene Frequenz</th>
                    <th className="border border-[#cfe0dc] px-3 py-2 text-left font-bold">Sanitär &amp; Küche zusätzlich</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["bis 10", "1× pro Woche", "1–2× pro Woche"],
                    ["10–25", "2× pro Woche", "2–3× pro Woche"],
                    ["25–50", "2–3× pro Woche", "täglich (Mo–Fr)"],
                    ["50–100", "3× pro Woche bis täglich", "täglich"],
                    ["über 100", "täglich", "täglich, ggf. 2× täglich"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((c, i) => (
                        <td key={i} className="border border-[#cfe0dc] px-3 py-2">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Diese Werte stammen aus unserer Praxis mit 35+ Berliner Unternehmen
              — und sind ausdrücklich kein starres Raster. Hybride Arbeitsmodelle
              verschieben die Empfehlungen häufig nach unten: Ein
              30-Personen-Team, das nur dienstags und donnerstags vollständig im
              Büro ist, braucht in der Regel keine drei Reinigungstermine pro
              Woche.
            </p>
          </div>
        </section>

        {/* SECTION: Branchen-Spezifika */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Branchen-Spezifika
            </h2>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Kanzleien und Steuerbüros
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Repräsentative Empfangsbereiche, Mandantengespräche und hochwertige
              Möbel verlangen eine sichtbar konstante Sauberkeit — typischerweise
              zweimal pro Woche, in größeren Kanzleien dreimal. Vertraulichkeit
              ist hier ein zweiter Faktor: Fixe Reinigungstermine außerhalb der
              Mandantenzeiten und ein eingespieltes Team mit festem Objektleiter
              reduzieren das Risiko, dass sensible Unterlagen unbeabsichtigt
              eingesehen werden.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              Agenturen und Startups
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Open-Plan-Büros mit Küche, Lounge und Meetingbereichen brauchen
              eine andere Frequenz-Struktur: Sanitär und Küche täglich oder jeden
              zweiten Tag, Schreibtischbereiche und Böden zweimal pro Woche.
              Erfahrungsgemäß lohnt sich hier eine geteilte Reinigung — zum
              Beispiel große Reinigung am Montagmorgen, Auffrischung am
              Donnerstag.
            </p>

            <h3 className="mt-6 text-base font-bold text-[#0d3b2e]">
              IT, Consulting und Back-Office
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Bei Hybridmodellen mit niedriger physischer Anwesenheit reichen
              häufig ein bis zwei Termine pro Woche, wenn die Anwesenheitstage
              klar getrennt sind. Wichtig ist, dass die Reinigung am Tag <em>vor</em>{" "}
              einem stark besuchten Office-Tag stattfindet, nicht danach.
            </p>
          </div>
        </section>

        {/* SECTION: Was täglich passieren sollte */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Was unabhängig von der Frequenz täglich passieren sollte
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Auch wenn die „Hauptreinigung" nur zwei- oder dreimal pro Woche
              stattfindet, gibt es Bereiche, die täglich Aufmerksamkeit brauchen
              — entweder durch ein Reinigungsteam oder durch interne
              Mini-Routinen:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                "Sanitärbereiche kontrollieren und nachfüllen (Seife, Papier, Handtücher)",
                "Küchen-Spülen und Arbeitsflächen wischen",
                "Müll in stark genutzten Bereichen entleeren (Empfang, Meetingräume)",
                "Türgriffe, Lichtschalter und Aufzug-Knöpfe — die klassischen Kontaktflächen",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span style={{ color: "#e8a23a" }}>•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Bei vielen unserer Kunden übernimmt das Reinigungsteam diese
              täglichen Mini-Routinen separat von der eigentlichen
              Unterhaltsreinigung — entweder als kurzer Morgendienst (30–45
              Minuten) oder über Self-Service-Stationen, die das Team selbst
              nutzt.
            </p>
          </div>
        </section>

        {/* SECTION: Sonderreinigungen */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Sonderreinigungen — wie oft, wann?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Neben der laufenden Unterhaltsreinigung empfehlen sich folgende
              Frequenzen für Spezialleistungen:
            </p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {[
                { k: "Fensterreinigung innen und außen:", v: " 2–4× pro Jahr (außen abhängig von Etage und Außenseite)" },
                { k: "Grundreinigung Böden:", v: " 1–2× pro Jahr (Parkett ölen, Teppich tiefenreinigen)" },
                { k: "Polsterreinigung Bürostühle:", v: " 1× pro Jahr" },
                { k: "Desinfektionsreinigung:", v: " nach Bedarf (Krankheitsausbruch, hohe Außen-Frequenz)" },
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
              Diese Sonderreinigungen werden in der Regel nicht im monatlichen
              Pauschalbudget abgerechnet, sondern separat geplant — am besten als
              Jahresplan beim Vertragsabschluss.
            </p>
          </div>
        </section>

        {/* SECTION: Frequenz zu niedrig */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Was passiert, wenn die Frequenz zu niedrig ist?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Die häufigste Folge unterdimensionierter Reinigung ist nicht
              „sichtbarer Schmutz", sondern der schleichende Effekt:
              Mitarbeiterzufriedenheit sinkt, Krankheitstage steigen leicht
              (besonders in der Erkältungssaison), und repräsentative Bereiche
              wie der Empfang werden allmählich zur Schwachstelle in
              Kundengesprächen. Ein häufiger Auslöser für einen{" "}
              <Link to="/blog/reinigungsfirma-wechseln" className="underline">
                Wechsel der Reinigungsfirma
              </Link>{" "}
              ist nicht eine schlechte Reinigungsqualität, sondern eine
              Frequenz, die nicht zur tatsächlichen Büronutzung passt.
            </p>
          </div>
        </section>

        {/* SECTION: Frequenz zu hoch */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Was passiert, wenn die Frequenz zu hoch ist?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Selten, aber vorhanden: Manche Unternehmen reinigen aus Vorsicht
              täglich, obwohl zweimal pro Woche reichen würde. Die Folge sind
              unnötige Kosten — die anders eingesetzt werden könnten. Eine
              seriöse Reinigungsfirma sollte bei einer Erstberatung auch bereit
              sein, eine niedrigere Frequenz zu empfehlen, wenn das aus der
              Bedarfsanalyse sinnvoll ist.
            </p>
          </div>
        </section>

        {/* SECTION: Wie Sie Ihre optimale Frequenz finden */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Wie Sie Ihre optimale Frequenz finden
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Drei Schritte, die wir bei jedem neuen Kunden empfehlen:
            </p>
            <ol className="mt-5 space-y-3 text-[15px] list-decimal pl-5">
              <li>
                <strong>Aktuelle Nutzung dokumentieren:</strong> Welche Räume
                werden an welchen Tagen wie stark genutzt? Welche Mitarbeitenden
                sind im Hybridmodell? Wann finden Kundengespräche statt?
              </li>
              <li>
                <strong>Schwachstellen identifizieren:</strong> Wo sehen Sie heute
                regelmäßig Sauberkeitsprobleme? Sanitär? Küche? Empfang?
                Meetingräume nach Workshops?
              </li>
              <li>
                <strong>Vor-Ort-Begehung mit einer Reinigungsfirma:</strong> Eine
                seriöse Firma macht das kostenlos und unverbindlich und schlägt
                eine Frequenz-Struktur vor, die zur konkreten Realität Ihres
                Büros passt — nicht zur Standardpauschale.
              </li>
            </ol>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
              Genau diesen Büro-Check bieten wir bei PutzKraft24 für Berliner
              Unternehmen kostenlos an. Innerhalb von 24 Stunden bekommen Sie ein
              konkretes Konzept mit empfohlener Frequenz, klarer
              Servicevereinbarung und einem ungefähren Stundensatz von rund
              30–35 €/Stunde.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
            <h2 className="text-2xl font-bold md:text-[26px] text-[#0d3b2e]">
              Häufige Fragen
            </h2>

            {[
              {
                q: "Reicht es, das Büro nur einmal pro Woche zu reinigen?",
                a: "Bei kleinen Teams (bis 10 Personen) und niedriger Bürofrequenz ja. Sanitärbereiche und Küchen sollten dann jedoch parallel über interne Mini-Routinen abgedeckt sein. Ab 15 Mitarbeitenden empfehlen wir grundsätzlich mindestens zwei Termine pro Woche.",
              },
              {
                q: "Wir sind ein Hybrid-Team — können wir Reinigungstage flexibel verschieben?",
                a: "Ja, das ist üblich. Bei PutzKraft24 stimmen wir die Reinigungstermine einmal pro Quartal mit dem Office-Belegungsplan ab. Kurzfristige Verschiebungen sind mit 48 Stunden Vorlauf möglich.",
              },
              {
                q: "Brauchen wir täglich eine Reinigungskraft, wenn wir Kundenverkehr haben?",
                a: "Nicht zwangsläufig. Eine tägliche kurze Sanitär-/Küchen-Kontrolle (30–45 Minuten) plus zwei vollständige Reinigungstermine pro Woche reichen in den meisten Fällen aus, um repräsentative Bereiche durchgängig sauber zu halten.",
              },
              {
                q: "Wie unterscheidet sich der Preis bei unterschiedlicher Frequenz?",
                a: "Der Stundensatz bleibt gleich (rund 30–35 €/Stunde) — der Gesamtaufwand und damit der Monatspreis ergibt sich aus der Frequenz × Reinigungsdauer.",
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
                Sie sind sich unsicher, welche Reinigungsfrequenz zu Ihrem Büro
                passt? Wir beraten Sie kostenlos und unverbindlich — und
                erstellen Ihnen ein passgenaues Angebot für Ihre Büroreinigung
                in Berlin.
              </p>
              <Button
                asChild
                className="mt-5 h-12 rounded-full bg-orange px-6 text-base font-semibold text-primary-foreground hover:bg-orange-hover"
              >
                <Link to="/kontakt">
                  Kostenloses Angebot anfragen
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-4 text-sm" style={{ color: "#3d5450" }}>
                Oder rufen Sie uns direkt an:{" "}
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
              {/* Frequenz tile (this article) */}
              <Link
                to="/blog/buero-reinigungs-frequenz"
                className="group relative h-60 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: "#f3f7f6" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-6">
                  <h3
                    className="text-center text-sm font-bold leading-snug text-[#0d3b2e]"
                    style={{ color: "#1a4a42" }}
                  >
                    Reinigungs-Frequenz,
                    <br />
                    die zu Ihrem Büro passt
                  </h3>
                  <div className="mt-5 grid grid-cols-7 gap-2.5">
                    {[
                      "#cfe3df",
                      "#e8a23a",
                      "#2d7a6e",
                      "#e8a23a",
                      "#1f5c52",
                      "#cfe3df",
                      "#cfe3df",
                    ].map((c, i) => (
                      <span
                        key={i}
                        className="block h-5 w-5 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
                <h3
                  className="absolute inset-x-5 bottom-4 text-sm font-bold leading-snug text-[#0d3b2e]"
                 
                >
                  Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide 2026
                </h3>
              </Link>

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
