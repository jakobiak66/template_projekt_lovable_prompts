import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Benjamin C. Wenzel · Fachanwalt für Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Kontakt zur Strafrechtskanzlei Wenzel am Kurfürstendamm in Berlin. Telefon, E-Mail und Rückrufanfrage — diskret und unverbindlich.",
      },
      { property: "og:title", content: "Kontakt — Kanzlei Wenzel Berlin" },
      {
        property: "og:description",
        content:
          "Kontaktaufnahme zur Strafrechtskanzlei Wenzel am Kurfürstendamm 216 in Berlin.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-navy text-navy-foreground pt-36 lg:pt-44 pb-20 lg:pb-28">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-8">
            Strafrechtskanzlei am Kurfürstendamm
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            Kontakt
            <br />
            <span className="italic text-blue-accent">aufnehmen.</span>
          </h1>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-navy-foreground/65">
            Als Fachanwalt für Strafrecht in Berlin stehe ich Ihnen bei strafrechtlichen
            Vorwürfen und Ermittlungsverfahren zur Seite. In dringenden Fällen empfiehlt
            sich eine telefonische Kontaktaufnahme.
          </p>
        </div>
      </section>

      {/* Breadcrumb bar */}
      <div className="bg-[oklch(0.18_0.025_255)] text-navy-foreground/65 text-[0.7rem] tracking-[0.2em] uppercase">
        <div className="container-x py-4">
          <Link to="/" className="hover:text-navy-foreground transition">Startseite</Link>
          <span className="mx-3 opacity-40">/</span>
          <span>Kontakt — Fachanwalt Strafrecht Berlin (Wenzel)</span>
        </div>
      </div>

      {/* Emergency bar */}
      <div className="bg-navy text-navy-foreground border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <p className="flex items-center gap-3 text-navy-foreground/75">
            <span className="size-1.5 rounded-full bg-blue-accent inline-block" />
            Bei akuten Situationen — Hausdurchsuchung, Vorladung, Festnahme — rufen Sie
            bitte sofort an.
          </p>
          <a
            href="tel:+4930120593430"
            className="font-medium hover:text-blue-accent transition whitespace-nowrap"
          >
            030 120 593 430
          </a>
        </div>
      </div>

      {/* Contact body */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <p className="eyebrow mb-10">Direkt-Kontakt</p>

            <Block label="Telefon">
              <p className="font-serif text-3xl md:text-4xl tracking-tight">
                030 120 593 430
              </p>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                Bei akuten Situationen — etwa Hausdurchsuchung oder Vorladung — rufen Sie
                bitte direkt an.
              </p>
            </Block>

            <Block label="E-Mail">
              <a
                href="mailto:info@anwalt-wenzel.com"
                className="text-base hover:text-blue-accent transition"
              >
                info@anwalt-wenzel.com
              </a>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed max-w-md">
                Sie können Ihr Anliegen kurz schildern. Bitte beachten Sie, dass eine
                rechtliche Einschätzung regelmäßig erst nach Akteneinsicht möglich ist.
              </p>
            </Block>

            <Block label="Öffnungszeiten">
              <p className="text-base">Termine nach Vereinbarung.</p>
              <p className="mt-3 text-sm text-foreground/65 leading-relaxed max-w-md">
                In dringenden Fällen bemühen wir uns um kurzfristige Termin­vergabe.
              </p>
            </Block>

            {/* Confidentiality note */}
            <div className="mt-10 max-w-md mx-auto rounded-2xl border border-border bg-secondary/40 px-6 py-5">
              <p className="text-sm leading-relaxed text-foreground/75 flex gap-3">
                <span className="block w-5 h-px bg-foreground/40 mt-2.5 shrink-0" />
                <span>
                  Alle Anfragen werden{" "}
                  <strong className="font-semibold text-foreground">
                    streng vertraulich
                  </strong>{" "}
                  behandelt. Als Strafverteidiger unterliege ich der anwaltlichen
                  Verschwiegenheitspflicht.
                </span>
              </p>
            </div>

            {/* Callback card */}
            <div className="mt-10 max-w-md mx-auto rounded-2xl bg-card border border-border p-7 shadow-sm">
              <p className="eyebrow mb-5">Lieber kurz anrufen?</p>
              <h3 className="font-serif text-3xl leading-tight">
                Lieber direkt eine
                <br />
                Rücksprache
                <br />
                anfragen?
              </h3>
              <p className="mt-5 text-sm text-foreground/65 leading-relaxed">
                Wenn Sie zunächst nur einen Terminwunsch senden möchten, können Sie dies
                ohne vollständige Fallaufnahme tun. Alternativ können Sie Ihren Fall
                zuerst digital schildern.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+4930120593430"
                  className="inline-flex items-center rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm hover:opacity-90 transition"
                >
                  Direkt Termin anfragen
                </a>
                <a
                  href="#formular"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition"
                >
                  Fall digital schildern
                </a>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div id="formular">
            <p className="eyebrow mb-10">Kontaktformular</p>

            <form className="rounded-2xl bg-secondary/50 border border-border p-7 lg:p-9 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name *" placeholder="Ihr Name" />
                <Field label="Rückrufnummer" placeholder="Ihre Telefonnummer" type="tel" />
              </div>

              <div>
                <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
                  Kurze Beschreibung des Sachverhalts
                </label>
                <textarea
                  rows={4}
                  placeholder="Schildern Sie kurz Ihre Situation — alle Angaben werden streng vertraulich behandelt."
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition resize-none"
                />
              </div>

              <div>
                <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
                  Frist oder Termin
                </label>
                <input
                  type="text"
                  placeholder="z. B. Vorladungstermin am …"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition"
              >
                Nachricht senden
              </button>

              <label className="flex gap-3 text-xs text-foreground/65 leading-relaxed">
                <input type="checkbox" className="mt-0.5 accent-navy" />
                <span>
                  Ich habe die{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-foreground">
                    Datenschutzhinweise
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme
                  zu. Die Einwilligung kann ich jederzeit mit Wirkung für die Zukunft
                  widerrufen.
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>

      {/* Address + Map */}
      <section className="bg-navy text-navy-foreground pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="container-x">
          <p className="eyebrow text-navy-foreground/55 mb-10">Anfahrt — Berlin</p>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Kurfürstendamm
                <br />
                <span className="italic text-blue-accent">216, Berlin.</span>
              </h2>

              <dl className="mt-12 divide-y divide-white/10 border-y border-white/10">
                <Row label="Adresse" value="Kurfürstendamm 216, 10719 Berlin" />
                <Row label="U-Bahn" value="Adenauerplatz · Uhlandstraße" />
                <Row label="Bus" value="Buslinien entlang des Kurfürstendamms" />
                <Row label="Parken" value="Parkmöglichkeiten in der Umgebung" />
              </dl>

              <p className="mt-8 text-xs text-navy-foreground/55 max-w-md">
                Eine individuelle Anfahrtsbeschreibung erhalten Sie auf Wunsch.
              </p>
              <a
                href="https://maps.google.com/?q=Kurfürstendamm+216,+10719+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-blue-accent hover:opacity-80 transition"
              >
                In Google Maps öffnen <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-white/5">
              <iframe
                title="Kanzlei Standort Karte"
                src="https://www.google.com/maps?q=Kurf%C3%BCrstendamm+216,+10719+Berlin&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Signature row */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-serif text-2xl">Benjamin C. Wenzel</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/55">
                Fachanwalt für Strafrecht · Berlin
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+4930120593430"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-navy px-6 py-3 text-sm hover:bg-white transition"
              >
                <Phone className="size-4" /> 030 120 593 430
              </a>
              <a
                href="mailto:info@anwalt-wenzel.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm hover:bg-white/10 transition"
              >
                <Mail className="size-4" /> E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <p className="text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-4">
        {label}
      </p>
      {children}
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/55 mb-2.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-6 py-5 text-sm">
      <dt className="text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/55">
        {label}
      </dt>
      <dd className="text-navy-foreground/85">{value}</dd>
    </div>
  );
}
