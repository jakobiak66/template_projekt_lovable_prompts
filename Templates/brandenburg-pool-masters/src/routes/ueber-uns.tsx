import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Users } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Familienbetrieb seit 1965 | AquaMeister Brandenburg" },
      {
        name: "description",
        content:
          "Drei Generationen Pool-Handwerk aus Brandenburg. Lernen Sie unser vierköpfiges Meister-Team kennen.",
      },
      { property: "og:title", content: "Über AquaMeister — Familienbetrieb seit 1965" },
      { property: "og:description", content: "Unser Team, unsere Werte, unsere Geschichte." },
      { property: "og:image", content: teamWork },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Heinrich Möller jr.", role: "Geschäftsführer & Pool-Meister", since: "seit 1998" },
  { name: "Andreas Möller", role: "Bauleiter & Meister", since: "seit 2005" },
  { name: "Markus Schenk", role: "Meister Schwimmbadtechnik", since: "seit 2011" },
  { name: "Lukas Möller", role: "Pool-Meister & 3. Generation", since: "seit 2022" },
];

const milestones = [
  { year: "1965", text: "Heinrich Möller sen. gründet den Betrieb in Potsdam-Babelsberg." },
  { year: "1989", text: "Erster Naturpool Brandenburgs nach der Wende — ein Pionierprojekt." },
  { year: "1998", text: "Übernahme durch Heinrich Möller jr. in zweiter Generation." },
  { year: "2010", text: "Eröffnung der eigenen Werkstatt für Edelstahl-Pools." },
  { year: "2022", text: "Lukas startet die Ausbildung — die dritte Generation beginnt." },
  { year: "2025", text: "60 Jahre AquaMeister Brandenburg." },
];

function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Familienbetrieb · seit 1965
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Drei<br />
              Generationen.<br />
              <span className="italic font-light text-muted-foreground">Ein Handwerk.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Was 1965 mit einem einzigen gemauerten Becken in Potsdam begann, ist heute einer
              der traditionsreichsten Pool-Meisterbetriebe Brandenburgs. Wir sind ein kleines
              Team von vier Meistern — und das mit voller Absicht. So bleiben wir nah an unseren
              Kunden und an jedem einzelnen Projekt.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-deep">
            <img
              src={teamWork}
              alt="Das AquaMeister-Team auf einer Pool-Baustelle"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 bg-secondary/40">
        <div className="container-pro grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Meisterqualität", text: "Jedes Projekt wird von einem Meister begleitet — vom Aushub bis zur Übergabe." },
            { icon: Heart, title: "Familie", text: "Wir sind ein Familienbetrieb in dritter Generation. Verantwortung statt Renditedruck." },
            { icon: Users, title: "Persönlich", text: "Vier Gesichter, die Sie kennen. Keine Subunternehmer, keine Wechsel." },
          ].map((v) => (
            <div key={v.title} className="rounded-3xl bg-card border border-border p-8 shadow-soft">
              <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow mb-5">
                <v.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-pro">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Das Team
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Vier Köpfe.<br />
              <span className="italic font-light text-muted-foreground">Ein Versprechen.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-deep transition-all">
                <div className="aspect-square rounded-xl bg-gradient-water mb-5 flex items-center justify-center text-white font-display text-4xl font-semibold shadow-glow">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="font-display font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
                <p className="text-xs text-accent mt-2 uppercase tracking-widest">{m.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zeitstrahl */}
      <section className="py-24 bg-secondary/40">
        <div className="container-pro max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            Unsere Geschichte
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight mb-14">
            60 Jahre — in Etappen.
          </h2>

          <div className="space-y-1">
            {milestones.map((m) => (
              <div key={m.year} className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-6 py-6 border-b border-border last:border-0">
                <div className="font-display text-3xl md:text-4xl font-semibold text-primary">{m.year}</div>
                <p className="text-foreground leading-relaxed pt-2">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pro py-24">
        <div className="rounded-3xl bg-gradient-deep text-white p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Lernen Sie uns kennen.
          </h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">
            Wir freuen uns auf einen Kaffee in unserem Büro in Potsdam — oder auf einen Termin bei Ihnen vor Ort.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold shadow-deep hover:scale-105 transition-transform"
          >
            Kontakt aufnehmen <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
