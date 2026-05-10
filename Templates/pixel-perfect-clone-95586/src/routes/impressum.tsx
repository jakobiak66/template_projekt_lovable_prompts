import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Kanzlei Wenzel · Fachanwalt für Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Impressum gemäß § 5 DDG der Kanzlei Benjamin C. Wenzel, Rechtsanwalt und Fachanwalt für Strafrecht in Berlin.",
      },
      { property: "og:title", content: "Impressum — Kanzlei Wenzel Berlin" },
      {
        property: "og:description",
        content: "Pflichtangaben gemäß § 5 DDG der Kanzlei Wenzel.",
      },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-8">
            — Angaben gemäß § 5 DDG
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x max-w-5xl">
          <Row title="Kanzlei">
            <p className="font-medium text-foreground">Benjamin C. Wenzel</p>
            <p>Rechtsanwalt · Fachanwalt für Strafrecht</p>
            <p>Kurfürstendamm 216, 10719 Berlin</p>
            <p>Deutschland</p>
            <div className="pt-4 space-y-1">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4930120593430"
                  className="text-blue-accent hover:underline"
                >
                  030 120 593 430
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@anwalt-wenzel.com"
                  className="text-blue-accent hover:underline"
                >
                  info@anwalt-wenzel.com
                </a>
              </p>
            </div>
          </Row>

          <Row title="Berufsbezeichnung">
            <p>
              Berufsbezeichnung: Rechtsanwalt (verliehen in der Bundesrepublik
              Deutschland)
            </p>
            <div className="pt-4">
              <p className="font-medium text-foreground">Zuständige Kammer:</p>
              <p>Rechtsanwaltskammer Berlin</p>
              <p>Littenstraße 9</p>
              <p>10179 Berlin</p>
              <a
                href="https://www.rak-berlin.de"
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-2 text-blue-accent hover:underline"
              >
                www.rak-berlin.de
              </a>
            </div>
          </Row>

          <Row title="Berufsrechtliche Regelungen">
            <ul className="space-y-2">
              {[
                "Bundesrechtsanwaltsordnung (BRAO)",
                "Berufsordnung für Rechtsanwälte (BORA)",
                "Fachanwaltsordnung (FAO)",
                "Rechtsanwaltsvergütungsgesetz (RVG)",
                "Berufsregeln der Rechtsanwälte der Europäischen Union",
              ].map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="block w-3 h-px bg-foreground/40 mt-2.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="pt-4">
              Die berufsrechtlichen Regelungen können über die Website der
              Bundesrechtsanwaltskammer eingesehen werden:{" "}
              <a
                href="https://www.brak.de"
                target="_blank"
                rel="noreferrer"
                className="text-blue-accent hover:underline"
              >
                www.brak.de
              </a>
            </p>
          </Row>

          <Row title="Berufshaftpflicht">
            <p>Angaben zur Berufshaftpflichtversicherung:</p>
            <p>Name und Sitz des Versicherers: [Versicherung einfügen]</p>
            <p>Räumlicher Geltungsbereich: Bundesrepublik Deutschland</p>
          </Row>

          <Row title="Verantwortlich für den Inhalt">
            <p>gemäß § 18 Abs. 2 MStV:</p>
            <p className="font-medium text-foreground">Benjamin C. Wenzel</p>
            <p>Kurfürstendamm 216, 10719 Berlin</p>
          </Row>

          <Row title="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
          </Row>

          <Row title="Haftung für Links">
            <p>
              Diese Website enthält ggf. Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </Row>

          <Row title="Urheberrecht" last>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </Row>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground py-16">
        <div className="container-x flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Jetzt beraten lassen.</h2>
            <p className="mt-2 text-sm text-navy-foreground/70">
              Schnelle Ersteinschätzung — diskret, unverbindlich und sofort.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+4930120593430"
              className="rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
            >
              030 120 593 430
            </a>
            <Link
              to="/kontakt"
              className="rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/10 transition"
            >
              Rückruf anfordern
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-10 ${
        last ? "" : "border-b border-border"
      }`}
    >
      <p className="font-serif text-base text-foreground">{title}</p>
      <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
