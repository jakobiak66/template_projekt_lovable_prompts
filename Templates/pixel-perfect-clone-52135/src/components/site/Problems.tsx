const items = [
  { title: "Unzuverlässige Anbieter?", text: "Reinigungsfirmen, die unregelmäßig oder gar nicht erscheinen, kosten Sie Zeit und Nerven." },
  { title: "Wechselndes Personal?", text: "Ständig neue Gesichter im Büro erschweren Vertrauen und konstante Qualität." },
  { title: "Intransparente Preise?", text: "Versteckte Zusatzkosten und unklare Leistungspakete machen Planung unmöglich." },
];

export function Problems() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Kennen Sie das auch?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-mint p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-base text-foreground md:text-lg">
          Genau diese Probleme lösen wir als <strong className="font-semibold">Reinigungsservice in Berlin</strong> jeden Tag — <strong className="font-semibold">für über 35 Unternehmen mit regelmäßiger Büroreinigung.</strong>
        </p>
      </div>
    </section>
  );
}
