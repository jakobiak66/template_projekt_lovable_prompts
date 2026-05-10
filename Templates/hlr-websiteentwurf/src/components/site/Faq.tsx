const faqs = [
  {
    q: "1. In welchem Gebiet sind Sie tätig?",
    a: "Unser Zuhause ist Erkner – aber wir sind in der gesamten Region Ostbrandenburg und Berlin-Südost für Sie da. Einfach ansprechen, wir finden einen Weg.",
  },
  {
    q: "2. Welche Leistungen bieten Sie an?",
    a: "Von der Heizung über das Traumbad bis hin zu Solartechnik, Wohnraumlüftung und Wasseraufbereitung – wir sind Ihr Ansprechpartner für alles rund um die Haustechnik. Alles aus einer Hand.",
  },
  {
    q: "3. Bieten Sie auch Wartung und Inspektion an?",
    a: "Ja, denn eine gut gewartete Heizung ist eine zuverlässige Heizung. Wir kümmern uns um Wartung und Reparatur – damit Sie sich keine Gedanken machen müssen.",
  },
  {
    q: "4. Wie läuft ein Auftrag bei Ihnen ab?",
    a: "Am Anfang steht immer ein persönliches Gespräch und die Besichtigung vor Ort. Gemeinsam finden wir die Lösung, die zu Ihnen passt – und sorgen dafür, dass die Umsetzung so reibungslos wie möglich verläuft.",
  },
  {
    q: "5. Mit welchen Markenherstellern arbeiten Sie zusammen?",
    a: "Im Bereich Heizungstechnik setzen wir seit Jahren auf Brötje – einen Partner, dem wir und unsere Kunden vertrauen.",
  },
  {
    q: "6. Wie kann ich einen Termin vereinbaren?",
    a: "Ganz einfach – rufen Sie uns an unter 03362 503140 oder schreiben Sie uns an hlr-gmbh@ewetel.net. Wir melden uns schnell zurück.",
  },
];

export function Faq() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <span className="badge-pill mb-5">FAQ</span>
        <h2>Häufige Fragen</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Sie haben Fragen zu unseren Leistungen rund um Heizung, Sanitär,
          Solartechnik oder Wohnraumlüftung? Hier finden Sie die häufigsten
          Fragen unserer Kundinnen und Kunden – und natürlich die passenden
          Antworten dazu.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-extrabold text-lg">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
