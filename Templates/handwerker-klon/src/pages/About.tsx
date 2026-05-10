import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle2, ArrowRight, Star } from "lucide-react";
import heroPlumber from "@/assets/hero-plumber.jpg";
import heroWorker from "@/assets/hero-worker.jpg";
import leadership from "@/assets/leadership-team.jpg";
import digitalTablet from "@/assets/digital-tablet.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

const advantages = [
  "Schneller Service",
  "Digitale Terminvereinbarung",
  "Faire Preise",
  "Meisterbetrieb",
  "Festpreisgarantie",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />
          <div className="container relative grid lg:grid-cols-2 gap-8 py-12 lg:py-20 items-center">
            <div className="bg-secondary/70 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-card animate-fade-up">
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                Wer wir sind
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-5 leading-tight">
                Über uns
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir sind ein moderner Handwerksbetrieb mit einem klaren Ziel:
                Anders sein, zuverlässiger und transparenter. Diese Werte machen uns
                durch & durch im Sanitär- und Heizungsausbau aus.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unser erfahrenes Team verbindet traditionelles Handwerk mit
                innovativen, digitalen Lösungen, um Dir einen Service zu bieten,
                der sich an Deinen Bedürfnissen orientiert. Von der Beratung bis
                zur Umsetzung stehen wir an Deiner Seite und gehen alles daran,
                Deine Erwartungen zu übertreffen.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
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

            <div className="relative grid grid-cols-2 gap-4 h-[420px] sm:h-[480px]">
              <div className="rounded-[2rem] overflow-hidden shadow-card rounded-tl-[6rem]">
                <img src={heroPlumber} alt="Sanitärtechniker bei der Arbeit" className="h-full w-full object-cover" width={1024} height={1024} />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-card mt-10 rounded-tr-[6rem]">
                <img src={heroWorker} alt="Handwerker mit Rohren" loading="lazy" className="h-full w-full object-cover" width={1024} height={1024} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats reuse */}
        <Stats />

        {/* Leadership */}
        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={leadership} alt="Unser Führungsteam" loading="lazy" className="w-full h-[420px] object-cover" width={1024} height={768} />
            </div>
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Unser Führungsteam
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Deine Ansprechpartner für exzellenten Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Setze auf höchste Kundenzufriedenheit, digitale Lösungen und effiziente Prozesse. Im Zentrum unseres Handelns: Du. Durch innovative Ansätze erfüllen wir die Bedürfnisse unserer Partner schnell, zuverlässig und mit maximaler Transparenz in allen Abläufen.
              </p>
              <Button variant="hero" size="lg">
                <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
              </Button>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-surface-soft py-20">
          <div className="container grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Warum Clara
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Deine Vorteile auf einen Blick
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Bei Clara setzen wir auf Innovation, Transparenz und Kundenzufriedenheit. Mit modernster Technik und einem zuverlässigen Service bieten wir Dir nicht nur die besten Lösungen für Sanitär- und Heizungsinstallationen, sondern auch ein Rundum-Paket, das Dir Sicherheit und Komfort bietet.
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
              <img src={digitalTablet} alt="Digitale Lösungen" loading="lazy" className="w-full h-[420px] object-cover" width={1024} height={768} />
            </div>
          </div>
        </section>

        {/* Project CTA full width style */}
        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card rounded-tr-[6rem]">
              <img src={teamMeeting} alt="Team Meeting" loading="lazy" className="w-full h-[420px] object-cover" width={1024} height={768} />
            </div>
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Dein Handwerkspartner
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
                Lass uns Dein Projekt gemeinsam starten!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Realisiere es mit uns. Beratung, eine Reparatur oder ein größeres Projekt geht: wir sind für Dich da. Unser Kundenservice und unsere modernen Kommunikationswege via Online-Reservierung übertreffen unsere Werte. Du bist auf der Verfügung, um Deine Anliegen zu beantworten und die beste Lösung für Dein Vorhaben zu finden. Starte noch heute — wir freuen uns auf Dich!
              </p>
              <Button variant="hero" size="lg">
                <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ reuse */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default About;
