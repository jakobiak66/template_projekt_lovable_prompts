import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Promise } from "@/components/site/Promise";
import { Stats } from "@/components/site/Stats";
import { Configurator } from "@/components/site/Configurator";
import { Steps } from "@/components/site/Steps";
import { Digital } from "@/components/site/Digital";
import { Services } from "@/components/site/Services";
import { ProjectCTA } from "@/components/site/ProjectCTA";
import { FAQ } from "@/components/site/FAQ";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Promise />
        <Stats />
        <Configurator />
        <Steps />
        <Digital />
        <Services />
        <ProjectCTA />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
