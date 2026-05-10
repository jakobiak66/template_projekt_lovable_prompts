import { Check, Star } from "lucide-react";
import kudamm from "@/assets/kudamm.jpg";

const goals = [
  { t: "Einstellung des Verfahrens", d: "Insbesondere im Ermittlungsstadium bestehen oft erhebliche Verteidigungsspielräume." },
  { t: "Strafmilderung", d: "Gerichtlich durchgesetzte Strafmilderung durch frühzeitige strategische Positionierung." },
  { t: "Vermeidung der Hauptverhandlung", d: "Nicht jeder Fall muss vor Gericht — oft ist die Einstellung im Ermittlungsverfahren möglich." },
  { t: "Schutz Ihrer Existenz", d: "Beruf, Familie, Ruf — wir denken die Konsequenzen und handeln entsprechend." },
];

export function Goals() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow mb-8">Warum Fachanwalt für Strafrecht</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            Ausschließlich<br />
            <span className="italic text-foreground/50">auf Ihrer Seite.</span>
          </h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/75 max-w-md">
            <p>
              Der Titel „Fachanwalt für Strafrecht" setzt nachgewiesene besondere Kenntnisse und praktische Erfahrung voraus. Ich bin nicht Teil des Ermittlungsapparats — ich bin ausschließlich Ihnen verpflichtet.
            </p>
            <p>
              Während die Staatsanwaltschaft auf Verurteilung zielt, zielt Verteidigung auf etwas anderes: <em className="font-serif">Ihren Schutz</em>.
            </p>
          </div>
          <div className="mt-10 aspect-[4/2.5] overflow-hidden rounded-2xl max-w-md">
            <img src={kudamm} alt="Berlin Kurfürstendamm" loading="lazy" className="w-full h-full object-cover grayscale" />
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl mb-8">Verteidigungsziele</h3>
          <ul className="space-y-6">
            {goals.map((g, i) => (
              <li key={g.t} className="flex gap-5 pb-6 border-b border-border last:border-0">
                <Check className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-foreground/40 mb-1">0{i + 1}</div>
                  <div className="font-serif text-xl">{g.t}</div>
                  <p className="text-sm text-foreground/65 mt-1">{g.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-8">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl">4,9</span>
              <Star className="size-5 fill-gold text-gold" />
            </div>
            <p className="mt-3 text-sm text-navy-foreground/80">
              aus 236 Bewertungen · anwalt.de
            </p>
            <p className="mt-4 font-serif italic text-lg leading-snug">
              „Verteidigung mit Klarheit, Ruhe und messbarem Ergebnis."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
