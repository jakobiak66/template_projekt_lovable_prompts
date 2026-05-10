import { createFileRoute } from "@tanstack/react-router";
import { DistrictPage } from "@/components/site/DistrictPage";

export const Route = createFileRoute("/bueroreinigung/charlottenburg")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Charlottenburg | PutzKraft24" },
      { name: "description", content: "Professionelle Büroreinigung in Berlin-Charlottenburg. Festes Stammteam, faire Preise — jetzt Angebot anfordern." },
    ],
  }),
  component: () => <DistrictPage name="Charlottenburg" />,
});
