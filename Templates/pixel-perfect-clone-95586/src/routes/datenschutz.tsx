import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Kanzlei Wenzel · Fachanwalt für Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der Kanzlei Benjamin C. Wenzel gemäß DSGVO und BDSG.",
      },
      { property: "og:title", content: "Datenschutz — Kanzlei Wenzel Berlin" },
      {
        property: "og:description",
        content: "Informationen zur Verarbeitung personenbezogener Daten.",
      },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-8">
            — Datenschutzerklärung · DSGVO
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Datenschutz
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-x max-w-5xl">
          <Row title="Einleitung">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes
              Anliegen. Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der
              gesetzlichen Bestimmungen, insbesondere der
              Datenschutz-Grundverordnung (DSGVO) sowie des
              Bundesdatenschutzgesetzes (BDSG).
            </p>
          </Row>

          <Row title="1. Verantwortlicher">
            <p className="font-medium text-foreground">Benjamin C. Wenzel</p>
            <p>Rechtsanwalt · Fachanwalt für Strafrecht</p>
            <p>Kurfürstendamm 216</p>
            <p>10719 Berlin</p>
            <div className="pt-3 space-y-1">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@anwalt-wenzel.com"
                  className="text-blue-accent hover:underline"
                >
                  info@anwalt-wenzel.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4930120593430"
                  className="text-blue-accent hover:underline"
                >
                  030 120 593 430
                </a>
              </p>
            </div>
          </Row>

          <Row title="2. Erhebung und Speicherung personenbezogener Daten">
            <p>
              Beim Besuch dieser Website werden automatisch folgende
              Informationen erfasst:
            </p>
            <Bullets
              items={[
                "IP-Adresse",
                "Datum und Uhrzeit der Anfrage",
                "Browsertyp und -version",
                "Betriebssystem",
                "Referrer-URL",
              ]}
            />
            <p>
              Diese Daten dienen ausschließlich der technischen Bereitstellung
              und Sicherheit der Website. Eine Zusammenführung mit anderen
              Datenquellen findet nicht statt.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
          </Row>

          <Row title="3. Kontaktaufnahme">
            <p>
              Wenn Sie per E-Mail oder Kontaktformular Kontakt mit uns aufnehmen,
              werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen gespeichert.
            </p>
            <p>Die Verarbeitung erfolgt auf Grundlage von:</p>
            <Bullets
              items={[
                "Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)",
                "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",
              ]}
            />
            <p>
              Ihre Daten werden nach ausschließlicher Bearbeitung Ihrer Anfrage
              gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
          </Row>

          <Row title="4. Mandatsverhältnis">
            <p>
              Im Falle einer Mandatierung werden personenbezogene Daten zur
              Durchführung des Mandats verarbeitet.
            </p>
            <p>Die Verarbeitung erfolgt auf Grundlage von:</p>
            <Bullets
              items={[
                "Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)",
                "Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)",
                "§ 43a BRAO (anwaltliche Verschwiegenheitspflicht)",
              ]}
            />
            <p>
              Alle im Rahmen des Mandats erlangten Informationen unterliegen der
              anwaltlichen Schweigepflicht.
            </p>
          </Row>

          <Row title="5. Weitergabe von Daten">
            <p>
              Eine Weitergabe personenbezogener Daten an Dritte erfolgt
              ausschließlich:
            </p>
            <Bullets
              items={[
                "mit Ihrer ausdrücklichen Einwilligung",
                "wenn gesetzlich vorgeschrieben oder behördlich angeordnet",
                "soweit zur Mandatsbearbeitung erforderlich",
              ]}
            />
          </Row>

          <Row title="6. Ihre Rechte">
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <Bullets
              items={[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruchsrecht (Art. 21 DSGVO)",
              ]}
            />
            <p>
              Zudem besteht ein Beschwerderecht bei der zuständigen
              Datenschutzaufsichtsbehörde:
            </p>
            <div>
              <p className="font-medium text-foreground">
                Berliner Beauftragte für Datenschutz und Informationsfreiheit
              </p>
              <p>Friedrichstr. 219</p>
              <p>10969 Berlin</p>
              <a
                href="https://www.datenschutz-berlin.de"
                target="_blank"
                rel="noreferrer"
                className="inline-block pt-1 text-blue-accent hover:underline"
              >
                www.datenschutz-berlin.de
              </a>
            </div>
          </Row>

          <Row title="7. Datensicherheit">
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              Darüber hinaus setzen wir technische und organisatorische
              Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder
              vorsätzliche Verluste, Manipulation oder unbefugten Zugriff zu
              schützen.
            </p>
          </Row>

          <Row title="8. Cookies, Einwilligung und Analyse">
            <p>
              Diese Website verwendet technisch notwendige Cookies und
              vergleichbare lokale Speichertechnologien nur, soweit dies für den
              Betrieb, die Sicherheit der Website und die Verwaltung Ihrer
              Datenschutzeinstellungen erforderlich ist. Ihre Auswahl im
              Cookie-Banner wird lokal in Ihrem Browser gespeichert, damit die
              Entscheidung bei weiteren Besuchen berücksichtigt werden kann.
            </p>
            <p>
              Sowohl Sie ausdrücklich einwilligen, setzen wir Google Analytics 4
              zur Reichweitenmessung und Verbesserung unseres Angebots ein. Dabei
              können Nutzungsdaten wie aufgerufene Seiten, technische
              Informationen zum Browser oder gekürzte IP-Adressen
              pseudonymisiert an Google verarbeitet werden. Rechtsgrundlage
              hierfür ist Art. 6 Abs. 1 lit. a DSGVO. Ihre Auswahl können Sie
              jederzeit über „Cookie-Einstellungen" im Footer anpassen oder
              widerrufen.
            </p>
            <p>
              Aktuell verwenden wir keine eigenständigen Marketing- oder
              Werbe-Cookies. Sollten künftig weitere einwilligungspflichtige
              Dienste eingebunden werden, wird diese Datenschutzerklärung
              entsprechend ergänzt.
            </p>
          </Row>

          <Row title="Aktualisierung" last>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand:
              März 2026.
            </p>
            <p>
              Durch die Weiterentwicklung dieser Website oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern.
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
      className={`grid md:grid-cols-[260px_1fr] gap-6 md:gap-12 py-10 ${
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className="block w-3 h-px bg-foreground/40 mt-2.5 shrink-0" />
          {i}
        </li>
      ))}
    </ul>
  );
}
