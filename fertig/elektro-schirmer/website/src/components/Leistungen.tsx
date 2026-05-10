import { Zap, Shield, Wrench, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

const services = [
  {
    Icon: Zap,
    title: "Elektroinstallation",
    text: "Neuinstallationen, Sanierungen und Reparaturen – von der Steckdose bis zur kompletten Hausinstallation. Für Privat- und Gewerbekunden.",
  },
  {
    Icon: Shield,
    title: "Sicherheitsanlagen",
    text: "Einbruchmeldeanlagen, Brandmeldeanlagen, Behindertenruf und Kindernotruf – für Ihre Sicherheit zuhause und im Betrieb.",
  },
  {
    Icon: Wrench,
    title: "Hausgerätereparaturen",
    text: "Waschmaschinen, Geschirrspüler, Herde und Kühlgeräte – schnelle und kostengünstige Reparatur vor Ort. Plus Ersatzteilservice.",
  },
  {
    Icon: Car,
    title: "E-Auto Ladestationen",
    text: "Installation von Wallboxen und Ladestationen für Elektrofahrzeuge – für zuhause und Ihren Betrieb. Förderfähig und TÜV-geprüft.",
  },
];

const Leistungen = () => (
  <section id="leistungen" className="py-20 px-6">
    <SectionTitle primary="Unser Know-how." secondary="Ihre Lösung." />
    <p className="mt-4 text-center text-brand-dark/70 max-w-2xl mx-auto">
      Entdecken Sie unser vielfältiges Angebot rund um Elektrotechnik. Ob Wartung, Reparatur oder Neubau – profitieren Sie von unserer langjährigen Erfahrung als Familienbetrieb in Berlin.
    </p>
    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {services.map(({ Icon, title, text }) => (
        <div key={title} className="text-center">
          <div className="w-28 h-28 rounded-full bg-brand mx-auto flex items-center justify-center">
            <Icon size={48} className="text-brand-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="mt-6 text-2xl font-light">{title}</h3>
          <p className="mt-3 text-brand-dark/70 max-w-xs mx-auto">{text}</p>
          <Button asChild className="mt-5 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <a href="#kontakt">Mehr erfahren</a>
          </Button>
        </div>
      ))}
    </div>
  </section>
);

export default Leistungen;
