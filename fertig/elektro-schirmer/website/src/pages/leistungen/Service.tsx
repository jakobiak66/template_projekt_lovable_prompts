import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Flame, Droplet, Wrench } from "lucide-react";
import serviceHero from "@/assets/service-hero.jpg";
import deskCta from "@/assets/desk-cta.jpg";

const bereiche = [
  {
    icon: Flame,
    title: "Heizung",
    text: "Wir führen den jährlichen Service Ihrer Heizungsanlage durch. Egal ob Kessel oder Therme, Heizwertgerät oder Brennwertgerät – wir überprüfen alle Komponenten Ihrer Heizung. Angefangen mit der Reinigung und Einstellung der Anlage, bis zur Überprüfung der Abgaswerte.",
  },
  {
    icon: Droplet,
    title: "Sanitär",
    text: "Eine Sanitärinstallation besteht aus zahlreichen Bauteilen und Apparaten – wir bieten Ihnen den regelmäßigen Service gemäß DIN EN 806-5. Ob Sicherungseinrichtung, Hebeanlage oder Trinkwassererwärmungsanlage – wir kümmern uns um Ihre Sanitäranlagen.",
  },
  {
    icon: Wrench,
    title: "Gas",
    text: "Zur Sicherstellung des betriebssicheren Zustands überprüfen wir regelmäßig Gasinstallationen nach DVGW G 600. Dazu gehören eine jährliche optische Sichtkontrolle und alle 12 Jahre die Überprüfung der Gebrauchsfähigkeit und Dichtheit aller Rohrleitungen und Verbindungen.",
  },
];

const Service = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="flex justify-center">
          <img
            src={serviceHero}
            alt="Isometrische Darstellung eines Hauses mit Servicetechnikern"
            className="w-full max-w-md h-auto"
            width={1280}
            height={1280}
          />
        </div>
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-5xl md:text-6xl font-light text-brand">Service</h1>
          <p className="mt-6 text-base md:text-lg text-brand-dark/80 leading-relaxed font-light">
            Ob Heizung, Sanitär oder Gas – eine regelmäßige Überprüfung Ihrer versorgungstechnischen Anlage ist unabdingbar, wenn es um Langlebigkeit, Effizienz und Sicherheit geht – wir bieten Ihnen unseren jährlichen Service an.
          </p>
          <Button asChild size="lg" className="mt-8 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
            <a href="/#kontakt">Jetzt kontaktieren</a>
          </Button>
        </div>
      </section>

      {/* Service in allen Bereichen */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-light text-center text-brand">Service in allen Bereichen:</h2>
        <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {bereiche.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto w-40 h-40 bg-brand flex items-center justify-center rounded-sm">
                <Icon size={72} className="text-brand-foreground" strokeWidth={1.2} />
              </div>
              <h3 className="mt-6 text-xl font-light text-brand">{title}</h3>
              <p className="mt-4 text-sm text-brand-dark/75 leading-relaxed font-light">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beratungs-CTA */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <img src={deskCta} alt="Schreibtisch mit Notizbuch und Kaffee" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Sie wünschen ein Beratungsgespräch<br className="hidden md:block" /> oder ein Angebot?
          </h2>
          <p className="mt-4 text-white/90 font-light">Wir beraten Sie gern.</p>
          <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90 rounded-sm">
            <a href="/#kontakt">Jetzt Termin vereinbaren</a>
          </Button>
        </div>
      </section>

      {/* Kontakt */}
      <ContactInfo variant="brand" />

      <Footer />
    </main>
  );
};

export default Service;
