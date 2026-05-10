import { ThumbsUp, TrendingUp, Zap, Award } from "lucide-react";
import berlinSkyline from "@/assets/berlin-skyline.png";

const items = [
  {
    icon: ThumbsUp,
    title: "Höchste Kundenzufriedenheit",
    subtitle: "Durch unsere Büro-Spezialisierung",
    text:
      "Da wir uns ausschließlich auf die Zusammenarbeit mit Geschäftskunden spezialisiert haben, verstehen wir genau, worauf es bei der Büroreinigung in Berlin ankommt. Unsere Expertise in der professionellen Gebäudereinigung ermöglicht es uns, individuell auf die spezifischen Bedürfnisse und Anforderungen unserer Kunden einzugehen, um ein stets sauberes und angenehmes Arbeitsumfeld zu gewährleisten.",
  },
  {
    icon: TrendingUp,
    title: "Produktivitäts-Booster für Ihr Büro",
    subtitle: "Mit uns steigern Sie die Produktivität Ihrer Mitarbeiter",
    text:
      "Stellen Sie sich vor, jeden Morgen steht ein frischer Obstkorb auf dem Küchentresen, und im Kühlschrank finden Sie frisch gepressten Saft. Mit unseren Produktivitäts-Boostern sorgen wir für ein rundum gesundes Arbeitsklima. Diese kleinen Extras fördern nicht nur die Gesundheit Ihrer Mitarbeiter, sondern steigern auch deren Motivation und Effizienz.",
  },
  {
    icon: Zap,
    title: "Mit digitalisierten Prozessen mehr leisten",
    subtitle: "Immer auf dem neuesten Stand",
    text:
      "Transparenz für Sie: Dank unserer intelligenten Prozesse führen unsere Mitarbeiter digitale Reinigungsprotokolle. Diese Protokolle ermöglichen es Ihnen, jederzeit darauf zuzugreifen und genau nachzuvollziehen, welche Arbeiten erledigt wurden. So bleiben Sie stets informiert und können sicher sein, dass alle Reinigungsarbeiten nach höchsten Standards durchgeführt werden.",
  },
  {
    icon: Award,
    title: "Klimaneutrale Büroreinigung",
    subtitle: "Ohne Mehrkosten, dafür gut für die Umwelt",
    text:
      "Als Reinigungsfirma in Berlin verbinden wir Umweltbewusstsein mit höchster Reinigungsqualität. Wenn es ohne Qualitätseinbußen möglich ist, setzen wir klimaneutrale Reinigungsmittel ein, um Ressourcen zu schonen. Für besonders anspruchsvolle Aufgaben nutzen wir gezielt Produkte, die maximale Leistung garantieren. Wir unterstützen Ihre ESG-Ziele, reduzieren und gleichen CO₂-Emissionen aus und bieten Ihnen Lösungen, die Umweltfreundlichkeit und Leistung optimal vereinen.",
  },
];

export function Promise() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div style={{ backgroundColor: "#ecf3f3" }} className="overflow-hidden rounded-b-3xl pt-24 pb-0">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <h2
          className="text-center text-3xl font-bold leading-tight md:text-4xl lg:text-[44px]"
          style={{ color: "#1a2e2b" }}
        >
          Unser Versprechen — Warum 35+
          <br />
          Unternehmen auf PutzKraft24 setzen
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#c5e6e0" }}
              >
                <it.icon className="h-6 w-6" style={{ color: "#2d7a6e" }} strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 text-xl font-bold" style={{ color: "#1a2e2b" }}>
                {it.title}
              </h3>
              <p className="mt-1 text-sm italic" style={{ color: "#2d7a6e" }}>
                {it.subtitle}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3d5450" }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Berlin skyline silhouette below the cards */}
      <img
        src={berlinSkyline}
        alt="Berlin Skyline mit Brandenburger Tor, Fernsehturm, Reichstag und Siegessäule"
        className="mt-24 block w-full select-none align-bottom"
        loading="lazy"
      />
      </div>
    </section>
  );
}
