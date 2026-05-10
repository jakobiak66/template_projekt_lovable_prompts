import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | PutzKraft24" },
      { name: "description", content: "Impressum der PutzKraft24 GmbH – Angaben gemäß § 5 TMG." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="text-5xl font-extrabold text-foreground md:text-6xl">Impressum</h1>

        <div className="mt-12 space-y-8 text-base text-foreground/85">
          <section>
            <p className="font-bold text-foreground">Angaben gemäß § 5 TMG**</p>
            <p className="mt-6">
              PutzKraft24 GmbH<br />
              Kantstraße 141<br />
              10623 Berlin
            </p>
          </section>

          <section>
            <p><span className="font-bold text-foreground">Vertreten durch</span>:</p>
            <p className="mt-2">
              Julian Mutzhas<br />
              Handelsregister: HRB 279606 B, Amtsgericht Charlottenburg<br />
              USt-IdNr.: DE459784890
            </p>
          </section>

          <section>
            <p><span className="font-bold text-foreground">Kontakt</span>:</p>
            <p className="mt-2">
              Telefon: +49 30 55634067<br />
              E-Mail: info@putzkraft-24.de
            </p>
          </section>

          <p className="text-foreground/60">---</p>

          <section>
            <p className="font-bold text-foreground">
              Konzept | Webdesign | Digital Marketing | Programmierung
            </p>
            <p className="mt-2">
              auftrag.jetzt<br />
              E-Mail: info@auftrag.jetzt<br />
              Web:{" "}
              <a
                href="https://auftrag.jetzt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:underline"
              >
                https://auftrag.jetzt
              </a>
            </p>
          </section>

          <p className="text-foreground/60">---</p>

          <section>
            <h2 className="font-bold text-foreground">Haftungsausschluss</h2>
            <p className="mt-3 leading-relaxed">
              Die Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
              Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit ausdrücklich untersagt. Die Betreiber der Seiten
              behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, wie beispielsweise Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground">Haftung für Inhalte</h2>
            <p className="mt-3 leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt möglich, zu dem wir von
              einer konkreten Rechtsverletzung Kenntnis erlangen. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground">Haftung für Links</h2>
            <p className="mt-3 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground">Datenschutz</h2>
            <p className="mt-3 leading-relaxed">
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten
              möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
              Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
              auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
              Dritte weitergegeben.
              <br />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
              Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <p className="mt-4 leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
              Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der
              Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
