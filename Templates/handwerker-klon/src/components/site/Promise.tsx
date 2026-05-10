import teamGroup from "@/assets/team-group.jpg";
import { Quote } from "lucide-react";

export const Promise = () => {
  return (
    <section id="ueber" className="container py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">Unser Versprechen</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-6 leading-tight">
            Handwerk, auf das du dich verlassen kannst.
          </h2>
          <Quote className="h-10 w-10 text-primary/40 mb-3" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir sind kein anonymer Großbetrieb — wir sind dein Team vor Ort. Mit einem klaren Anspruch:
            faire Preise, ehrliche Beratung und Qualität, die hält. Wer bei uns anruft, bekommt einen
            festen Ansprechpartner, transparente Kommunikation und einen Termin, der passt.
          </p>
          <p className="mt-4 text-muted-foreground">
            — Das Clara-Team aus Berlin & Frankfurt (Oder)
          </p>
        </div>
        <div className="relative">
          <img
            src={teamGroup}
            alt="Das Team von Clara — Sanitär & Heizung"
            loading="lazy"
            className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl shadow-card"
            width={1280}
            height={768}
          />
        </div>
      </div>
    </section>
  );
};
