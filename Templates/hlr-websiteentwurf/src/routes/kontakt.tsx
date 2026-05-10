import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import hlrVanHero from "@/assets/hlr-van-hero.jpg";
import { ContactChannels, LocationSection } from "@/components/site/ContactSections";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Kontakt – H-L-R Heizung und Sanitär GmbH" },
      {
        name: "description",
        content:
          "Kontaktieren Sie H-L-R Heizung und Sanitär GmbH in Erkner: Adresse, Telefon, Fax, E-Mail und Öffnungszeiten.",
      },
      { property: "og:title", content: "Kontakt – H-L-R Heizung und Sanitär GmbH" },
      {
        property: "og:description",
        content: "So erreichen Sie uns in Erkner – telefonisch, per E-Mail oder direkt vor Ort.",
      },
    ],
  }),
});

function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Kontaktieren Sie uns"
          backgroundImage={hlrVanHero}
          backgroundAlt="H-L-R Heizung und Sanitär GmbH Servicefahrzeug am Waldsee"
          overlayOpacity={35}
        />
        <ContactChannels />
        <ContactForm />
        <LocationSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
