import { createFileRoute } from "@tanstack/react-router";
import { DistrictPage } from "@/components/site/DistrictPage";

export const Route = createFileRoute("/bueroreinigung/friedrichshain")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Friedrichshain | PutzKraft24" },
      { name: "description", content: "Professionelle Büroreinigung in Berlin-Friedrichshain. Festes Stammteam, faire Preise — jetzt Angebot anfordern." },
    ],
  }),
  component: () => <DistrictPage name="Friedrichshain" />,
});
