import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import hero from "@/assets/elektro-hero.jpg";

const Hero = () => {
  return (
    <section id="willkommen" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Elektro-Schirmer – Ihr Elektroinstallateur in Berlin"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
          Ihr Elektroinstallateur<br />in Berlin.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/85 font-light leading-relaxed">
          Fachkundige Beratung und Lösungen vom Profi –<br />
          Elektroinstallationen, Sicherheitsanlagen & mehr.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
            <a href="#leistungen">Unsere Leistungen</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark rounded-sm px-8 bg-white/10 backdrop-blur">
            <a href="#kontakt">Jetzt Termin anfragen</a>
          </Button>
        </div>
      </div>
      <a href="#werte" aria-label="Nach unten scrollen" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
