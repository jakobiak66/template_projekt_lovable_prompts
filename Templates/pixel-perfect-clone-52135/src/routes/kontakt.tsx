import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Büroreinigung Berlin anfragen | PutzKraft24" },
      {
        name: "description",
        content:
          "Kostenlosen Büro-Check anfordern: Lassen Sie sich unverbindlich beraten und erhalten Sie ein faires Festpreisangebot innerhalb von 48 Stunden.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [consent, setConsent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-background py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div
            className="overflow-hidden rounded-3xl px-6 py-12 md:px-12 md:py-16 lg:px-16"
            style={{ backgroundColor: "#1f4d3f" }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
              {/* Left: Heading + contact details */}
              <div className="text-white">
                <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                  Büroreinigung Berlin anfragen — Kostenlosen Büro-Check vereinbaren
                </h1>

                <ul className="mt-12 space-y-7 text-base">
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-5 w-5" />
                    </span>
                    Kantstrasse 141 / 10623 - Berlin
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <a href="mailto:info@putzkraft-24.de" className="hover:underline">
                      info@putzkraft-24.de
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5" />
                    </span>
                    <a href="tel:+493055634067" className="hover:underline">
                      +49 30 55634067
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Clock className="h-5 w-5" />
                    </span>
                    Mo-Fr 08:00-20:00 Uhr | Sa 10:00-16:00 Uhr
                  </li>
                </ul>
              </div>

              {/* Right: Form card */}
              <form
                className="rounded-2xl bg-white p-6 shadow-md md:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5">
                  <div>
                    <Label htmlFor="name">
                      Name<span className="text-orange">*</span>
                    </Label>
                    <Input id="name" placeholder="Max Mustermann" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">
                      Unternehmensname<span className="text-orange">*</span>
                    </Label>
                    <Input id="company" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">
                      E-Mail<span className="text-orange">*</span>
                    </Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon (optional — für schnellen Rückruf)</Label>
                    <Input id="phone" type="tel" placeholder="+49" className="mt-2" />
                  </div>

                  <div>
                    <Label>
                      Bürofläche in m²<span className="text-orange">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Bitte auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lt100">unter 100 m²</SelectItem>
                        <SelectItem value="100-300">100 – 300 m²</SelectItem>
                        <SelectItem value="300-600">300 – 600 m²</SelectItem>
                        <SelectItem value="600-1000">600 – 1.000 m²</SelectItem>
                        <SelectItem value="gt1000">über 1.000 m²</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Reinigungsfrequenz</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Bitte auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1x">1x pro Woche</SelectItem>
                        <SelectItem value="2x">2x pro Woche</SelectItem>
                        <SelectItem value="3x">3x pro Woche</SelectItem>
                        <SelectItem value="5x">5x pro Woche</SelectItem>
                        <SelectItem value="other">Sonstige</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="notes">Weitere Anmerkungen</Label>
                    <Textarea
                      id="notes"
                      placeholder="Besonderheiten oder Fragen? (optional)"
                      className="mt-2 min-h-[90px]"
                    />
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Sie können diese Einwilligung jederzeit widerrufen. Weitere Informationen zum
                    Widerruf und zum Schutz Ihrer Privatsphäre finden Sie in unserer{" "}
                    <Link to="/datenschutz" className="underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>

                  <label className="flex items-start gap-3 text-sm text-foreground/85">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border"
                      required
                    />
                    <span>
                      Ich stimme der Speicherung und Verarbeitung meiner Daten durch die
                      PutzKraft24 GmbH zu.<span className="text-orange">*</span>
                    </span>
                  </label>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="h-12 rounded-full bg-orange px-8 font-semibold text-primary-foreground hover:bg-orange-hover"
                    >
                      Büro-Check anfordern
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
