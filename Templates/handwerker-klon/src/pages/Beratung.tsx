import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProjectSteps } from "@/components/site/ProjectSteps";
import { Booking } from "@/components/site/Booking";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, Star, Wrench, ShowerHead, Flame, Settings, Droplets, Hammer, Thermometer } from "lucide-react";
import beratungHero from "@/assets/beratung-hero.jpg";
import digitalTablet from "@/assets/digital-tablet.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const advantages = [
  "Kostenlos und unverbindlich",
  "Digitale Terminvereinbarung",
  "100 % Ehrlich",
];

const services = [
  { icon: CheckCircle2, title: "Kostenlose\nBeratung für\nSanitär und\nHeizung" },
  { icon: Wrench, title: "Kundendienst\nReparatur\nHeizung" },
  { icon: ShowerHead, title: "Kundendienst\nReparatur\nSanitär" },
  { icon: Flame, title: "Installation\nHeizgerät" },
  { icon: Settings, title: "Wartung\nHeizgerät" },
  { icon: Droplets, title: "Installation\nSanitär" },
  { icon: Thermometer, title: "Wartung\nFußbodenheizung" },
  { icon: Hammer, title: "Thermentausch" },
];

const faqs = [
  {
    q: "Was umfasst die kostenlose Beratung?",
    a: "Unsere Beratung umfasst eine ausführliche Analyse deiner Situation, eine erste Einschätzung möglicher Lösungen und eine transparente Übersicht über die nächsten Schritte — alles kostenlos und unverbindlich.",
  },
  { q: "Wie läuft die Beratung ab?", a: "Wir starten mit einem Telefonat, klären deine Anforderungen und vereinbaren bei Bedarf einen Vor-Ort-Termin." },
  { q: "Für welche Projekte eignet sich die Beratung?", a: "Für jedes Sanitär- und Heizungsprojekt — vom kleinen Reparaturanliegen bis zur kompletten Sanierung." },
  { q: "Entstehen bei der Beratung wirklich keine Kosten?", a: "Ja, garantiert keine versteckten Kosten. Erst wenn du dich für ein Angebot entscheidest, beginnt die Berechnung." },
  { q: "Wie kann ich einen Termin vereinbaren?", a: "Online über unser Buchungstool, telefonisch oder per E-Mail — du wählst, was dir am besten passt." },
];

const Beratung = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
            <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 self-start">
                Beratung
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
                Kostenlose Beratung für Heizung und Sanitär
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Du suchst eine moderne, ehrliche und transparente Beratung rund um deine Sanitär- und Heizungsprojekte? Wir beraten dich kostenlos und unverbindlich — persönlich, digital oder vor Ort.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="hero" size="lg">
                  <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
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
              <img src={beratungHero} alt="Persönliche Beratung von Clara" className="w-full h-full object-cover" width={1280} height={768} />
            </div>
          </div>
        </section>

        {/* Steps */}
        <ProjectSteps />

        {/* Booking */}
        <Booking />

        {/* Vorteile */}
        <section className="bg-surface-soft py-20">
          <div className="container grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Individuell · Ehrlich · Persönlich
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Beratung, die ihre Bedürfnisse im Fokus hat
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Jede Kundin und jeder Kunde ist einzigartig — deshalb gehen wir individuell auf deine Wünsche ein. Wir analysieren deine Situation, zeigen Möglichkeiten auf und finden gemeinsam die beste Lösung. Egal ob Sanierung, Modernisierung oder Reparatur — bei uns bekommst du eine ehrliche Beratung, der du vertrauen kannst.
              </p>

              <div className="flex flex-wrap gap-3">
                {advantages.map((a) => (
                  <div key={a} className="inline-flex items-center gap-2 bg-card rounded-full pl-2 pr-4 py-2 shadow-soft border border-border">
                    <span className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm font-medium text-primary-dark">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
              <img src={digitalTablet} alt="Digitale Beratung" loading="lazy" className="w-full h-[400px] object-cover" width={1024} height={768} />
            </div>
          </div>
        </section>

        {/* Service grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Leistungen</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
                Unsere Dienstleistungen für Sanitär und Heizung
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Maßgeschneiderte Lösungen für deine individuellen Anforderungen.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="group bg-secondary hover:bg-card transition-smooth rounded-2xl p-6 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-card">
                    <div className="h-9 w-9 rounded-full bg-card flex items-center justify-center mb-4 shadow-soft">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary-dark whitespace-pre-line text-sm leading-snug">
                      {s.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
              <img src={teamMeeting} alt="Team Meeting" loading="lazy" className="w-full h-[400px] object-cover" width={1024} height={768} />
            </div>
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Kontaktiere uns
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Lass uns Dein Projekt gemeinsam starten!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Ob Wartung, Reparatur oder Neuinstallation — wir sind bereit, Dich zu unterstützen. Vereinbare einen Termin für deinen Wunschzeitpunkt — unsere Berater nehmen sich Zeit für deine Wünsche, beantworten deine Fragen und finden gemeinsam mit dir die beste Lösung. Wir freuen uns auf Dich!
              </p>
              <Button variant="hero" size="lg">
                <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-soft py-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
                Du hast Fragen? Wir haben Antworten!
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hier findest du Antworten auf häufig gestellte Fragen zu unserer Beratung — und natürlich klären wir alles Weitere gerne im persönlichen Gespräch.
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

export default Beratung;
