import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import sanitaerHero from "@/assets/sanitaer-hero.jpg";
import deskCta from "@/assets/desk-cta.jpg";

const angebot = [
  {
    title: "Von der Badplanung bis zur Badsanierung",
    text: "Zusammen mit Ihnen planen wir Ihre Wohlfühloase und setzen dies zügig für Sie um. Von der Installation bis zu den Badobjekten. Wir zeigen Ihnen, wie Sie Ihr Bad effizient nutzen und bauen es nach Ihren Wünschen.",
  },
  {
    title: "Barrierefreie Bäder",
    text: "Bewegungsfreiheit im Bad bedeutet Lebensqualität – wir beraten Sie gern bei der Auswahl der richtigen Badelemente und verbauen Produkte, die Ihren Alltag erleichtern.",
  },
  {
    title: "Trinkwasserinstallation",
    text: "Ob Reparatur oder Modernisierung, Badinstallation oder Strangsanierung – wir kümmern uns um Ihre Trinkwasseranlage und setzen dabei auf effiziente Installationssysteme und höchste Hygieneanforderungen.",
  },
  {
    title: "Trinkwassererwärmer",
    text: "Ob Speicher oder Durchlauferhitzer, Elektroerwärmer oder Gasgerät – wir sorgen für hygienisch einwandfreies Warmwasser aus Ihren Armaturen.",
  },
  {
    title: "Trinkwasserenthärtungsanlage",
    text: "Die Dusche ist dauernd verkalkt und Ihrer Trinkwasseranlage fehlt der Druck? Das Trinkwasser in Berlin und Brandenburg ist hart. Eine Trinkwasserenthärtungsanlage schützt Ihre Hausinstallation und reguliert deutlich spürbar den Härtegrad in Ihrem Trinkwasser.",
  },
  {
    title: "Schmutzwasseranlage",
    text: "Ob Neuverlegung, Modernisierung oder Reparatur – Schmutzwasserleitungen müssen zuverlässig arbeiten. Ab dem Hausanschluss sind wir für Sie da.",
  },
  {
    title: "Schmutzwasserhebeanlage",
    text: "Nicht immer ist eine direkte Entwässerung möglich. Wir montieren für Sie eine Schmutzwasserhebeanlage und ermöglichen ohne Rückstaurisiko eine Entwässerung von Objekten im Keller.",
  },
  {
    title: "Rohrbruchbeseitigung",
    text: "Ob Trinkwasserleitung oder Schmutzwasserleitung – wir kümmern uns um die Leckage und bewahren Sie vor größeren Wasserschäden.",
  },
];

const brands = ["Geberit", "Grohe", "Villeroy & Boch", "Hansgrohe", "Kaldewei", "Duravit", "Hansa", "Kludi"];

const Sanitaer = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative grid md:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center px-6 pt-32 md:pt-0 pb-12 md:pb-0">
          <div className="max-w-md text-center">
            <h1 className="text-5xl md:text-6xl font-light text-brand">Sanitär</h1>
            <p className="mt-6 text-base md:text-lg text-brand-dark/80 leading-relaxed font-light">
              Sie wünschen sich ein neues Bad, Ihre Rohrleitungen sind zugesetzt oder Ihr Warmwasserspeicher muss getauscht werden? Ob Designbad oder altersgerechter Umbau – wir kümmern uns von der Hausinstallation bis zu den Entnahmestellen in Bad, Küche und Außenbereich.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
              <a href="/#kontakt">Jetzt kontaktieren</a>
            </Button>
          </div>
        </div>
        <div className="relative bg-section-muted">
          <img
            src={sanitaerHero}
            alt="Isometrische Darstellung eines modernen Badezimmers"
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
            Unser Angebot im<br />Bereich Sanitär:
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

      {/* Beratungs-CTA mit Hintergrundbild */}
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

      {/* Sanitärservice */}
      <section className="py-20 px-6 bg-section-muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle primary="" secondary="Sanitärservice" />
          <p className="mt-6 text-brand-dark/75 leading-relaxed">
            Ob Wasserfilter, Trinkwasserspeicher oder Enthärtungsanlage – eine regelmäßige Überprüfung ist die oberste Pflicht, um Langlebigkeit und Hygiene zu gewährleisten. Wir kümmern uns um den Service Ihrer sanitären Anlagen.
          </p>
          <Button asChild className="mt-6 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <Link to="/leistungen/service">Mehr erfahren</Link>
          </Button>
        </div>
      </section>

      {/* Marktpartner BWB */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle primary="Unser" secondary="Marktpartner" />
          <div className="mt-8 inline-flex items-center justify-center gap-3 text-2xl font-light italic">
            <span className="text-brand">◀▶</span>
            <span className="text-brand">Berliner Wasserbetriebe</span>
          </div>
          <p className="mt-6 text-brand-dark/75 leading-relaxed">
            Trinkwasser mit Lebensmittelqualität. Als fachlich qualifiziertes Installationsunternehmen finden Sie uns im Installateurverzeichnis der Berliner Wasserbetriebe.
          </p>
          <Button asChild className="mt-6 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm">
            <a href="https://www.bwb.de/" target="_blank" rel="noopener noreferrer">Mehr zu den BWB</a>
          </Button>
        </div>
      </section>

      {/* Kontakt */}
      <ContactInfo variant="brand" />

      <Footer />
    </main>
  );
};

export default Sanitaer;
