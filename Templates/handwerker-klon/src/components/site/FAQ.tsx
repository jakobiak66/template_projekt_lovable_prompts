import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was kostet ein Erstgespräch?",
    a: "Das Erstgespräch ist immer kostenlos und unverbindlich. Wir hören dir zu, schauen uns deine Situation an und besprechen gemeinsam die nächsten Schritte. Erst danach entscheidest du, ob du mit uns weitermachen möchtest.",
  },
  { q: "Wie schnell habe ich einen Termin?", a: "In der Regel innerhalb von 24 Stunden, im Notfall noch am gleichen Tag." },
  { q: "Welche Leistungen bietet ihr an?", a: "Sanitär, Heizung, Badsanierung, Wartung, Notfallservice und mehr — siehe unsere Leistungsübersicht." },
  { q: "In welchen Regionen seid ihr tätig?", a: "Wir arbeiten in Berlin und Frankfurt (Oder) sowie im direkten Umland." },
  { q: "Übernehmt ihr Wartungsverträge für Hausverwaltungen?", a: "Ja — wir betreuen sowohl Privatkunden als auch Hausverwaltungen mit individuellen Wartungsverträgen." },
];

export const FAQ = () => {
  return (
    <section className="container py-20">
      <div className="text-center mb-10">
        <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
          Du hast Fragen? Wir haben Antworten!
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Die häufigsten Fragen rund um unsere Arbeit, Termine und Preise.
        </p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-card data-[state=open]:bg-primary-dark data-[state=open]:text-primary-foreground data-[state=open]:border-primary-dark px-5 transition-smooth"
          >
            <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
              <span className="flex items-center gap-3">
                <span className="text-xs opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {f.q}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 opacity-90 leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
