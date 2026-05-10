import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { LogoBar } from "@/components/site/LogoBar";
import { Problems } from "@/components/site/Problems";
import { Challenge } from "@/components/site/Challenge";
import { VideoSection } from "@/components/site/VideoSection";
import { Reviews } from "@/components/site/Reviews";
import { Promise as PromiseSection } from "@/components/site/Promise";
import { Services } from "@/components/site/Services";
import { Steps } from "@/components/site/Steps";
import { Districts } from "@/components/site/Districts";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Büroreinigung Berlin – PutzKraft24 | Ihr B2B-Spezialist" },
      { name: "description", content: "Zuverlässige Büroreinigung in Berlin. Festes Stammteam, transparente Preise, geprüft & versichert. Jetzt kostenloses Angebot anfordern." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Problems />
        <Challenge />
        <VideoSection />
        <Reviews />
        <PromiseSection />
        <Services />
        <Steps />
        <Districts />
        <FAQ />
        <CTASection />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
