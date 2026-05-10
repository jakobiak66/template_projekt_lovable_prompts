import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  intro: string;
}

const PlaceholderLeistung = ({ title, intro }: Props) => (
  <main className="min-h-screen bg-background">
    <Header />
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-16 bg-section-muted">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-light text-brand">{title}</h1>
        <p className="mt-6 text-lg text-brand-dark/75 leading-relaxed font-light">{intro}</p>
        <Button asChild size="lg" className="mt-8 bg-brand hover:bg-brand/90 text-brand-foreground rounded-sm px-8">
          <a href="/#kontakt">Jetzt kontaktieren</a>
        </Button>
        <p className="mt-10 text-sm text-brand-dark/50">Diese Seite wird in Kürze mit weiteren Inhalten gefüllt.</p>
      </div>
    </section>
    <Footer />
  </main>
);

export default PlaceholderLeistung;
