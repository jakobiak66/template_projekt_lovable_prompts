import { createFileRoute } from "@tanstack/react-router";
import { DistrictPage } from "@/components/site/DistrictPage";

export const Route = createFileRoute("/bueroreinigung/schoeneberg")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Schöneberg | PutzKraft24" },
      { name: "description", content: "Professionelle Büroreinigung in Berlin-Schöneberg. Festes Stammteam, faire Preise — jetzt Angebot anfordern." },
    ],
  }),
  component: () => <DistrictPage name="Schöneberg" />,
});
