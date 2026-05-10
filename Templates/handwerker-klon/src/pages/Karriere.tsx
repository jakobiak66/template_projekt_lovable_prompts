import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Laptop, Apple, Users, Coins, Banknote, Home, Plane, MapPin, Briefcase, Clock } from "lucide-react";
import teamImg from "@/assets/karriere-team.jpg";
import cheerImg from "@/assets/karriere-cheer.jpg";
import foundersImg from "@/assets/karriere-founders.jpg";

const benefits = [
  { icon: Truck, title: "Die neusten Fahrzeuge", text: "Fahre mit dem neuen VW T7 direkt von zu Hause zum ersten Einsatz." },
  { icon: Laptop, title: "Top-Equipment", text: "Du nutzt erstklassige Geräte und hochwertige Arbeitskleidung." },
  { icon: Apple, title: "Täglich Essenszulage", text: "Uns ist wichtig, dass du während der Arbeit rundum bestens versorgt bist." },
  { icon: Users, title: "Empfehlungsprogramm", text: "Hole Talente ins Team und erhalte einen sehr satten Bonus." },
  { icon: Coins, title: "Erstklassige Vergütung", text: "Wir möchten, dass es dir gut geht und dazu gehört ein vernünftiges Gehalt." },
  { icon: Banknote, title: "Faires Bonusmodell", text: "Wenn wir gemeinsam erfolgreich sind, dann profitieren wir gemeinsam." },
  { icon: Home, title: "Weiterbildungen", text: "Wir investieren in unsere Talente, um ihre Entwicklung zu fördern." },
  { icon: Plane, title: "30 Tage Urlaub", text: "Wer fleißig arbeitet hat sich auch einen vernünftigen Urlaub verdient." },
];

const Karriere = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-surface-soft rounded-3xl p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-flex w-fit bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                Werde Teil der Crew
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold italic text-primary-dark mb-5">Team Clara</h1>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Bist du bereit, die alten Strukturen im Handwerk herauszufordern und mit uns neue Wege zu gehen? Bei Clara
                setzen wir auf moderne Arbeitsweisen, flache Hierarchien und kontinuierliche Weiterbildung, um die besten
                Talente zu fördern. Wir wollen der beste Arbeitgeber in der Branche sein und bieten dir die Chance, dich in
                einem innovativen, dynamischen Umfeld weiterzuentwickeln. Werde Teil unseres Teams und hilf uns, das
                Handwerk zu revolutionieren – gemeinsam gestalten wir die Zukunft!
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Button variant="hero" size="lg" asChild>
                  <a href="#offene-stellen">Zu den offenen Stellen</a>
                </Button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-bold text-base" style={{ fontFamily: "Arial" }}>
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <div>
                    <div className="text-yellow-500 text-sm leading-none">★★★★★</div>
                    <div className="text-[10px]">Basierend auf 41 Bewertungen</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={teamImg} alt="Team Clara auf Berliner Dach" className="w-full h-full object-cover" width={1280} height={896} />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container py-16">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Deine Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold italic text-primary-dark">
              Bei uns soll es dir an nichts fehlen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-surface-soft rounded-2xl p-6 text-center">
                <b.icon className="h-10 w-10 text-primary mx-auto mb-4" strokeWidth={2} />
                <h3 className="font-bold italic text-primary-dark mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Komm ins Team */}
        <section className="container py-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={cheerImg} alt="Jubelndes Team" loading="lazy" className="w-full h-full object-cover" width={1280} height={896} />
            </div>
            <div className="bg-surface-soft rounded-3xl p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold italic text-primary-dark mb-5">Komm ins Team!</h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Bei Clara stehst du im Mittelpunkt. Als Teil eines Teams, das das Handwerk nachhaltig revolutionieren wird,
                kannst du deine Fähigkeiten in einer Atmosphäre voller Wertschätzung, Offenheit und Teamgeist voll
                entfalten. Wir bieten dir moderne Ausstattung, digitale Tools und klare Strukturen, um gemeinsam neue
                Maßstäbe zu setzen. Während wir die Zukunft der Branche prägen, legen wir größten Wert auf dein
                Wohlbefinden und deine persönliche Weiterentwicklung.
              </p>
              <Button variant="hero" size="lg" className="w-fit" asChild>
                <a href="#offene-stellen">Jetzt bewerben</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="container py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold italic text-primary-dark mb-5">
                Unsere Vision für die Zukunft des Handwerks
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Unsere klare Vision ist es, das Handwerk neu zu definieren: moderner, transparenter und kundenorientierter
                als je zuvor. Wir verbinden das traditionsreiche Handwerk mit digitalen Technologien, um einen Service zu
                bieten, der transparent, zuverlässig als auch persönlich ist. Wir sind entschlossen, die Branche zu
                verändern und neue Standards für die Zukunft des Handwerks zu setzen.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#offene-stellen">Jetzt bewerben</a>
              </Button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={foundersImg} alt="Gründer von Clara" loading="lazy" className="w-full h-full object-cover" width={1280} height={896} />
            </div>
          </div>
        </section>

        {/* Offene Stellen */}
        <section id="offene-stellen" className="container py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold italic text-primary-dark text-center mb-8">
            Offene Stellen bei Clara
          </h2>

          <div className="relative rounded-3xl overflow-hidden mb-10 h-64 sm:h-80">
            <img src={cheerImg} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary-dark/50" />
            <div className="relative h-full flex items-center justify-center px-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold italic text-primary-foreground text-center">
                Auf der Suche nach einer neuen Herausforderung?
              </h3>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-dark mb-5">Offene Stellen</h3>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-primary font-bold">Operations (SHK)</h4>
                <span className="bg-surface-soft text-foreground text-xs font-semibold px-2 py-0.5 rounded-full">1</span>
              </div>

              <a
                href="#"
                className="block bg-surface-soft hover:bg-secondary rounded-xl p-5 transition-smooth border border-transparent hover:border-primary/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-primary mb-2">Anlagenmechaniker:in SHK – Wärmepumpe (m/w/d)</h5>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Hybrid</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Vollzeit</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> Festanstellung</span>
                    </div>
                  </div>
                  <span className="text-primary text-xl">→</span>
                </div>
              </a>
            </div>

            <div className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
              Powered by Personio
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Karriere;
