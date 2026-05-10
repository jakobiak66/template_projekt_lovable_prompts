import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import heroPool from "@/assets/hero-pool.jpg";

export const Route = createFileRoute("/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte — Realisierte Pools in Brandenburg | AquaMeister" },
      {
        name: "description",
        content:
          "Eine Auswahl unserer schönsten Pool-Projekte aus Brandenburg und Berlin: Außenpools, Infinity-Pools und Schwimmhallen.",
      },
      { property: "og:title", content: "Projekte — AquaMeister Brandenburg" },
      { property: "og:description", content: "Realisierte Pool-Projekte aus 60 Jahren Handwerk." },
      { property: "og:image", content: heroPool },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: project1,
    title: "Gartenpool Werder",
    category: "Außenpool",
    year: "2024",
    description: "Klassischer Skimmerpool 8 × 4 m mit Travertin-Beckenrand und Gegenstromanlage.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: project2,
    title: "Infinity am Schwielowsee",
    category: "Premium",
    year: "2023",
    description: "Überlaufpool mit Seeblick, Edelstahltechnik und beleuchtetem Holzdeck.",
    span: "",
  },
  {
    img: project3,
    title: "Schwimmhalle Potsdam",
    category: "Indoor",
    year: "2024",
    description: "12 × 5 m Innenpool mit Energie-Rückgewinnung und Saunabereich.",
    span: "",
  },
  {
    img: heroPool,
    title: "Villa Caputh",
    category: "Außenpool",
    year: "2023",
    description: "Familien-Pool mit Lounge-Bereich und integrierter LED-Beleuchtung.",
    span: "md:col-span-2",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container-pro max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Referenzen
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
            Projekte mit<br />
            <span className="italic font-light text-muted-foreground">Geschichte.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Über 20 Pools haben wir in Brandenburg gebaut. Hier eine Auswahl unserer
            jüngsten Lieblingsprojekte.
          </p>
        </div>
      </section>

      <section className="container-pro">
        <div className="grid md:grid-cols-3 auto-rows-[280px] gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative rounded-3xl overflow-hidden shadow-soft cursor-pointer ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
                  <span>{p.category}</span>
                  <span className="size-1 rounded-full bg-white/60" />
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mt-1">{p.title}</h3>
                <p className="text-sm text-white/85 mt-1 max-w-md">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-pro grid lg:grid-cols-3 gap-6">
          {[
            {
              text: "Vom ersten Termin bis zur Übergabe haben wir uns rundum betreut gefühlt. Der Pool ist ein Traum.",
              author: "Familie Weber",
              place: "Werder (Havel)",
            },
            {
              text: "Echte Handwerker, ehrliche Beratung. Der Festpreis hat bis auf den Cent gestimmt.",
              author: "Dr. Schreiber",
              place: "Potsdam",
            },
            {
              text: "Auch 8 Jahre nach Fertigstellung noch einwandfreier Service. Hier stimmt einfach alles.",
              author: "Familie Lehmann",
              place: "Caputh",
            },
          ].map((t) => (
            <div key={t.author} className="rounded-3xl bg-card border border-border p-8 shadow-soft">
              <Quote className="size-8 text-accent mb-4" />
              <p className="text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.place}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro pb-32">
        <div className="rounded-3xl bg-gradient-deep text-white p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Wird Ihr Pool unser nächstes Projekt?
          </h2>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold shadow-deep hover:scale-105 transition-transform"
          >
            Projekt besprechen <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
