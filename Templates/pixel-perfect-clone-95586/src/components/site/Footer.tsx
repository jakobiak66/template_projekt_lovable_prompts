type FooterItem = { label: string; href?: string };

const rechtsgebiete: FooterItem[] = [
  { label: "Strafrecht Berlin" },
  { label: "Betäubungsmittelrecht" },
  { label: "Sexualstrafrecht" },
  { label: "Körperverletzung" },
];

const kanzlei: FooterItem[] = [
  { label: "Über mich", href: "/kanzlei/ueber-mich" },
  { label: "Ablauf & Kosten", href: "/kanzlei/ablauf-kosten" },
  { label: "Bewertungen", href: "/kanzlei/bewertungen" },
  { label: "Kontakt", href: "/kontakt" },
];

const rechtliches: FooterItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Footer content */}
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_2.3fr]">
          {/* Brand column */}
          <div>
            <div className="font-serif text-3xl">Wenzel</div>
            <p className="mt-4 text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/55">
              Fachanwalt für Strafrecht
            </p>
            <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed">
              Strafrechtskanzlei am Kurfürstendamm.<br />
              Konsequente Strafverteidigung seit 2009.
            </p>
            <p className="mt-8 text-sm text-navy-foreground/70 leading-relaxed">
              Kurfürstendamm 216<br />
              10719 Berlin
            </p>
            <a
              href="tel:+4930120593430"
              className="mt-4 inline-block text-sm text-blue-accent underline underline-offset-4 hover:opacity-80 transition"
            >
              030 120 593 430
            </a>
          </div>

          {/* Navigation columns */}
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-blue-accent mb-8">
              Navigation
            </p>
            <div className="grid gap-12 sm:grid-cols-3">
              <FooterColumn title="Rechtsgebiete" items={rechtsgebiete} />
              <FooterColumn title="Kanzlei & Inhalte" items={kanzlei} />
              <FooterColumn title="Rechtliches" items={rechtliches} />
            </div>
          </div>
        </div>

        <hr className="mt-16 border-white/15" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-navy-foreground/55">
          <p>© 2026 Benjamin C. Wenzel · Rechtsanwalt & Fachanwalt für Strafrecht</p>
          <p>Kanzlei am Kurfürstendamm · Berlin · Entwickelt von H-studio</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <p className="text-[0.65rem] tracking-[0.25em] uppercase text-navy-foreground/55 mb-6">
        {title}
      </p>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href ?? "#"}
              className="text-sm text-navy-foreground/85 underline underline-offset-4 decoration-white/20 hover:decoration-white transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
