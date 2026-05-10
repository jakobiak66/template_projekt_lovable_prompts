import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProjectSteps } from "@/components/site/ProjectSteps";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, ArrowRight, Star, Wrench, ShowerHead, Flame, Settings, Droplets, Bath, Hammer, Thermometer } from "lucide-react";
import sanitaerHero from "@/assets/sanitaer-hero.jpg";
import digitalTablet from "@/assets/digital-tablet.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

const advantages = [
  "Schneller Service",
  "Digitale Terminvereinbarung",
  "Faire Preise",
];

const services = [
  { icon: CheckCircle2, title: "Kostenlose\nBeratung für\nSanitär und Heizung" },
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
    q: "Was gehört zur Sanitärinstallation?",
    a: "Zur Sanitärinstallation gehören die Verlegung von Wasser- und Abwasserleitungen, die Installation von Sanitärobjekten wie Waschbecken, Toiletten, Duschen und Badewannen, sowie die Montage von Armaturen und Zubehör. Auch Trinkwasserversorgung und Abwasserentsorgung gehören dazu.",
  },
  { q: "Installiert ihr auch Küchenanschlüsse?", a: "Ja, wir installieren komplette Küchenanschlüsse — von Wasser, Abwasser bis zur Spülmaschine." },
  { q: "Was passiert, wenn es nach der Installation zu einem Leck oder Problem kommt?", a: "Wir bieten Garantie auf unsere Arbeit. Bei Problemen sind wir schnell vor Ort, oft am gleichen Tag." },
  { q: "Bietet ihr auch Beratung an?", a: "Selbstverständlich — die Erstberatung ist immer kostenlos und unverbindlich." },
  { q: "Wie kann ich ein Angebot anfordern?", a: "Über unser Online-Formular, telefonisch oder direkt per WhatsApp. Du erhältst innerhalb von 24h ein Angebot." },
];

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Sanitaer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="container relative grid lg:grid-cols-2 gap-6 py-12 lg:py-16 items-stretch">
            <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up flex flex-col justify-center">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5 self-start">
                Leistung
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
                Installation Sanitär
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Du suchst eine moderne Komplettlösung für hochwertige, langlebige Sanitärinstallationen in deinem Zuhause? Wir kümmern uns um Planung, Installation und Service — alles aus einer Hand.
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
              <img src={sanitaerHero} alt="Sanitärinstallation in Berlin & Frankfurt (Oder)" className="w-full h-full object-cover" width={1280} height={768} />
            </div>
          </div>
        </section>

        {/* Steps */}
        <ProjectSteps />

        {/* Booking reuse */}
        <Booking />

        {/* Sanitärinstallation Vorteile */}
        <section className="bg-surface-soft py-20">
          <div className="container grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Installation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Sanitärinstallationen vom Profi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Unsere Sanitärinstallationen bringen Funktion, Komfort und Stil in dein Zuhause. Wir beraten dich umfassend, planen sorgfältig und installieren auf höchstem Niveau — für eine reibungslose Lösung, die dich langfristig begeistert.
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
              <img src={digitalTablet} alt="Digitale Planung" loading="lazy" className="w-full h-[400px] object-cover" width={1024} height={768} />
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
                Vollständige Lösungen für Neubau, Modernisierung und Reparatur.
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
                Bereit zu starten
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Lass uns Dein Projekt gemeinsam starten!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Ob Wartung, Sanierung oder Neubau — wir sind dein verlässlicher Partner. Vereinbare jetzt deinen Termin und überzeuge dich von unserem Service. Unser Team meldet sich bei dir, um deine Fragen zu klären und einen Termin zu vereinbaren, der für dich am besten passt. Wir freuen uns darauf, deine Vision zu finden. Starte noch heute — wir freuen uns auf Dich!
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg">
                  <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
                </Button>
                <Button variant="soft" size="lg">
                  Mehr erfahren <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQ */}
        <section className="bg-surface-soft py-20">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
                Du hast Fragen? Wir haben Antworten!
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hier findest du Antworten auf die häufigsten Fragen zu unseren Leistungen und Prozessen. Falls du weitere Fragen hast, sind wir für dich da!
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

export default Sanitaer;
