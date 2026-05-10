import { createFileRoute } from "@tanstack/react-router";
import { DistrictPage } from "@/components/site/DistrictPage";

export const Route = createFileRoute("/bueroreinigung/kreuzberg")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Kreuzberg | PutzKraft24" },
      { name: "description", content: "Professionelle Büroreinigung in Berlin-Kreuzberg. Festes Stammteam, faire Preise — jetzt Angebot anfordern." },
    ],
  }),
  component: () => <DistrictPage name="Kreuzberg" />,
});
