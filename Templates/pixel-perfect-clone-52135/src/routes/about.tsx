import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Check,
  BarChart3,
  ThumbsUp,
  Settings,
  Sparkles,
  Award,
  Linkedin,
  ThumbsUp as ThumbIcon,
  ShieldCheck,
  Leaf,
  Lightbulb,
  Scale,
  FileCheck,
  Cog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { LogoBar } from "@/components/site/LogoBar";
import { Reviews } from "@/components/site/Reviews";

import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";
import teamBerlin from "@/assets/team-berlin.png";
import founder from "@/assets/hero-person.png";
import berlinSkyline from "@/assets/berlin-skyline.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über uns – PutzKraft24 | Ihr Reinigungspartner in Berlin" },
      {
        name: "description",
        content:
          "Lernen Sie PutzKraft24 kennen: Berliner Reinigungsfirma mit festem Stammteam, Büro-Spezialisierung und 4-Wochen-Zufriedenheitsgarantie.",
      },
    ],
  }),
  component: AboutPage,
});

const heroBullets = [
  "Ihr Top-Partner für Büroreinigung in Berlin",
  "Gründlich, professionell und termintreu!",
  "100 % persönliche Beratung!",
  "Kostenloses Angebot!",
  "Sauber oder Geld zurück!",
];

const bentoCards = [
  { icon: BarChart3, text: "Steigert die 100% zufriedene Kunden mit unserer Beratung" },
  { icon: ThumbIcon, text: "Verlässliche Reinigung von Konzepten" },
  { icon: Settings, text: "Maßgeschneiderte Lösungen für Ihr Unternehmen" },
  { icon: Sparkles, text: "Premium-Qualität, immer pünktlich" },
  { icon: Award, text: "Langfristige Partnerschaften statt Wechsel" },
  { icon: Check, text: "Persönlicher Ansprechpartner für alle Fragen" },
];

const valueCards = [
  {
    icon: ThumbsUp,
    title: "100% Zufriedenheit",
    text: "Unsere Kunden bewerten uns durchgehend mit Bestnoten — und das ist genau unser Anspruch.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässigkeit",
    text: "Unsere Auftragnehmer kümmern sich um Ihre Räume — zuverlässig, termintreu und sorgfältig.",
  },
  {
    icon: Check,
    title: "Flexibilität",
    text: "Wir passen uns Ihren Anforderungen an: Reinigungsumfang, Zeit und Frequenz individuell.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    text: "Klimaneutrale Mittel und schonende Verfahren — gut für Ihr Team und unseren Planeten.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Digitale Reinigungsprotokolle und smarte Prozesse, transparent und immer auf dem neuesten Stand.",
  },
];

const ourselvesCards = [
  {
    icon: ThumbsUp,
    title: "Kundenzufriedenheit",
    text: "Wir haben ein offenes Ohr für die Wünsche und Anforderungen unserer Kunden und setzen alles daran, sie zu erfüllen.",
  },
  {
    icon: Award,
    title: "Qualität",
    text: "Wir sind stolz auf unsere Arbeit und streben nach höchster Qualität in allem, was wir tun. Wir sind kompetent, zuverlässig und engagiert.",
  },
  {
    icon: Scale,
    title: "Integrität",
    text: "Ehrlichkeit, Transparenz und Ethik sind die Grundwerte von Putzkraft24. Wir handeln stets im Einklang mit unseren Werten und Prinzipien.",
  },
  {
    icon: FileCheck,
    title: "Sorgfalt",
    text: "Wir übernehmen Verantwortung für unsere Handlungen und Entscheidungen und achten auf die Auswirkungen unserer Arbeit auf die Umwelt und die Gesellschaft.",
  },
  {
    icon: Cog,
    title: "Kooperation",
    text: "Wir arbeiten als Team mit allen Beteiligten zusammen, sei es mit unseren Kunden, Lieferanten oder Mitarbeitern. Wir schätzen den offenen Austausch von Ideen und Meinungen.",
  },
];

const sustainability = [
  {
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    title: "Sauberkeit im Einklang mit der Umwelt",
    bullets: [
      "PutzKraft24 setzt sich aktiv für den Schutz und die nachhaltige Gestaltung der Umwelt ein",
      "Unser Ziel ist es, CO₂-neutral zu arbeiten und Ihre Aufträge klimafreundlich umzusetzen",
      "Wir bieten Ihnen einfache, effektive Lösungen und nutzen nachhaltige Produkte und Dienstleistungen",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    title: "Unsere Welt, unsere Verantwortung",
    bullets: [
      "Wir denken global und handeln lokal — für eine lebenswerte Zukunft in Berlin",
      "Ressourcenschonende Prozesse und kurze Wege reduzieren unseren Fußabdruck",
      "Transparente Kommunikation über unsere Maßnahmen und deren Wirkung",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    title: "Unser soziales Engagement",
    bullets: [
      "Faire Löhne und sichere Arbeitsbedingungen für unser gesamtes Team",
      "Wir unterstützen lokale Initiativen und soziale Projekte in Berlin",
      "Vielfalt und Chancengleichheit sind feste Bestandteile unserer Unternehmenskultur",
    ],
  },
];

function AboutPage() {
  const [promiseTab, setPromiseTab] = useState<"kunden" | "selbst">("kunden");
  const activeCards = promiseTab === "kunden" ? valueCards : ourselvesCards;
  const [activeSustainability, setActiveSustainability] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO */}
        <section className="bg-background pt-6">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(20,40,35,0.88) 0%, rgba(20,40,35,0.45) 55%, rgba(20,40,35,0) 75%), url(${teamBerlin})`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="px-8 py-16 md:px-14 md:py-24 lg:py-28">
                <div className="max-w-md text-white">
                  <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">Über uns</h1>
                  <ul className="mt-10 space-y-4">
                    {heroBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2.5 text-sm backdrop-blur"
                      >
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "#c5e6e0" }}>
                          <Check className="h-4 w-4" style={{ color: "#1f4d3f" }} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 h-14 rounded-full bg-orange pl-7 pr-2 text-base font-semibold text-primary-foreground hover:bg-orange-hover">
                    <Link to="/kontakt">
                      Kostenloses Angebot erhalten!
                      <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo bar */}
        <LogoBar />

        {/* BENTO – founder centered, 6 small cards around */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-4 md:px-6">
            {/* Left column 2 cards */}
          <div className="flex flex-col gap-5">
              {bentoCards.slice(0, 3).map((c, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl bg-mint p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <c.icon className="h-6 w-6 text-foreground" strokeWidth={1.8} />
                  <p className="mt-6 text-sm leading-relaxed text-foreground/75">{c.text}</p>
                </div>
              ))}
            </div>

            {/* Center founder image, spans 2 cols */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1f4d3f] md:col-span-2">
              <img
                src={founder}
                alt="Julian Mutzhas — Gründer von PutzKraft24"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="text-white">
                    <div className="text-lg font-bold">Julian Mutzhas</div>
                    <div className="text-xs opacity-80">Gründer und Geschäftsführer PutzKraft24 GmbH</div>
                  </div>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/90 text-[#0a66c2] hover:bg-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column 3 cards */}
            <div className="flex flex-col gap-5">
              {bentoCards.slice(3).map((c, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl bg-mint p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <c.icon className="h-6 w-6 text-foreground" strokeWidth={1.8} />
                  <p className="mt-6 text-sm leading-relaxed text-foreground/75">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <Reviews />

        {/* PROMISE with tabs + skyline */}
        <section
          className="relative overflow-hidden py-20"
          style={{ backgroundColor: "#ecf3f3" }}
        >
          <div className="relative mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
              Unser Versprechen an
            </h2>

            {/* Tabs */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex rounded-full bg-white/70 p-1 ring-1 ring-foreground/10">
                <button
                  onClick={() => setPromiseTab("kunden")}
                  className={
                    promiseTab === "kunden"
                      ? "rounded-full bg-white px-6 py-2 text-sm font-semibold shadow-sm"
                      : "rounded-full px-6 py-2 text-sm font-medium text-foreground/70"
                  }
                >
                  Kunden
                </button>
                <button
                  onClick={() => setPromiseTab("selbst")}
                  className={
                    promiseTab === "selbst"
                      ? "rounded-full bg-white px-6 py-2 text-sm font-semibold shadow-sm"
                      : "rounded-full px-6 py-2 text-sm font-medium text-foreground/70"
                  }
                >
                  Uns selbst
                </button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {activeCards.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#c5e6e0" }}
                  >
                    <v.icon className="h-5 w-5" style={{ color: "#2d7a6e" }} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/70">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Berlin skyline */}
          <img
            src={berlinSkyline}
            alt="Berlin Skyline mit Brandenburger Tor, Fernsehturm, Reichstag und Siegessäule"
            className="mt-24 block w-full select-none"
            loading="lazy"
          />
        </section>

        {/* Sustainability image cards */}
        <section className="bg-background py-16">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 md:px-6 md:grid-cols-5">
            {sustainability.map((s, i) => {
              const isActive = activeSustainability === i;
              return (
                <button
                  key={s.title}
                  type="button"
                  onMouseEnter={() => setActiveSustainability(i)}
                  onFocus={() => setActiveSustainability(i)}
                  onClick={() => setActiveSustainability(i)}
                  aria-expanded={isActive}
                  className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-500 ${
                    isActive ? "h-[420px] md:col-span-3" : "h-[420px] md:col-span-1"
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <h3
                      className={`font-bold text-white ${
                        isActive ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {s.title}
                    </h3>
                    {isActive && (
                      <ul className="mt-4 space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-white/95">
                            <span
                              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: "#7be0c8" }}
                            >
                              <Check className="h-3 w-3" style={{ color: "#0a3d2f" }} strokeWidth={3} />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Kostenloser Büro-Check CTA */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="overflow-hidden rounded-3xl bg-mint">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={founder}
                    alt="Julian Mutzhas"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-md md:inline-block">
                    Teste die Beratung
                  </span>
                </div>
                <div className="px-6 py-10 md:px-10 md:py-14">
                  <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                    Kostenloser Büro-Check
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/75">
                    Bekommen Sie Ihren Büro-Angebotspreis. Wir schauen uns Ihr Büro detailliert an, unterbreiten Ihnen ein faires Angebot für Ihre Büroreinigung in Berlin — Ohne Verpflichtung. 24h-Kundenan­twortzeit inbegriffen.
                  </p>
                  <Button asChild className="mt-6 h-12 rounded-full bg-orange px-7 font-semibold text-primary-foreground hover:bg-orange-hover">
                    <Link to="/kontakt">Kostenlosen Büro-Check anfordern</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Partners />
      </main>
      <Footer />

      {/* hidden link for type-safety hint */}
      <Link to="/" className="sr-only">Home</Link>
    </div>
  );
}
