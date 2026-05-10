import { Button } from "@/components/ui/button";
import img from "@/assets/beratung-familie.jpg";

const Beratung = () => (
  <section className="grid md:grid-cols-2">
    <img src={img} alt="Beratung einer Familie zu Hause" loading="lazy" className="w-full h-72 md:h-[460px] object-cover" />
    <div className="bg-brand text-brand-foreground flex items-center px-8 md:px-16 py-16">
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-light text-brand-foreground">
          Unsere Beratung.<br />Ihr gutes Gefühl.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed font-light">
          Planen Sie ein neues Bad oder eine neue Heizung? Wir sind gerne für Sie da und beantworten Ihre Fragen – ganz unkompliziert per E-Mail, telefonisch oder bei einem unverbindlichen Beratungsgespräch bei Ihnen zu Hause.
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-brand hover:bg-white/90 rounded-sm">
          <a href="#kontakt">Jetzt kontaktieren</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Beratung;
