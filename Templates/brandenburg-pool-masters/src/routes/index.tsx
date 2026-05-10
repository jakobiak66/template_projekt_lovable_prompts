import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Droplets, Hammer, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroPool from "@/assets/hero-pool.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aboutTechnician from "@/assets/about-technician.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AquaMeister Brandenburg — Poolbau-Meisterbetrieb seit 1965" },
      {
        name: "description",
        content:
          "Maßgeschneiderte Schwimmbäder aus Brandenburg. Familienbetrieb mit 60 Jahren Erfahrung und einem 4-köpfigen Meister-Team.",
      },
      { property: "og:title", content: "AquaMeister Brandenburg — Poolbau seit 1965" },
      { property: "og:description", content: "60 Jahre Pool-Handwerk aus Brandenburg." },
      { property: "og:image", content: heroPool },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "60", suffix: "+", label: "Jahre Erfahrung" },
  { value: "20", suffix: "+", label: "gebaute Pools" },
  { value: "4", suffix: "", label: "Meister im Team" },
  { value: "100", suffix: "%", label: "Brandenburg" },
];

const services = [
  {
    icon: Droplets,
    title: "Außenpools",
    text: "Vom klassischen Rechteck bis zum Infinity-Pool — individuell geplant für Ihren Garten.",
  },
  {
    icon: Sparkles,
    title: "Innenpools",
    text: "Schwimmhallen mit moderner Technik, Lüftung und Wellnessbereich.",
  },
  {
    icon: Leaf,
    title: "Naturpools",
    text: "Chemiefreie Schwimmteiche mit biologischer Wasseraufbereitung.",
  },
  {
    icon: Hammer,
    title: "Sanierung",
    text: "Modernisierung Ihres bestehenden Pools — Folie, Technik, Fliesen, Beckenrand.",
  },
  {
    icon: ShieldCheck,
    title: "Wartung & Service",
    text: "Saisonale Wartung, Wasseranalysen und 24h-Notdienst in ganz Brandenburg.",
  },
  {
    icon: Users,
    title: "Beratung",
    text: "Persönliche Beratung beim Meister — kostenlos und unverbindlich vor Ort.",
  },
];

const projects = [
  { img: project1, title: "Gartenpool Werder", category: "Außenpool · 8 × 4 m" },
  { img: project2, title: "Infinity am See", category: "Premium · Brandenburg" },
  { img: project3, title: "Schwimmhalle Potsdam", category: "Indoor · 12 × 5 m" },
];

function HomePage() {
  const servicesHeading = useReveal<HTMLHeadingElement>();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] -mt-20 flex items-end overflow-hidden">
        <img
          src={heroPool}
          alt="Luxuriöser Pool von AquaMeister Brandenburg in der Abendsonne"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-pro relative pb-20 pt-32 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="size-1.5 rounded-full bg-ocean-foam animate-pulse" />
              Familienbetrieb seit 1965
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
              Ihr Pool.<br />
              <span className="italic font-light opacity-90">Brandenburger</span> Handwerk.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              Drei Generationen, vier Meister, ein Versprechen: ein Schwimmbad, das ein Leben lang Freude macht.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 max-w-xs sm:max-w-none mx-auto sm:mx-0">
              <Link
                to="/kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 text-sm font-semibold shadow-deep hover:scale-105 transition-transform"
              >
                Kostenlose Beratung
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/projekte"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Projekte ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-pro grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-4 text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Über AquaMeister
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Sechs Jahrzehnte<br />
              <span className="italic font-light text-muted-foreground">am Wasser zuhause.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              1965 hat unser Großvater den ersten Pool in Potsdam gebaut. Heute führen wir den
              Familienbetrieb in dritter Generation — mit vier Meistern, modernster Technik und
              dem gleichen Versprechen wie damals: ehrliches Handwerk, das hält.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Meisterbetrieb mit vier festangestellten Fachkräften",
                "Über 20 realisierte Pool-Projekte in Brandenburg",
                "Eigene Planung, eigener Bau, eigener Service",
                "10 Jahre Garantie auf Beckenkonstruktion",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold group"
            >
              Mehr über unser Team
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-deep">
              <img
                src={aboutTechnician}
                alt="AquaMeister Techniker bei der Montage einer Lüftungseinheit"
                width={1280}
                height={1600}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-deep max-w-xs">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Seit</div>
              <div className="font-display text-5xl font-semibold text-primary leading-none mt-1">1965</div>
              <div className="text-sm text-muted-foreground mt-2">
                Drei Generationen Poolbau aus Brandenburg.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-pro">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Leistungen
            </div>
            <h2
              ref={servicesHeading.ref}
              className={`mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight reveal-slide-left ${servicesHeading.visible ? "is-visible" : ""}`}
            >
              Alles aus einer Hand.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der ersten Skizze bis zum letzten Tropfen Wasser — wir begleiten Ihr Projekt persönlich.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="ripple-border group relative rounded-2xl bg-card border border-border p-7 hover:shadow-deep transition-all duration-500 hover:-translate-y-1"
              >
                <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow mb-5">
                  <s.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium hover:bg-muted"
            >
              Alle Leistungen ansehen
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJEKTE */}
      <section className="py-24 md:py-32">
        <div className="container-pro">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                Referenzen
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                Ausgewählte Projekte.
              </h2>
            </div>
            <Link to="/projekte" className="text-primary font-semibold inline-flex items-center gap-2 group">
              Alle Projekte
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-soft mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                <h3 className="font-display text-xl font-semibold mt-1">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-pro pb-32">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-deep text-white p-10 md:p-16 shadow-deep">
          <div className="absolute inset-0 opacity-30 bg-gradient-water mix-blend-overlay" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Lassen Sie uns über Ihren Pool sprechen.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Kostenlose Erstberatung bei Ihnen vor Ort — in ganz Brandenburg und Berlin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold shadow-deep hover:scale-105 transition-transform"
              >
                Termin vereinbaren <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+4933123456789"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3.5 font-semibold hover:bg-white/20"
              >
                +49 331 234 567 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
