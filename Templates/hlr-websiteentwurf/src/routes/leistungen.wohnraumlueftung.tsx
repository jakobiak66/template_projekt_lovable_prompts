import { createFileRoute } from "@tanstack/react-router";
import { LeistungLayout } from "@/components/site/LeistungLayout";
import wohnraumHero from "@/assets/wohnraumlueftung-hero.png";
import wohnraumGallery1 from "@/assets/wohnraumlueftung-gallery-1.png";
import wohnraumGallery3 from "@/assets/wohnraumlueftung-gallery-3.png";
import wohnraumGallery4 from "@/assets/wohnraumlueftung-gallery-4.png";

export const Route = createFileRoute("/leistungen/wohnraumlueftung")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Wohnraumlüftung – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Frische Luft ohne Wärmeverlust – kontrollierte Wohnraumlüftung mit Wärme- und Feuchterückgewinnung.",
      },
      { property: "og:title", content: "Wohnraumlüftung – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content:
          "Kontrollierte Wohnraumlüftung sorgt für ein gesundes Raumklima bei minimalem Energieverlust.",
      },
    ],
  }),
});

function Page() {
  return (
    <LeistungLayout
      title="Wohnraumlüftung"
      subtitle="Frische Luft – ganz ohne unnötigen Wärmeverlust."
      ctaHeadline="Frische Luft – das ganze Jahr?"
      ctaSubline="Kostenlose Beratung zur kontrollierten Wohnraumlüftung – persönlich vor Ort in Erkner."
      paragraphs={[
        "Eine kontrollierte Wohnraumlüftung trägt entscheidend zu einem gesunden und angenehmen Raumklima bei. Sie sorgt kontinuierlich für den Austausch verbrauchter Luft gegen frische Außenluft, ohne dass dabei wertvolle Heizenergie verloren geht. Durch moderne Systeme mit Wärme- und Feuchterückgewinnung wird die in der Abluft enthaltene Energie genutzt und an die Zuluft übertragen.",
        "So entsteht in jedem Raum eine gleichmäßige, frische Luftqualität – unabhängig vom Lüftungsverhalten. Gleichzeitig wird die Luftfeuchtigkeit reguliert, was das Raumklima spürbar verbessert und zur Werterhaltung der Immobilie beiträgt.",
        "Das Ergebnis: mehr Komfort, bessere Luftqualität und eine energieeffiziente Lösung für zeitgemäßes Wohnen.",
      ]}
      heroImage={wohnraumHero}
      heroImageAlt="Wandmontiertes Lüftungsgerät in modernem, hellem Badezimmer mit Fenster"
      leistungenIntro="Von der Planung bis zur Wartung – wir sorgen für ein gesundes Raumklima in Ihrem Zuhause."
      leistungen={[]}
      leistungenText="Wir planen und installieren kontrollierte Wohnraumlüftungssysteme mit Wärmerückgewinnung sowie Enthalpie-Wärmetauscher – für eine energieeffiziente Lösung, die frische Luft ins Haus bringt, ohne wertvolle Heizwärme zu verschwenden."
      gallery={[
        {
          src: wohnraumGallery1,
          alt: "Beratungsgespräch zur kontrollierten Wohnraumlüftung mit Tablet und Lüftungskonzept",
        },
        {
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
          alt: "Lüftungstechnik in der Decke",
        },
        {
          src: wohnraumGallery3,
          alt: "Modernes Wohnzimmer mit Lüftungsauslässen an der Wand",
        },
        {
          src: wohnraumGallery4,
          alt: "Geöffnetes Lüftungsgerät mit sichtbarem Wärmetauscher und visualisierten Luftströmen",
        },
      ]}
    />
  );
}
