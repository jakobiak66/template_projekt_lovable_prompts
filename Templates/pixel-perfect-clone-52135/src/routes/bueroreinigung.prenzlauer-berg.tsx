import { createFileRoute } from "@tanstack/react-router";
import { DistrictPage } from "@/components/site/DistrictPage";

export const Route = createFileRoute("/bueroreinigung/prenzlauer-berg")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Prenzlauer Berg | PutzKraft24" },
      { name: "description", content: "Professionelle Büroreinigung in Berlin-Prenzlauer Berg. Festes Stammteam, faire Preise — jetzt Angebot anfordern." },
    ],
  }),
  component: () => <DistrictPage name="Prenzlauer Berg" />,
});
