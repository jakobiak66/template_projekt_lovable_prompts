import { useState } from "react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";
import kontaktHero from "@/assets/kontakt-hero.jpg";

const contactSchema = z.object({
  name: z.string().trim().max(100, "Name max. 100 Zeichen").optional(),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().trim().max(50, "Telefonnummer max. 50 Zeichen").optional(),
  message: z.string().trim().nonempty("Nachricht erforderlich").max(2000, "Nachricht max. 2000 Zeichen"),
  consent: z.literal(true, { errorMap: () => ({ message: "Bitte Einwilligung bestätigen" }) }),
});

const Kontakt = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
      consent,
    });
    if (!result.success) {
      toast({
        title: "Bitte Eingaben prüfen",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Nachricht gesendet", description: "Wir melden uns schnellstmöglich bei Ihnen." });
    (e.target as HTMLFormElement).reset();
    setConsent(false);
  };

  const scrollToForm = () => {
    document.getElementById("kontakt-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-brand">So erreichen Sie uns</h1>
          <p className="mt-4 max-w-2xl mx-auto text-brand-dark/70 leading-relaxed">
            Sie haben Interesse, eine Frage oder wünschen einen Termin? Rufen Sie uns direkt an, schreiben Sie uns eine E-Mail oder nutzen Sie gleich hier unser Kontaktformular.
          </p>
        </div>
        <div className="mt-10 max-w-6xl mx-auto">
          <img
            src={kontaktHero}
            alt="Drei Servicemitarbeiter am Schreibtisch mit Headsets"
            className="w-full h-auto"
            width={1920}
            height={640}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={scrollToForm}
            aria-label="Zum Kontaktformular scrollen"
            className="text-brand-dark/50 hover:text-brand transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Kontaktdaten */}
      <ContactInfo variant="brand" />

      {/* Formular */}
      <section id="kontakt-form" className="bg-brand pb-24 px-6 -mt-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-brand">Schreiben Sie uns</h2>
            <p className="mt-2 text-sm text-brand-dark/60">Wir antworten in der Regel innerhalb eines Werktages.</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">Name</label>
                <Input id="name" name="name" maxLength={100} placeholder="Max Mustermann" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">Telefonnummer</label>
                <Input id="phone" name="phone" type="tel" maxLength={50} placeholder="(030) 123 456" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">
                E-Mail-Adresse <span className="text-brand">*</span>
              </label>
              <Input id="email" name="email" type="email" required maxLength={255} placeholder="ihre@email.de" className="rounded-md h-12 border-brand-dark/15 focus-visible:ring-brand" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-brand-dark/70 mb-2">
                Nachricht <span className="text-brand">*</span>
              </label>
              <Textarea id="message" name="message" required maxLength={2000} rows={6} placeholder="Wie können wir Ihnen helfen?" className="rounded-md border-brand-dark/15 focus-visible:ring-brand resize-none" />
            </div>
            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
                className="mt-0.5 border-brand-dark/30 data-[state=checked]:bg-brand data-[state=checked]:border-brand data-[state=checked]:text-brand-foreground"
              />
              <label htmlFor="consent" className="text-xs text-brand-dark/70 leading-relaxed cursor-pointer">
                Ich stimme zu, dass meine Daten zur Bearbeitung der Anfrage verarbeitet werden. Die Einwilligung kann ich jederzeit widerrufen. Es gilt unsere <a href="#" className="text-brand underline hover:no-underline">Datenschutzerklärung</a>.
              </label>
            </div>
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-brand hover:bg-brand/90 text-brand-foreground rounded-md px-12 h-12 shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 transition-all"
              >
                Nachricht abschicken
              </Button>
            </div>
          </form>
        </div>
      </section>




      <Footer />
    </main>
  );
};

export default Kontakt;
