import { Star, CalendarHeart, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    Icon: Star,
    title: "Qualität",
    text: "Langjährige Erfahrung und qualifiziertes Fachpersonal gewährleisten hochwertige Ausführung – von der kleinsten Reparatur bis zum Großprojekt.",
  },
  {
    Icon: CalendarHeart,
    title: "Zuverlässigkeit",
    text: "Wir sind für unsere Kunden da: Mo.–Fr. 08–20 Uhr, Sa./So. Notdienst. Schnelle Reaktionszeiten und Termintreue sind unser Versprechen.",
  },
  {
    Icon: Handshake,
    title: "Familienbetrieb",
    text: "Als Familienbetrieb beraten wir Sie umfangreich und unkompliziert – ohne Fachbegriffe, dafür mit echtem Engagement für Ihr Projekt.",
  },
];

const Werte = () => (
  <section id="werte" className="py-20 px-6">
    <SectionTitle primary="Unsere Werte." secondary="Ihr Vorteil." />
    <div className="mt-16 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {items.map(({ Icon, title, text }) => (
        <div key={title} className="text-center">
          <Icon className="mx-auto text-brand" size={56} strokeWidth={1.5} />
          <h3 className="mt-6 text-2xl font-light">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-brand-dark/70 max-w-xs mx-auto">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Werte;
