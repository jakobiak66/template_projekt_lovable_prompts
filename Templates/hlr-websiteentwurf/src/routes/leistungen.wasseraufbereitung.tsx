import { createFileRoute } from "@tanstack/react-router";
import { LeistungLayout } from "@/components/site/LeistungLayout";
import wasserHero from "@/assets/wasseraufbereitung-hero.png";
import wasser2 from "@/assets/wasseraufbereitung-2.png";
import wasser3 from "@/assets/wasseraufbereitung-3.png";
import wasser4 from "@/assets/wasseraufbereitung-4.png";

export const Route = createFileRoute("/leistungen/wasseraufbereitung")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Wasseraufbereitung – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Reines Wasser für Ihr Zuhause – Beratung und physikalische Wasseraufbereitung von H-L-R.",
      },
      { property: "og:title", content: "Wasseraufbereitung – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content:
          "Reines Wasser für Ihr Zuhause – passende Lösungen für sauberes, weiches Wasser.",
      },
    ],
  }),
});

function Page() {
  return (
    <LeistungLayout
      title="Wasseraufbereitung"
      titleClassName="text-[2rem] sm:text-[2.25rem] md:text-[clamp(2.25rem,4.5vw,3.5rem)]"
      subtitle="Reines Wasser – für mehr Komfort in Ihrem Zuhause."
      ctaHeadline="Reines Wasser für Ihr Zuhause?"
      ctaSubline="Kostenlose Beratung zur Wasseraufbereitung – persönlich, unverbindlich und vom Meisterbetrieb."
      paragraphs={[
        "Eine durchdachte Wasseraufbereitung sorgt für gleichbleibend hohe Wasserqualität im gesamten Haushalt. Sauberes und weiches Wasser schützt nicht nur Ihre Leitungen und Haushaltsgeräte vor Ablagerungen, sondern trägt auch zu einem angenehmen Gefühl im täglichen Gebrauch bei – ob beim Duschen, Waschen oder Kochen.",
        "Individuell abgestimmte Lösungen helfen dabei, die Wasserbeschaffenheit optimal an Ihre Bedürfnisse anzupassen. So bleibt die Funktionalität Ihrer Installationen langfristig erhalten und der Pflegeaufwand wird reduziert.",
        "Wir beraten Sie umfassend und finden gemeinsam die passende Lösung für eine zuverlässige und nachhaltige Wasserqualität in Ihrem Zuhause.",
      ]}
      heroImage="/lovable-uploads/wasseraufbereitung-new.png"
      heroImageAlt="Klares Wasser läuft aus einem Wasserhahn in ein Glas"
      leistungenIntro="Von der Analyse bis zur Wartung – wir sorgen für sauberes, weiches Wasser im ganzen Haus."
      leistungen={[]}
      leistungenText="Wir installieren physikalische Wasseraufbereitungssysteme sowie Entkalkungsanlagen – abgestimmt auf Ihre Wasserbeschaffenheit und die Gegebenheiten in Ihrem Zuhause."
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
          alt: "Sauberes Wasser aus dem Wasserhahn",
        },
        {
          src: wasser2,
          alt: "Moderne Wasserenthärtungsanlage im Hausanschlussraum",
        },
        {
          src: wasser3,
          alt: "Hand füllt ein Glas mit klarem Wasser aus moderner Küchenarmatur",
        },
        {
          src: wasser4,
          alt: "Moderne Regendusche mit fließendem Wasser im Bad",
        },
      ]}
    />
  );
}
