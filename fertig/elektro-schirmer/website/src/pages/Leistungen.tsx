import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Flame, Droplet, Wrench, Settings, ChevronDown } from "lucide-react";
import leistungenHero from "@/assets/leistungen-hero.jpg";

const services = [
  {
    Icon: Flame,
    title: "Heizung",
    text: "Ob Bestand oder Neuanlage, Kessel oder Therme – wir kümmern uns um die Wärmeversorgung in Ihren vier Wänden.",
    to: "/leistungen/heizung",
  },
  {
    Icon: Droplet,
    title: "Sanitär",
    text: "Ob Küche, Bad oder Wellnessstempel – wir sorgen für Druck in Ihren Trinkwasserleitungen und eine einwandfreie Schmutzwasseranlage.",
    to: "/leistungen/sanitaer",
  },
  {
    Icon: Settings,
    title: "Gas",
    text: "Ob Gasherd oder Heizungsanlage – wir kümmern uns um eine sichere und zuverlässige Erdgasversorgung in Ihrer Immobilie.",
    to: "/leistungen/gas",
  },
  {
    Icon: Wrench,
    title: "Service und Wartung",
    text: "Ob Heizung, Sanitär oder Gas – wir kümmern uns um die regelmäßige Überprüfung und korrekte Einstellung Ihrer Anlage.",
    to: "/leistungen/service",
  },
];

const Leistungen = () => {
  const scrollDown = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Split Hero */}
      <section className="grid md:grid-cols-2 min-h-screen">
        <div className="bg-brand flex items-center justify-center px-6 pt-32 md:pt-0 pb-12 md:pb-0 relative">
          <div className="max-w-md text-center">
            <h1 className="text-4xl md:text-5xl font-light text-brand-foreground">Unsere Leistungen für Sie</h1>
            <p className="mt-6 text-base text-brand-foreground/90 leading-relaxed font-light">
              Wir bieten Ihnen professionelle Dienstleistungen im Bereich Haustechnik. Von Neubau, über Reparatur, bis hin zur Wartung. Ob Sanitärinstallation, Heizung oder Gasanlage – bei uns sind Sie in meisterlichen Handwerkerhänden.
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90 rounded-sm px-8">
              <a href="/#kontakt">Jetzt beraten lassen</a>
            </Button>
          </div>
          <button
            onClick={scrollDown}
            aria-label="Nach unten scrollen"
            className="absolute bottom-6 left-6 text-brand-foreground/70 hover:text-brand-foreground transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
        <div className="relative min-h-[50vh] md:min-h-screen">
          <img
            src={leistungenHero}
            alt="Schwalm Servicefahrzeug vor dem Berliner Olympiastadion"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ Icon, title, text, to }) => (
            <Link
              key={title}
              to={to}
              className="group relative bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_hsl(var(--brand)/0.15)] hover:shadow-[0_20px_40px_-12px_hsl(var(--brand)/0.35)] hover:-translate-y-2 transition-all duration-300 border border-brand/5"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand to-brand/80 flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
                <Icon size={44} className="text-brand-foreground" strokeWidth={1.3} />
              </div>
              <h3 className="mt-6 text-xl font-light text-brand">{title}</h3>
              <p className="mt-3 text-sm text-brand-dark/70 leading-relaxed font-light flex-1">{text}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                Mehr erfahren
                <ChevronDown size={16} className="-rotate-90" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Kontakt-Block */}
      <ContactInfo variant="brand" />




      <Footer />
    </main>
  );
};

export default Leistungen;
