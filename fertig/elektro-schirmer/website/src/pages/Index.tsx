import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Werte from "@/components/Werte";
import Beratung from "@/components/Beratung";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/CtaBanner";
import Leistungen from "@/components/Leistungen";
import Partner from "@/components/Partner";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import badImg from "@/assets/bad-cta.jpg";
import smartImg from "@/assets/smart-heizung.jpg";
import kalkImg from "@/assets/kalk-cta.jpg";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Werte />
    <Beratung />
    <Reviews />
    <CtaBanner image={badImg} title="Lust auf ein entspannendes Bad?" alt="Modernes entspannendes Bad" />
    <Leistungen />
    <CtaBanner image={smartImg} title="Lust auf eine smarte Heizung?" alt="Smart-Heizungs-App auf Smartphone" />
    <Partner />
    <CtaBanner image={kalkImg} title="Lust auf weniger Kalk?" alt="Wasserenthärtungsanlage" />
    <Kontakt />
    <Footer />
  </main>
);

export default Index;
