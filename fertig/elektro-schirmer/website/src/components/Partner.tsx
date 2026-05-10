import { useState } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

const partners = [
  {
    name: "Handwerkskammer Berlin",
    title: "Tradition nach Maß.",
    text: "Wir sind Mitglied der Handwerkskammer Berlin, dem obersten Handwerksorgan in der Hauptstadt und Hüter der Handwerksrolle.",
    cta: "Mehr zur HWK Berlin",
    href: "https://www.hwk-berlin.de/",
  },
  {
    name: "NBB Netzgesellschaft Berlin Brandenburg",
    title: "Gas ist Profisache.",
    text: "Wir sind Marktpartner der Netzgesellschaft Berlin Brandenburg inkl. Qualitätsversprechen. Sie finden uns im Installateurverzeichnis der NBB.",
    cta: "Mehr zur NBB",
    href: "https://www.nbb-netzgesellschaft.de/",
  },
  {
    name: "Berliner Wasserbetriebe",
    title: "Trinkwasser mit Lebensmittelqualität.",
    text: "Als fachlich qualifiziertes Installationsunternehmen finden Sie uns im Installateurverzeichnis der Berliner Wasserbetriebe.",
    cta: "Mehr zu den BWB",
    href: "https://www.bwb.de/",
  },
];

const Partner = () => {
  const [i, setI] = useState(0);
  const p = partners[i];
  return (
    <section className="py-20 px-6 bg-section-muted">
      <SectionTitle primary="Unsere Partner." secondary="Ihre Versorger." />
      <div className="mt-14 max-w-3xl mx-auto flex items-center gap-4">
        <button
          aria-label="Vorheriger Partner"
          onClick={() => setI((i - 1 + partners.length) % partners.length)}
          className="text-brand-dark/40 hover:text-brand transition-colors"
        >
          <ChevronLeft size={36} />
        </button>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center">
              <Building2 className="text-brand" size={24} />
            </div>
            <span className="text-xl font-light text-brand-dark">{p.name}</span>
          </div>
          <h3 className="mt-6 text-xl text-brand-dark">{p.title}</h3>
          <p className="mt-3 text-brand-dark/70 max-w-md mx-auto">{p.text}</p>
          <Button asChild className="mt-5 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <a href={p.href} target="_blank" rel="noopener noreferrer">{p.cta}</a>
          </Button>
          <div className="flex justify-center gap-2 mt-6">
            {partners.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Partner ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === i ? "bg-brand" : "bg-brand-dark/20"}`}
              />
            ))}
          </div>
        </div>
        <button
          aria-label="Nächster Partner"
          onClick={() => setI((i + 1) % partners.length)}
          className="text-brand-dark/40 hover:text-brand transition-colors"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </section>
  );
};

export default Partner;
