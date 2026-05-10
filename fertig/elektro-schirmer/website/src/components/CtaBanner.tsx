import { Button } from "@/components/ui/button";

interface Props {
  image: string;
  title: string;
  alt: string;
}

const CtaBanner = ({ image, title, alt }: Props) => (
  <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
    <img src={image} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-light text-white drop-shadow-md">{title}</h2>
      <Button asChild size="lg" className="mt-6 bg-white text-brand hover:bg-white/90 rounded-sm">
        <a href="#kontakt">Jetzt beraten lassen</a>
      </Button>
    </div>
  </section>
);

export default CtaBanner;
