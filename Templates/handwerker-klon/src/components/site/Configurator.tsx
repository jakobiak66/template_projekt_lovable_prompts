import { useState } from "react";
import { Bath, Flame, ShowerHead, Wrench, Home, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { icon: Home, label: "Neubau" },
  { icon: Bath, label: "Badsanierung" },
  { icon: ShowerHead, label: "Dusche / WC" },
  { icon: Flame, label: "Heizung tauschen" },
  { icon: Droplets, label: "Wasserschaden" },
  { icon: Wrench, label: "Reparatur" },
];

export const Configurator = () => {
  const [selected, setSelected] = useState(1);
  return (
    <section id="leistungen" className="container py-20">
      <div className="text-center mb-10">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Konfigurator</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
          Möchtest du gerne ein Angebot für dein Projekt?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          In wenigen Schritten zum unverbindlichen Angebot. Wähle dein Projekt und wir melden uns innerhalb von 24 Stunden bei dir.
        </p>
      </div>

      {/* Progress */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-2">
          <span>Schritt 1 von 4</span>
          <span>25 %</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-primary w-1/4 rounded-full transition-smooth" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card p-6 sm:p-10 border border-border">
        <h3 className="font-semibold text-primary-dark mb-6">Welche Leistung benötigst du?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const active = selected === i;
            return (
              <button
                key={p.label}
                onClick={() => setSelected(i)}
                className={`group rounded-xl border-2 p-5 text-left transition-smooth ${
                  active
                    ? "border-primary bg-secondary shadow-soft"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <Icon className={`h-8 w-8 mb-3 ${active ? "text-primary" : "text-primary-dark/60 group-hover:text-primary"}`} />
                <div className="font-semibold text-primary-dark">{p.label}</div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Button variant="hero" size="lg">Weiter</Button>
        </div>
      </div>
    </section>
  );
};
