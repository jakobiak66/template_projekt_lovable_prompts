import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionTitle from "./SectionTitle";
import { useToast } from "@/hooks/use-toast";

const items = [
  {
    Icon: Phone,
    label: "030 818 20 417",
    href: "tel:03081820417",
    text: "Montag bis Donnerstag: 8 bis 16 Uhr. Freitag: 8 bis 14 Uhr.",
  },
  {
    Icon: Mail,
    label: "info@schwalm-berlin.de",
    href: "mailto:info@schwalm-berlin.de",
    text: "Schreiben Sie uns eine E-Mail oder nutzen Sie unten unser Kontaktformular.",
  },
  {
    Icon: MapPin,
    label: "Stindestraße 18, 12167 Berlin",
    href: "https://maps.google.com/?q=Stindestraße+18+12167+Berlin",
    text: "Besuche nur nach vorheriger Terminvereinbarung.",
  },
];

const Kontakt = () => {
  const { toast } = useToast();
  return (
    <section id="kontakt" className="py-20 px-6">
      <SectionTitle primary="Unsere Erreichbarkeit." secondary="Ihr Weg zu uns." />
      <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map(({ Icon, label, href, text }) => (
          <div key={label} className="text-center">
            <div className="w-24 h-24 rounded-full bg-brand mx-auto flex items-center justify-center">
              <Icon size={40} className="text-brand-foreground" strokeWidth={1.5} />
            </div>
            <a href={href} className="mt-6 block text-lg font-medium text-brand hover:underline">{label}</a>
            <p className="mt-2 text-brand-dark/70 max-w-xs mx-auto text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-brand-dark/5">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-light text-brand">Schreiben Sie uns</h3>
          <p className="mt-2 text-sm text-brand-dark/60">Wir antworten in der Regel innerhalb eines Werktages.</p>
        </div>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            toast({ title: "Nachricht gesendet", description: "Wir melden uns schnellstmöglich bei Ihnen." });
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="home-name" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">Name</label>
              <Input id="home-name" required placeholder="Max Mustermann" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
            </div>
            <div>
              <label htmlFor="home-email" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">
                E-Mail <span className="text-brand">*</span>
              </label>
              <Input id="home-email" required type="email" placeholder="ihre@email.de" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
            </div>
          </div>
          <div>
            <label htmlFor="home-subject" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">Betreff</label>
            <Input id="home-subject" placeholder="Worum geht es?" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
          </div>
          <div>
            <label htmlFor="home-message" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">
              Nachricht <span className="text-brand">*</span>
            </label>
            <Textarea id="home-message" required placeholder="Wie können wir Ihnen helfen?" rows={6} className="rounded-md border-brand-dark/15 focus-visible:ring-brand resize-none" />
          </div>
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground rounded-md px-12 h-12 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 transition-all"
            >
              Nachricht senden
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
