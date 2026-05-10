import { createFileRoute } from "@tanstack/react-router";
import { LeistungLayout } from "@/components/site/LeistungLayout";
import solar1 from "@/assets/solartechnik-1.png";
import solar2 from "@/assets/solartechnik-2.png";

export const Route = createFileRoute("/leistungen/solartechnik")({
  head: () => ({
    meta: [
      { title: "Solartechnik – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Emissionsschonend und wirtschaftlich heizen – Planung und Umsetzung von thermischen Solaranlagen und Photovoltaik.",
      },
      { property: "og:title", content: "Solartechnik – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content: "Emissionsschonend & wirtschaftlich – Solartechnik vom Fachbetrieb HLR.",
      },
    ],
  }),
  component: SolartechnikPage,
});

function SolartechnikPage() {
  return (
    <LeistungLayout
      title="Solartechnik"
      subtitle="Emissionsschonend & wirtschaftlich."
      ctaHeadline="Sonnenenergie für Ihr Zuhause?"
      ctaSubline="Kostenlose Beratung zu thermischen Solaranlagen – persönlich vor Ort in Erkner."
      paragraphs={[
        "Sie möchten emissionsschonend heizen? Sie legen Wert auf umweltfreundliche Technik? Und Sie möchten dabei langfristig Ihre Energiekosten senken? Mit der richtigen Solartechnik lassen sich diese Ziele nicht nur vereinbaren, sie ergänzen sich ideal.",
        "Als erfahrener Fachbetrieb unterstützen wir Sie dabei, die Kraft der Sonne gezielt für Ihr Zuhause oder Ihr Unternehmen zu nutzen. Von der ersten Idee bis zur fertigen Anlage sind wir Ihr verlässlicher Partner, kompetent, sorgfältig und auf Ihre individuellen Bedürfnisse abgestimmt.",
      ]}
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
      heroImageAlt="Thermische Solaranlage auf einem Hausdach"
      leistungenIntro="Von der Beratung bis zur Inbetriebnahme – wir bringen Sonnenenergie zuverlässig in Ihr Haus."
      leistungen={[]}
      leistungenText={[
        "Wir planen und realisieren thermische Solaranlagen, die Ihr Heizungssystem sinnvoll ergänzen und Ihren Energieverbrauch spürbar senken. Vor Ort prüfen wir, welche Lösung zu Ihrem Gebäude, Ihrem Bedarf und Ihrer bestehenden Heiztechnik passt.",
        "Von der Beratung über die Auslegung bis zur Montage und Inbetriebnahme begleiten wir Sie zuverlässig durch das gesamte Projekt. So entsteht eine Solaranlage, die technisch überzeugt, wirtschaftlich sinnvoll ist und die Kraft der Sonne effizient für Warmwasser und Heizungsunterstützung nutzt.",
      ]}
      gallery={[
        {
          src: solar1,
          alt: "Monteur installiert Solarmodule auf einem Hausdach",
        },
        {
          src: solar2,
          alt: "Vater und Kind betrachten Solaranlage auf dem Hausdach",
        },
        {
          src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
          alt: "Sonniges Einfamilienhaus mit Solaranlage",
        },
        {
          src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
          alt: "Installation einer Solaranlage",
        },
      ]}
    />
  );
}
