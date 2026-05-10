import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const districts = [
  { label: "Charlottenburg", to: "/leistungen/bueroreinigung-charlottenburg" },
  { label: "Mitte", to: "/leistungen/bueroreinigung-mitte" },
  { label: "Kreuzberg", to: "/leistungen/bueroreinigung-kreuzberg" },
  { label: "Prenzlauer Berg", to: "/leistungen/bueroreinigung-prenzlauerberg" },
  { label: "Friedrichshain", to: "/leistungen/bueroreinigung-friedrichshain" },
  { label: "Schöneberg", to: "/leistungen/bueroreinigung-schoeneberg" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 48" className="h-10 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M20 4 C8 12, 4 24, 10 36 C14 30, 20 26, 28 24 C22 28, 16 34, 14 42 C22 44, 32 38, 34 26 C36 16, 30 8, 20 4 Z"
          fill="var(--foreground)"
        />
        <circle cx="28" cy="14" r="4" fill="var(--orange)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-foreground">
          PutzKraft<span className="text-orange">24</span>
        </span>
        <span className="mt-0.5 text-[11px] font-medium tracking-wide text-foreground/70">
          Gebäudereinigung
        </span>
      </span>
    </Link>
  );
}

function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
      <span className="flex items-center gap-1.5">
        <span aria-hidden>🇩🇪</span> DE
      </span>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileBuero, setMobileBuero] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          <Link
            to="/about"
            className="text-base font-medium text-foreground transition-colors hover:text-orange"
          >
            Über uns
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-foreground transition-colors hover:text-orange">
              Büroreinigung
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-border bg-background p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              {districts.map((d) => (
                <Link
                  key={d.to}
                  to={d.to}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-orange"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/kontakt"
            className="text-base font-medium text-foreground transition-colors hover:text-orange"
          >
            Kontaktformular
          </Link>

          <Link
            to="/blog"
            className="text-base font-medium text-foreground transition-colors hover:text-orange"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Button asChild className="bg-orange hover:bg-orange-hover text-primary-foreground rounded-full pl-5 pr-2 h-11 text-base font-semibold">
            <Link to="/kontakt">
              Kontakt
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/25">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              Über uns
            </Link>

            <button
              className="flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-secondary"
              onClick={() => setMobileBuero(!mobileBuero)}
            >
              Büroreinigung
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileBuero ? "rotate-180" : ""}`} />
            </button>
            {mobileBuero && (
              <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                {districts.map((d) => (
                  <Link
                    key={d.to}
                    to={d.to}
                    className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                    onClick={() => setOpen(false)}
                  >
                    {d.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/kontakt"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              Kontaktformular
            </Link>

            <Link
              to="/blog"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>

            <Button asChild className="mt-2 bg-orange hover:bg-orange-hover text-primary-foreground rounded-full">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
