import { CheckCircle2 } from "lucide-react";
import digitalTablet from "@/assets/digital-tablet.jpg";
import founders from "@/assets/founders.jpg";

const features = [
  "Online-Termine in unter 2 Minuten",
  "Digitale Angebote per E-Mail",
  "Kommunikation per WhatsApp & Mail",
  "Transparente Festpreise",
];

export const Digital = () => {
  return (
    <section className="container py-20 space-y-20">
      {/* Block 1 */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Digital</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
            Dein digitaler Handwerksbetrieb
          </h2>
          <p className="text-muted-foreground mb-7 leading-relaxed">
            Bei Clara verbinden wir solides Handwerk mit smarten Tools. Du musst nicht ewig in der Warteschleife hängen oder auf Rückrufe warten. Alles läuft transparent — vom ersten Klick bis zur Rechnung.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img src={digitalTablet} alt="Digitale Tools für moderne Handwerksbetriebe" loading="lazy" className="w-full h-[380px] object-cover" width={1024} height={768} />
        </div>
      </div>

      {/* Block 2 */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
          <img src={founders} alt="Die Gründer von Clara" loading="lazy" className="w-full h-[380px] object-cover" width={1024} height={768} />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Über uns</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-5 leading-tight">
            Dein Partner für moderne Handwerksleistungen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wir sind Lara und Clemens — die Gründer von Clara. Mit über 15 Jahren Erfahrung im Sanitär- und Heizungshandwerk haben wir ein Unternehmen aufgebaut, das tut, was es verspricht.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unser Anspruch: ehrliches Handwerk, faire Preise und ein Team, das stolz auf seine Arbeit ist. Lerne uns kennen — wir freuen uns auf dich.
          </p>
        </div>
      </div>
    </section>
  );
};
