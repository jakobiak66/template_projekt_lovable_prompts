import { Phone, ClipboardList, CalendarCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, title: "Kontakt aufnehmen", text: "Ruf uns an oder fülle das Formular aus — wir hören zu." },
  { icon: ClipboardList, title: "Beratung vereinbaren", text: "Kostenfreie Erstberatung per Telefon oder vor Ort." },
  { icon: CalendarCheck, title: "Festen Termin erhalten", text: "Du bekommst einen verbindlichen Termin & ein klares Angebot." },
  { icon: Wrench, title: "Projekt umsetzen", text: "Unser Team arbeitet sauber, pünktlich und auf den Punkt." },
];

export const Steps = () => {
  return (
    <section id="ablauf" className="bg-surface-soft py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Ablauf</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">
            Schritt für Schritt zu Deinem fertigen Projekt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center relative">
                <div className="mx-auto mb-5 h-14 w-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-extrabold relative">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-primary text-primary-foreground text-xs flex items-center justify-center font-bold shadow-glow">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-primary-dark mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#kontakt">Termin vereinbaren</a>
          </Button>
          <Button variant="soft" size="lg" asChild>
            <a href="tel:+4930">Direkt anrufen</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
