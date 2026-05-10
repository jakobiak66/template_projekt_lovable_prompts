import teamMeeting from "@/assets/team-meeting.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProjectCTA = () => {
  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card bg-card">
        <div className="relative h-[300px] lg:h-auto">
          <img src={teamMeeting} alt="Clara Team Meeting" loading="lazy" className="absolute inset-0 h-full w-full object-cover" width={1024} height={768} />
        </div>
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">Lass uns starten</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4 leading-tight">
            Lass uns dein Projekt gemeinsam starten!
          </h2>
          <p className="text-muted-foreground mb-7 leading-relaxed">
            Egal ob kleines Service-Projekt oder komplette Sanierung — wir freuen uns darauf, dich kennenzulernen. Vereinbare jetzt ein unverbindliches Erstgespräch.
          </p>
          <Button variant="hero" size="lg" className="self-start" asChild>
            <a href="#kontakt">
              Kostenfreies Angebot <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
