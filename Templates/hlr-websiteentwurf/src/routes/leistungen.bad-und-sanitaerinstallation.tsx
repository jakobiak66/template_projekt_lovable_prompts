import { createFileRoute } from "@tanstack/react-router";
import { LeistungLayout } from "@/components/site/LeistungLayout";
import badHero from "@/assets/badsanierung-hero.png";
import badRohinstallation from "@/assets/badsanierung-rohinstallation.png";
import badDusche from "@/assets/badsanierung-dusche.png";
import badFliesen from "@/assets/badsanierung-fliesen.png";
import badBadewanne from "@/assets/badsanierung-badewanne.png";

export const Route = createFileRoute("/leistungen/bad-und-sanitaerinstallation")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Bad- und Sanitärinstallation – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Vom Wasserhahn bis zum Komplettbad: Planung und Installation hochwertiger Sanitärtechnik.",
      },
      {
        property: "og:title",
        content: "Bad- und Sanitärinstallation – H-L-R Heizung und Sanitär GmbH",
      },
      {
        property: "og:description",
        content: "Vom Wasserhahn bis zum Komplettbad – Sanitärtechnik aus einer Hand.",
      },
    ],
  }),
});

function Page() {
  return (
    <LeistungLayout
      title="Bad- und Sanitärinstallation"
      subtitle="Ihr Bad – ein Ort der Entspannung."
      ctaHeadline="Bereit für Ihr neues Traumbad?"
      ctaSubline="Kostenlose Vor-Ort-Beratung in Erkner – persönlich, unverbindlich und vom Meisterbetrieb."
      paragraphs={[
        "Das Bad ist heute für viele Menschen mehr als nur ein funktionaler Raum. Es ist ein Ort der Entspannung und Erholung im eigenen Zuhause. Diesem Anspruch tragen wir mit einem umfangreichen Angebot an Produkten und Leistungen im Bereich Bad und Sanitär Rechnung.",
        "Wer in die Jahre gekommene Fliesen, tropfende Armaturen oder beengte Verhältnisse vorfindet, verschenkt täglich ein Stück Lebensqualität. Dabei muss das nicht so bleiben – denn ein neues Bad verändert mehr als nur die Optik. Es verändert das Gefühl, nach Hause zu kommen. Wir helfen Ihnen, genau das zu erreichen – mit handwerklicher Erfahrung, einem guten Gespür für Gestaltung und dem Anspruch, jedes Projekt so umzusetzen, als wäre es unser eigenes.",
      ]}
      heroImage={badHero}
      heroImageAlt="Modernes Badezimmer mit ebenerdiger Dusche und Holz-Waschtisch"
      leistungenIntro="Von der Planung bis zur Umsetzung – wir realisieren Ihr Traumbad und alle sanitären Arbeiten zuverlässig aus einer Hand."
      leistungenText={[
        "Mit handwerklicher Sorgfalt und technischem Know-how begleiten wir jedes Badprojekt von der ersten Idee bis zur Fertigstellung. Wir realisieren Komplettbäder, sanieren bestehende Nassräume und installieren Duschen, Duschkabinen, Badewannen sowie Whirlpools.",
        "Toiletten und Sanitäranlagen bauen wir fachgerecht ein, erneuern Rohrleitungen und beraten Sie bei der Materialauswahl – damit Ihr Bad nicht nur schön aussieht, sondern dauerhaft zuverlässig funktioniert.",
      ]}
      leistungen={[]}
      gallery={[
        {
          src: badRohinstallation,
          alt: "Monteur installiert Vorwandinstallation mit Geberit-Spülkasten und Kupferrohren",
        },
        {
          src: badDusche,
          alt: "Modernes Badezimmer mit ebenerdiger Glasdusche nach Sanierung",
        },
        {
          src: badBadewanne,
          alt: "Freistehende Badewanne in modernem Bad mit Fensterfront",
        },
        {
          src: badFliesen,
          alt: "Persönliche Beratung zur Fliesenauswahl im Showroom",
        },
      ]}
    />
  );
}
