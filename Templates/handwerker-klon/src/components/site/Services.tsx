import { Wrench, Bath, Flame, ShowerHead, Droplets, Settings, CalendarRange, Sparkles } from "lucide-react";

const services = [
  { icon: Wrench, title: "Sanitär-\ninstallation", text: "Komplette Installation für Neubau & Sanierung." },
  { icon: ShowerHead, title: "Komplette\nBadezimmer", text: "Von der Planung bis zur Übergabe — alles aus einer Hand." },
  { icon: Bath, title: "Badezimmer-\nSanierung", text: "Modernisierung mit Stil und Qualität." },
  { icon: Flame, title: "Heizungs-\ntausch", text: "Alte gegen neue, effiziente Heizung tauschen." },
  { icon: Settings, title: "Wartung &\nReparatur", text: "Damit alles zuverlässig läuft — Jahr für Jahr." },
  { icon: Droplets, title: "Installation &\nService", text: "Notfälle, Reparaturen und Inspektionen." },
  { icon: CalendarRange, title: "Wartung &\nWartungsvertrag", text: "Regelmäßige Checks für maximale Lebensdauer." },
  { icon: Sparkles, title: "Trinkwasser\n-analyse", text: "Sauberes Wasser, geprüfte Qualität." },
];

export const Services = () => {
  return (
    <section className="bg-surface-soft py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Leistungen</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-3">
            Unsere Dienstleistungen für Sanitär und Heizung
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir bieten dir das komplette Spektrum — vom kleinen Service bis zur großen Sanierung.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group bg-secondary hover:bg-card transition-smooth rounded-2xl p-6 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-card">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-primary-dark whitespace-pre-line text-sm leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
