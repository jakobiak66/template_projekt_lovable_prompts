import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

export const Route = createFileRoute("/blog/reinigungsmythen-entlarvt")({
  head: () => ({
    meta: [
      { title: "Reinigungsmythen entlarvt — PutzKraft24" },
      {
        name: "description",
        content:
          "Die häufigsten Mythen rund um Büro- und Gebäudereinigung — und was wirklich stimmt.",
      },
    ],
  }),
  component: () => (
    <BlogArticle
      heroFullViewport
      breadcrumb="Reinigungsmythen"
      titleLines={["Reinigungsmythen", "entlarvt"]}
      heroImage="https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Reinigungsmittel und Utensilien"
      summary="Rund um Büroreinigung kursieren viele Mythen — von „mehr Reinigungsmittel = sauberer“ bis zu „Mikrofasertücher sind immer besser“. Wir räumen mit den hartnäckigsten Irrtümern auf."
      sections={[
        {
          heading: "Die 5 hartnäckigsten Mythen",
          bullets: [
            { k: "Mythos 1 — Viel Reinigungsmittel hilft viel: ", v: "Falsch. Überdosierung hinterlässt Rückstände, die Schmutz binden." },
            { k: "Mythos 2 — Heißes Wasser reinigt besser: ", v: "Nicht immer. Kaltes Wasser schont Materialien und reicht für die meisten Aufgaben." },
            { k: "Mythos 3 — Essig ist immer ein Wundermittel: ", v: "Bei Naturstein und empfindlichen Oberflächen schädlich." },
            { k: "Mythos 4 — Mikrofaser ist immer überlegen: ", v: "Auf empfindlichen Hochglanz-Oberflächen kann sie Mikrokratzer verursachen." },
            { k: "Mythos 5 — Tägliche Reinigung ist immer nötig: ", v: "Frequenz richtet sich nach Nutzung — nicht nach Gewohnheit." },
          ],
        },
        {
          heading: "Was Profis anders machen",
          intro:
            "Professionelle Reinigungskräfte arbeiten nach klaren Standards, die viele dieser Mythen widerlegen:",
          bullets: [
            { k: "Dosierhilfen: ", v: "exakte Mengen statt „nach Gefühl“." },
            { k: "Materialgerechte Tücher: ", v: "Farbcode für Sanitär, Küche, Büro." },
            { k: "Mechanik vor Chemie: ", v: "richtige Wischtechnik schlägt aggressive Reiniger." },
            { k: "Trocknung: ", v: "feuchte Flächen ziehen Staub an — gründlich nachtrocknen." },
          ],
        },
      ]}
      faqs={[
        {
          q: "Sind Hausmittel besser als Profi-Reiniger?",
          a: "Für leichte Verschmutzungen oft ausreichend, aber bei großen Flächen und Hygieneanforderungen sind Profi-Mittel effizienter.",
        },
        {
          q: "Ist Desinfektion immer notwendig?",
          a: "Nein — nur in Sanitär, Küche und auf Kontaktflächen. Übermäßige Desinfektion kann sogar schaden.",
        },
        {
          q: "Warum riecht es nach der Reinigung manchmal nicht „sauber“?",
          a: "Sauber muss nicht riechen. Stark parfümierte Reiniger sind oft nur Marketing.",
        },
      ]}
      ctaText="Sie möchten Reinigung nach Profistandard — ohne Mythen, ohne Überdosierung? Lassen Sie sich kostenlos beraten."
      related={[
        {
          to: "/blog/buero-reinigungs-frequenz",
          title: "Wie oft sollte ein Büro gereinigt werden? Frequenz-Guide 2026",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          to: "/blog/kosten-bueroreinigung-berlin",
          title: "Was kostet Büroreinigung in Berlin? Stundensatz & Festpreis",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          to: "/blog/reinigungsfirma-wechseln",
          title: "Reinigungsfirma wechseln: So gelingt der Wechsel ohne Stress",
          image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
        },
      ]}
    />
  ),
});
