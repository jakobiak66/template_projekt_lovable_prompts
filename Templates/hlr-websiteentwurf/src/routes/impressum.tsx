import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Impressum – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung der H-L-R Heizung und Sanitär GmbH in Erkner.",
      },
      { property: "og:title", content: "Impressum – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content: "Impressum der H-L-R Heizung und Sanitär GmbH.",
      },
    ],
  }),
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Rechtliches
          </span>
          <h1 className="text-ink mb-8">Impressum</h1>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-ink mb-3">Verantwortlich</h2>
              <p>
                H-L-R Heizung und Sanitär GmbH
                <br />
                Rudolf-Breitscheid-Str. 10–11
                <br />
                15537 Erkner
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Geschäftsführer</h2>
              <p>Lars-Uwe Lenz</p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Kontakt</h2>
              <p>
                Telefon: +49 3362 503140
                <br />
                Telefax: +49 3362 504227
                <br />
                E-Mail: hlr-gmbh@ewetel.net
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister
                <br />
                Registergericht: Frankfurt / Oder
                <br />
                Registernummer: HRB 7625
              </p>
            </section>

            <section>
              <h2 className="text-ink mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br />
                DE201998325
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
