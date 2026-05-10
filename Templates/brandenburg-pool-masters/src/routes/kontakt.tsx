import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — AquaMeister Brandenburg" },
      {
        name: "description",
        content:
          "Kostenlose Pool-Beratung in Brandenburg und Berlin. Rufen Sie uns an oder schreiben Sie uns — wir melden uns innerhalb von 24 Stunden.",
      },
      { property: "og:title", content: "Kontakt — AquaMeister Brandenburg" },
      { property: "og:description", content: "Beratung, Planung, Service — sprechen Sie mit uns." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container-pro grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Kontakt
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Sprechen<br />
              wir über<br />
              <span className="italic font-light text-muted-foreground">Ihren Pool.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
              Schreiben Sie uns oder rufen Sie direkt an. Wir vereinbaren gerne einen
              kostenlosen Vor-Ort-Termin in ganz Brandenburg und Berlin.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</div>
                  <a href="tel:+4933123456789" className="font-display text-lg font-semibold hover:text-accent">
                    +49 331 234 567 89
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">E-Mail</div>
                  <a href="mailto:hallo@aquameister-brandenburg.de" className="font-display text-lg font-semibold hover:text-accent">
                    hallo@aquameister-brandenburg.de
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Adresse</div>
                  <p className="font-display text-lg font-semibold">
                    Seestraße 12<br />
                    14467 Potsdam, Brandenburg
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 rounded-xl bg-gradient-water flex items-center justify-center text-white shadow-glow shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Öffnungszeiten</div>
                  <p className="font-display text-lg font-semibold">
                    Mo – Fr: 8:00 – 17:00<br />
                    <span className="text-sm font-normal text-muted-foreground">Sa nach Vereinbarung</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-deep">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="size-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Vielen Dank!</h3>
                <p className="mt-3 text-muted-foreground max-w-sm">
                  Ihre Nachricht ist angekommen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display text-2xl font-semibold mb-2">Anfrage stellen</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Vorname" name="firstname" required />
                  <Field label="Nachname" name="lastname" required />
                </div>
                <Field label="E-Mail" name="email" type="email" required />
                <Field label="Telefon" name="phone" type="tel" />
                <Field label="PLZ / Ort" name="city" />

                <div>
                  <label className="block text-sm font-medium mb-2">Projekttyp</label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Außenpool – Neubau</option>
                    <option>Innenpool / Schwimmhalle</option>
                    <option>Naturpool / Schwimmteich</option>
                    <option>Sanierung bestehender Pool</option>
                    <option>Wartung & Service</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ihre Nachricht</label>
                  <textarea
                    rows={5}
                    placeholder="Erzählen Sie uns von Ihrem Vorhaben…"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-water text-white px-6 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Anfrage senden <Send className="size-4" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
