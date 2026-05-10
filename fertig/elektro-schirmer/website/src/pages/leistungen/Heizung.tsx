import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceGrid from "@/components/ServiceGrid";
import { Button } from "@/components/ui/button";
import { Flame, Gauge, Radiation, ThermometerSun, Wrench, Droplet, Settings2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heizungHero from "@/assets/heizung-hero.jpg";

const haupt = [
  { Icon: Flame, title: "Gaskessel und Gasthermen", text: "Ob wandhängendes Gerät oder Kessel – wir regeln alles rund um das Thema Gasheizungen und setzen dabei auf deutsche Markenqualität." },
  { Icon: Gauge, title: "Heizungspumpen und Hocheffizienzpumpen", text: "Ob einfache Heizungspumpe oder moderne Hocheffizienzpumpe – wir kümmern uns um das Herz einer jeden Heizungsanlage." },
  { Icon: Radiation, title: "Heizkörper", text: "Ob Designbadheizkörper oder einfacher Radiator – wir finden für jede Situation die passende Lösung." },
  { Icon: ThermometerSun, title: "Fußbodenheizung", text: "Ob Verlegung oder Spülung – wir kümmern uns um Ihre Fußbodenheizung inklusive Heizkreisverteiler." },
];

const weitere = [
  { Icon: Wrench, title: "Rohrbruchbeseitigung", text: "Wenn der Druck in der Anlage abfällt, machen wir uns auf die Suche nach der Leckage und sorgen für Dichtheit in Ihrer Anlage." },
  { Icon: Droplet, title: "Heizungsbefüllung nach VDI 2035", text: "Wir befüllen Ihre Heizungsanlage nach den anerkannten Regeln der Technik und schützen Ihre Anlage vor Korrosion und Garantieverlust." },
  { Icon: Settings2, title: "Optimierung von Bestandsanlagen", text: "Ob smarte Steuerung oder einfach nur korrekte Einstellung – wir suchen nach Einsparpotenzial in Ihrer Heizungsanlage." },
];

const brands = ["Viessmann", "Vaillant", "Buderus", "Wolf", "Grundfos", "Wilo", "Kermi", "Oventrop"];

const Heizung = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative grid md:grid-cols-2 min-h-screen bg-gradient-to-br from-brand via-brand/90 to-brand-dark overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full bg-brand-foreground/5 blur-3xl" />

        <div className="relative flex items-center justify-center px-6 pt-32 md:pt-0 pb-12 md:pb-0">
          <div className="max-w-md text-center">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-brand-foreground/70 mb-4">Leistungen</span>
            <h1 className="text-5xl md:text-6xl font-light text-brand-foreground">Heizung</h1>
            <div className="mx-auto mt-5 h-px w-16 bg-brand-foreground/40" />
            <p className="mt-6 text-base md:text-lg text-brand-foreground/90 leading-relaxed font-light">
              Was macht eine gute Heizungsanlage aus – Komfort, Effizienz oder Zuverlässigkeit? Wir zeigen Ihnen den Weg zu Ihrer persönlichen Wohlfühlwärme. Ob Bestand oder Neuanlage, Kessel oder Therme – wir kümmern uns um die Wärmeversorgung in Ihren vier Wänden.
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90 rounded-sm px-8 shadow-xl shadow-black/20">
              <a href="/#kontakt">Jetzt kontaktieren</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heizungHero}
            alt="Isometrische Darstellung eines Heizungsraums mit Monteuren"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand/40 to-transparent" />
        </div>
      </section>

      {/* Hauptleistungen */}
      <section className="py-20 px-6">
        <SectionTitle primary="Wir montieren, tauschen," secondary="reparieren und warten:" />
        <div className="mt-14">
          <ServiceGrid items={haupt} />
        </div>
      </section>

      {/* Beratungs-CTA */}
      <section className="py-16 px-6 bg-brand text-brand-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-light text-brand-foreground">
          Sie wünschen ein Beratungsgespräch<br className="hidden md:block" /> oder ein Angebot?
        </h2>
        <p className="mt-4 text-lg font-light">Wir beraten Sie gern.</p>
        <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90 rounded-sm">
          <a href="/#kontakt">Jetzt Termin vereinbaren</a>
        </Button>
      </section>

      {/* Weitere Dienstleistungen */}
      <section className="py-20 px-6 bg-section-muted">
        <SectionTitle primary="Weitere" secondary="Dienstleistungen:" />
        <div className="mt-14">
          <ServiceGrid items={weitere} />
        </div>
      </section>

      {/* Heizungsservice */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <SectionTitle primary="" secondary="Heizungsservice" />
        <p className="mt-6 text-brand-dark/75 leading-relaxed">
          Jede Heizungsanlage ist nur so gut wie ihr jährlicher Service. Wir kümmern uns um den ordnungsgemäßen Betrieb und die korrekte Einstellung Ihrer Heizungsanlage.
        </p>
        <Button asChild className="mt-6 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
          <Link to="/leistungen/service">Mehr erfahren</Link>
        </Button>
      </section>

      {/* Marken */}
      <section className="py-16 px-6 bg-section-muted">
        <SectionTitle primary="Wir setzen auf" secondary="Markenqualität" />
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {brands.map((b) => (
            <div key={b} className="bg-white border border-brand-dark/10 rounded-md py-6 text-center text-brand-dark font-medium tracking-wide">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Kontaktinfos */}
      <section className="py-20 px-6">
        <SectionTitle primary="So" secondary="erreichen Sie uns" />
        <p className="mt-4 text-center text-brand-dark/70 max-w-2xl mx-auto">
          Sie haben Interesse, eine Frage oder wünschen einen Termin? Rufen Sie uns direkt an, schreiben Sie uns eine E-Mail oder nutzen Sie unser Kontaktformular.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { Icon: Phone, label: "Telefon", value: "(030) 818 20 417", href: "tel:03081820417" },
            { Icon: Mail, label: "E-Mail", value: "info@schwalm-berlin.de", href: "mailto:info@schwalm-berlin.de" },
            { Icon: MapPin, label: "Anschrift", value: "Stindestraße 18, 12167 Berlin" },
            { Icon: Clock, label: "Geschäftszeiten", value: "Mo. – Do. 8–16 Uhr · Fr. 8–14 Uhr" },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand mx-auto flex items-center justify-center">
                <Icon size={36} className="text-brand-foreground" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-sm uppercase tracking-wider text-brand-dark/60">{label}</p>
              {href ? (
                <a href={href} className="mt-1 block font-medium text-brand hover:underline">{value}</a>
              ) : (
                <p className="mt-1 font-medium text-brand-dark">{value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Heizung;
