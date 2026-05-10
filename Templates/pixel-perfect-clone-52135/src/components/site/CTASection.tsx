import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  return (
    <section id="kontakt" className="bg-mint py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Kostenloser Büro-Check</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Sauberes Büro – ganz ohne Aufwand</h2>
          <p className="mt-4 text-muted-foreground">
            Lassen Sie sich unverbindlich beraten. Wir prüfen vor Ort, was Ihre Räume brauchen, und erstellen Ihnen ein faires Festpreisangebot – innerhalb von 48 Stunden.
          </p>
        </div>
        <form className="rounded-2xl bg-background p-6 shadow-md">
          <div className="grid gap-3">
            <Input placeholder="Ihr Name" />
            <Input type="email" placeholder="E-Mail-Adresse" />
            <Input placeholder="Telefonnummer" />
            <Button className="bg-orange hover:bg-orange-hover text-primary-foreground rounded-full h-11">
              Kostenlosen Büro-Check anfordern
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
