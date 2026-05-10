import { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";

const faqs = [
  { q: "Soll ich zur polizeilichen Vorladung erscheinen?", a: "In der Regel nicht ohne anwaltliche Beratung. Als Beschuldigter haben Sie das Recht zu schweigen — und das sollten Sie nutzen. Kontaktieren Sie mich zuerst." },
  { q: "Was kostet eine Strafverteidigung?", a: "Transparente Honorarstruktur. Nach dem Erstgespräch erhalten Sie eine klare Einschätzung. Die Kosten hängen vom Umfang des Verfahrens ab — kein Pauschalversprechen, aber volle Transparenz." },
  { q: "Kann ein Verfahren eingestellt werden?", a: "Ja. Insbesondere im Ermittlungsstadium bestehen oft erhebliche Verteidigungsspielräume. Frühes Eingreifen erhöht die Chancen auf eine Einstellung erheblich." },
  { q: "Was tun bei Hausdurchsuchung?", a: "Ruhe bewahren. Keine Aussagen machen. Weder gegenüber Polizei noch Staatsanwaltschaft. Sofort anrufen — in solchen Situationen bin ich umgehend erreichbar." },
];

export function FaqContact() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="kontakt" className="bg-background py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-8">FAQ & Kontakt</p>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-10">
              Häufige<br /><span className="italic text-foreground/50">Fragen.</span>
            </h2>
            <div className="border-t border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="border-b border-border">
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full py-5 flex items-center justify-between gap-4 text-left">
                      <span className="text-base">{f.q}</span>
                      {isOpen ? <Minus className="size-4 shrink-0" /> : <Plus className="size-4 shrink-0" />}
                    </button>
                    {isOpen && <p className="pb-6 text-sm text-foreground/70 leading-relaxed max-w-lg">{f.a}</p>}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl bg-navy text-navy-foreground p-6 flex items-center gap-4 max-w-md">
              <div className="size-12 rounded-full bg-white/10 grid place-items-center font-serif text-lg">BW</div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Benjamin C. Wenzel</div>
                <div className="text-navy-foreground/60 text-xs mt-0.5">Fachanwalt für Strafrecht</div>
                <a href="tel:+4930120593430" className="mt-2 inline-flex items-center gap-1.5 text-blue-accent text-xs">
                  <Phone className="size-3" /> 030 120 593 430
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-10">
              Rückruf<br /><span className="italic text-foreground/50">anfordern.</span>
            </h2>
            <form className="space-y-5 max-w-md">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" />
                <Field label="Telefon" type="tel" />
              </div>
              <Field label="E-Mail" type="email" />
              <div>
                <label className="text-xs text-foreground/60 mb-2 block">Ihr Anliegen</label>
                <textarea rows={4} className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
              </div>
              <button type="submit" className="rounded-full bg-navy text-navy-foreground px-7 py-3.5 text-sm hover:opacity-90 transition">
                Nachricht senden
              </button>
              <p className="text-xs text-foreground/50 flex items-start gap-2">
                <Mail className="size-3 mt-0.5" />
                Datenschutz: Ihre Angaben werden vertraulich behandelt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs text-foreground/60 mb-2 block">{label}</label>
      <input type={type} className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition" />
    </div>
  );
}
