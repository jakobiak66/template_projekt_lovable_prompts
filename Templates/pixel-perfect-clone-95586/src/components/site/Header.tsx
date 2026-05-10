import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

type SubItem = { label: string; href: string };
type NavItem = {
  label: string;
  href?: string;
  to?: string;
  children?: SubItem[];
};

const rechtsgebiete: SubItem[] = [
  { label: "Strafrecht Berlin (Hauptseite)", href: "/rechtsgebiete/strafrecht-berlin" },
  { label: "Betäubungsmittelrecht", href: "/rechtsgebiete/betaeubungsmittelrecht" },
  { label: "Körperverletzung", href: "/rechtsgebiete/koerperverletzung" },
  { label: "Sexualstrafrecht", href: "/rechtsgebiete/sexualstrafrecht" },
];

const kanzlei: SubItem[] = [
  { label: "Über mich", href: "/kanzlei/ueber-mich" },
  { label: "Ablauf & Kosten", href: "/kanzlei/ablauf-kosten" },
  { label: "Bewertungen", href: "/kanzlei/bewertungen" },
];

const blog: SubItem[] = [
  { label: "Blog Übersicht", href: "/blog" },
  { label: "Betäubungsmittelrecht", href: "/blog/betaeubungsmittelrecht" },
  { label: "Fallübersicht", href: "/blog/faelle" },
  { label: "Wissensdatenbank", href: "/blog/wissensdatenbank" },
];

const nav: NavItem[] = [
  { label: "Fall prüfen", to: "/fall-pruefen" },
  { label: "Notfall", to: "/notfall" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Rechtsgebiete", children: rechtsgebiete },
  { label: "Kanzlei", children: kanzlei },
  { label: "Blog", children: blog },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-navy border-b border-border">
      <div className="container-x flex items-center justify-between py-5">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl italic tracking-tight">Wenzel</span>
          <span className="hidden sm:inline text-[0.65rem] tracking-[0.25em] uppercase opacity-70">
            Fachanwalt für Strafrecht
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => {
            if (n.children) {
              return (
                <div key={n.label} className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 opacity-80 hover:opacity-100 transition"
                  >
                    {n.label}
                    <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
                  </button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <div className="min-w-[260px] rounded-xl border border-border bg-white shadow-lg py-2">
                      {n.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block px-5 py-2.5 text-sm text-navy/80 hover:text-navy hover:bg-secondary transition"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            if (n.to) {
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className="opacity-80 hover:opacity-100 transition"
                  activeProps={{ className: "opacity-100 font-medium" }}
                >
                  {n.label}
                </Link>
              );
            }
            return (
              <a
                key={n.label}
                href={n.href}
                className="opacity-80 hover:opacity-100 transition"
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4930120593430"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm hover:bg-navy hover:text-navy-foreground transition"
          >
            <Phone className="size-4" />
            030 120 593 430
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container-x flex flex-col py-6 gap-4">
            {nav.map((n) => {
              if (n.children) {
                const isOpen = mobileSub === n.label;
                return (
                  <div key={n.label}>
                    <button
                      onClick={() => setMobileSub(isOpen ? null : n.label)}
                      className="w-full flex items-center justify-between text-base"
                    >
                      {n.label}
                      <ChevronDown
                        className={`size-4 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-3 pl-4 flex flex-col gap-3 border-l border-border">
                        {n.children.map((c) => (
                          <a
                            key={c.label}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-navy/75"
                          >
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (n.to) {
                return (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="text-base"
                  >
                    {n.label}
                  </Link>
                );
              }
              return (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-base"
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
