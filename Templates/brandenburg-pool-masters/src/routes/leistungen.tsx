import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Sparkles, Leaf, Hammer, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — AquaMeister Brandenburg" },
      {
        name: "description",
        content:
          "Von Außen- und Innenpools über Naturpools bis hin zu Sanierung und Service: alle Leistungen unseres Pool-Meisterbetriebs in Brandenburg.",
      },
      { property: "og:title", content: "Leistungen — AquaMeister Brandenburg" },
      { property: "og:description", content: "Pool-Neubau, Sanierung, Wartung und Service aus Brandenburg." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Droplets,
    title: "Außenpools",
    text: "Individuell geplante Gartenpools in jeder Form und Größe — Beton, GFK oder Edelstahl.",
    bullets: ["Skimmer- & Überlaufpools", "Beckenränder aus Naturstein", "Gegenstromanlagen & LED"],
  },
  {
    icon: Sparkles,
    title: "Innenpools & Schwimmhallen",
    text: "Komplette Schwimmhallen inkl. Lüftung, Entfeuchtung und Wellness-Integration.",
    bullets: ["Bauphysikalische Planung", "Energie-Rückgewinnung", "Sauna & Dampfbad-Anbindung"],
  },
  {
    icon: Leaf,
    title: "Naturpools & Schwimmteiche",
    text: "Chemiefreie Bäder mit biologischer Wasseraufbereitung — naturnah und nachhaltig.",
    bullets: ["Regenerationszonen", "Bio-Filtertechnik", "Bepflanzungskonzept"],
  },
  {
    icon: Hammer,
    title: "Sanierung & Modernisierung",
    text: "Wir bringen Ihren bestehenden Pool zurück in Bestform — Folie, Fliesen, Technik.",
    bullets: ["PVC-Folien-Sanierung", "Technik-Modernisierung", "Beckenrand-Erneuerung"],
  },
  {
    icon: ShieldCheck,
    title: "Wartung & Service",
    text: "Saisonaler Service, Wasseranalysen und 24h-Notdienst in ganz Brandenburg.",
    bullets: ["Frühjahrs-Inbetriebnahme", "Winterfest-Machen", "Wasseranalyse vor Ort"],
  },
  {
    icon: Users,
    title: "Planung & Beratung",
    text: "Persönliche Vor-Ort-Beratung beim Meister — kostenlos und unverbindlich.",
    bullets: ["3D-Visualisierung", "Förderberatung", "Genehmigungsbegleitung"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-deep text-white">
        <div className="container-pro max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-ocean-foam font-semibold">
            Leistungen
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
            Pool-Handwerk<br />
            <span className="italic font-light opacity-90">in Vollendung.</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Von der ersten Idee bis zum letzten Tropfen Wasser — alles aus einer Hand,
            ausgeführt vom eigenen Meister-Team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-pro grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-deep transition-all">
              <div className="size-14 rounded-2xl bg-gradient-water flex items-center justify-center text-white shadow-glow mb-6">
                <s.icon className="size-6" />
              </div>
              <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro pb-32">
        <div className="rounded-3xl bg-secondary p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Welche Lösung passt zu Ihrem Garten?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Wir kommen kostenlos zu Ihnen, schauen uns die Gegebenheiten an und beraten Sie ehrlich.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-water text-white px-6 py-3.5 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Beratung anfragen <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
