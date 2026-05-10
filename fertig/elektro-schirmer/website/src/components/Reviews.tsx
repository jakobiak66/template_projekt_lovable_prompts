import SectionTitle from "./SectionTitle";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import anna from "@/assets/review-anna.jpg";
import aaron from "@/assets/review-aaron.jpg";
import raoul from "@/assets/review-raoul.jpg";

const testimonials = [
  {
    quote:
      "Super netter Kontakt. Wir hatten ein sehr dringendes Anliegen und uns wurde glücklicherweise sehr schnell geholfen. Wir haben uns gut beraten gefühlt und es war alles zur vollsten Zufriedenheit!",
    name: "Anna R.*",
    designation: "Kundin aus Berlin",
    src: anna,
  },
  {
    quote:
      "Excellent service from this plumbing company. Herr Schwalm was quick to come and take care of the problem and did not leave until it was fully resolved. Very knowledgeable and competent.",
    name: "Aaron B.*",
    designation: "Customer",
    src: aaron,
  },
  {
    quote:
      "Top Sanitär-Betrieb! Freundlich, immer erreichbar und kompetent. Unsere Heizung wurde perfekt gewartet und bei einem mittelgroßen Strang-Problem wusste Herr Schwalm auch gleich Rat.",
    name: "Raoul L.*",
    designation: "Kunde aus Berlin",
    src: raoul,
  },
];

const Reviews = () => (
  <section className="py-20 px-6 bg-section-muted">
    <SectionTitle primary="Unser Stolz." secondary="Ihre Erfahrungen." />
    <p className="mt-4 text-center text-brand-dark/70 max-w-2xl mx-auto">
      Werfen Sie einen Blick auf über einhundert 5-Sterne-Bewertungen* bei Google und Co.
    </p>
    <div className="mt-10">
      <CircularTestimonials
        testimonials={testimonials}
        autoplay
        colors={{
          name: "hsl(var(--brand-dark))",
          designation: "hsl(var(--brand))",
          testimony: "hsl(var(--brand-dark) / 0.75)",
          arrowBackground: "hsl(var(--brand-dark))",
          arrowForeground: "hsl(var(--brand-foreground))",
          arrowHoverBackground: "hsl(var(--brand))",
        }}
      />
    </div>
  </section>
);

export default Reviews;
