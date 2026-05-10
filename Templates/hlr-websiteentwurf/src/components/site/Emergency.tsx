import { Phone, ChevronRight } from "lucide-react";

export function Emergency() {
  return (
    <section id="kontakt" className="pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-card-lg">
          <iframe
            title="Standort H-L-R Heizung und Sanitär GmbH – Rudolf-Breitscheid-Str. 10–11, 15537 Erkner"
            src="https://www.google.com/maps?q=Rudolf-Breitscheid-Stra%C3%9Fe+10-11,+15537+Erkner&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div>
          
          <h2>
            Persönlich erreichbar –
            <br />
            schnell und zuverlässig
            <br />
            für Sie da.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Ob Beratung, Planung oder Reparatur in der Haustechnik – das Team
            der H-L-R Heizung und Sanitär GmbH unterstützt Sie kompetent und
            zuverlässig. Rufen Sie uns an, wir sind gerne für Sie da.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="tel:+493362503140"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground font-semibold text-sm px-5 py-3 rounded-md"
            >
              <Phone size={16} /> 03362 503140 <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
