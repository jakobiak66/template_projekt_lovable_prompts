import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Ermittlung } from "@/components/site/Ermittlung";
import { Expertise } from "@/components/site/Expertise";
import { Process } from "@/components/site/Process";
import { Goals } from "@/components/site/Goals";
import { Testimonials } from "@/components/site/Testimonials";
import { Awards } from "@/components/site/Awards";
import { FaqContact } from "@/components/site/FaqContact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benjamin C. Wenzel — Fachanwalt für Strafrecht in Berlin" },
      { name: "description", content: "Fachanwalt für Strafrecht in Berlin am Kurfürstendamm. Konsequente Verteidigung bei Hausdurchsuchung, Vorladung und Beschlagnahme." },
      { property: "og:title", content: "Fachanwalt für Strafrecht in Berlin" },
      { property: "og:description", content: "Strafverteidigung mit über 15 Jahren Erfahrung am Kurfürstendamm." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Ermittlung />
      <Expertise />
      <Process />
      <Goals />
      <Testimonials />
      <Awards />
      <FaqContact />
      <Footer />
    </main>
  );
}
