import { useState } from "react";
import { z } from "zod";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import consultant from "@/assets/consultant.jpg";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name erforderlich").max(100),
  email: z.string().trim().email("Ungültige E-Mail").max(255),
  phone: z.string().trim().min(4, "Telefonnummer erforderlich").max(40),
  message: z.string().trim().max(1000).optional(),
});

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = contactSchema.safeParse(form);
    if (!res.success) {
      toast({ title: "Bitte prüfen", description: res.error.errors[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Nachricht gesendet", description: "Wir melden uns in Kürze bei dir." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="kontakt" className="container py-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary text-primary-dark text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Online Buchung
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-dark italic mb-4">
              Jetzt dein kostenloses telefonisches Beratungsgespräch sichern!
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Hast Du Fragen oder möchtest direkt loslegen? Wähle einfach einen passenden Termin in unserem Buchungstool aus,
              und unser Team steht bereit, um Deine Anliegen zu besprechen und Dich bei Deinem Projekt zu unterstützen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 bg-surface-soft rounded-3xl p-6 sm:p-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name*</label>
                <Input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                  className="bg-card h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">E-Mail*</label>
                <Input
                  type="email"
                  placeholder="E-Mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                  className="bg-card h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Telefonnummer*</label>
                <Input
                  type="tel"
                  placeholder="Telefonnummer"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  maxLength={40}
                  className="bg-card h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nachricht</label>
                <Textarea
                  placeholder="Nachricht"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="bg-card min-h-[140px]"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Senden
              </Button>
            </form>

            {/* Contact card */}
            <div className="flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-card shadow-card">
                <img
                  src={consultant}
                  alt="Vanessa Thiele — Ansprechpartnerin"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="p-6 space-y-4">
                  <div>
                    <div className="font-bold text-primary-dark text-lg">Vanessa Thiele</div>
                    <div className="text-sm text-muted-foreground">Deine Ansprechpartnerin</div>
                  </div>
                  <div className="border-t border-border pt-4 space-y-3 text-sm">
                    <a href="tel:+4903030808054" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth">
                      <span className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                        <Phone className="h-4 w-4 text-primary" />
                      </span>
                      030 30808054
                    </a>
                    <a href="mailto:anfrage@go-clara.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth">
                      <span className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                        <Mail className="h-4 w-4 text-primary" />
                      </span>
                      anfrage@go-clara.com
                    </a>
                    <div className="flex items-center gap-3 text-foreground">
                      <span className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </span>
                      Tätig in ganz Berlin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="container pb-20">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <iframe
              title="Standort Berlin"
              src="https://www.google.com/maps?q=Berlin&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0 block"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
