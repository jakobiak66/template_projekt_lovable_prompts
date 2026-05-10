import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Wie schnell können Sie mit der Reinigung starten?", a: "In der Regel innerhalb von 7 Werktagen nach Vertragsabschluss." },
  { q: "Was kostet eine Büroreinigung in Berlin?", a: "Der Preis hängt von Fläche, Frequenz und Leistungsumfang ab. Sie erhalten ein transparentes Festpreisangebot." },
  { q: "Sind Sie versichert?", a: "Ja, wir verfügen über eine umfassende Betriebs- und Haftpflichtversicherung." },
  { q: "Bringen Sie eigene Reinigungsmittel mit?", a: "Ja, alle Materialien und Geräte sind im Preis enthalten." },
  { q: "Reinigen Sie auch außerhalb der Bürozeiten?", a: "Selbstverständlich – auf Wunsch früh morgens, abends oder am Wochenende." },
  { q: "Ist eine kurze Vertragslaufzeit möglich?", a: "Ja, wir bieten flexible Laufzeiten und faire Kündigungsfristen." },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">FAQs</h2>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="rounded-2xl border-0 bg-mint px-5">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
