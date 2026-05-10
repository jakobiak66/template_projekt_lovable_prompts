import { CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { n: 1, title: "Termin digital buchen", text: "Wähle online deinen Wunschtermin in unter 2 Minuten." },
  { n: 2, title: "Bestätigung erhalten", text: "Du bekommst eine Bestätigung per E-Mail mit allen Details." },
  { n: 3, title: "Bequeme, digitale Beratung", text: "Persönliches Gespräch per Telefon oder vor Ort." },
  { n: 4, title: "Protokoll & Rechnung per E-Mail", text: "Saubere Doku — alles digital, transparent und nachvollziehbar." },
];

export const ProjectSteps = () => {
  return (
    <section className="container py-20">
      <div className="text-center mb-10">
        <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Prozess</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
          Schritt für Schritt zu Deinem fertigen Projekt
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          In wenigen einfachen Schritten zur Beratung — buchbar online und durchgehend digital begleitet, von der Anfrage bis zur Rechnung.
        </p>
      </div>

      <div className="bg-surface-soft rounded-3xl p-6 sm:p-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-primary/30 z-0" />
          {steps.map((s) => (
            <div key={s.n} className="relative z-10 text-center">
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center font-extrabold text-primary shadow-soft">
                {s.n}
              </div>
              <div className="text-xs font-semibold text-primary mb-1">Schritt {s.n}</div>
              <h3 className="font-bold text-primary-dark mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Button variant="hero" size="lg">
            <CalendarCheck className="h-5 w-5" /> Jetzt Termin buchen
          </Button>
          <Button variant="soft" size="lg" asChild>
            <a href="tel:+4930">📞 030 / 123 456 78</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
