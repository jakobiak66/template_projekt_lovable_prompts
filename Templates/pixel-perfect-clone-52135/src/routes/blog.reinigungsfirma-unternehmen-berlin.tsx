import { createFileRoute } from "@tanstack/react-router";
import { BlogArticle } from "@/components/site/BlogArticle";

export const Route = createFileRoute("/blog/reinigungsfirma-unternehmen-berlin")({
  head: () => ({
    meta: [
      { title: "Reinigungsfirma für Unternehmen Berlin: Auswahl, Preise & Verträge — PutzKraft24" },
      {
        name: "description",
        content:
          "Wie Berliner Unternehmen die richtige Reinigungsfirma finden — Auswahlkriterien, Preise und worauf bei Verträgen zu achten ist.",
      },
    ],
  }),
  component: () => (
    <BlogArticle
      heroFullViewport
      breadcrumb="Reinigungsfirma Berlin"
      titleLines={[
        "Reinigungsfirma für",
        "Unternehmen Berlin:",
        "Auswahl, Preise & Verträge",
      ]}
      heroImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Modernes Berliner Büro"
      summary="Die richtige Reinigungsfirma zu finden ist für Berliner Unternehmen entscheidend — sie prägt den Eindruck bei Mitarbeitern und Kunden gleichermaßen. Diese Übersicht zeigt, worauf Sie bei Auswahl, Preisen und Verträgen achten sollten."
      sections={[
        {
          heading: "Auswahlkriterien — was wirklich zählt",
          bullets: [
            { k: "Erfahrung mit Gewerbe: ", v: "nicht jede Firma ist auf Bürobetrieb spezialisiert." },
            { k: "Eigenes Personal: ", v: "keine Subunternehmer-Ketten — sorgt für Qualität und Verbindlichkeit." },
            { k: "Festes Team: ", v: "dieselben Reinigungskräfte kennen Ihre Räume." },
            { k: "Erreichbarkeit: ", v: "fester Ansprechpartner mit Reaktionszeit < 24 h." },
            { k: "Versicherung: ", v: "Haftpflicht für Sach- und Personenschäden." },
          ],
        },
        {
          heading: "Preisgestaltung in Berlin",
          intro:
            "Die Preisspanne in Berlin ist breit — billig ist selten gut, teuer nicht automatisch besser. Faire Marktpreise:",
          bullets: [
            { k: "Stundensatz: ", v: "22–32 € netto." },
            { k: "Festpreis pro Reinigung: ", v: "ab 45 € für kleine Büros." },
            { k: "Glasreinigung: ", v: "1,50–3 € pro m² Innenseite." },
            { k: "Sonderleistungen: ", v: "Polster, Teppich, Bauendreinigung nach Aufwand." },
          ],
        },
        {
          heading: "Worauf bei Verträgen achten",
          subsections: [
            {
              heading: "1. Leistungsverzeichnis",
              text: "Detaillierte Auflistung pro Bereich — was wird wie oft gemacht? Vermeidet Streit im Tagesgeschäft.",
            },
            {
              heading: "2. Kündigungsfristen",
              text: "Idealerweise 4 Wochen zum Monatsende. Lange Bindungen ohne Probezeit sind ein Warnsignal.",
            },
            {
              heading: "3. Preisanpassung",
              text: "Klare Regeln zu Anpassungen — z. B. einmal pro Jahr nach Tariflohn-Entwicklung.",
            },
            {
              heading: "4. Qualitätskontrolle",
              text: "Regelmäßige gemeinsame Begehungen mit dokumentiertem Protokoll.",
            },
          ],
        },
      ]}
      faqs={[
        {
          q: "Wie viele Angebote sollte ich einholen?",
          a: "Mindestens 3 Angebote — auf vergleichbarer Leistungsbasis, sonst sind Preise nicht aussagekräftig.",
        },
        {
          q: "Was ist eine faire Vertragslaufzeit?",
          a: "12 Monate mit 4 Wochen Kündigungsfrist und 30 Tagen Probezeit ist marktüblich.",
        },
        {
          q: "Brauche ich eine Reinigungsfirma mit Tarifbindung?",
          a: "Empfohlen — sichert faire Bezahlung der Reinigungskräfte und somit stabile Qualität.",
        },
      ]}
      ctaText="Sie suchen eine zuverlässige Reinigungsfirma für Ihr Berliner Unternehmen? Wir erstellen Ihnen ein passgenaues Angebot — transparent, fair, mit Probezeit."
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
