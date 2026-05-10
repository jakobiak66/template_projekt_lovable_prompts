import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    n: "01",
    title: "Betäubungsmittelstrafrecht",
    sub: "BtMG",
    bullets: ["Besitz, Handel, Einfuhr", "Darknet-Bestellungen", "Hausdurchsuchung & Beschlagnahme", "Verbindung zu Fahrerlaubnisverfahren"],
    quote: "Frühes Eingreifen kann über Einstellung oder Anklage entscheiden.",
  },
  {
    n: "02",
    title: "Sexualstrafrecht",
    sub: "§§ 174–184 StGB",
    bullets: ["Aussage-gegen-Aussage-Konstellationen", "Ermittlungen wegen verbotener Inhalte", "Vorwürfe nach §§ 174–184 StGB", "Diskrete und strategische Verteidigung"],
    quote: "Diese Verfahren sind existenzgefährdend. Sie benötigen präzise, erfahrene Verteidigung.",
  },
  {
    n: "03",
    title: "Verkehrsstrafrecht",
    sub: "Fahrerlaubnis & Strafrecht",
    bullets: ["Trunkenheit im Verkehr", "Drogen am Steuer", "Fahrerflucht", "Entziehung der Fahrerlaubnis"],
    quote: "Für Berufskraftfahrer kann ein Verfahren existenziell sein.",
  },
  {
    n: "04",
    title: "Allgemeines Strafrecht",
    sub: "StGB",
    bullets: ["Körperverletzung", "Betrug & Nötigung", "Stalking (§ 238 StGB)", "Jugendstrafrecht"],
    quote: "Jeder Fall verlangt eine individuelle Strategie — keine Standardlösung.",
  },
  {
    n: "05",
    title: "Darknet & Online-Delikte",
    sub: "IT-Strafrecht",
    bullets: ["Hausdurchsuchung & Datensicherstellung", "IT-forensische Auswertung", "Vermögensabschöpfung", "Angreifbarkeit von Durchsuchungsbeschlüssen"],
    quote: "Nicht selten führen Fehler der Ermittlungsbehörden zur Beweisunverwertbarkeit.",
  },
];

export function Expertise() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="expertise" className="bg-white text-cream-foreground py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-8">Spezialisierungen</p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Meine Expertise.<br />
            <span className="italic text-foreground/50">Ihr Schutz.</span>
          </h2>
          <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition">
            5 Spezialbereiche · Alle Rechtsgebiete →
          </a>
        </div>

        <div className="border-t border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.n} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-6 text-left hover:opacity-80 transition"
                >
                  <span className="font-serif text-sm text-foreground/40 tabular-nums w-8">{item.n}</span>
                  <span className="flex-1">
                    <span className="font-serif text-2xl md:text-3xl">{item.title}</span>
                    <span className="ml-3 text-xs text-foreground/50 tracking-wider uppercase">{item.sub}</span>
                  </span>
                  {isOpen ? <Minus className="size-5 text-foreground/50" /> : <Plus className="size-5 text-foreground/50" />}
                </button>
                {isOpen && (
                  <div className="pb-10 pl-14 grid md:grid-cols-2 gap-8 max-w-4xl">
                    <ul className="space-y-2 text-sm">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="text-foreground/40">—</span>{b}
                        </li>
                      ))}
                    </ul>
                    <blockquote className="font-serif italic text-lg text-foreground/70 leading-snug">
                      „{item.quote}"
                    </blockquote>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
