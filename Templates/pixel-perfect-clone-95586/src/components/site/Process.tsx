const steps = [
  { n: "01", phase: "Erste 24 Stunden", title: "Sofortkontakt", text: "Telefonisch oder per Rückruf — schnelle Ersteinschätzung. Ohne Wartezeit. Rund um die Uhr erreichbar." },
  { n: "02", phase: "Ermittlungsphase", title: "Akteneinsicht", text: "Ohne Aktenkenntnis keine seriöse Beratung. Ich beantrage sofort Akteneinsicht und analysiere jeden Verfahrensschritt." },
  { n: "03", phase: "Strategieentwicklung", title: "Verteidigungsstrategie", text: "Individuell, realistisch, klar kommuniziert. Keine Versprechen — aber eine ehrliche Einschätzung Ihrer Chancen." },
  { n: "04", phase: "Hauptverfahren", title: "Konsequente Vertretung", text: "Gegenüber Polizei, Staatsanwaltschaft und Gericht. Ihr Interesse steht an erster Stelle — immer." },
];

export function Process() {
  return (
    <section className="bg-cream text-cream-foreground py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-8">So arbeiten wir</p>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-16">
          Verteidigung ist<br />
          <span className="italic text-foreground/50">Prozess, nicht Zufall.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream p-8">
              <div className="font-serif text-3xl text-foreground/30">{s.n}</div>
              <div className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase text-foreground/50">{s.phase}</div>
              <h3 className="font-serif text-2xl mt-6">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <p className="max-w-xl text-sm text-foreground/70">
            Jedes Verfahren ist anders. Deshalb gibt es keine Standardlösungen — nur individuelle, konsequente Verteidigung.
          </p>
          <a href="tel:+4930120593430" className="inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition self-start">
            Erstberatung — 030 120 593 430
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a href="#profil" className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-navy hover:opacity-70 transition">
            <span aria-hidden className="h-px w-8 bg-navy" />
            Vollständiges Profil
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#testimonials" className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-navy hover:opacity-70 transition">
            <span aria-hidden className="h-px w-8 bg-navy" />
            Mandantenstimmen
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
