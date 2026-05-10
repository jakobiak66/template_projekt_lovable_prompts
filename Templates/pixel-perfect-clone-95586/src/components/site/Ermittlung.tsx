export function Ermittlung() {
  return (
    <section id="fall" className="bg-cream text-cream-foreground py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-12">Wenn gegen Sie ermittelt wird</p>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              <span className="text-foreground/30">Hausdurchsuchung.</span><br />
              Vorladung.<br />
              <span className="text-foreground/30">Beschlagnahme.</span>
            </h2>

            <div className="mt-12 max-w-xl space-y-5 text-base leading-relaxed">
              <p>
                Ein Ermittlungsverfahren beginnt oft überraschend. Was Sie jetzt tun
                — oder nicht tun — entscheidet über den weiteren Verlauf.
              </p>
              <p className="text-foreground/70">
                Melden Sie sich, sobald Sie einen Beschuldigtenvernehmungsbogen der
                Polizei erhalten haben.
              </p>
            </div>
          </div>

          <div className="lg:pt-8">
            <ul className="space-y-5">
              {[
                "Einstellung des Verfahrens",
                "Strafmilderung",
                "Vermeidung öffentlicher Hauptverhandlung",
                "Schutz Ihrer Existenz",
              ].map((t, i) => (
                <li key={t} className="flex gap-4 items-baseline">
                  <span className="font-serif text-xs text-foreground/50 tabular-nums w-6">
                    0{i + 1}
                  </span>
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+4930120593430"
              className="mt-10 inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition"
            >
              Jetzt anrufen — 030 120 593 430
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
