import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import { LeistungSection } from "@/components/site/LeistungSection";

type Feature = { title: string; desc: string };

type Props = {
  title: ReactNode;
  paragraphs: string[];
  features: Feature[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  variant?: "light" | "brand";
};

export function LeistungDetailPage({
  title,
  paragraphs,
  features,
  image,
  imageAlt,
  imagePosition = "right",
  variant = "light",
}: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LeistungSection
          title={title}
          paragraphs={paragraphs}
          features={features}
          image={image}
          imageAlt={imageAlt}
          imagePosition={imagePosition}
          variant={variant}
        />

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
