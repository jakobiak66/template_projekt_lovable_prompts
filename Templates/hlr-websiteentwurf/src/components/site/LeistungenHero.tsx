export function LeistungenHero() {
  return (
    <section className="relative h-[280px] md:h-[320px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1920&q=80"
        alt="Berliner Skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="relative container-page h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          <h1 className="text-brand-foreground">Unsere Leistungen</h1>
          <p className="text-brand-foreground/90 text-sm md:text-base leading-relaxed max-w-md">
            Türöffnung, Schlüsselservice und Sicherheitssysteme
            <br />
            alles aus einer Hand.
          </p>
        </div>
      </div>
    </section>
  );
}
