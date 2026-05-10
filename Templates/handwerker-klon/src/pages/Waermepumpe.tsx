import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Booking } from "@/components/site/Booking";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  CheckCircle2,
  Star,
  Search,
  FileCheck,
  Wrench,
  Gauge,
  Power,
  Settings,
  Zap,
  Building2,
  Smartphone,
  ShieldCheck,
  ClipboardList,
  PenLine,
  HardHat,
  Sparkles,
  Phone,
} from "lucide-react";
import waermepumpeHero from "@/assets/waermepumpe-hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroBenefits = [
  { icon: CheckCircle2, title: "Festpreis-Angebot", text: "Transparent und fair, ohne Überraschungen." },
  { icon: Zap, title: "Schnelle Umsetzung", text: "Von der Anfrage bis zur Installation in wenigen Wochen." },
  { icon: Sparkles, title: "Premium Qualität", text: "Marken-Wärmepumpen, fachgerecht installiert." },
  { icon: ShieldCheck, title: "Fördermittel-Check", text: "Wir unterstützen bei BAFA & KfW." },
];

const services = [
  { icon: Search, title: "Bestandsaufnahme", text: "Vor Ort Check, Heizlast, Hydraulik und Elektrik." },
  { icon: FileCheck, title: "Fördermittel", text: "Unterstützung bei BAFA / KfW und Nachweisen." },
  { icon: Wrench, title: "Installation", text: "Innen- und Außengerät, Verrohrung, Kältemittel, Elektrik." },
  { icon: Gauge, title: "Hydraulischer Abgleich", text: "Optimaler Wirkungsgrad für dein Heizsystem." },
  { icon: Power, title: "Inbetriebnahme", text: "Konfiguration, Parametrierung und Dokumentation." },
  { icon: Settings, title: "Wartung & Service", text: "Zuverlässige Kundenbetreuung über viele Jahre." },
];

const steps = [
  { n: 1, icon: ClipboardList, title: "Beratung", text: "Erstes Gespräch zu deiner Situation und Zielsetzung." },
  { n: 2, icon: PenLine, title: "Angebot", text: "Detailliertes Festpreis-Angebot inklusive Förderung." },
  { n: 3, icon: Building2, title: "Planung", text: "Auslegung, Aufstellort und Detailplanung gemeinsam mit dir." },
  { n: 4, icon: HardHat, title: "Installation", text: "Sauberer, schneller Einbau durch unsere Fachkräfte." },
  { n: 5, icon: Sparkles, title: "Service", text: "Inbetriebnahme, Einweisung und jährliche Wartung." },
];

const features = [
  { title: "Effizient und leise", text: "Moderne Inverter-Technologie sorgt für niedrige Stromkosten und Ruhe in deinem Garten." },
  { title: "Für Alt- und Neubau", text: "Passende Systeme für Altbau, Neubau, Mehrfamilienhäuser und Gewerbe." },
  { title: "Smart steuerbar", text: "App-Anbindung, Wetterabhängigkeit und dynamische Tarife inklusive." },
  { title: "Wartung & Garantie", text: "Auf Wunsch mit Wartungsplan — damit deine Wärmepumpe jahrzehntelang läuft." },
];

const faqs = [
  {
    q: "Welche Wärmepumpen installiert ihr?",
    a: "Wir installieren Luft-Wasser-, Sole-Wasser- und Wasser-Wasser-Wärmepumpen aller führenden Hersteller — abgestimmt auf Gebäude und Nutzprofil.",
  },
  { q: "Wie lange dauert die Installation?", a: "Die eigentliche Installation dauert in der Regel 3–5 Tage, abhängig vom System und dem Aufwand am Heizkreis." },
  { q: "Gibt es Förderung?", a: "Ja — BAFA und KfW fördern den Einbau von Wärmepumpen mit bis zu 70 % der Kosten. Wir übernehmen die Antragstellung." },
  { q: "Kann ich meine Heizkörper weiter nutzen?", a: "In den meisten Fällen ja. Wir prüfen das im Rahmen der Heizlastberechnung individuell." },
  { q: "Bietet ihr Wartung und Service?", a: "Selbstverständlich — mit unseren Wartungsverträgen sicherst du dir maximale Effizienz und Lebensdauer." },
  { q: "Wie viel kostet eine Wärmepumpe?", a: "Je nach System und Gebäude liegen die Gesamtkosten zwischen 18.000 € und 40.000 € — abzüglich Förderung." },
  { q: "Wartet ihr auch Wärmepumpen?", a: "Ja, auch fremdinstallierte Wärmepumpen warten und reparieren wir gerne." },
];

const Waermepumpe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
            <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Wärmepumpe</span>
                <span className="bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Förderung</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
                Jetzt Wärmepumpe installieren lassen — klimafreundlich in Berlin und Umgebung
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Planung, Förderung, Installation und Service aus einer Hand. Mit Clara wechselst du zukunftssicher und einfach auf eine moderne Wärmepumpe.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="hero" size="lg">
                  <CalendarCheck className="h-5 w-5" /> Kostenlose Beratung buchen
                </Button>
                <div className="flex items-center gap-2 bg-card rounded-xl px-4 py-2 shadow-soft">
                  <span className="font-bold text-primary-dark text-sm">Google</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card min-h-[320px]">
              <img src={waermepumpeHero} alt="Wärmepumpe im Garten" className="w-full h-full object-cover" width={1280} height={768} />
            </div>
          </div>
        </section>

        {/* Hero benefits row */}
        <section className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-secondary rounded-2xl p-5 text-center">
                  <div className="mx-auto mb-3 h-9 w-9 rounded-full bg-card flex items-center justify-center shadow-soft">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary-dark text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* All-in-one services */}
        <section className="container py-16">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Leistung</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
              Alles für Deine Wärmepumpe aus einer Hand
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Beratung über Förderung, Planung, Installation bis zum Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((s, idx) => {
              const Icon = s.icon;
              const highlight = idx === services.length - 1;
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl p-6 transition-smooth border ${
                    highlight
                      ? "bg-gradient-primary text-primary-foreground border-primary shadow-glow"
                      : "bg-secondary border-transparent hover:bg-card hover:border-primary/30 hover:shadow-card"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-full flex items-center justify-center mb-4 shadow-soft ${highlight ? "bg-primary-foreground/20" : "bg-card"}`}>
                    <Icon className={`h-4 w-4 ${highlight ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <h3 className={`font-bold mb-2 text-sm ${highlight ? "text-primary-foreground" : "text-primary-dark"}`}>{s.title}</h3>
                  <p className={`text-xs leading-relaxed ${highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Steps + features */}
        <section className="bg-surface-soft py-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Prozess</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
                Schritt für Schritt zu Deinem fertigen Projekt
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Von der ersten Beratung bis zur finalen Umsetzung. Unser Ablauf ist klar strukturiert, sodass dein Projekt professionell, transparent und termingerecht verläuft.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 relative max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-primary/30 z-0" />
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.n} className="relative z-10 text-center">
                    <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center text-primary shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-semibold text-primary mb-1">Schritt {s.n}</div>
                    <h3 className="font-bold text-primary-dark text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Button variant="hero" size="lg">
                <CalendarCheck className="h-5 w-5" /> Kostenlose Beratung buchen
              </Button>
              <Button variant="soft" size="lg" asChild>
                <a href="tel:+4930"><Phone className="h-5 w-5" /> 030 / 123 456 78</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
              {features.map((f) => (
                <div key={f.title} className="bg-secondary rounded-2xl p-5">
                  <h3 className="font-bold text-primary-dark text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <Booking />

        {/* FAQ */}
        <section className="bg-surface-soft py-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
                Du hast Fragen? Wir haben Antworten!
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hier findest du Antworten auf die häufigsten Fragen rund um Wärmepumpen, Förderung und Installation.
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Waermepumpe;
