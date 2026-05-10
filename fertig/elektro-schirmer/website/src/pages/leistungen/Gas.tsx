import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import gasHero from "@/assets/gas-hero.jpg";
import deskCta from "@/assets/desk-cta.jpg";

const angebot = [
  {
    title: "Gasinstallation",
    text: "Ob Innenbereich oder Außenbereich – wir bauen Ihre Gasversorgung von der Hauptabsperreinrichtung bis zum Verbraucher und setzen dabei auf modernste Prüfwerkzeuge, um eine vorschriftsmäßige und sichere Gasversorgung zu gewährleisten.",
  },
  {
    title: "Gasgeräte",
    text: "Ob Gasherd, Gaswasserbereiter, Gaskessel oder Gastherme – wir montieren und tauschen Ihr gewünschtes Gasgerät und verbinden es mit der Gasinstallation.",
  },
];

const brands = ["Viessmann", "Testo", "Junkers", "Vaillant"];

const safetySteps = [
  "Keine Panik!",
  "Keine Flammen, keine Funken, keine Schalter betätigen, kein Telefon!",
  "Alle Fenster und Türen öffnen, für Durchzug sorgen!",
  "Gashahn zu!",
  "Mitbewohner warnen (klopfen, nicht klingeln)! Das Haus verlassen!",
  "Den NBB-Entstörungsdienst anrufen von außerhalb des Hauses!",
];

const Gas = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative grid md:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center px-6 pt-32 md:pt-0 pb-12 md:pb-0">
          <div className="max-w-md text-center">
            <h1 className="text-5xl md:text-6xl font-light text-brand">Gas</h1>
            <p className="mt-6 text-base md:text-lg text-brand-dark/80 leading-relaxed font-light">
              Sie wünschen sich eine Gasheizung, Ihr Warmwasserbereiter funktioniert mit Gas oder Sie möchten ein Küchengerät mit Gas betreiben? Ob Neuinstallation oder Bestand – wir kümmern uns um Ihre Gasanlage.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
              <a href="/#kontakt">Jetzt kontaktieren</a>
            </Button>
          </div>
        </div>
        <div className="relative bg-section-muted">
          <img
            src={gasHero}
            alt="Isometrische Darstellung einer Küche mit Gasherd"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* Angebot Akkordeon */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-3xl md:text-4xl font-light text-brand-foreground md:text-right md:sticky md:top-28">
            Unser Angebot im<br />Bereich Gas:
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {angebot.map((a) => (
              <AccordionItem key={a.title} value={a.title} className="border-brand-foreground/30">
                <AccordionTrigger className="text-brand-foreground hover:no-underline text-base md:text-lg font-light text-left">
                  {a.title}
                </AccordionTrigger>
                <AccordionContent className="text-brand-foreground/90 leading-relaxed">
                  {a.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
          <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90 rounded-sm">
            <a href="/#kontakt">Jetzt Termin vereinbaren</a>
          </Button>
        </div>
      </section>

      {/* Marken */}
      <section className="py-16 px-6">
        <SectionTitle primary="Wir setzen auf" secondary="Markenqualität" />
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {brands.map((b) => (
            <div key={b} className="bg-section-muted border border-brand-dark/10 rounded-md py-6 text-center text-brand-dark font-medium tracking-wide">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* Gasservice */}
      <section className="py-20 px-6 bg-section-muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle primary="" secondary="Gasservice" />
          <p className="mt-6 text-brand-dark/75 leading-relaxed">
            Ob Gasgerät oder Gasinstallation – eine Gasanlage muss regelmäßig inspiziert und auf Gebrauchsfähigkeit überprüft werden, um einen sicheren Betrieb zu gewährleisten.
          </p>
          <Button asChild className="mt-6 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <Link to="/leistungen/service">Mehr erfahren</Link>
          </Button>
        </div>
      </section>

      {/* Marktpartner NBB */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle primary="Unser" secondary="Marktpartner" />
          <div className="mt-8 inline-flex flex-col items-center gap-2">
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-brand-dark/80" />
              <div className="w-6 h-6 bg-brand" />
              <div className="w-6 h-6" style={{ backgroundColor: "hsl(28 90% 55%)" }} />
            </div>
            <p className="text-2xl font-medium text-brand-dark tracking-wide">NETZGESELLSCHAFT</p>
            <p className="text-sm text-brand-dark/70 tracking-[0.3em]">BERLIN · BRANDENBURG</p>
          </div>
          <p className="mt-6 text-brand-dark/75 leading-relaxed">
            Gas ist Profisache. Wir sind Marktpartner der Netzgesellschaft Berlin Brandenburg inkl. Qualitätsversprechen. Sie finden uns im Installateurverzeichnis der NBB.
          </p>
          <Button asChild className="mt-6 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <a href="https://www.nbb-netzgesellschaft.de/" target="_blank" rel="noopener noreferrer">Mehr zur NBB</a>
          </Button>
        </div>
      </section>

      {/* Was tun bei Gasgeruch */}
      <section className="py-20 px-6 bg-brand">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-brand-foreground text-center flex items-center justify-center gap-3">
            <AlertTriangle size={32} />
            Was tun bei Gasgeruch?
          </h2>
          <ol className="mt-10 space-y-1">
            {safetySteps.map((step, i) => (
              <li key={i} className="border-b border-brand-foreground/30 py-4 flex gap-4 text-brand-foreground">
                <span className="font-medium shrink-0">{i + 1}.</span>
                <span className="font-light">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NBB-Entstörungsdienst */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-light text-center text-brand-dark">NBB-Entstörungsdienst</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { region: "Netzgebiet Berlin", tel: "030 7872-72", href: "tel:0307872720" },
            { region: "Netzgebiet Brandenburg", tel: "0331 7495-330", href: "tel:03317495330" },
          ].map((n) => (
            <div key={n.region} className="bg-brand/15 rounded-md p-8 text-center">
              <p className="text-lg text-brand-dark font-medium">{n.region}</p>
              <Button asChild className="mt-4 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
                <a href={n.href} className="inline-flex items-center gap-2">
                  <Phone size={16} /> Tel. {n.tel}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <ContactInfo variant="brand" />

      <Footer />
    </main>
  );
};

export default Gas;
