import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | PutzKraft24" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der PutzKraft24 GmbH – Informationen zur Verarbeitung personenbezogener Daten.",
      },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="text-5xl font-extrabold text-foreground md:text-6xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/85">
          <section>
            <h2 className="text-2xl font-bold text-foreground">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="mt-6 text-lg font-bold text-foreground">Allgemeine Hinweise</h3>
            <p className="mt-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mt-3 font-semibold text-foreground">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="mt-2">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              PutzKraft24 GmbH<br />
              Kantstraße 141<br />
              10623 Berlin<br />
              Telefon: +49 30 55634067<br />
              E-Mail: info@putzkraft-24.de
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="mt-3">
              Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details dazu entnehmen Sie
              dem Abschnitt „Recht auf Einschränkung der Verarbeitung" in dieser
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              2. Hosting und Content Delivery Networks (CDN)
            </h2>

            <h3 className="mt-6 text-lg font-bold text-foreground">Externes Hosting</h3>
            <p className="mt-3">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden,
              handeln.
            </p>
            <p className="mt-3">
              Das externe Hosting erfolgt zur Erfüllung eines mit dem Websitebetreiber
              geschlossenen Auftragsverarbeitungsvertrages und unter vollständiger Einhaltung der
              einschlägigen Datenschutzvorschriften sowie zum Schutz der hier verarbeiteten Daten
              vor Verlust, Manipulation oder Zugang durch Unbefugte.
            </p>
            <p className="mt-3">
              Der Hoster wird nur gegenüber dem Auftraggeber tätig, ausdrücklich nicht gegenüber
              Dritten. Es erfolgen keine Weitergaben der Daten an Dritte.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">CDN</h3>
            <p className="mt-3">
              Wir nutzen ein Content Delivery Network (CDN). Ein CDN ist ein technisch
              organisatorisches Netzwerk von an geografisch verschiedenen Standorten weltweit
              verteilten Servern, über das wir digitale Inhalte einer Website (z. B. Bilder oder
              Schriftarten) beziehen können. Die Anfrage wird über den schnellsten und am wenigsten
              ausgelasteten Server bedient.
            </p>
            <p className="mt-3">
              Zu diesem Zweck werden die IP-Adressen der Nutzer verarbeitet. Dies erfolgt zu dem
              Zweck, die Ladezeit der Website zu verbessern.
            </p>
            <p className="mt-3">
              <span className="font-semibold text-foreground">Rechtsgrundlage:</span> Unsere
              berechtigten Interessen liegen in der Optimierung der Sicherheit und Effizienz unserer
              Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="mt-6 text-lg font-bold text-foreground">Datenschutz</h3>
            <p className="mt-3">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
              können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
              wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mt-3">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mt-3">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              PutzKraft24 GmbH<br />
              Kantstraße 141<br />
              10623 Berlin<br />
              Telefon: +49 30 55634067<br />
              E-Mail: info@putzkraft-24.de
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="mt-3">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
              reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mt-3">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
              Aufenthalts, ihrer Arbeitsplatz sowie des Ortes des mutmaßlichen Verstoßes zu. Das
              Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="mt-3">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
              aushändigen zu lassen. Wenn Sie die direkte Übertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="mt-6 text-lg font-bold text-foreground">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie z. B. Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und
              an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mt-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
              uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
