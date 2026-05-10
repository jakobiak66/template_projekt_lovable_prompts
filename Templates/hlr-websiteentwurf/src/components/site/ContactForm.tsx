import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Anfrage von ${name}`;
    const body = [
      `Name: ${name}`,
      phone ? `Telefon: ${phone}` : null,
      `E-Mail: ${email}`,
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hlr-gmbh@ewetel.net?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="kontaktformular" className="bg-background pt-4 pb-16 md:pt-6 md:pb-20 scroll-mt-24">
      <div className="container-page max-w-4xl">
        <h2 className="text-ink">Sprechen wir über Ihr Vorhaben</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Wir freuen uns auf Ihre Anfrage. Beratung und unverbindliches
          Festpreisangebot selbstverständlich.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-background border border-border rounded-xl shadow-card p-6 md:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-name" className="block text-sm font-extrabold text-ink">
                Name <span className="text-brand">*</span>
              </label>
              <input
                id="cf-name"
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ihr Name"
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label htmlFor="cf-phone" className="block text-sm font-extrabold text-ink">
                Telefon
              </label>
              <input
                id="cf-phone"
                type="tel"
                maxLength={40}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="optional"
                className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cf-email" className="block text-sm font-extrabold text-ink">
              E-Mail <span className="text-brand">*</span>
            </label>
            <input
              id="cf-email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre@email.de"
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div>
            <label htmlFor="cf-message" className="block text-sm font-extrabold text-ink">
              Nachricht <span className="text-brand">*</span>
            </label>
            <textarea
              id="cf-message"
              required
              maxLength={2000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground font-semibold text-base px-5 py-3.5 rounded-md transition-colors"
          >
            Nachricht senden <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
